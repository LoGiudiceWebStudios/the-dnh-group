import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import metadata from "./block.json";
import "../../global-styles.scss";

const DEFAULT_STEPS = [
  {
    number: "1",
    title: "Apply Online",
    description: "Complete a quick application in minutes.",
    accent: "#3f64ea",
  },
  {
    number: "2",
    title: "Get Approved",
    description: "Receive instant decision with multiple options.",
    accent: "#67addf",
  },
  {
    number: "3",
    title: "Choose Plan",
    description: "Pick terms that match your budget and timeline.",
    accent: "#65b9a2",
  },
  {
    number: "4",
    title: "Start Project",
    description: "Once approved, work begins right away.",
    accent: "#76c76d",
  },
];

registerBlockType("logiweb/custom-block-36", {
  ...metadata,
  attributes: {
    badge: { type: "string", default: "Simple 4-Step Process" },
    badgeIcon: { type: "string", default: "fa-regular fa-clock" },
    titleStart: { type: "string", default: "How Financing" },
    titleHighlight: { type: "string", default: "Works" },
    description: {
      type: "string",
      default:
        "Getting started is easy. Our streamlined process lets you focus on your project, not paperwork.",
    },
    steps: { type: "array", default: DEFAULT_STEPS },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      badge,
      badgeIcon,
      titleStart,
      titleHighlight,
      description,
      steps = [],
    } = attributes;

    const updateStep = (index, field, value) => {
      const next = [...steps];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ steps: next });
    };

    return (
      <div className="financing-steps-editor">
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
          </PanelBody>
          <PanelBody title={`Steps (${steps.length})`} initialOpen={false}>
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "0.95rem",
                  borderBottom: "1px solid #e0e0e0",
                  paddingBottom: "0.95rem",
                }}
              >
                <TextControl
                  label={`Step ${index + 1} Number`}
                  value={step.number}
                  onChange={(value) => updateStep(index, "number", value)}
                />
                <TextControl
                  label="Accent Color"
                  value={step.accent}
                  onChange={(value) => updateStep(index, "accent", value)}
                />
              </div>
            ))}
          </PanelBody>
        </InspectorControls>

        <section className="financing-steps-block">
          <div className="financing-steps-inner">
            <p className="financing-steps-badge">
              <i className={badgeIcon}></i>
              {badge}
            </p>
            <h2 className="financing-steps-title">
              <RichText
                tagName="span"
                value={titleStart}
                onChange={(value) => setAttributes({ titleStart: value })}
                placeholder="How Financing"
              />{" "}
              <span className="financing-steps-highlight">
                <RichText
                  tagName="span"
                  value={titleHighlight}
                  onChange={(value) => setAttributes({ titleHighlight: value })}
                  placeholder="Works"
                />
              </span>
            </h2>
            <RichText
              tagName="p"
              className="financing-steps-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Process intro"
            />

            <div className="financing-steps-grid">
              {steps.map((step, index) => (
                <div className="financing-step-wrap" key={index}>
                  <article className="financing-step-card">
                    <span
                      className="financing-step-number"
                      style={{ backgroundColor: step.accent || "#5f77ea" }}
                    >
                      {step.number}
                    </span>
                    <RichText
                      tagName="h3"
                      className="financing-step-title"
                      value={step.title}
                      onChange={(value) => updateStep(index, "title", value)}
                      placeholder="Step title"
                    />
                    <RichText
                      tagName="p"
                      className="financing-step-description"
                      value={step.description}
                      onChange={(value) =>
                        updateStep(index, "description", value)
                      }
                      placeholder="Step description"
                    />
                  </article>
                  {index < steps.length - 1 ? (
                    <span
                      className="financing-step-arrow"
                      style={{ backgroundColor: step.accent || "#5f77ea" }}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  ) : null}
                </div>
              ))}
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
      steps = [],
    } = attributes;

    return (
      <section className="financing-steps-block">
        <div className="financing-steps-inner">
          <p className="financing-steps-badge">
            <i className={badgeIcon}></i>
            {badge}
          </p>
          <h2 className="financing-steps-title">
            <RichText.Content value={titleStart} />{" "}
            <span className="financing-steps-highlight">
              <RichText.Content value={titleHighlight} />
            </span>
          </h2>
          <RichText.Content
            tagName="p"
            className="financing-steps-description"
            value={description}
          />

          <div className="financing-steps-grid">
            {steps.map((step, index) => (
              <div className="financing-step-wrap" key={index}>
                <article className="financing-step-card">
                  <span
                    className="financing-step-number"
                    style={{ backgroundColor: step.accent || "#5f77ea" }}
                  >
                    {step.number}
                  </span>
                  <h3 className="financing-step-title">
                    <RichText.Content value={step.title} />
                  </h3>
                  <RichText.Content
                    tagName="p"
                    className="financing-step-description"
                    value={step.description}
                  />
                </article>
                {index < steps.length - 1 ? (
                  <span
                    className="financing-step-arrow"
                    style={{ backgroundColor: step.accent || "#5f77ea" }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
