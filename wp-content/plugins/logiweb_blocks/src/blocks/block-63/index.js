import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import { useState } from "@wordpress/element";
import metadata from "./block.json";

const DEFAULT_STEPS = [
  {
    number: "01",
    title: "In-House Consultation",
    description:
      "Our own estimators visit your home. No third-party sales teams.",
  },
  {
    number: "02",
    title: "Direct Planning",
    description:
      "Our project managers plan every detail with our crews, not outside subs.",
  },
  {
    number: "03",
    title: "Employee Crews",
    description:
      "DNH Group employees execute the work. Background-checked, trained, uniformed.",
  },
  {
    number: "04",
    title: "Quality Inspection",
    description:
      "A senior lead inspects every project before we call it complete.",
  },
];

const DEFAULT_PARTNERS = [
  { name: "Sherwin-Williams", detail: "Premium Paints & Coatings" },
  { name: "Benjamin Moore", detail: "High-Performance Finishes" },
  { name: "GAF Roofing", detail: "America's #1 Roofing Brand" },
  { name: "Kohler", detail: "Plumbing & Fixtures" },
  { name: "Lutron", detail: "Smart Lighting & Controls" },
  { name: "CertainTeed", detail: "Siding & Insulation" },
];

registerBlockType("logiweb/custom-block-63", {
  ...metadata,
  attributes: {
    badgeText: { type: "string", default: "How We Work" },
    titleStart: { type: "string", default: "Craftsmanship &" },
    titleHighlight: { type: "string", default: "Process" },
    description: {
      type: "string",
      default:
        "We do not outsource. We do not cut corners. Every DNH Group project is handled by our own trained employees from the first phone call to the final inspection. That is how we control quality - and how we sleep at night.",
    },
    steps: { type: "array", default: DEFAULT_STEPS },
    partnersTitle: { type: "string", default: "Our Material Partners" },
    partnersDescription: {
      type: "string",
      default:
        "We partner with the best manufacturers in the industry so your home gets premium products with full warranty backing.",
    },
    partners: { type: "array", default: DEFAULT_PARTNERS },
    partnersNote: {
      type: "string",
      default: "All products carry manufacturer warranties",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      description,
      steps = DEFAULT_STEPS,
      partnersTitle,
      partnersDescription,
      partners = DEFAULT_PARTNERS,
      partnersNote,
    } = attributes;

    const [activeStep, setActiveStep] = useState(0);
    const [activePartner, setActivePartner] = useState(0);

    const updateStep = (index, field, value) => {
      const next = [...steps];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ steps: next });
    };

    const updatePartner = (index, field, value) => {
      const next = [...partners];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ partners: next });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Section Content" initialOpen={true}>
            <TextControl
              label="Badge Text"
              value={badgeText}
              onChange={(value) => setAttributes({ badgeText: value })}
            />
            <TextControl
              label="Title Start"
              value={titleStart}
              onChange={(value) => setAttributes({ titleStart: value })}
            />
            <TextControl
              label="Title Highlight"
              value={titleHighlight}
              onChange={(value) => setAttributes({ titleHighlight: value })}
            />
            <TextControl
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
            />
            <TextControl
              label="Partners Panel Title"
              value={partnersTitle}
              onChange={(value) => setAttributes({ partnersTitle: value })}
            />
            <TextControl
              label="Partners Panel Description"
              value={partnersDescription}
              onChange={(value) =>
                setAttributes({ partnersDescription: value })
              }
            />
            <TextControl
              label="Partners Footer Note"
              value={partnersNote}
              onChange={(value) => setAttributes({ partnersNote: value })}
            />
          </PanelBody>

          <PanelBody title={`Step ${activeStep + 1}`} initialOpen={false}>
            <TextControl
              label="Number"
              value={steps[activeStep]?.number || ""}
              onChange={(value) => updateStep(activeStep, "number", value)}
            />
            <TextControl
              label="Title"
              value={steps[activeStep]?.title || ""}
              onChange={(value) => updateStep(activeStep, "title", value)}
            />
            <TextControl
              label="Description"
              value={steps[activeStep]?.description || ""}
              onChange={(value) => updateStep(activeStep, "description", value)}
            />
          </PanelBody>

          <PanelBody title={`Partner ${activePartner + 1}`} initialOpen={false}>
            <TextControl
              label="Brand"
              value={partners[activePartner]?.name || ""}
              onChange={(value) => updatePartner(activePartner, "name", value)}
            />
            <TextControl
              label="Detail"
              value={partners[activePartner]?.detail || ""}
              onChange={(value) =>
                updatePartner(activePartner, "detail", value)
              }
            />
          </PanelBody>
        </InspectorControls>

        <section className="craft-process">
          <div className="craft-process-inner">
            <div className="craft-process-left">
              <p className="craft-process-badge">
                <i className="fa-solid fa-wrench" aria-hidden="true"></i>
                <span>{badgeText}</span>
              </p>

              <h2 className="craft-process-title">
                {titleStart} <span>{titleHighlight}</span>
              </h2>

              <RichText
                tagName="p"
                className="craft-process-description"
                value={description}
                onChange={(value) => setAttributes({ description: value })}
                placeholder="Section description"
              />

              <div className="craft-process-steps">
                {steps.map((step, index) => (
                  <article
                    key={`${step.title}-${index}`}
                    className={`craft-process-step ${activeStep === index ? "is-active" : ""}`}
                    onClick={() => setActiveStep(index)}
                  >
                    <span className="craft-process-step-number">
                      {step.number}
                    </span>
                    <div>
                      <RichText
                        tagName="h3"
                        className="craft-process-step-title"
                        value={step.title}
                        onChange={(value) => updateStep(index, "title", value)}
                        placeholder="Step title"
                      />
                      <RichText
                        tagName="p"
                        className="craft-process-step-description"
                        value={step.description}
                        onChange={(value) =>
                          updateStep(index, "description", value)
                        }
                        placeholder="Step description"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="craft-process-partners">
              <RichText
                tagName="h3"
                className="craft-process-partners-title"
                value={partnersTitle}
                onChange={(value) => setAttributes({ partnersTitle: value })}
                placeholder="Partners title"
              />

              <RichText
                tagName="p"
                className="craft-process-partners-description"
                value={partnersDescription}
                onChange={(value) =>
                  setAttributes({ partnersDescription: value })
                }
                placeholder="Partners description"
              />

              <div className="craft-process-partners-list">
                {partners.map((partner, index) => (
                  <div
                    className={`craft-process-partner-row ${activePartner === index ? "is-active" : ""}`}
                    key={`${partner.name}-${index}`}
                    onClick={() => setActivePartner(index)}
                  >
                    <RichText
                      tagName="span"
                      className="craft-process-partner-name"
                      value={partner.name}
                      onChange={(value) => updatePartner(index, "name", value)}
                      placeholder="Brand"
                    />
                    <RichText
                      tagName="span"
                      className="craft-process-partner-detail"
                      value={partner.detail}
                      onChange={(value) =>
                        updatePartner(index, "detail", value)
                      }
                      placeholder="Detail"
                    />
                  </div>
                ))}
              </div>

              <p className="craft-process-partners-note">
                <i className="fa-regular fa-file-lines" aria-hidden="true"></i>
                <span>{partnersNote}</span>
              </p>
            </aside>
          </div>
        </section>
      </>
    );
  },

  save: ({ attributes }) => {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      description,
      steps = DEFAULT_STEPS,
      partnersTitle,
      partnersDescription,
      partners = DEFAULT_PARTNERS,
      partnersNote,
    } = attributes;

    return (
      <section className="craft-process">
        <div className="craft-process-inner">
          <div className="craft-process-left">
            <p className="craft-process-badge">
              <i className="fa-solid fa-wrench" aria-hidden="true"></i>
              <span>{badgeText}</span>
            </p>

            <h2 className="craft-process-title">
              {titleStart} <span>{titleHighlight}</span>
            </h2>

            <p className="craft-process-description">{description}</p>

            <div className="craft-process-steps">
              {steps.map((step, index) => (
                <article
                  className="craft-process-step"
                  key={`${step.title}-${index}`}
                >
                  <span className="craft-process-step-number">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="craft-process-step-title">{step.title}</h3>
                    <p className="craft-process-step-description">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="craft-process-partners">
            <h3 className="craft-process-partners-title">{partnersTitle}</h3>
            <p className="craft-process-partners-description">
              {partnersDescription}
            </p>

            <div className="craft-process-partners-list">
              {partners.map((partner, index) => (
                <div
                  className="craft-process-partner-row"
                  key={`${partner.name}-${index}`}
                >
                  <span className="craft-process-partner-name">
                    {partner.name}
                  </span>
                  <span className="craft-process-partner-detail">
                    {partner.detail}
                  </span>
                </div>
              ))}
            </div>

            <p className="craft-process-partners-note">
              <i className="fa-regular fa-file-lines" aria-hidden="true"></i>
              <span>{partnersNote}</span>
            </p>
          </aside>
        </div>
      </section>
    );
  },
});
