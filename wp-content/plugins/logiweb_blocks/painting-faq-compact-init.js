(function () {
  "use strict";

  function initFaqBlock(root) {
    var items = root.querySelectorAll(".painting-faq-compact-item");
    if (!items.length) return;

    function closeItem(item) {
      var button = item.querySelector("[data-faq-toggle]");
      var answer = item.querySelector(".painting-faq-compact-answer");
      item.classList.remove("is-open");
      if (button) button.setAttribute("aria-expanded", "false");
      if (answer) answer.hidden = true;
    }

    function openItem(item) {
      var button = item.querySelector("[data-faq-toggle]");
      var answer = item.querySelector(".painting-faq-compact-answer");
      item.classList.add("is-open");
      if (button) button.setAttribute("aria-expanded", "true");
      if (answer) answer.hidden = false;
    }

    items.forEach(function (item) {
      var button = item.querySelector("[data-faq-toggle]");
      if (!button) return;

      button.addEventListener("click", function () {
        var isOpen = item.classList.contains("is-open");
        items.forEach(closeItem);
        if (!isOpen) openItem(item);
      });
    });
  }

  function initAll() {
    var blocks = document.querySelectorAll("[data-painting-faq]");
    blocks.forEach(initFaqBlock);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
