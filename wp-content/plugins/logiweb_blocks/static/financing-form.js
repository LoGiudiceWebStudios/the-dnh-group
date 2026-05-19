document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".financing-app-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Get redirect URL from data attribute
    const redirectUrl = form.dataset.redirect || "/select-your-financing/";
    const submitEndpoint =
      (window.logiweb_rest && window.logiweb_rest.submit_endpoint) ||
      "/wp-json/logiweb/v1/financing-app";

    try {
      const response = await fetch(submitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let payload = null;
      try {
        payload = await response.json();
      } catch (jsonError) {
        payload = null;
      }

      if (!response.ok) {
        const message =
          (payload && (payload.message || payload.error)) ||
          `Failed to submit application (HTTP ${response.status})`;
        throw new Error(message);
      }

      const app = payload;
      if (!app || !app.id) {
        throw new Error("Application saved but missing ID in response.");
      }

      // Redirect to results page with app ID.
      const redirectTarget = new URL(redirectUrl, window.location.origin);
      redirectTarget.searchParams.set("app", String(app.id));
      window.location.href = redirectTarget.toString();
    } catch (error) {
      console.error("Form submission error:", error);
      alert(error.message || "Error submitting form. Please try again.");
    }
  });
});
