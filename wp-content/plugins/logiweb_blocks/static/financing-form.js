document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".financing-wizard-form");
  if (!form) return;

  const panels = Array.from(form.querySelectorAll("[data-step-panel]"));
  const labels = Array.from(form.querySelectorAll("[data-step-label]"));
  const progressBar = form.querySelector("[data-progress-bar]");
  const partnersList = form.querySelector("[data-partners-list]");
  const emptyState = form.querySelector("[data-empty-state]");
  const summaryProject = form.querySelector("[data-summary-project]");
  const summaryAmount = form.querySelector("[data-summary-amount]");
  const submitEndpoint =
    (window.logiweb_rest && window.logiweb_rest.submit_endpoint) ||
    "/wp-json/logiweb/v1/financing-app";

  let currentStep = 1;
  let savePromise = null;
  let savedAppId = null;

  function toNumber(value) {
    const n = Number(String(value || "").replace(/[^\d.]/g, ""));
    return Number.isFinite(n) ? n : 0;
  }

  function updateProgress(step) {
    const widths = { 1: "33.333%", 2: "66.666%", 3: "100%" };
    if (progressBar) {
      progressBar.style.width = widths[step] || "33.333%";
    }
    labels.forEach((label) => {
      const labelStep = Number(label.getAttribute("data-step-label"));
      label.classList.toggle("is-active", labelStep <= step);
    });
  }

  function showStep(step) {
    currentStep = step;
    panels.forEach((panel) => {
      const panelStep = Number(panel.getAttribute("data-step-panel"));
      panel.classList.toggle("is-active", panelStep === step);
    });
    updateProgress(step);
  }

  function getField(name) {
    return form.querySelector(`[name="${name}"]`);
  }

  function validateStep(step) {
    const stepPanel = form.querySelector(`[data-step-panel="${step}"]`);
    if (!stepPanel) return true;

    const required = Array.from(stepPanel.querySelectorAll("[required]"));
    for (const field of required) {
      if (!field.value || !String(field.value).trim()) {
        field.focus();
        field.reportValidity();
        return false;
      }
    }

    return true;
  }

  function splitName(fullName) {
    const parts = String(fullName || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    if (!parts.length) {
      return { firstName: "", lastName: "" };
    }

    if (parts.length === 1) {
      return { firstName: parts[0], lastName: "-" };
    }

    return {
      firstName: parts[0],
      lastName: parts.slice(1).join(" "),
    };
  }

  function collectData() {
    const fullName = getField("fullName")?.value || "";
    const name = splitName(fullName);

    return {
      fullName,
      firstName: name.firstName,
      lastName: name.lastName,
      email: getField("email")?.value || "",
      phone: getField("phone")?.value || "",
      street: getField("street")?.value || "",
      annualIncome: getField("annualIncome")?.value || "",
      employmentStatus: getField("employmentStatus")?.value || "",
      creditScoreRange: getField("creditScoreRange")?.value || "",
      projectType: getField("projectType")?.value || "",
      projectDetails: getField("projectDetails")?.value || "",
      projectAmount: getField("projectAmount")?.value || "",
      startDate: getField("startDate")?.value || "",
      additionalNotes: getField("additionalNotes")?.value || "",
    };
  }

  function formatMoney(value) {
    const n = toNumber(value);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n || 0);
  }

  function titleFromSlug(slug) {
    return String(slug || "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (m) => m.toUpperCase());
  }

  function updateSummary(data) {
    if (summaryProject) {
      summaryProject.textContent = titleFromSlug(data.projectType) || "N/A";
    }

    if (summaryAmount) {
      summaryAmount.textContent = formatMoney(data.projectAmount);
    }
  }

  function filterPartners(data) {
    if (!partnersList) return;

    const cards = Array.from(
      partnersList.querySelectorAll(".financing-wizard-partner-card"),
    );

    const credit = toNumber(data.creditScoreRange);
    const amount = toNumber(data.projectAmount);
    const projectType = String(data.projectType || "").toLowerCase();

    let visibleCount = 0;

    cards.forEach((card) => {
      const minCredit = toNumber(card.dataset.minCredit);
      const minAmount = toNumber(card.dataset.minAmount);
      const maxAmount = toNumber(card.dataset.maxAmount);
      const typesRaw = String(card.dataset.projectTypes || "").trim();
      const allowedTypes = typesRaw
        ? typesRaw
            .split(",")
            .map((s) => s.trim().toLowerCase())
            .filter(Boolean)
        : [];

      const creditOk = !minCredit || credit >= minCredit;
      const minAmountOk = !minAmount || amount >= minAmount;
      const maxAmountOk = !maxAmount || amount <= maxAmount;
      const typeOk = !allowedTypes.length || allowedTypes.includes(projectType);

      const show = creditOk && minAmountOk && maxAmountOk && typeOk;
      card.hidden = !show;
      if (show) visibleCount += 1;
    });

    if (emptyState) {
      emptyState.hidden = visibleCount > 0;
    }
  }

  async function saveApplication() {
    if (savedAppId) {
      return savedAppId;
    }

    if (savePromise) {
      return savePromise;
    }

    const payload = collectData();
    savePromise = fetch(submitEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        const body = await response
          .json()
          .catch(() => ({ message: "Invalid server response." }));
        if (!response.ok) {
          throw new Error(body.message || "Error submitting application.");
        }
        if (!body || !body.id) {
          throw new Error("Application saved but no ID returned.");
        }
        savedAppId = body.id;
        return savedAppId;
      })
      .finally(() => {
        savePromise = null;
      });

    return savePromise;
  }

  form.addEventListener("click", async (event) => {
    const nextBtn = event.target.closest("[data-step-next]");
    const backBtn = event.target.closest("[data-step-back]");
    const editBtn = event.target.closest("[data-step-edit]");
    const applyBtn = event.target.closest(".partner-apply-btn");

    if (nextBtn) {
      const targetStep = Number(nextBtn.getAttribute("data-step-next"));
      if (!validateStep(currentStep)) {
        return;
      }

      const data = collectData();
      if (targetStep === 3) {
        updateSummary(data);
        filterPartners(data);
      }
      showStep(targetStep);
      return;
    }

    if (backBtn) {
      const targetStep = Number(backBtn.getAttribute("data-step-back"));
      showStep(targetStep);
      return;
    }

    if (editBtn) {
      const targetStep = Number(editBtn.getAttribute("data-step-edit"));
      showStep(targetStep || 1);
      return;
    }

    if (applyBtn) {
      event.preventDefault();
      const href = applyBtn.getAttribute("href") || "#";
      const data = collectData();

      if (!validateStep(1) || !validateStep(2)) {
        return;
      }

      applyBtn.classList.add("is-loading");
      applyBtn.textContent = "Saving...";

      try {
        const appId = await saveApplication();
        const target = new URL(href, window.location.origin);
        target.searchParams.set("app", String(appId));
        window.open(target.toString(), "_blank", "noopener");
      } catch (error) {
        console.error(error);
        alert(error.message || "Unable to continue. Please try again.");
      } finally {
        applyBtn.classList.remove("is-loading");
        applyBtn.textContent = "Apply";
      }
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  showStep(1);
});
