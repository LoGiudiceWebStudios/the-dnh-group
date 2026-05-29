(function () {
  "use strict";

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function initCompareBlock(track) {
    var beforeClip = track.querySelector(".ba-compare-before-clip");
    var divider = track.querySelector(".ba-compare-divider");
    var range = track.querySelector(".ba-compare-range");
    if (!beforeClip || !divider || !range) return;

    function setPosition(percent) {
      var next = clamp(percent, 0, 100);
      beforeClip.style.width = next + "%";
      divider.style.left = next + "%";
      range.value = String(Math.round(next));
      track.setAttribute("data-position", String(Math.round(next)));
    }

    range.addEventListener("input", function (event) {
      setPosition(parseFloat(event.target.value || "0"));
    });

    var initial = parseFloat(track.getAttribute("data-position") || "50");
    setPosition(Number.isFinite(initial) ? initial : 50);
  }

  function initAll() {
    var blocks = document.querySelectorAll(".ba-compare-track");
    blocks.forEach(initCompareBlock);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
