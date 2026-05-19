document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".portfolio-grid-block");

  blocks.forEach((block) => {
    const filterButtons = block.querySelectorAll(".portfolio-filter-btn");
    const searchInput = block.querySelector("[data-portfolio-search]");
    const portfolioCards = block.querySelectorAll(".portfolio-card");
    let activeFilter = "All Projects";
    let searchTerm = "";

    if (filterButtons.length === 0 && !searchInput) return;

    const applyFilters = () => {
      portfolioCards.forEach((card) => {
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
          activeFilter === "All Projects" || cardCategory === activeFilter;
        const matchesSearch =
          searchTerm.length === 0 || cardText.includes(searchTerm);

        const shouldShow = matchesCategory && matchesSearch;

        card.style.display = shouldShow ? "block" : "none";
        card.style.opacity = shouldShow ? "1" : "0";
        card.style.transform = shouldShow
          ? "translateY(0)"
          : "translateY(16px)";
      });
    };

    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        activeFilter = this.getAttribute("data-filter") || "All Projects";

        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

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
