/**
 * Why Choose Us Counter Effect
 * Animates number counting when the block enters the viewport
 */
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const block = entry.target;
          const statNumbers = block.querySelectorAll("[data-count]");

          statNumbers.forEach(function (el) {
            if (el.classList.contains("counted")) return; // Skip if already counted

            el.classList.add("counted");
            const targetText = el.getAttribute("data-count");
            let targetNumber = 0;

            // Extract numeric value from target (including commas)
            const match = targetText.match(/[\d,]+/);
            if (match) {
              targetNumber = parseFloat(match[0].replace(/,/g, ""));
            }

            // Determine if it's a percentage, number with commas, or regular
            const isPercentage = targetText.includes("%");
            const hasCommas = targetText.includes(",");

            // Animation settings
            const duration = 2000; // 2 seconds
            const startTime = Date.now();
            const startNumber = 0;

            function animateCount() {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Easing function for smooth animation
              const easeOutQuad = 1 - Math.pow(1 - progress, 2);
              const currentNumber =
                startNumber + (targetNumber - startNumber) * easeOutQuad;

              // Format the display
              let displayText = "";
              if (isPercentage) {
                displayText = Math.round(currentNumber) + "%";
              } else if (hasCommas && currentNumber >= 1000) {
                displayText = Math.round(currentNumber).toLocaleString() + "+";
              } else {
                displayText =
                  currentNumber < targetNumber
                    ? Math.round(currentNumber) + "+"
                    : targetText;
              }

              el.textContent = displayText;

              if (progress < 1) {
                requestAnimationFrame(animateCount);
              } else {
                el.textContent = targetText;
              }
            }

            animateCount();
          });

          // Unobserve after counting to prevent re-triggering
          observer.unobserve(block);
        }
      });
    },
    {
      threshold: 0.3, // Trigger when 30% of block is visible
    },
  );

  // Find all why-choose-us blocks
  document
    .querySelectorAll('[data-block="why-choose-us"]')
    .forEach(function (block) {
      observer.observe(block);
    });
});
