(function () {
  function initReviewsSpotlight(root) {
    var carousel = root.querySelector(".reviews-spotlight-carousel");
    if (!carousel) return;

    var slides = Array.prototype.slice.call(
      carousel.querySelectorAll(".reviews-spotlight-slide"),
    );
    var dots = Array.prototype.slice.call(
      root.querySelectorAll(".reviews-spotlight-dot"),
    );
    var prev = carousel.querySelector(".reviews-spotlight-arrow-prev");
    var next = carousel.querySelector(".reviews-spotlight-arrow-next");

    if (!slides.length) return;

    var index = 0;

    function render() {
      slides.forEach(function (slide, i) {
        var active = i === index;
        slide.classList.toggle("is-active", active);
      });

      dots.forEach(function (dot, i) {
        var active = i === index;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-selected", active ? "true" : "false");
      });

      carousel.setAttribute("data-current-index", String(index));
    }

    function goTo(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      render();
    }

    if (prev) {
      prev.addEventListener("click", function () {
        goTo(index - 1);
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        goTo(index + 1);
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        var goToIndex = Number(dot.getAttribute("data-go-to"));
        if (!Number.isNaN(goToIndex)) {
          goTo(goToIndex);
        }
      });
    });

    render();
  }

  function bootstrap() {
    var blocks = document.querySelectorAll(".reviews-spotlight-block");
    blocks.forEach(initReviewsSpotlight);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
