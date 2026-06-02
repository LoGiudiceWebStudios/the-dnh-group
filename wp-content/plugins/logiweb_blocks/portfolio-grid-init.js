document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".portfolio-grid-block");

  blocks.forEach((block) => {
    const filterButtons = block.querySelectorAll(".portfolio-filter-btn");
    const searchInput = block.querySelector("[data-portfolio-search]");
    const cardItems = block.querySelectorAll(
      ".portfolio-card-link, .portfolio-card",
    );
    let activeFilter = "all";
    let searchTerm = "";

    if (filterButtons.length === 0 && !searchInput) return;

    const normalize = (value) =>
      String(value || "")
        .trim()
        .toLowerCase();

    const isAllFilter = (value) => {
      const v = normalize(value);
      return v === "all" || v === "all projects" || v.length === 0;
    };

    const applyFilters = () => {
      cardItems.forEach((item) => {
        const card = item.classList.contains("portfolio-card")
          ? item
          : item.querySelector(".portfolio-card");
        if (!card) return;

        const cardCategory = (card.getAttribute("data-category") || "").trim();
        const cardText = [
          card.getAttribute("data-title") || "",
          card.getAttribute("data-location") || "",
          card.getAttribute("data-year") || "",
          cardCategory,
        ]
          .join(" ")
          .toLowerCase();

        const matchesCategory =
          isAllFilter(activeFilter) ||
          normalize(cardCategory) === normalize(activeFilter);
        const matchesSearch =
          searchTerm.length === 0 || cardText.includes(searchTerm);

        const shouldShow = matchesCategory && matchesSearch;

        item.style.display = shouldShow ? "block" : "none";
        item.style.opacity = shouldShow ? "1" : "0";
        item.style.transform = shouldShow
          ? "translateY(0)"
          : "translateY(16px)";
      });
    };

    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        activeFilter = this.getAttribute("data-filter") || "all";

        // Update active button
        filterButtons.forEach((btn) => {
          btn.classList.remove("active");
          btn.classList.remove("is-active");
        });
        this.classList.add("active");
        this.classList.add("is-active");

        applyFilters();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        searchTerm = String(this.value || "")
          .trim()
          .toLowerCase();
        applyFilters();
      });
    }

    applyFilters();
  });
});
