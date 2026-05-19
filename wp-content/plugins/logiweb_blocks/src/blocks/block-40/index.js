import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import metadata from "./block.json";
import "../../global-styles.scss";

const DEFAULT_POINTS = [
  {
    iconClass: "fa-regular fa-circle-check",
    label: "No credit impact",
  },
  {
    iconClass: "fa-regular fa-clock",
    label: "Instant decision",
  },
  {
    iconClass: "fa-regular fa-shield",
    label: "Secure & confidential",
  },
];

registerBlockType("logiweb/custom-block-40", {
  ...metadata,
  attributes: {
    iconClass: { type: "string", default: "fa-regular fa-circle-check" },
    title: { type: "string", default: "Ready to Get Started?" },
    description: {
      type: "string",
      default:
        "Apply now with no impact to your credit score. Get pre-qualified in minutes and start planning your dream home improvement project.",
    },
    primaryText: { type: "string", default: "Apply Now - It's Free" },
    primaryUrl: { type: "string", default: "#" },
    secondaryText: { type: "string", default: "Check Eligibility" },
    secondaryUrl: { type: "string", default: "#" },
    points: { type: "array", default: DEFAULT_POINTS },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      iconClass,
      title,
      description,
      primaryText,
      primaryUrl,
      secondaryText,
      secondaryUrl,
      points = [],
    } = attributes;

    const hasPrimaryText = Boolean((primaryText || "").trim());
    const hasSecondaryText = Boolean((secondaryText || "").trim());

    const updatePoint = (index, field, value) => {
      const next = [...points];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ points: next });
    };

    return (
      <div className="ready-start-editor">
        <InspectorControls>
          <PanelBody title="Main Content" initialOpen={true}>
            <TextControl
              label="Top Icon Class"
              value={iconClass}
              onChange={(value) => setAttributes({ iconClass: value })}
            />
            <TextControl
              label="Primary Button Text"
              value={primaryText}
              onChange={(value) => setAttributes({ primaryText: value })}
            />
            <TextControl
              label="Primary Button URL"
              value={primaryUrl}
              onChange={(value) => setAttributes({ primaryUrl: value })}
            />
            <TextControl
              label="Secondary Button Text"
              value={secondaryText}
              onChange={(value) => setAttributes({ secondaryText: value })}
            />
            <TextControl
              label="Secondary Button URL"
              value={secondaryUrl}
              onChange={(value) => setAttributes({ secondaryUrl: value })}
            />
          </PanelBody>
          <PanelBody
            title={`Trust Points (${points.length})`}
            initialOpen={false}
          >
            {points.map((point, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "0.95rem",
                  borderBottom: "1px solid #dfe5eb",
                  paddingBottom: "0.95rem",
                }}
              >
                <TextControl
                  label={`Point ${index + 1} Icon Class`}
                  value={point.iconClass}
                  onChange={(value) => updatePoint(index, "iconClass", value)}
                />
              </div>
            ))}
          </PanelBody>
        </InspectorControls>

        <section className="ready-start-block">
          <div className="ready-start-inner">
            <span className="ready-start-top-icon">
              <i className={iconClass}></i>
            </span>

            <RichText
              tagName="h2"
              className="ready-start-title"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
              placeholder="Ready to Get Started?"
            />

            <RichText
              tagName="p"
              className="ready-start-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="CTA description"
            />

            {(hasPrimaryText || hasSecondaryText) && (
              <div className="ready-start-actions">
                {hasPrimaryText && (
                  <a
                    className="ready-start-btn is-primary"
                    href={primaryUrl || "#"}
                  >
                    <span>{primaryText}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                )}
                {hasSecondaryText && (
                  <a
                    className="ready-start-btn is-secondary"
                    href={secondaryUrl || "#"}
                  >
                    <span>{secondaryText}</span>
                  </a>
                )}
              </div>
            )}

            <div className="ready-start-points">
              {points.map((point, index) => (
                <span className="ready-start-point" key={index}>
                  <i className={point.iconClass}></i>
                  <RichText
                    tagName="span"
                    value={point.label}
                    onChange={(value) => updatePoint(index, "label", value)}
                    placeholder="Point label"
                  />
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const {
      iconClass,
      title,
      description,
      primaryText,
      primaryUrl,
      secondaryText,
      secondaryUrl,
      points = [],
    } = attributes;

    const hasPrimaryText = Boolean((primaryText || "").trim());
    const hasSecondaryText = Boolean((secondaryText || "").trim());

    return (
      <section className="ready-start-block">
        <div className="ready-start-inner">
          <span className="ready-start-top-icon">
            <i className={iconClass}></i>
          </span>

          <h2 className="ready-start-title">
            <RichText.Content value={title} />
          </h2>

          <RichText.Content
            tagName="p"
            className="ready-start-description"
            value={description}
          />

          {(hasPrimaryText || hasSecondaryText) && (
            <div className="ready-start-actions">
              {hasPrimaryText && (
                <a
                  className="ready-start-btn is-primary"
                  href={primaryUrl || "#"}
                >
                  <span>{primaryText}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}
              {hasSecondaryText && (
                <a
                  className="ready-start-btn is-secondary"
                  href={secondaryUrl || "#"}
                >
                  <span>{secondaryText}</span>
                </a>
              )}
            </div>
          )}

          <div className="ready-start-points">
            {points.map((point, index) => (
              <span className="ready-start-point" key={index}>
                <i className={point.iconClass}></i>
                <RichText.Content tagName="span" value={point.label} />
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
