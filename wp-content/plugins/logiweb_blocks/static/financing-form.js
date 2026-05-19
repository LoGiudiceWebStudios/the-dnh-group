document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".financing-app-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Get redirect URL from data attribute
    const redirectUrl = form.dataset.redirect || "/select-financing/";
    const nonce = logiweb_rest.nonce;
    const baseUrl = logiweb_rest.base_url;

    try {
      // Submit via WordPress REST API
      const response = await fetch(baseUrl + "wp/v2/financing_app", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": nonce,
        },
        body: JSON.stringify({
          title: `${data.firstName} ${data.lastName} - ${new Date().toLocaleDateString()}`,
          meta: {
            _app_data: data,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      const app = await response.json();

      // Redirect to results page with app ID
      window.location.href = redirectUrl + `?app=${app.id}`;
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting form. Please try again.");
    }
  });
});
