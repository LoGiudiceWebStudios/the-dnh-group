document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".reviews-grid-block");

  blocks.forEach((block) => {
    const filterButtons = block.querySelectorAll("[data-review-filter]");
    const cards = block.querySelectorAll("[data-review-category]");

    if (filterButtons.length === 0) {
      return;
    }

    const applyFilter = (activeFilter) => {
      cards.forEach((card) => {
        const category = card.getAttribute("data-review-category") || "";
        const shouldShow =
          activeFilter === "All Reviews" || category === activeFilter;

        card.style.display = shouldShow ? "block" : "none";
      });
    };

    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const activeFilter =
          this.getAttribute("data-review-filter") || "All Reviews";
        filterButtons.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
        applyFilter(activeFilter);
      });
    });

    applyFilter("All Reviews");
  });
});
