import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import metadata from "./block.json";
import "../../global-styles.scss";

const DEFAULT_ITEMS = [
  {
    iconClass: "fa-solid fa-check",
    title: "No Hidden Fees",
    description:
      "What you see is what you pay. Our quotes include everything with no surprise charges.",
    iconBg: "#60c274",
    cardTint: "#f6fff8",
  },
  {
    iconClass: "fa-regular fa-clock",
    title: "Quick Approval",
    description:
      "Get approved in minutes, not days. Our process keeps your project moving.",
    iconBg: "#5797ea",
    cardTint: "#f6faff",
  },
  {
    iconClass: "fa-regular fa-shield",
    title: "Secure & Confidential",
    description:
      "Your information is protected with bank-level security and strict privacy standards.",
    iconBg: "#7a4be5",
    cardTint: "#faf7ff",
  },
  {
    iconClass: "fa-solid fa-arrow-trend-up",
    title: "Build Your Credit",
    description:
      "On-time payments can help strengthen your score while upgrading your home.",
    iconBg: "#dd8b1f",
    cardTint: "#fffaf1",
  },
];

registerBlockType("logiweb/custom-block-35", {
  ...metadata,
  attributes: {
    badge: { type: "string", default: "Why Choose DNH Financing" },
    badgeIcon: { type: "string", default: "fa-regular fa-circle-check" },
    titleStart: { type: "string", default: "Financing That Works" },
    titleHighlight: { type: "string", default: "For You" },
    description: {
      type: "string",
      default:
        "We have designed our financing options with your comfort in mind. No surprises, no stress - just simple, transparent solutions.",
    },
    items: { type: "array", default: DEFAULT_ITEMS },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      badge,
      badgeIcon,
      titleStart,
      titleHighlight,
      description,
      items = [],
    } = attributes;

    const updateItem = (index, field, value) => {
      const next = [...items];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ items: next });
    };

    return (
      <div className="financing-benefits-editor">
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
          <PanelBody title={`Cards (${items.length})`} initialOpen={false}>
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "0.95rem",
                  borderBottom: "1px solid #e0e0e0",
                  paddingBottom: "0.95rem",
                }}
              >
                <TextControl
                  label={`Card ${index + 1} Icon`}
                  value={item.iconClass}
                  onChange={(value) => updateItem(index, "iconClass", value)}
                />
                <TextControl
                  label="Icon Background"
                  value={item.iconBg}
                  onChange={(value) => updateItem(index, "iconBg", value)}
                />
                <TextControl
                  label="Card Tint"
                  value={item.cardTint}
                  onChange={(value) => updateItem(index, "cardTint", value)}
                />
              </div>
            ))}
          </PanelBody>
        </InspectorControls>

        <section className="financing-benefits-block fade-in-on-scroll">
          <div className="financing-benefits-inner">
            <p className="financing-benefits-badge">
              <i className={badgeIcon}></i>
              {badge}
            </p>
            <h2 className="financing-benefits-title">
              <RichText
                tagName="span"
                value={titleStart}
                onChange={(value) => setAttributes({ titleStart: value })}
                placeholder="Financing That Works"
              />{" "}
              <span className="financing-benefits-highlight">
                <RichText
                  tagName="span"
                  value={titleHighlight}
                  onChange={(value) => setAttributes({ titleHighlight: value })}
                  placeholder="For You"
                />
              </span>
            </h2>
            <RichText
              tagName="p"
              className="financing-benefits-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Section description"
            />

            <div className="financing-benefits-grid">
              {items.map((item, index) => (
                <article
                  className="financing-benefit-card"
                  key={index}
                  style={{ backgroundColor: item.cardTint || "#ffffff" }}
                >
                  <span
                    className="financing-benefit-icon"
                    style={{ backgroundColor: item.iconBg || "#5f77ea" }}
                  >
                    <i className={item.iconClass}></i>
                  </span>
                  <RichText
                    tagName="h3"
                    className="financing-benefit-title"
                    value={item.title}
                    onChange={(value) => updateItem(index, "title", value)}
                    placeholder="Card title"
                  />
                  <RichText
                    tagName="p"
                    className="financing-benefit-description"
                    value={item.description}
                    onChange={(value) =>
                      updateItem(index, "description", value)
                    }
                    placeholder="Card description"
                  />
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
      badgeIcon,
      titleStart,
      titleHighlight,
      description,
      items = [],
    } = attributes;

    return (
      <section className="financing-benefits-block">
        <div className="financing-benefits-inner">
          <p className="financing-benefits-badge">
            <i className={badgeIcon}></i>
            {badge}
          </p>
          <h2 className="financing-benefits-title">
            <RichText.Content value={titleStart} />{" "}
            <span className="financing-benefits-highlight">
              <RichText.Content value={titleHighlight} />
            </span>
          </h2>
          <RichText.Content
            tagName="p"
            className="financing-benefits-description"
            value={description}
          />

          <div className="financing-benefits-grid">
            {items.map((item, index) => (
              <article
                className="financing-benefit-card"
                key={index}
                style={{ backgroundColor: item.cardTint || "#ffffff" }}
              >
                <span
                  className="financing-benefit-icon"
                  style={{ backgroundColor: item.iconBg || "#5f77ea" }}
                >
                  <i className={item.iconClass}></i>
                </span>
                <h3 className="financing-benefit-title">
                  <RichText.Content value={item.title} />
                </h3>
                <RichText.Content
                  tagName="p"
                  className="financing-benefit-description"
                  value={item.description}
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
