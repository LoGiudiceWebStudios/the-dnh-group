/******/ (() => { // webpackBootstrap
/*!*****************************************!*\
  !*** ./src/blocks/block-71/frontend.js ***!
  \*****************************************/
(function () {
  function getDirection(button) {
    return button.getAttribute("data-direction") === "left" ? -1 : 1;
  }
  function scrollTrack(track, direction) {
    var amount = Math.max(300, Math.round(track.clientWidth * 0.78));
    var left = direction * amount;
    if (typeof track.scrollBy === "function") {
      track.scrollBy({
        left: left,
        behavior: "smooth"
      });
      return;
    }
    track.scrollLeft += left;
  }

  // Delegated click handler is resilient to dynamic content and timing issues.
  document.addEventListener("click", function (event) {
    var button = event.target.closest(".recent-work-slider-arrow");
    if (!button) return;
    var root = button.closest(".recent-work-slider-block");
    if (!root) return;
    var track = root.querySelector(".recent-work-slider-track");
    if (!track) return;
    scrollTrack(track, getDirection(button));
  });
})();
/******/ })()
;
//# sourceMappingURL=frontend.js.map