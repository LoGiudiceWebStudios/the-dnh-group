document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".carousel-block[data-carousel]")
    .forEach(function (carousel) {
      const images = Array.from(
        carousel.querySelectorAll("[data-carousel-image]"),
      );
      const prevBtn = carousel.querySelector(".carousel-prev");
      const nextBtn = carousel.querySelector(".carousel-next");
      const dotsContainer = carousel.querySelector(".carousel-dots");
      let startIndex = 0;

      function getVisibleCount() {
        return window.innerWidth <= 600 ? 2 : 5;
      }

      function updateCarousel() {
        const visibleCount = getVisibleCount();
        images.forEach((img, i) => {
          img.style.display =
            i >= startIndex && i < startIndex + visibleCount ? "flex" : "none";
        });
        prevBtn.disabled = startIndex === 0 && images.length <= visibleCount;
        nextBtn.disabled =
          startIndex + visibleCount >= images.length &&
          images.length <= visibleCount;

        // Dots
        dotsContainer.innerHTML = "";
        const dotsNum = Math.max(1, images.length - visibleCount + 1);
        for (let i = 0; i < dotsNum; i++) {
          const dot = document.createElement("span");
          dot.style.width = "10px";
          dot.style.height = "10px";
          dot.style.borderRadius = "50%";
          dot.style.background = i === startIndex ? "#009688" : "#e0e0e0";
          dot.style.display = "inline-block";
          dot.style.margin = "0 4px";
          dot.style.cursor = "pointer";
          dot.addEventListener("click", () => {
            startIndex = i;
            updateCarousel();
            resetInterval();
          });
          dotsContainer.appendChild(dot);
        }
      }

      function showPrev() {
        const visibleCount = getVisibleCount();
        startIndex =
          startIndex > 0 ? startIndex - 1 : images.length - visibleCount;
        updateCarousel();
        resetInterval();
      }

      function showNext() {
        const visibleCount = getVisibleCount();
        startIndex =
          startIndex + 1 + visibleCount > images.length ? 0 : startIndex + 1;
        updateCarousel();
        resetInterval();
      }

      function resetInterval() {
        clearInterval(interval);
        interval = setInterval(showNext, 3000);
      }

      prevBtn.addEventListener("click", showPrev);
      nextBtn.addEventListener("click", showNext);

      let interval = setInterval(showNext, 3000);

      window.addEventListener("resize", updateCarousel);

      updateCarousel();
    });
});

document.addEventListener("DOMContentLoaded", function () {
  function initFadeInOnScroll() {
    const elements = document.querySelectorAll(".fade-in-on-scroll");

    if (!("IntersectionObserver" in window)) {
      elements.forEach(function (element) {
        element.classList.add("fade-in-active");
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries, observerInstance) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("fade-in-active");
          observerInstance.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    elements.forEach(function (element) {
      observer.observe(element);
    });
  }

  function initCertificationsCarousel() {
    document
      .querySelectorAll("[data-carousel-track]")
      .forEach(function (track) {
        if (track.dataset.carouselInitialized === "true") {
          return;
        }

        const items = Array.from(
          track.querySelectorAll("[data-carousel-item]"),
        );

        if (items.length < 2) {
          return;
        }

        track.dataset.carouselInitialized = "true";

        let isTransitioning = false;
        const slideDuration = 600;

        function getItemWidth() {
          const firstItem = track.querySelector("[data-carousel-item]");

          if (!firstItem) {
            return 0;
          }

          const computedStyle = window.getComputedStyle(track);
          const gap =
            parseFloat(computedStyle.columnGap || computedStyle.gap || "0") ||
            0;

          return firstItem.offsetWidth + gap;
        }

        function slideNext() {
          if (isTransitioning) {
            return;
          }

          const firstItem = track.querySelector("[data-carousel-item]");
          const itemWidth = getItemWidth();

          if (!firstItem || !itemWidth) {
            return;
          }

          isTransitioning = true;

          track.style.transition =
            "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

          track.style.transform = "translateX(" + -itemWidth + "px)";

          var finishSlide = function () {
            track.removeEventListener("transitionend", finishSlide);
            track.appendChild(firstItem);
            track.style.transition = "none";
            track.style.transform = "translateX(0px)";

            window.requestAnimationFrame(function () {
              isTransitioning = false;
            });
          };

          track.addEventListener("transitionend", finishSlide);

          window.setTimeout(function () {
            if (isTransitioning) {
              finishSlide();
            }
          }, slideDuration + 100);
        }

        track.style.willChange = "transform";
        track.style.transform = "translateX(0px)";
        window.setInterval(slideNext, 4000);
      });
  }

  initFadeInOnScroll();
  initCertificationsCarousel();

  function initJourneyTimeline() {
    document
      .querySelectorAll("[data-journey-timeline]")
      .forEach(function (section) {
        if (section.dataset.journeyInitialized === "true") {
          return;
        }

        section.dataset.journeyInitialized = "true";

        const fill = section.querySelector("[data-journey-fill]");
        const items = Array.from(
          section.querySelectorAll("[data-journey-item]"),
        );

        function updateFill() {
          if (!fill) {
            return;
          }

          const rect = section.getBoundingClientRect();
          const windowH =
            window.innerHeight || document.documentElement.clientHeight;
          const total = rect.height + windowH * 0.55;
          const progressed = windowH * 0.6 - rect.top;
          const ratio = Math.max(0, Math.min(1, progressed / total));
          fill.style.height = ratio * 100 + "%";
        }

        if ("IntersectionObserver" in window) {
          const itemObserver = new IntersectionObserver(
            function (entries, observerInstance) {
              entries.forEach(function (entry) {
                if (!entry.isIntersecting) {
                  return;
                }
                entry.target.classList.add("is-visible");
                observerInstance.unobserve(entry.target);
              });
            },
            { threshold: 0.28, rootMargin: "0px 0px -50px 0px" },
          );

          items.forEach(function (item) {
            itemObserver.observe(item);
          });
        } else {
          items.forEach(function (item) {
            item.classList.add("is-visible");
          });
        }

        updateFill();
        window.addEventListener("scroll", updateFill, { passive: true });
        window.addEventListener("resize", updateFill);
      });
  }

  initJourneyTimeline();

  function initTeamMembersFilter() {
    document
      .querySelectorAll("[data-team-members]")
      .forEach(function (section) {
        if (section.dataset.teamFilterInitialized === "true") {
          return;
        }

        section.dataset.teamFilterInitialized = "true";

        const filterButtons = Array.from(
          section.querySelectorAll("[data-team-filter]"),
        );
        const cards = Array.from(
          section.querySelectorAll("[data-team-member]"),
        );

        if (!filterButtons.length || !cards.length) {
          return;
        }

        const normalize = function (value) {
          return (value || "").trim().toLowerCase();
        };

        const applyFilter = function (filterValue) {
          const normalizedFilter = normalize(filterValue);

          filterButtons.forEach(function (btn) {
            const isActive =
              normalize(btn.dataset.teamFilter) === normalizedFilter;
            btn.classList.toggle("is-active", isActive);
          });

          cards.forEach(function (card) {
            const dep = normalize(card.dataset.teamDepartment);
            const visible =
              normalizedFilter === "all" ||
              !normalizedFilter ||
              dep === normalizedFilter;

            card.style.display = visible ? "flex" : "none";
          });
        };

        filterButtons.forEach(function (button) {
          button.addEventListener("click", function () {
            applyFilter(button.dataset.teamFilter);
          });
        });

        applyFilter(filterButtons[0].dataset.teamFilter);
      });
  }

  initTeamMembersFilter();

  function initTeamMemberProfilePopup() {
    document
      .querySelectorAll("[data-team-members]")
      .forEach(function (section) {
        if (section.dataset.teamPopupInitialized === "true") {
          return;
        }

        section.dataset.teamPopupInitialized = "true";

        const splitList = function (value) {
          return (value || "")
            .split(",")
            .map(function (item) {
              return item.trim();
            })
            .filter(Boolean);
        };

        const closeModal = function (modal) {
          if (modal && modal.parentNode) {
            modal.parentNode.removeChild(modal);
          }
          document.body.style.overflow = "";
        };

        const openModal = function (card) {
          const modal = document.createElement("div");
          modal.className = "team-profile-modal";

          const dialog = document.createElement("div");
          dialog.className = "team-profile-modal-dialog";
          dialog.setAttribute("role", "dialog");
          dialog.setAttribute("aria-modal", "true");
          dialog.setAttribute(
            "aria-label",
            (card.dataset.teamName || "Team Member") + " profile",
          );

          const closeBtn = document.createElement("button");
          closeBtn.type = "button";
          closeBtn.className = "team-profile-modal-close";
          closeBtn.setAttribute("aria-label", "Close profile popup");
          closeBtn.textContent = "✕";

          const imageWrap = document.createElement("div");
          imageWrap.className = "team-profile-modal-image-wrap";

          if (card.dataset.teamImage) {
            const image = document.createElement("img");
            image.className = "team-profile-modal-image";
            image.src = card.dataset.teamImage;
            image.alt =
              card.dataset.teamImageAlt || card.dataset.teamName || "";
            imageWrap.appendChild(image);
          }

          const exp = document.createElement("span");
          exp.className = "team-profile-modal-exp";
          exp.textContent = card.dataset.teamExperience || "";
          imageWrap.appendChild(exp);

          const content = document.createElement("div");
          content.className = "team-profile-modal-content";

          const department = document.createElement("span");
          department.className = "team-profile-modal-department";
          department.textContent = card.dataset.teamDepartment || "";

          const name = document.createElement("h3");
          name.className = "team-profile-modal-name";
          name.textContent = card.dataset.teamName || "";

          const role = document.createElement("p");
          role.className = "team-profile-modal-role";
          role.textContent = card.dataset.teamRole || "";

          const aboutLabel = document.createElement("p");
          aboutLabel.className = "team-profile-modal-label";
          aboutLabel.textContent = "About";

          const about = document.createElement("p");
          about.className = "team-profile-modal-about";
          about.textContent =
            card.dataset.teamAbout || "No bio available for this team member.";

          content.appendChild(department);
          content.appendChild(name);
          content.appendChild(role);
          content.appendChild(aboutLabel);
          content.appendChild(about);

          const specialties = splitList(card.dataset.teamSpecialties);
          if (specialties.length) {
            const specialtiesLabel = document.createElement("p");
            specialtiesLabel.className = "team-profile-modal-label";
            specialtiesLabel.textContent = "Specialties";
            content.appendChild(specialtiesLabel);

            const tags = document.createElement("div");
            tags.className = "team-profile-modal-tags";
            specialties.forEach(function (item) {
              const tag = document.createElement("span");
              tag.className = "team-profile-modal-tag";
              tag.textContent = item;
              tags.appendChild(tag);
            });
            content.appendChild(tags);
          }

          const certs = splitList(card.dataset.teamCertifications);
          if (certs.length) {
            const certLabel = document.createElement("p");
            certLabel.className = "team-profile-modal-label";
            certLabel.textContent = "Certifications";
            content.appendChild(certLabel);

            const certList = document.createElement("ul");
            certList.className = "team-profile-modal-list";
            certs.forEach(function (item) {
              const li = document.createElement("li");
              const icon = document.createElement("i");
              icon.className = "fa-solid fa-certificate";
              li.appendChild(icon);
              li.appendChild(document.createTextNode(item));
              certList.appendChild(li);
            });
            content.appendChild(certList);
          }

          if (card.dataset.teamEmail || card.dataset.teamPhone) {
            const contactLabel = document.createElement("p");
            contactLabel.className = "team-profile-modal-label";
            contactLabel.textContent = "Contact";
            content.appendChild(contactLabel);

            const contactList = document.createElement("ul");
            contactList.className = "team-profile-modal-contact";

            if (card.dataset.teamEmail) {
              const emailItem = document.createElement("li");
              const emailIcon = document.createElement("i");
              emailIcon.className = "fa-regular fa-envelope";
              emailItem.appendChild(emailIcon);
              emailItem.appendChild(
                document.createTextNode(card.dataset.teamEmail),
              );
              contactList.appendChild(emailItem);
            }

            if (card.dataset.teamPhone) {
              const phoneItem = document.createElement("li");
              const phoneIcon = document.createElement("i");
              phoneIcon.className = "fa-solid fa-phone";
              phoneItem.appendChild(phoneIcon);
              phoneItem.appendChild(
                document.createTextNode(card.dataset.teamPhone),
              );
              contactList.appendChild(phoneItem);
            }

            content.appendChild(contactList);
          }

          dialog.appendChild(closeBtn);
          dialog.appendChild(imageWrap);
          dialog.appendChild(content);
          modal.appendChild(dialog);

          closeBtn.addEventListener("click", function () {
            closeModal(modal);
          });

          modal.addEventListener("click", function (event) {
            if (event.target === modal) {
              closeModal(modal);
            }
          });

          document.addEventListener("keydown", function onEsc(event) {
            if (event.key !== "Escape") {
              return;
            }
            document.removeEventListener("keydown", onEsc);
            closeModal(modal);
          });

          document.body.appendChild(modal);
          document.body.style.overflow = "hidden";
        };

        section
          .querySelectorAll("[data-team-view-profile]")
          .forEach(function (button) {
            button.addEventListener("click", function (event) {
              event.preventDefault();
              const card = button.closest("[data-team-member]");
              if (!card) {
                return;
              }
              openModal(card);
            });
          });
      });
  }

  initTeamMemberProfilePopup();

  function initTeamJoinCounter() {
    const sections = Array.from(
      document.querySelectorAll('[data-block="team-join-cta"]'),
    );

    if (!sections.length) {
      return;
    }

    const parseTarget = function (text) {
      const raw = String(text || "").trim();
      const numberMatch = raw.match(/[\d,.]+/);

      if (!numberMatch) {
        return { raw: raw, value: 0, prefix: "", suffix: "" };
      }

      const numericPart = numberMatch[0];
      const start = numberMatch.index || 0;
      const end = start + numericPart.length;

      return {
        raw: raw,
        value: parseFloat(numericPart.replace(/,/g, "")) || 0,
        prefix: raw.slice(0, start),
        suffix: raw.slice(end),
      };
    };

    const formatValue = function (value) {
      return Math.round(value).toLocaleString();
    };

    const animateCounter = function (el) {
      const targetData = parseTarget(el.dataset.count || el.textContent);
      const duration = 1800;
      const startTime = performance.now();
      const finalText = targetData.raw;

      const tick = function (now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = targetData.value * eased;

        if (targetData.value > 0) {
          el.textContent =
            targetData.prefix + formatValue(current) + targetData.suffix;
        } else {
          el.textContent = finalText;
        }

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = finalText;
        }
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          const section = entry.target;
          const values = section.querySelectorAll("[data-count]");

          if (entry.isIntersecting) {
            if (section.dataset.countAnimating === "true") {
              return;
            }
            section.dataset.countAnimating = "true";
            values.forEach(function (el) {
              animateCounter(el);
            });
            return;
          }

          section.dataset.countAnimating = "false";
          values.forEach(function (el) {
            el.textContent = el.dataset.count || el.textContent;
          });
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach(function (section) {
      section.dataset.countAnimating = "false";
      observer.observe(section);
    });
  }

  initTeamJoinCounter();

  function initCareerOpeningsBoard() {
    document
      .querySelectorAll("[data-career-openings]")
      .forEach(function (section) {
        if (section.dataset.openingsInitialized === "true") {
          return;
        }

        section.dataset.openingsInitialized = "true";

        const filterButtons = Array.from(
          section.querySelectorAll("[data-career-filter]"),
        );
        const cards = Array.from(section.querySelectorAll("[data-career-job]"));

        const normalize = function (value) {
          return String(value || "")
            .trim()
            .toLowerCase();
        };

        const closeCard = function (card) {
          card.classList.remove("is-open");
          const toggle = card.querySelector("[data-career-toggle]");
          if (toggle) {
            toggle.setAttribute("aria-expanded", "false");
          }
        };

        const openCard = function (card) {
          cards.forEach(function (item) {
            if (item !== card) {
              closeCard(item);
            }
          });
          card.classList.add("is-open");
          const toggle = card.querySelector("[data-career-toggle]");
          if (toggle) {
            toggle.setAttribute("aria-expanded", "true");
          }
        };

        cards.forEach(function (card) {
          const toggle = card.querySelector("[data-career-toggle]");
          if (!toggle) {
            return;
          }
          toggle.addEventListener("click", function () {
            if (card.classList.contains("is-open")) {
              closeCard(card);
              return;
            }
            openCard(card);
          });
        });

        const applyFilter = function (value) {
          const selected = normalize(value);

          filterButtons.forEach(function (button) {
            const isActive =
              normalize(button.dataset.careerFilter) === selected;
            button.classList.toggle("is-active", isActive);
          });

          let firstVisible = null;
          cards.forEach(function (card) {
            const category = normalize(card.dataset.careerCategory);
            const visible =
              selected === "all positions" ||
              !selected ||
              category === selected;
            card.style.display = visible ? "block" : "none";
            closeCard(card);
            if (visible && !firstVisible) {
              firstVisible = card;
            }
          });

          if (firstVisible) {
            openCard(firstVisible);
          }
        };

        filterButtons.forEach(function (button) {
          button.addEventListener("click", function () {
            applyFilter(button.dataset.careerFilter);
          });
        });

        if (filterButtons.length) {
          applyFilter(filterButtons[0].dataset.careerFilter);
        }
      });
  }

  initCareerOpeningsBoard();

  function initCategorizedFaq() {
    document
      .querySelectorAll("[data-faqv2], [data-faq-categorized]")
      .forEach(function (section) {
        if (section.dataset.faqInitialized === "true") {
          return;
        }

        section.dataset.faqInitialized = "true";

        const items = Array.from(
          section.querySelectorAll(".faqv2-item, .faq-item"),
        );
        const filterButtons = Array.from(
          section.querySelectorAll("[data-faqv2-filter]"),
        );
        const categorySections = Array.from(
          section.querySelectorAll("[data-faqv2-category]"),
        );

        const normalize = function (value) {
          return String(value || "")
            .trim()
            .toLowerCase();
        };

        const getToggle = function (item) {
          return item.querySelector("[data-faqv2-toggle], [data-faq-toggle]");
        };

        const getOpenClass = function (item) {
          return item.classList.contains("faqv2-item") ? "is-open" : "open";
        };

        const closeItem = function (item) {
          const openClass = getOpenClass(item);
          item.classList.remove(openClass);
          const toggle = getToggle(item);
          if (toggle) {
            toggle.setAttribute("aria-expanded", "false");
          }
        };

        const openItem = function (item) {
          items.forEach(function (other) {
            if (other !== item) {
              closeItem(other);
            }
          });
          const openClass = getOpenClass(item);
          item.classList.add(openClass);
          const toggle = getToggle(item);
          if (toggle) {
            toggle.setAttribute("aria-expanded", "true");
          }
        };

        items.forEach(function (item) {
          const toggle = getToggle(item);
          if (!toggle) {
            return;
          }
          toggle.addEventListener("click", function () {
            const openClass = getOpenClass(item);
            if (item.classList.contains(openClass)) {
              closeItem(item);
              return;
            }
            openItem(item);
          });
        });

        const initialOpen = section.querySelector(
          ".faqv2-item.is-open, .faq-item.open",
        );
        if (initialOpen) {
          openItem(initialOpen);
        }

        const applyFilter = function (filterValue) {
          const selected = normalize(filterValue);

          filterButtons.forEach(function (button) {
            const isActive = normalize(button.dataset.faqv2Filter) === selected;
            button.classList.toggle("is-active", isActive);
          });

          categorySections.forEach(function (categorySection) {
            const key = normalize(categorySection.dataset.faqv2Category);
            const visible =
              selected === "all-questions" || !selected || key === selected;
            categorySection.style.display = visible ? "block" : "none";
          });
        };

        filterButtons.forEach(function (button) {
          button.addEventListener("click", function () {
            applyFilter(button.dataset.faqv2Filter);
          });
        });

        if (filterButtons.length) {
          applyFilter(filterButtons[0].dataset.faqv2Filter);
        }
      });
  }

  initCategorizedFaq();

  // Process Timeline — auto-cycle active step
  document.querySelectorAll("[data-process-steps]").forEach(function (stepsEl) {
    const steps = Array.from(stepsEl.querySelectorAll(".process-step"));
    const fill = stepsEl.querySelector(".process-timeline-line-fill");
    if (steps.length < 2) return;

    let current = 0;

    function activate(index) {
      steps.forEach(function (s) {
        s.classList.remove("is-active");
      });
      steps[index].classList.add("is-active");
      if (fill) {
        fill.style.width = (index / (steps.length - 1)) * 100 + "%";
      }
    }

    activate(0);

    steps.forEach(function (step, i) {
      step.addEventListener("click", function () {
        current = i;
        activate(current);
      });
    });

    setInterval(function () {
      current = (current + 1) % steps.length;
      activate(current);
    }, 3000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".popup-boxes-row").forEach(function (row) {
    row.querySelectorAll(".popup-box").forEach(function (box, i) {
      box.addEventListener("click", function () {
        const popupTitle = box.getAttribute("data-popup-title");
        const popupText = box.getAttribute("data-popup-text");
        const modal = document.createElement("div");
        modal.className = "popup-modal";
        modal.style = `
          position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999;
          background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;
        `;
        modal.innerHTML = `
          <div style="background:#fff;border-radius:24px;padding:2rem;min-width:320px;max-width:90vw;box-shadow:0 8px 32px rgba(0,0,0,0.15);position:relative;">
            <button style="position:absolute;top:1rem;right:1rem;background:none;border:none;font-size:2rem;cursor:pointer;color:#1565a5;" aria-label="Close">&times;</button>
            <h2 class="popup-title" style="font-size:2rem;color:#1565a5;margin-bottom:1rem;">${popupTitle}</h2>
            <div style="font-size:1.2rem;color:#222;">${popupText}</div>
          </div>
        `;
        modal.querySelector("button").onclick = () => modal.remove();
        modal.onclick = () => modal.remove();
        modal.querySelector("div").onclick = (e) => e.stopPropagation();
        document.body.appendChild(modal);
      });
    });
  });
});
