import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import metadata from "./block.json";
import "../../global-styles.scss";

const DEFAULT_OPTIONS = [
  {
    dotColor: "#8f63ea",
    topTitle: "Building Credit",
    topSubtitle: "Building Credit (<580)",
    mainTitle: "Options Available",
    details: "Specialized programs, In-house financing, Co-signer options",
    tags: "Service Finance,In-House Options",
    topTint: "#f6f1ff",
  },
  {
    dotColor: "#de8c2b",
    topTitle: "Fair Credit",
    topSubtitle: "Fair (580-669)",
    mainTitle: "As low as 9.99% APR",
    details:
      "Multiple options available, Higher approval rates, Flexible requirements",
    tags: "EnerBank,Service Finance,Synchrony",
    topTint: "#fff6ea",
  },
  {
    dotColor: "#5c8be8",
    topTitle: "Good Credit",
    topSubtitle: "Good (670-749)",
    mainTitle: "As low as 6.99% APR",
    details: "Competitive rates, Flexible terms, Quick approval",
    tags: "GreenSky,Synchrony,EnerBank",
    topTint: "#eff4ff",
  },
  {
    dotColor: "#69bf6a",
    topTitle: "Excellent Credit",
    topSubtitle: "Excellent (750+)",
    mainTitle: "As low as 0% APR",
    details:
      "0% intro APR for 12-18 months, Low fixed rates, Highest approval limits",
    tags: "GreenSky,Wells Fargo,Synchrony",
    topTint: "#effbf0",
  },
];

const toTags = (value) =>
  String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

registerBlockType("logiweb/custom-block-37", {
  ...metadata,
  attributes: {
    badge: { type: "string", default: "OPTIONS FOR EVERYONE" },
    title: { type: "string", default: "Financing For Every Credit Score" },
    description: {
      type: "string",
      default:
        "We work with multiple lenders to find the best option for you. Click on your credit range to see what is available.",
    },
    options: { type: "array", default: DEFAULT_OPTIONS },
  },

  edit: ({ attributes, setAttributes }) => {
    const { badge, title, description, options = [] } = attributes;

    const updateOption = (index, field, value) => {
      const next = [...options];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ options: next });
    };

    return (
      <div className="credit-options-editor">
        <InspectorControls>
          <PanelBody title="Header" initialOpen={true}>
            <TextControl
              label="Badge"
              value={badge}
              onChange={(value) => setAttributes({ badge: value })}
            />
          </PanelBody>
          <PanelBody title={`Columns (${options.length})`} initialOpen={false}>
            {options.map((option, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "0.95rem",
                  borderBottom: "1px solid #e0e0e0",
                  paddingBottom: "0.95rem",
                }}
              >
                <TextControl
                  label={`Column ${index + 1} Dot Color`}
                  value={option.dotColor}
                  onChange={(value) => updateOption(index, "dotColor", value)}
                />
                <TextControl
                  label="Top Tint"
                  value={option.topTint}
                  onChange={(value) => updateOption(index, "topTint", value)}
                />
                <TextControl
                  label="Tags (comma separated)"
                  value={option.tags}
                  onChange={(value) => updateOption(index, "tags", value)}
                />
              </div>
            ))}
          </PanelBody>
        </InspectorControls>

        <section className="credit-options-block">
          <div className="credit-options-inner">
            <p className="credit-options-badge">{badge}</p>
            <RichText
              tagName="h2"
              className="credit-options-title"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
              placeholder="Financing For Every Credit Score"
            />
            <RichText
              tagName="p"
              className="credit-options-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Section description"
            />

            <div className="credit-options-grid">
              {options.map((option, index) => (
                <article className="credit-option-card" key={index}>
                  <div
                    className="credit-option-top"
                    style={{ backgroundColor: option.topTint || "#f5f7ff" }}
                  >
                    <span
                      className="credit-option-dot"
                      style={{ backgroundColor: option.dotColor || "#6a80e8" }}
                    ></span>
                    <RichText
                      tagName="h3"
                      className="credit-option-top-title"
                      value={option.topTitle}
                      onChange={(value) =>
                        updateOption(index, "topTitle", value)
                      }
                      placeholder="Top title"
                    />
                    <RichText
                      tagName="p"
                      className="credit-option-top-subtitle"
                      value={option.topSubtitle}
                      onChange={(value) =>
                        updateOption(index, "topSubtitle", value)
                      }
                      placeholder="Score range"
                    />
                  </div>

                  <div className="credit-option-body">
                    <RichText
                      tagName="h4"
                      className="credit-option-main-title"
                      value={option.mainTitle}
                      onChange={(value) =>
                        updateOption(index, "mainTitle", value)
                      }
                      placeholder="Main offer"
                    />
                    <RichText
                      tagName="p"
                      className="credit-option-details"
                      value={option.details}
                      onChange={(value) =>
                        updateOption(index, "details", value)
                      }
                      placeholder="Details"
                    />
                    <div className="credit-option-tags">
                      {toTags(option.tags).map((tag, tagIndex) => (
                        <span key={tagIndex}>{tag}</span>
                      ))}
                    </div>
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
    const { badge, title, description, options = [] } = attributes;

    return (
      <section className="credit-options-block">
        <div className="credit-options-inner">
          <p className="credit-options-badge">{badge}</p>
          <h2 className="credit-options-title">
            <RichText.Content value={title} />
          </h2>
          <RichText.Content
            tagName="p"
            className="credit-options-description"
            value={description}
          />

          <div className="credit-options-grid">
            {options.map((option, index) => (
              <article className="credit-option-card" key={index}>
                <div
                  className="credit-option-top"
                  style={{ backgroundColor: option.topTint || "#f5f7ff" }}
                >
                  <span
                    className="credit-option-dot"
                    style={{ backgroundColor: option.dotColor || "#6a80e8" }}
                  ></span>
                  <h3 className="credit-option-top-title">
                    <RichText.Content value={option.topTitle} />
                  </h3>
                  <p className="credit-option-top-subtitle">
                    <RichText.Content value={option.topSubtitle} />
                  </p>
                </div>

                <div className="credit-option-body">
                  <h4 className="credit-option-main-title">
                    <RichText.Content value={option.mainTitle} />
                  </h4>
                  <RichText.Content
                    tagName="p"
                    className="credit-option-details"
                    value={option.details}
                  />
                  <div className="credit-option-tags">
                    {toTags(option.tags).map((tag, tagIndex) => (
                      <span key={tagIndex}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
