import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_STEPS = [
  {
    title: "Free Consultation",
    description: "We assess your needs and provide expert recommendations",
  },
  {
    title: "Detailed Quote",
    description: "Transparent pricing with no hidden costs or surprises",
  },
  {
    title: "Expert Execution",
    description: "Skilled professionals deliver quality craftsmanship",
  },
  {
    title: "Final Inspection",
    description: "We ensure everything meets our high standards",
  },
];

registerBlockType("logiweb/custom-block-20", {
  title: "Transparent Process Timeline",
  icon: "list-view",
  category: "widgets",
  attributes: {
    title: { type: "string", default: "Our Transparent Process" },
    subtitle: {
      type: "string",
      default: "See exactly how we work, from first call to final inspection",
    },
    steps: { type: "array", default: DEFAULT_STEPS },
    ctaText: { type: "string", default: "Start Your Project Today" },
    ctaUrl: { type: "string", default: "#" },
  },

  edit: ({ attributes, setAttributes }) => {
    const { title, subtitle, steps, ctaText, ctaUrl } = attributes;

    const updateStep = (index, field, value) => {
      const next = [...steps];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ steps: next });
    };

    const addStep = () =>
      setAttributes({
        steps: [...steps, { title: "New Step", description: "Description" }],
      });

    const removeStep = (index) => {
      if (steps.length <= 1) return;
      setAttributes({ steps: steps.filter((_, i) => i !== index) });
    };

    return (
      <div className="process-timeline-block">
        <InspectorControls>
          <PanelBody title="Section Header" initialOpen={true}>
            <TextControl
              label="Title"
              value={title}
              onChange={(v) => setAttributes({ title: v })}
            />
            <TextControl
              label="Subtitle"
              value={subtitle}
              onChange={(v) => setAttributes({ subtitle: v })}
            />
          </PanelBody>
          <PanelBody title={`Steps (${steps.length})`} initialOpen={true}>
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <TextControl
                  label={`Step ${i + 1} - Title`}
                  value={step.title}
                  onChange={(v) => updateStep(i, "title", v)}
                />
                <TextControl
                  label={`Step ${i + 1} - Description`}
                  value={step.description}
                  onChange={(v) => updateStep(i, "description", v)}
                />
                <Button
                  isDestructive
                  isSmall
                  onClick={() => removeStep(i)}
                  disabled={steps.length <= 1}
                >
                  Remove Step
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addStep}>
              + Add Step
            </Button>
          </PanelBody>
          <PanelBody title="CTA Button" initialOpen={false}>
            <TextControl
              label="Button Text"
              value={ctaText}
              onChange={(v) => setAttributes({ ctaText: v })}
            />
            <TextControl
              label="Button URL"
              value={ctaUrl}
              onChange={(v) => setAttributes({ ctaUrl: v })}
            />
          </PanelBody>
        </InspectorControls>

        <section className="process-timeline">
          <div className="process-timeline-inner">
            <div className="process-timeline-header">
              <RichText
                tagName="h2"
                className="process-timeline-title"
                value={title}
                onChange={(v) => setAttributes({ title: v })}
                placeholder="Add title"
              />
              <RichText
                tagName="p"
                className="process-timeline-subtitle"
                value={subtitle}
                onChange={(v) => setAttributes({ subtitle: v })}
                placeholder="Add subtitle"
              />
            </div>

            <div className="process-timeline-steps">
              <div className="process-timeline-line"></div>
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`process-step${i === 0 ? " is-active" : ""}`}
                >
                  <div className="process-step-circle">
                    <span>{i + 1}</span>
                  </div>
                  <div className="process-step-content">
                    <h3 className="process-step-title">{step.title}</h3>
                    <p className="process-step-description">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {ctaText && (
              <div className="process-timeline-cta">
                <a href={ctaUrl} className="process-timeline-btn">
                  <i className="fa-solid fa-phone"></i>
                  {ctaText}
                  <i className="fa-solid fa-arrow-trend-up"></i>
                </a>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const { title, subtitle, steps, ctaText, ctaUrl } = attributes;

    return (
      <section
        className="process-timeline fade-in-on-scroll"
        data-block="process-timeline"
      >
        <div className="process-timeline-inner">
          <div className="process-timeline-header">
            <h2 className="process-timeline-title">{title}</h2>
            <p className="process-timeline-subtitle">{subtitle}</p>
          </div>

          <div className="process-timeline-steps" data-process-steps>
            <div className="process-timeline-line">
              <div className="process-timeline-line-fill"></div>
            </div>
            {steps.map((step, i) => (
              <div
                key={i}
                className={`process-step${i === 0 ? " is-active" : ""}`}
                data-step-index={i}
              >
                <div className="process-step-circle">
                  <span>{i + 1}</span>
                </div>
                <div className="process-step-content">
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {ctaText && (
            <div className="process-timeline-cta">
              <a href={ctaUrl} className="process-timeline-btn">
                <i className="fa-solid fa-phone"></i>
                {ctaText}
                <i className="fa-solid fa-arrow-trend-up"></i>
              </a>
            </div>
          )}
        </div>
      </section>
    );
  },
});
