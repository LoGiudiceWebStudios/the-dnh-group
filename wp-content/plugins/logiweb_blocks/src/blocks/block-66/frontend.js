(function () {
  var blocks = document.querySelectorAll(".blog-filter-block[data-nonce]");

  blocks.forEach(function (block) {
    var nonce = block.getAttribute("data-nonce");
    var perPage = parseInt(block.getAttribute("data-per-page"), 10) || 9;
    var showExcerpt = block.getAttribute("data-show-excerpt") !== "false";
    var showAuthor = block.getAttribute("data-show-author") !== "false";
    var showReadTime = block.getAttribute("data-show-readtime") !== "false";
    var allLabel = block.getAttribute("data-all-label") || "All";
    var featuredLabel =
      block.getAttribute("data-featured-label") || "Featured Story";

    var tabsEl = block.querySelector(".blog-filter-tabs");
    var bodyEl = block.querySelector(".blog-filter-body");
    var postCache = {};
    var modalApi = ensureModal();

    var currentTag = null; // null = all

    /* ── helper: words-per-minute read time ── */
    function readTime(text) {
      var words = (text || "").trim().split(/\s+/).length;
      var mins = Math.max(1, Math.round(words / 200));
      return mins + " min read";
    }

    /* ── render a set of posts inside a group ── */
    function renderGroup(tagLabel, posts, isAllView) {
      var totalPosts = posts.length;
      var featuredPost = isAllView && posts.length ? posts[0] : null;
      var listPosts = featuredPost ? posts.slice(1) : posts;
      var grid = document.createElement("div");
      grid.className = "blog-filter-body-inner";
      grid.innerHTML =
        (featuredPost ? renderFeatured(featuredPost) : "") +
        '<div class="blog-filter-group-header">' +
        '<h2 class="blog-filter-group-title">' +
        escHtml(tagLabel) +
        "</h2>" +
        '<span class="blog-filter-group-count">' +
        totalPosts +
        " article" +
        (totalPosts !== 1 ? "s" : "") +
        "</span>" +
        "</div>" +
        '<div class="blog-filter-grid">' +
        listPosts
          .map(function (post) {
            var imgUrl =
              post._embedded &&
              post._embedded["wp:featuredmedia"] &&
              post._embedded["wp:featuredmedia"][0] &&
              post._embedded["wp:featuredmedia"][0].source_url
                ? post._embedded["wp:featuredmedia"][0].source_url
                : "";
            var tagName =
              post._embedded &&
              post._embedded["wp:term"] &&
              post._embedded["wp:term"][1] &&
              post._embedded["wp:term"][1][0]
                ? post._embedded["wp:term"][1][0].name
                : "";
            var authorName =
              post._embedded &&
              post._embedded.author &&
              post._embedded.author[0]
                ? post._embedded.author[0].name
                : "";
            var excerptText = stripHtml(
              post.excerpt ? post.excerpt.rendered : "",
            );
            var rt = readTime(
              post.content ? stripHtml(post.content.rendered) : excerptText,
            );
            return (
              '<article class="blog-filter-card">' +
              '<a href="' +
              escAttr(post.link) +
              '" class="blog-filter-card-link" data-post-id="' +
              escAttr(post.id) +
              '">' +
              (imgUrl
                ? '<div class="blog-filter-card-image" style="background-image:url(' +
                  escAttr(imgUrl) +
                  ')">' +
                  (tagName
                    ? '<span class="blog-filter-card-badge">' +
                      escHtml(tagName) +
                      "</span>"
                    : "") +
                  "</div>"
                : '<div class="blog-filter-card-image blog-filter-card-image--placeholder">' +
                  (tagName
                    ? '<span class="blog-filter-card-badge">' +
                      escHtml(tagName) +
                      "</span>"
                    : "") +
                  "</div>") +
              '<div class="blog-filter-card-body">' +
              '<h3 class="blog-filter-card-title">' +
              escHtml(post.title.rendered) +
              "</h3>" +
              (showExcerpt && excerptText
                ? '<p class="blog-filter-card-excerpt">' +
                  escHtml(excerptText.substring(0, 140)) +
                  (excerptText.length > 140 ? "…" : "") +
                  "</p>"
                : "") +
              '<div class="blog-filter-card-meta">' +
              (showAuthor && authorName
                ? '<span class="blog-filter-card-author"><i class="fa fa-user"></i> ' +
                  escHtml(authorName) +
                  "</span>"
                : "") +
              (showReadTime
                ? '<span class="blog-filter-card-readtime"><i class="fa fa-clock-o"></i> ' +
                  escHtml(rt) +
                  "</span>"
                : "") +
              "</div>" +
              "</div>" +
              "</a>" +
              "</article>"
            );
          })
          .join("") +
        "</div>";
      return grid;
    }

    function renderFeatured(post) {
      var imgUrl =
        post._embedded &&
        post._embedded["wp:featuredmedia"] &&
        post._embedded["wp:featuredmedia"][0] &&
        post._embedded["wp:featuredmedia"][0].source_url
          ? post._embedded["wp:featuredmedia"][0].source_url
          : "";
      var tagName =
        post._embedded &&
        post._embedded["wp:term"] &&
        post._embedded["wp:term"][1] &&
        post._embedded["wp:term"][1][0]
          ? post._embedded["wp:term"][1][0].name
          : allLabel;
      var authorName =
        post._embedded && post._embedded.author && post._embedded.author[0]
          ? post._embedded.author[0].name
          : "";
      var excerptText = stripHtml(post.excerpt ? post.excerpt.rendered : "");
      var dateText = formatDate(post.date);
      var rt = readTime(
        post.content ? stripHtml(post.content.rendered) : excerptText,
      );

      return (
        '<article class="blog-filter-featured" aria-label="Featured post">' +
        '<p class="blog-filter-featured-badge">' +
        escHtml(featuredLabel) +
        "</p>" +
        '<a href="' +
        escAttr(post.link) +
        '" class="blog-filter-featured-link" data-post-id="' +
        escAttr(post.id) +
        '">' +
        (imgUrl
          ? '<div class="blog-filter-featured-image" style="background-image:url(' +
            escAttr(imgUrl) +
            ')"></div>'
          : '<div class="blog-filter-featured-image blog-filter-featured-image--placeholder"></div>') +
        '<div class="blog-filter-featured-content">' +
        '<span class="blog-filter-featured-tag">' +
        escHtml(tagName) +
        "</span>" +
        '<h3 class="blog-filter-featured-title">' +
        escHtml(post.title.rendered) +
        "</h3>" +
        (excerptText
          ? '<p class="blog-filter-featured-excerpt">' +
            escHtml(excerptText.substring(0, 220)) +
            (excerptText.length > 220 ? "..." : "") +
            "</p>"
          : "") +
        '<div class="blog-filter-featured-meta">' +
        (authorName
          ? '<span><i class="fa fa-user-o"></i> ' +
            escHtml(authorName) +
            "</span>"
          : "") +
        (dateText
          ? '<span><i class="fa fa-calendar-o"></i> ' +
            escHtml(dateText) +
            "</span>"
          : "") +
        '<span><i class="fa fa-clock-o"></i> ' +
        escHtml(rt) +
        "</span>" +
        "</div>" +
        '<span class="blog-filter-featured-cta">Read Full Story <span aria-hidden="true">→</span></span>' +
        "</div>" +
        "</a>" +
        "</article>"
      );
    }

    /* ── fetch posts and rebuild body ── */
    function loadPosts(tagId, tagLabel) {
      bodyEl.classList.add("blog-filter-loading");
      var isAllView = !tagId;
      var url =
        (window.logiwebBlogFilter && window.logiwebBlogFilter.restUrl
          ? window.logiwebBlogFilter.restUrl
          : "/wp-json/wp/v2") +
        "/posts?per_page=" +
        perPage +
        "&_embed=1" +
        (tagId ? "&tags=" + tagId : "");

      fetch(url, {
        headers: { "X-WP-Nonce": nonce },
      })
        .then(function (r) {
          return r.json();
        })
        .then(function (posts) {
          bodyEl.classList.remove("blog-filter-loading");
          bodyEl.innerHTML = "";
          if (!posts || !posts.length) {
            bodyEl.innerHTML =
              '<p class="blog-filter-empty">No articles found.</p>';
            return;
          }

          posts.forEach(function (post) {
            postCache[post.id] = post;
          });

          bodyEl.appendChild(renderGroup(tagLabel, posts, isAllView));
        })
        .catch(function () {
          bodyEl.classList.remove("blog-filter-loading");
          bodyEl.innerHTML =
            '<p class="blog-filter-empty">Error loading articles.</p>';
        });
    }

    /* ── build tabs from /wp/v2/tags list ── */
    function buildTabs(tags) {
      tabsEl.innerHTML = "";

      // "All" tab
      var allBtn = document.createElement("button");
      allBtn.className = "blog-filter-tab blog-filter-tab--active";
      allBtn.innerHTML =
        escHtml(allLabel) +
        ' <span class="blog-filter-tab-count">' +
        (block.getAttribute("data-total") || "") +
        "</span>";
      allBtn.setAttribute("data-tag-id", "");
      allBtn.setAttribute("data-tag-label", allLabel);
      tabsEl.appendChild(allBtn);

      tags.forEach(function (tag) {
        var btn = document.createElement("button");
        btn.className = "blog-filter-tab";
        btn.innerHTML =
          escHtml(tag.name) +
          ' <span class="blog-filter-tab-count">' +
          tag.count +
          "</span>";
        btn.setAttribute("data-tag-id", tag.id);
        btn.setAttribute("data-tag-label", tag.name);
        tabsEl.appendChild(btn);
      });
    }

    /* ── tab click handler ── */
    tabsEl.addEventListener("click", function (e) {
      var btn = e.target.closest(".blog-filter-tab");
      if (!btn) return;
      tabsEl.querySelectorAll(".blog-filter-tab").forEach(function (b) {
        b.classList.remove("blog-filter-tab--active");
      });
      btn.classList.add("blog-filter-tab--active");
      var tagId = btn.getAttribute("data-tag-id");
      var tagLabel = btn.getAttribute("data-tag-label");
      loadPosts(tagId || null, tagLabel);
    });

    block.addEventListener("click", function (e) {
      var link = e.target.closest(
        ".blog-filter-card-link, .blog-filter-featured-link",
      );
      if (!link || !block.contains(link)) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      e.preventDefault();

      var postId = parseInt(link.getAttribute("data-post-id"), 10);
      var fallbackUrl = link.getAttribute("href") || "#";
      if (!postId) {
        window.location.href = fallbackUrl;
        return;
      }

      openPostModal(postId, fallbackUrl);
    });

    /* ── init: fetch tags then posts ── */
    var tagsUrl =
      (window.logiwebBlogFilter && window.logiwebBlogFilter.restUrl
        ? window.logiwebBlogFilter.restUrl
        : "/wp-json/wp/v2") + "/tags?per_page=50&hide_empty=1";

    fetch(tagsUrl)
      .then(function (r) {
        return r.json();
      })
      .then(function (tags) {
        if (tags && tags.length) {
          buildTabs(tags);
        }
        loadPosts(null, allLabel);
      })
      .catch(function () {
        loadPosts(null, allLabel);
      });

    function openPostModal(postId, fallbackUrl) {
      modalApi.setLoading();
      modalApi.open();

      var cachedPost = postCache[postId];
      if (cachedPost) {
        modalApi.renderPost(cachedPost, fallbackUrl);
        return;
      }

      var postUrl =
        (window.logiwebBlogFilter && window.logiwebBlogFilter.restUrl
          ? window.logiwebBlogFilter.restUrl
          : "/wp-json/wp/v2") +
        "/posts/" +
        postId +
        "?_embed=1";

      fetch(postUrl, {
        headers: { "X-WP-Nonce": nonce },
      })
        .then(function (r) {
          if (!r.ok) throw new Error("Failed loading post");
          return r.json();
        })
        .then(function (post) {
          postCache[post.id] = post;
          modalApi.renderPost(post, fallbackUrl);
        })
        .catch(function () {
          modalApi.renderError(fallbackUrl);
        });
    }

    /* ── utilities ── */
    function escHtml(str) {
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }
    function escAttr(str) {
      return String(str).replace(/"/g, "&quot;");
    }
    function stripHtml(html) {
      var tmp = document.createElement("div");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
    }
    function formatDate(dateStr) {
      if (!dateStr) return "";
      var parsed = new Date(dateStr);
      if (Number.isNaN(parsed.getTime())) return "";
      return parsed.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }

    function ensureModal() {
      var existing = document.querySelector(".blog-filter-modal");
      if (existing) {
        if (existing.__blogFilterModalApi) {
          return existing.__blogFilterModalApi;
        }
        existing.__blogFilterModalApi = createModalApi(existing);
        return existing.__blogFilterModalApi;
      }

      var modal = document.createElement("div");
      modal.className = "blog-filter-modal";
      modal.setAttribute("aria-hidden", "true");
      modal.innerHTML =
        '<div class="blog-filter-modal-backdrop" data-close="1"></div>' +
        '<div class="blog-filter-modal-dialog" role="dialog" aria-modal="true" aria-label="Blog post details">' +
        '<button type="button" class="blog-filter-modal-close" aria-label="Close popup">&times;</button>' +
        '<div class="blog-filter-modal-media"></div>' +
        '<div class="blog-filter-modal-body"></div>' +
        '<div class="blog-filter-modal-footer">' +
        '<span class="blog-filter-modal-footer-text">Enjoyed this article?</span>' +
        '<button type="button" class="blog-filter-modal-share">Share Article <span aria-hidden="true">→</span></button>' +
        "</div>" +
        "</div>";

      document.body.appendChild(modal);

      modal.addEventListener("click", function (e) {
        if (
          e.target.matches("[data-close='1']") ||
          e.target.closest(".blog-filter-modal-close")
        ) {
          closeModal();
        }
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.classList.contains("is-open")) {
          closeModal();
        }
      });

      function closeModal() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("blog-filter-modal-open");
      }

      function createModalApi(el) {
        var media = el.querySelector(".blog-filter-modal-media");
        var body = el.querySelector(".blog-filter-modal-body");
        var shareBtn = el.querySelector(".blog-filter-modal-share");
        var shareUrl = "";
        var shareTitle = "";

        shareBtn.addEventListener("click", function () {
          if (!shareUrl) return;
          if (navigator.share) {
            navigator
              .share({ title: shareTitle, url: shareUrl })
              .catch(function () {});
            return;
          }

          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(shareUrl).catch(function () {});
            shareBtn.textContent = "Link Copied";
            setTimeout(function () {
              shareBtn.innerHTML =
                'Share Article <span aria-hidden="true">→</span>';
            }, 1500);
          }
        });

        return {
          open: function () {
            el.classList.add("is-open");
            el.setAttribute("aria-hidden", "false");
            document.body.classList.add("blog-filter-modal-open");
          },
          close: closeModal,
          setLoading: function () {
            media.innerHTML =
              '<div class="blog-filter-modal-media-placeholder"></div>';
            body.innerHTML =
              '<p class="blog-filter-modal-loading">Loading article...</p>';
            shareUrl = "";
            shareTitle = "";
          },
          renderError: function (url) {
            media.innerHTML =
              '<div class="blog-filter-modal-media-placeholder"></div>';
            body.innerHTML =
              '<h3 class="blog-filter-modal-title">Could not load this article.</h3>' +
              '<p class="blog-filter-modal-text">Please open the full page instead.</p>' +
              '<a class="blog-filter-modal-open-link" href="' +
              escAttr(url || "#") +
              '">Open Post Page</a>';
            shareUrl = url || "";
            shareTitle = "Blog post";
          },
          renderPost: function (post, fallbackUrl) {
            var imageUrl =
              post._embedded &&
              post._embedded["wp:featuredmedia"] &&
              post._embedded["wp:featuredmedia"][0] &&
              post._embedded["wp:featuredmedia"][0].source_url
                ? post._embedded["wp:featuredmedia"][0].source_url
                : "";
            var tagName =
              post._embedded &&
              post._embedded["wp:term"] &&
              post._embedded["wp:term"][1] &&
              post._embedded["wp:term"][1][0]
                ? post._embedded["wp:term"][1][0].name
                : allLabel;
            var authorName =
              post._embedded &&
              post._embedded.author &&
              post._embedded.author[0]
                ? post._embedded.author[0].name
                : "";
            var dateText = formatDate(post.date);
            var contentText = stripHtml(
              post.content ? post.content.rendered : post.excerpt.rendered,
            );
            var rt = readTime(contentText);
            var shortContent = contentText.substring(0, 320);

            media.innerHTML = imageUrl
              ? '<div class="blog-filter-modal-media-image" style="background-image:url(' +
                escAttr(imageUrl) +
                ')"></div>'
              : '<div class="blog-filter-modal-media-placeholder"></div>';

            body.innerHTML =
              '<span class="blog-filter-modal-tag">' +
              escHtml(tagName) +
              "</span>" +
              '<h3 class="blog-filter-modal-title">' +
              escHtml(post.title.rendered) +
              "</h3>" +
              '<div class="blog-filter-modal-meta">' +
              (authorName
                ? '<span><i class="fa fa-user-o"></i> ' +
                  escHtml(authorName) +
                  "</span>"
                : "") +
              (dateText
                ? '<span><i class="fa fa-calendar-o"></i> ' +
                  escHtml(dateText) +
                  "</span>"
                : "") +
              '<span><i class="fa fa-clock-o"></i> ' +
              escHtml(rt) +
              "</span>" +
              "</div>" +
              '<p class="blog-filter-modal-text">' +
              escHtml(shortContent) +
              (contentText.length > 320 ? "..." : "") +
              "</p>";

            shareUrl = post.link || fallbackUrl || "";
            shareTitle = stripHtml(post.title.rendered);
          },
        };
      }

      modal.__blogFilterModalApi = createModalApi(modal);
      return modal.__blogFilterModalApi;
    }
  });
})();
