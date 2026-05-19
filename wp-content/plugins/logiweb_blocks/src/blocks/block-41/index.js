import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import metadata from "./block.json";
import "../../global-styles.scss";

const DEFAULT_FEATURES = [
  {
    iconClass: "fa-regular fa-shield",
    title: "No Credit Impact",
    description: "Soft pull only - won't affect your score",
  },
  {
    iconClass: "fa-regular fa-clock",
    title: "Instant Decision",
    description: "Get approved in minutes, not days",
  },
  {
    iconClass: "fa-solid fa-dollar-sign",
    title: "Flexible Terms",
    description: "Options from 12 to 180 months",
  },
  {
    iconClass: "fa-regular fa-circle-check",
    title: "Multiple Lenders",
    description: "We shop for the best rates",
  },
];

registerBlockType("logiweb/custom-block-41", {
  ...metadata,
  attributes: {
    badge: { type: "string", default: "QUICK & EASY APPLICATION" },
    badgeIconClass: { type: "string", default: "fa-regular fa-rectangle-list" },
    titleStart: { type: "string", default: "Apply for" },
    titleHighlight: { type: "string", default: "Financing" },
    description: {
      type: "string",
      default:
        "Get pre-qualified in minutes with no impact to your credit score. Start your home improvement project today.",
    },
    features: { type: "array", default: DEFAULT_FEATURES },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      badge,
      badgeIconClass,
      titleStart,
      titleHighlight,
      description,
      features = [],
    } = attributes;

    const updateFeature = (index, field, value) => {
      const next = [...features];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ features: next });
    };

    return (
      <div className="apply-financing-banner-editor">
        <InspectorControls>
          <PanelBody title="Header" initialOpen={true}>
            <TextControl
              label="Badge Icon Class"
              value={badgeIconClass}
              onChange={(value) => setAttributes({ badgeIconClass: value })}
            />
          </PanelBody>
          <PanelBody
            title={`Feature Items (${features.length})`}
            initialOpen={false}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "0.95rem",
                  borderBottom: "1px solid #dde3f0",
                  paddingBottom: "0.95rem",
                }}
              >
                <TextControl
                  label={`Item ${index + 1} Icon Class`}
                  value={feature.iconClass}
                  onChange={(value) => updateFeature(index, "iconClass", value)}
                />
              </div>
            ))}
          </PanelBody>
        </InspectorControls>

        <section className="apply-financing-banner-block">
          <div className="apply-financing-banner-hero">
            <p className="apply-financing-banner-badge">
              <i className={badgeIconClass}></i>
              <RichText
                tagName="span"
                value={badge}
                onChange={(value) => setAttributes({ badge: value })}
                placeholder="QUICK & EASY APPLICATION"
              />
            </p>

            <h2 className="apply-financing-banner-title">
              <RichText
                tagName="span"
                value={titleStart}
                onChange={(value) => setAttributes({ titleStart: value })}
                placeholder="Apply for"
              />{" "}
              <span className="apply-financing-banner-highlight">
                <RichText
                  tagName="span"
                  value={titleHighlight}
                  onChange={(value) => setAttributes({ titleHighlight: value })}
                  placeholder="Financing"
                />
              </span>
            </h2>

            <RichText
              tagName="p"
              className="apply-financing-banner-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Section description"
            />
          </div>

          <div className="apply-financing-banner-strip">
            <div className="apply-financing-banner-strip-inner">
              {features.map((feature, index) => (
                <article className="apply-financing-feature" key={index}>
                  <span className="apply-financing-feature-icon">
                    <i className={feature.iconClass}></i>
                  </span>
                  <div className="apply-financing-feature-content">
                    <RichText
                      tagName="h3"
                      value={feature.title}
                      onChange={(value) => updateFeature(index, "title", value)}
                      placeholder="Title"
                    />
                    <RichText
                      tagName="p"
                      value={feature.description}
                      onChange={(value) =>
                        updateFeature(index, "description", value)
                      }
                      placeholder="Description"
                    />
                  </div>
                </article>
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
      badgeIconClass,
      titleStart,
      titleHighlight,
      description,
      features = [],
    } = attributes;

    return (
      <section className="apply-financing-banner-block">
        <div className="apply-financing-banner-hero">
          <p className="apply-financing-banner-badge">
            <i className={badgeIconClass}></i>
            <RichText.Content tagName="span" value={badge} />
          </p>

          <h2 className="apply-financing-banner-title">
            <RichText.Content value={titleStart} />{" "}
            <span className="apply-financing-banner-highlight">
              <RichText.Content value={titleHighlight} />
            </span>
          </h2>

          <RichText.Content
            tagName="p"
            className="apply-financing-banner-description"
            value={description}
          />
        </div>

        <div className="apply-financing-banner-strip">
          <div className="apply-financing-banner-strip-inner">
            {features.map((feature, index) => (
              <article className="apply-financing-feature" key={index}>
                <span className="apply-financing-feature-icon">
                  <i className={feature.iconClass}></i>
                </span>
                <div className="apply-financing-feature-content">
                  <h3>
                    <RichText.Content value={feature.title} />
                  </h3>
                  <RichText.Content tagName="p" value={feature.description} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
