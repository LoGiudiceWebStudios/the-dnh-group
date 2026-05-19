(function () {
  function toCurrency(value) {
    return Number(value || 0).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });
  }

  function calcPayment(principal, months, apr) {
    var p = Number(principal) || 0;
    var n = Math.max(1, Number(months) || 1);
    var r = (Number(apr) || 0) / 100 / 12;

    if (r === 0) {
      return p / n;
    }

    return p * (r / (1 - Math.pow(1 + r, -n)));
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function updateRowFill(input) {
    var row = input.closest(".payment-slider-row");
    if (!row) {
      return;
    }

    var min = Number(input.min || 0);
    var max = Number(input.max || 100);
    var value = Number(input.value || min);
    var pct = ((value - min) / Math.max(1, max - min)) * 100;
    row.style.setProperty("--pct", pct + "%");
  }

  function initEstimator(root) {
    var projectInput = root.querySelector(".js-project-cost");
    var termInput = root.querySelector(".js-loan-term");
    var aprInput = root.querySelector(".js-apr");

    if (!projectInput || !termInput || !aprInput) {
      return;
    }

    var elProjectTop = root.querySelector(".js-project-cost-value");
    var elTermTop = root.querySelector(".js-term-value");
    var elAprTop = root.querySelector(".js-apr-value");

    var elPayment = root.querySelector(".js-payment-value");
    var elProjectBreakdown = root.querySelector(".js-breakdown-project-cost");
    var elTermBreakdown = root.querySelector(".js-breakdown-term");
    var elAprBreakdown = root.querySelector(".js-breakdown-apr");
    var elInterestBreakdown = root.querySelector(".js-breakdown-interest");

    function render() {
      var project = Number(projectInput.value || 0);
      var term = Number(termInput.value || 1);
      var apr = Number(aprInput.value || 0);

      var payment = calcPayment(project, term, apr);
      var totalInterest = payment * term - project;

      if (elProjectTop) {
        elProjectTop.textContent = toCurrency(project);
      }
      if (elTermTop) {
        elTermTop.textContent = term + " months";
      }
      if (elAprTop) {
        elAprTop.textContent = apr.toFixed(2) + "%";
      }
      if (elPayment) {
        elPayment.textContent = toCurrency(payment);
      }
      if (elProjectBreakdown) {
        elProjectBreakdown.textContent = toCurrency(project);
      }
      if (elTermBreakdown) {
        elTermBreakdown.textContent = term + " months";
      }
      if (elAprBreakdown) {
        elAprBreakdown.textContent = apr.toFixed(2) + "%";
      }
      if (elInterestBreakdown) {
        elInterestBreakdown.textContent = toCurrency(totalInterest);
      }

      updateRowFill(projectInput);
      updateRowFill(termInput);
      updateRowFill(aprInput);
    }

    // Keep sliders within valid bounds if content was edited manually.
    projectInput.value = String(
      clamp(
        Number(projectInput.value || 0),
        Number(projectInput.min || 0),
        Number(projectInput.max || 0),
      ),
    );
    termInput.value = String(
      clamp(
        Number(termInput.value || 0),
        Number(termInput.min || 0),
        Number(termInput.max || 0),
      ),
    );
    aprInput.value = String(
      clamp(
        Number(aprInput.value || 0),
        Number(aprInput.min || 0),
        Number(aprInput.max || 0),
      ),
    );

    [projectInput, termInput, aprInput].forEach(function (input) {
      input.addEventListener("input", render);
      input.addEventListener("change", render);
    });

    render();
  }

  function boot() {
    document
      .querySelectorAll('.payment-estimator-block[data-payment-estimator="1"]')
      .forEach(initEstimator);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
