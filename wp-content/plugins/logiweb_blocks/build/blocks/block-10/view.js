/**
 * Certifications Carousel - View Script
 * Handles infinite autoplay and intersection observer for fade-in effects
 */

(function () {
  // Initialize fade-in-on-scroll for all blocks with this class
  function initFadeInOnScroll() {
    const elementsToFadeIn = document.querySelectorAll('[data-block]');
    
    if ('IntersectionObserver' in window) {
      const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-active');
            fadeInObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      });

      elementsToFadeIn.forEach((el) => {
        fadeInObserver.observe(el);
      });
    } else {
      // Fallback for older browsers
      elementsToFadeIn.forEach((el) => {
        el.classList.add('fade-in-active');
      });
    }
  }

  // Initialize carousels with infinite autoplay
  function initCarousels() {
    const carousels = document.querySelectorAll('[data-carousel-track]');

    carousels.forEach((carousel) => {
      const track = carousel;
      const items = track.querySelectorAll('[data-carousel-item]');

      if (items.length === 0) return;

      // Clone items for infinite loop
      const clonedItems = Array.from(items).map((item) => item.cloneNode(true));
      clonedItems.forEach((clonedItem) => {
        track.appendChild(clonedItem);
      });

      let currentIndex = 0;
      const totalItems = items.length;
      const itemWidth = items[0].offsetWidth + 24; // width + gap
      let isTransitioning = false;

      function slide() {
        if (isTransitioning) return;
        isTransitioning = true;

        currentIndex += 1;
        const offset = -currentIndex * itemWidth;
        track.style.transform = `translateX(${offset}px)`;
        track.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

        setTimeout(() => {
          if (currentIndex >= totalItems) {
            track.style.transition = 'none';
            currentIndex = 0;
            const resetOffset = 0;
            track.style.transform = `translateX(${resetOffset}px)`;
            isTransitioning = false;
          } else {
            isTransitioning = false;
          }
        }, 600);
      }

      // Auto-play every 4 seconds
      setInterval(slide, 4000);

      // Initial setup
      track.style.display = 'flex';
      track.style.gap = '1.5rem';
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initFadeInOnScroll();
      initCarousels();
    });
  } else {
    initFadeInOnScroll();
    initCarousels();
  }

  // Re-initialize on dynamically added content (e.g., AJAX)
  if (window.MutationObserver) {
    const observer = new MutationObserver(() => {
      initFadeInOnScroll();
      initCarousels();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false,
    });
  }
})();
