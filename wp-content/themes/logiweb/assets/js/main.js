document.addEventListener("DOMContentLoaded", function () {
  var desktopQuery = window.matchMedia("(min-width: 992px)");

  function isDesktop() {
    return desktopQuery.matches;
  }

  function hasNavigableUrl(link) {
    if (!link) {
      return false;
    }
    var href = (link.getAttribute("href") || "").trim();
    return href !== "" && href !== "#" && !href.startsWith("javascript:");
  }

  // Desktop: click on parent opens the master page (if a real URL exists).
  document.addEventListener(
    "click",
    function (event) {
      var link = event.target.closest(".navbar .dropdown-toggle");
      if (!link || !isDesktop()) {
        return;
      }

      if (hasNavigableUrl(link)) {
        event.preventDefault();
        event.stopPropagation();
        window.location.href = link.getAttribute("href");
      }
    },
    true,
  );

  // Mobile/tablet touch: first tap opens submenu, second tap follows link.
  document
    .querySelectorAll(".navbar .dropdown-toggle")
    .forEach(function (link) {
      link.addEventListener("touchstart", function (event) {
        if (isDesktop()) {
          return;
        }

        var parent = link.parentElement;
        if (!parent || !parent.classList.contains("dropdown")) {
          return;
        }

        if (!parent.classList.contains("show")) {
          document
            .querySelectorAll(".navbar .dropdown.show")
            .forEach(function (open) {
              if (open !== parent) {
                open.classList.remove("show");
              }
            });

          parent.classList.add("show");
          event.preventDefault();
        }
      });
    });

  // Close mobile dropdowns when tapping outside.
  document.addEventListener("touchstart", function (event) {
    if (isDesktop()) {
      return;
    }

    document
      .querySelectorAll(".navbar .dropdown.show")
      .forEach(function (open) {
        if (!open.contains(event.target)) {
          open.classList.remove("show");
        }
      });
  });
});

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500); // aspetta la transizione
});
