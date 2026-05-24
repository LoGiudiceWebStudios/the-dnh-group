document.addEventListener("DOMContentLoaded", function () {
  const videoButtons = document.querySelectorAll("[data-video-url]");

  videoButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const videoUrl = this.getAttribute("data-video-url");
      if (!videoUrl) return;

      // Create modal backdrop
      const modal = document.createElement("div");
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.85);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
      `;

      // Create modal content
      const content = document.createElement("div");
      content.style.cssText = `
        position: relative;
        width: 100%;
        max-width: 900px;
      `;

      // Create close button
      const closeBtn = document.createElement("button");
      closeBtn.innerHTML = "×";
      closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: #ffffff;
        font-size: 2rem;
        cursor: pointer;
        z-index: 10000;
      `;

      // Create video element
      const video = document.createElement("video");
      video.src = videoUrl;
      video.controls = true;
      video.autoplay = true;
      video.style.cssText = `
        width: 100%;
        height: auto;
        border-radius: 8px;
        background: #000;
      `;

      // Assemble modal
      content.appendChild(closeBtn);
      content.appendChild(video);
      modal.appendChild(content);
      document.body.appendChild(modal);

      // Close on backdrop click
      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          modal.remove();
        }
      });

      // Close on close button click
      closeBtn.addEventListener("click", function () {
        modal.remove();
      });

      // Close on Escape key
      const handleEscape = function (e) {
        if (e.key === "Escape") {
          modal.remove();
          document.removeEventListener("keydown", handleEscape);
        }
      };
      document.addEventListener("keydown", handleEscape);
    });
  });
});
