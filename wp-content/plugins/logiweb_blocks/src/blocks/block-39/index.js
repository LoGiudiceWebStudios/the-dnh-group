import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl, RangeControl } from "@wordpress/components";
import metadata from "./block.json";
import "../../global-styles.scss";

const currency = (value) =>
  Number(value || 0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

const calcPayment = (principal, months, apr) => {
  const p = Number(principal) || 0;
  const n = Math.max(1, Number(months) || 1);
  const r = (Number(apr) || 0) / 100 / 12;

  if (r === 0) {
    return p / n;
  }

  return p * (r / (1 - Math.pow(1 + r, -n)));
};

registerBlockType("logiweb/custom-block-39", {
  ...metadata,
  attributes: {
    badge: { type: "string", default: "Payment Estimator" },
    badgeIcon: { type: "string", default: "fa-regular fa-calculator" },
    titleStart: { type: "string", default: "Calculate Your" },
    titleHighlight: { type: "string", default: "Monthly Payment" },
    description: {
      type: "string",
      default:
        "Get an instant estimate of what your monthly payment could look like. Adjust the sliders to explore different scenarios.",
    },
    detailsTitle: { type: "string", default: "Project Details" },
    projectCost: { type: "number", default: 10000 },
    projectMin: { type: "number", default: 1000 },
    projectMax: { type: "number", default: 100000 },
    loanTermMonths: { type: "number", default: 60 },
    termMinMonths: { type: "number", default: 12 },
    termMaxMonths: { type: "number", default: 144 },
    aprPercent: { type: "number", default: 8.99 },
    aprMin: { type: "number", default: 0 },
    aprMax: { type: "number", default: 25 },
    panelTitle: { type: "string", default: "Estimated Monthly Payment" },
    estimateDisclaimer: {
      type: "string",
      default:
        "*This is an estimate. Actual rates and terms may vary based on credit approval.",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      badge,
      badgeIcon,
      titleStart,
      titleHighlight,
      description,
      detailsTitle,
      projectCost,
      projectMin,
      projectMax,
      loanTermMonths,
      termMinMonths,
      termMaxMonths,
      aprPercent,
      aprMin,
      aprMax,
      panelTitle,
      estimateDisclaimer,
    } = attributes;

    const payment = calcPayment(projectCost, loanTermMonths, aprPercent);
    const totalInterest = payment * loanTermMonths - projectCost;

    const costPct =
      ((projectCost - projectMin) / Math.max(1, projectMax - projectMin)) * 100;
    const termPct =
      ((loanTermMonths - termMinMonths) /
        Math.max(1, termMaxMonths - termMinMonths)) *
      100;
    const aprPct = ((aprPercent - aprMin) / Math.max(1, aprMax - aprMin)) * 100;

    return (
      <div className="payment-estimator-editor">
        <InspectorControls>
          <PanelBody title="Header" initialOpen={true}>
            <TextControl
              label="Badge"
              value={badge}
              onChange={(value) => setAttributes({ badge: value })}
            />
            <TextControl
              label="Badge Icon Class"
              value={badgeIcon}
              onChange={(value) => setAttributes({ badgeIcon: value })}
            />
            <TextControl
              label="Right Panel Title"
              value={panelTitle}
              onChange={(value) => setAttributes({ panelTitle: value })}
            />
          </PanelBody>

          <PanelBody title="Slider Limits" initialOpen={false}>
            <RangeControl
              label="Project Min"
              value={projectMin}
              onChange={(value) => setAttributes({ projectMin: value || 0 })}
              min={0}
              max={50000}
              step={500}
            />
            <RangeControl
              label="Project Max"
              value={projectMax}
              onChange={(value) => setAttributes({ projectMax: value || 1000 })}
              min={5000}
              max={200000}
              step={1000}
            />
            <RangeControl
              label="Term Min Months"
              value={termMinMonths}
              onChange={(value) => setAttributes({ termMinMonths: value || 1 })}
              min={1}
              max={120}
              step={1}
            />
            <RangeControl
              label="Term Max Months"
              value={termMaxMonths}
              onChange={(value) =>
                setAttributes({ termMaxMonths: value || 12 })
              }
              min={12}
              max={240}
              step={1}
            />
            <RangeControl
              label="APR Max"
              value={aprMax}
              onChange={(value) => setAttributes({ aprMax: value || 1 })}
              min={1}
              max={40}
              step={0.5}
            />
          </PanelBody>
        </InspectorControls>

        <section className="payment-estimator-block">
          <div className="payment-estimator-inner">
            <p className="payment-estimator-badge">
              <i className={badgeIcon}></i>
              {badge}
            </p>

            <h2 className="payment-estimator-title">
              <RichText
                tagName="span"
                value={titleStart}
                onChange={(value) => setAttributes({ titleStart: value })}
                placeholder="Calculate Your"
              />{" "}
              <span className="payment-estimator-highlight">
                <RichText
                  tagName="span"
                  value={titleHighlight}
                  onChange={(value) => setAttributes({ titleHighlight: value })}
                  placeholder="Monthly Payment"
                />
              </span>
            </h2>

            <RichText
              tagName="p"
              className="payment-estimator-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Section description"
            />

            <div className="payment-estimator-shell">
              <div className="payment-estimator-controls">
                <h3>
                  <i className="fa-solid fa-dollar-sign"></i>
                  <RichText
                    tagName="span"
                    value={detailsTitle}
                    onChange={(value) => setAttributes({ detailsTitle: value })}
                    placeholder="Project Details"
                  />
                </h3>

                <div
                  className="payment-slider-row"
                  style={{ "--pct": `${costPct}%` }}
                >
                  <div className="payment-slider-head">
                    <span>Project Cost</span>
                    <strong>{currency(projectCost)}</strong>
                  </div>
                  <input
                    type="range"
                    min={projectMin}
                    max={projectMax}
                    value={projectCost}
                    onChange={(event) =>
                      setAttributes({
                        projectCost: Number(event.target.value),
                      })
                    }
                  />
                  <div className="payment-slider-limits">
                    <span>{currency(projectMin)}</span>
                    <span>{currency(projectMax)}</span>
                  </div>
                </div>

                <div
                  className="payment-slider-row"
                  style={{ "--pct": `${termPct}%` }}
                >
                  <div className="payment-slider-head">
                    <span>Loan Term</span>
                    <strong>{loanTermMonths} months</strong>
                  </div>
                  <input
                    type="range"
                    min={termMinMonths}
                    max={termMaxMonths}
                    value={loanTermMonths}
                    onChange={(event) =>
                      setAttributes({
                        loanTermMonths: Number(event.target.value),
                      })
                    }
                  />
                  <div className="payment-slider-limits">
                    <span>{Math.round(termMinMonths / 12)} year</span>
                    <span>{Math.round(termMaxMonths / 12)} years</span>
                  </div>
                </div>

                <div
                  className="payment-slider-row"
                  style={{ "--pct": `${aprPct}%` }}
                >
                  <div className="payment-slider-head">
                    <span>Estimated APR</span>
                    <strong>{Number(aprPercent).toFixed(2)}%</strong>
                  </div>
                  <input
                    type="range"
                    min={aprMin}
                    max={aprMax}
                    step="0.01"
                    value={aprPercent}
                    onChange={(event) =>
                      setAttributes({ aprPercent: Number(event.target.value) })
                    }
                  />
                  <div className="payment-slider-limits">
                    <span>{aprMin}%</span>
                    <span>{aprMax}%</span>
                  </div>
                </div>
              </div>

              <aside className="payment-estimator-summary">
                <p className="summary-eyebrow">{panelTitle}</p>
                <p className="summary-amount">{currency(payment)}</p>
                <p className="summary-period">per month</p>

                <div className="summary-breakdown">
                  <div>
                    <span>Project Cost</span>
                    <strong>{currency(projectCost)}</strong>
                  </div>
                  <div>
                    <span>Term Length</span>
                    <strong>{loanTermMonths} months</strong>
                  </div>
                  <div>
                    <span>Estimated APR</span>
                    <strong>{Number(aprPercent).toFixed(2)}%</strong>
                  </div>
                  <div>
                    <span>Total Interest</span>
                    <strong>{currency(totalInterest)}</strong>
                  </div>
                </div>

                <RichText
                  tagName="p"
                  className="summary-note"
                  value={estimateDisclaimer}
                  onChange={(value) =>
                    setAttributes({ estimateDisclaimer: value })
                  }
                  placeholder="Disclaimer"
                />
              </aside>
            </div>
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const {
      badge,
      badgeIcon,
      titleStart,
      titleHighlight,
      description,
      detailsTitle,
      projectCost,
      projectMin,
      projectMax,
      loanTermMonths,
      termMinMonths,
      termMaxMonths,
      aprPercent,
      aprMin,
      aprMax,
      panelTitle,
      estimateDisclaimer,
    } = attributes;

    const payment = calcPayment(projectCost, loanTermMonths, aprPercent);
    const totalInterest = payment * loanTermMonths - projectCost;

    const costPct =
      ((projectCost - projectMin) / Math.max(1, projectMax - projectMin)) * 100;
    const termPct =
      ((loanTermMonths - termMinMonths) /
        Math.max(1, termMaxMonths - termMinMonths)) *
      100;
    const aprPct = ((aprPercent - aprMin) / Math.max(1, aprMax - aprMin)) * 100;

    return (
      <section className="payment-estimator-block" data-payment-estimator="1">
        <div className="payment-estimator-inner">
          <p className="payment-estimator-badge">
            <i className={badgeIcon}></i>
            {badge}
          </p>

          <h2 className="payment-estimator-title">
            <RichText.Content value={titleStart} />{" "}
            <span className="payment-estimator-highlight">
              <RichText.Content value={titleHighlight} />
            </span>
          </h2>

          <RichText.Content
            tagName="p"
            className="payment-estimator-description"
            value={description}
          />

          <div className="payment-estimator-shell">
            <div className="payment-estimator-controls">
              <h3>
                <i className="fa-solid fa-dollar-sign"></i>
                <RichText.Content value={detailsTitle} />
              </h3>

              <div
                className="payment-slider-row"
                style={{ "--pct": `${costPct}%` }}
              >
                <div className="payment-slider-head">
                  <span>Project Cost</span>
                  <strong className="js-project-cost-value">
                    {currency(projectCost)}
                  </strong>
                </div>
                <input
                  type="range"
                  className="js-project-cost"
                  min={projectMin}
                  max={projectMax}
                  value={projectCost}
                />
                <div className="payment-slider-limits">
                  <span>{currency(projectMin)}</span>
                  <span>{currency(projectMax)}</span>
                </div>
              </div>

              <div
                className="payment-slider-row"
                style={{ "--pct": `${termPct}%` }}
              >
                <div className="payment-slider-head">
                  <span>Loan Term</span>
                  <strong className="js-term-value">
                    {loanTermMonths} months
                  </strong>
                </div>
                <input
                  type="range"
                  className="js-loan-term"
                  min={termMinMonths}
                  max={termMaxMonths}
                  value={loanTermMonths}
                />
                <div className="payment-slider-limits">
                  <span>{Math.round(termMinMonths / 12)} year</span>
                  <span>{Math.round(termMaxMonths / 12)} years</span>
                </div>
              </div>

              <div
                className="payment-slider-row"
                style={{ "--pct": `${aprPct}%` }}
              >
                <div className="payment-slider-head">
                  <span>Estimated APR</span>
                  <strong className="js-apr-value">
                    {Number(aprPercent).toFixed(2)}%
                  </strong>
                </div>
                <input
                  type="range"
                  className="js-apr"
                  min={aprMin}
                  max={aprMax}
                  step="0.01"
                  value={aprPercent}
                />
                <div className="payment-slider-limits">
                  <span>{aprMin}%</span>
                  <span>{aprMax}%</span>
                </div>
              </div>
            </div>

            <aside className="payment-estimator-summary">
              <p className="summary-eyebrow">{panelTitle}</p>
              <p className="summary-amount js-payment-value">
                {currency(payment)}
              </p>
              <p className="summary-period">per month</p>

              <div className="summary-breakdown">
                <div>
                  <span>Project Cost</span>
                  <strong className="js-breakdown-project-cost">
                    {currency(projectCost)}
                  </strong>
                </div>
                <div>
                  <span>Term Length</span>
                  <strong className="js-breakdown-term">
                    {loanTermMonths} months
                  </strong>
                </div>
                <div>
                  <span>Estimated APR</span>
                  <strong className="js-breakdown-apr">
                    {Number(aprPercent).toFixed(2)}%
                  </strong>
                </div>
                <div>
                  <span>Total Interest</span>
                  <strong className="js-breakdown-interest">
                    {currency(totalInterest)}
                  </strong>
                </div>
              </div>

              <RichText.Content
                tagName="p"
                className="summary-note"
                value={estimateDisclaimer}
              />
            </aside>
          </div>
        </div>
      </section>
    );
  },
});
