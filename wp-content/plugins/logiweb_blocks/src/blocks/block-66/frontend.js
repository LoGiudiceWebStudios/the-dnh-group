(function () {
  var blocks = document.querySelectorAll(".blog-filter-block[data-nonce]");

  blocks.forEach(function (block) {
    var nonce = block.getAttribute("data-nonce");
    var perPage = parseInt(block.getAttribute("data-per-page"), 10) || 9;
    var showExcerpt = block.getAttribute("data-show-excerpt") !== "false";
    var showAuthor = block.getAttribute("data-show-author") !== "false";
    var showReadTime = block.getAttribute("data-show-readtime") !== "false";
    var allLabel = block.getAttribute("data-all-label") || "All";

    var tabsEl = block.querySelector(".blog-filter-tabs");
    var bodyEl = block.querySelector(".blog-filter-body");

    var currentTag = null; // null = all

    /* ── helper: words-per-minute read time ── */
    function readTime(text) {
      var words = (text || "").trim().split(/\s+/).length;
      var mins = Math.max(1, Math.round(words / 200));
      return mins + " min read";
    }

    /* ── render a set of posts inside a group ── */
    function renderGroup(tagLabel, posts) {
      var totalPosts = posts.length;
      var grid = document.createElement("div");
      grid.className = "blog-filter-body-inner";
      grid.innerHTML =
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
        posts
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
              '" class="blog-filter-card-link">' +
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

    /* ── fetch posts and rebuild body ── */
    function loadPosts(tagId, tagLabel) {
      bodyEl.classList.add("blog-filter-loading");
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
          bodyEl.appendChild(renderGroup(tagLabel, posts));
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
  });
})();
