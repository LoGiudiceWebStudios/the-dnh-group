document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll("[data-portfolio-showcase='1']");
  if (!blocks.length) return;

  blocks.forEach((block) => {
    const filterButtons = Array.from(
      block.querySelectorAll(".portfolio-filter-btn[data-filter]"),
    );
    const cards = Array.from(block.querySelectorAll(".portfolio-project-card"));
    const modal = block.querySelector("[data-portfolio-modal]");

    const fillFeatures = (container, features) => {
      container.innerHTML = "";
      features.forEach((feature) => {
        const item = document.createElement("span");
        item.textContent = feature;
        container.appendChild(item);
      });
    };

    const setFilter = (value) => {
      filterButtons.forEach((btn) => {
        btn.classList.toggle("is-active", btn.dataset.filter === value);
      });

      cards.forEach((card) => {
        const category = (card.dataset.category || "").toLowerCase();
        const visible = value === "all" || category === value;
        card.style.display = visible ? "grid" : "none";
      });
    };

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () =>
        setFilter(btn.dataset.filter || "all"),
      );
    });

    if (!modal) return;

    const closeTargets = modal.querySelectorAll("[data-portfolio-close]");
    const modalTitle = modal.querySelector("[data-modal-title]");
    const modalTitleMedia = modal.querySelector("[data-modal-title-media]");
    const modalCategory = modal.querySelector("[data-modal-category]");
    const modalCategoryChip = modal.querySelector("[data-modal-category-chip]");
    const modalLocation = modal.querySelector("[data-modal-location] span");
    const modalRating = modal.querySelector("[data-modal-rating] span");
    const modalDescription = modal.querySelector("[data-modal-description]");
    const modalStart = modal.querySelector("[data-modal-start]");
    const modalCompleted = modal.querySelector("[data-modal-completed]");
    const modalSize = modal.querySelector("[data-modal-size]");
    const modalDuration = modal.querySelector("[data-modal-duration]");
    const modalTeam = modal.querySelector("[data-modal-team]");
    const modalFeatures = modal.querySelector("[data-modal-features]");
    const modalLetter = modal.querySelector("[data-modal-letter]");
    const modalImage = modal.querySelector("[data-modal-image]");
    const modalTestimonial = modal.querySelector("[data-modal-testimonial]");
    const modalAuthor = modal.querySelector("[data-modal-author]");
    const modalPrimary = modal.querySelector("[data-modal-primary]");
    const modalPrimaryText = modal.querySelector("[data-modal-primary-text]");
    const modalSecondary = modal.querySelector("[data-modal-secondary]");
    const modalSecondaryText = modal.querySelector(
      "[data-modal-secondary-text]",
    );

    const closeModal = () => {
      modal.hidden = true;
      document.body.classList.remove("portfolio-modal-open");
    };

    const openModal = (card) => {
      const features = String(card.dataset.projectFeatures || "")
        .split("||")
        .map((item) => item.trim())
        .filter(Boolean);

      if (modalTitle)
        modalTitle.textContent = card.dataset.projectTitle || "Project";
      if (modalTitleMedia)
        modalTitleMedia.textContent = card.dataset.projectTitle || "Project";
      if (modalCategory)
        modalCategory.textContent = card.dataset.projectCategory || "Project";
      if (modalCategoryChip)
        modalCategoryChip.textContent =
          card.dataset.projectCategory || "Project";
      if (modalLocation)
        modalLocation.textContent = card.dataset.projectLocation || "-";
      if (modalRating)
        modalRating.textContent = `${card.dataset.projectRating || "5.0"} Customer Rating`;
      if (modalDescription)
        modalDescription.textContent = card.dataset.projectDescription || "";
      if (modalStart) modalStart.textContent = card.dataset.projectStart || "-";
      if (modalCompleted)
        modalCompleted.textContent = card.dataset.projectCompleted || "-";
      if (modalSize) modalSize.textContent = card.dataset.projectSize || "-";
      if (modalDuration)
        modalDuration.textContent = card.dataset.projectDuration || "-";
      if (modalTeam) modalTeam.textContent = card.dataset.projectTeam || "-";
      if (modalLetter)
        modalLetter.textContent = card.dataset.projectLetter || "P";
      if (modalImage) {
        const imageUrl = card.dataset.projectImage || "";
        const imageAlt =
          card.dataset.projectImageAlt ||
          card.dataset.projectTitle ||
          "Project image";
        if (imageUrl.trim()) {
          modalImage.src = imageUrl;
          modalImage.alt = imageAlt;
          modalImage.hidden = false;
          if (modalLetter) {
            modalLetter.hidden = true;
          }
        } else {
          modalImage.src = "";
          modalImage.alt = "";
          modalImage.hidden = true;
          if (modalLetter) {
            modalLetter.hidden = false;
          }
        }
      }
      if (modalTestimonial)
        modalTestimonial.textContent = card.dataset.projectTestimonial || "";
      if (modalAuthor)
        modalAuthor.textContent = card.dataset.projectAuthor || "";
      if (modalFeatures) fillFeatures(modalFeatures, features);

      if (modalPrimaryText)
        modalPrimaryText.textContent =
          card.dataset.projectPrimaryText || "Start Your Project";
      if (modalPrimary) {
        modalPrimary.setAttribute(
          "href",
          card.dataset.projectPrimaryUrl || "#",
        );
        modalPrimary.style.display = (
          card.dataset.projectPrimaryText || ""
        ).trim()
          ? "inline-flex"
          : "none";
      }

      if (modalSecondaryText)
        modalSecondaryText.textContent =
          card.dataset.projectSecondaryText || "Explore Financing";
      if (modalSecondary) {
        modalSecondary.setAttribute(
          "href",
          card.dataset.projectSecondaryUrl || "#",
        );
        modalSecondary.style.display = (
          card.dataset.projectSecondaryText || ""
        ).trim()
          ? "inline-flex"
          : "none";
      }

      modal.hidden = false;
      document.body.classList.add("portfolio-modal-open");
    };

    cards.forEach((card) => {
      card.addEventListener("click", (event) => {
        if (
          event.target.closest("a") &&
          !event.target.closest("[data-project-open]")
        ) {
          return;
        }
        openModal(card);
      });

      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openModal(card);
        }
      });
    });

    closeTargets.forEach((target) => {
      target.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", (event) => {
      if (!modal.hidden && event.key === "Escape") {
        closeModal();
      }
    });
  });
});
