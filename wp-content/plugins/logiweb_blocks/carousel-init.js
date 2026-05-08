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
