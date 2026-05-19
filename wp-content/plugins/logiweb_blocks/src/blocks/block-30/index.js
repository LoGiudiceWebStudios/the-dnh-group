import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_ITEMS = [
  {
    icon: "fa-regular fa-heart",
    title: "Health Insurance",
    description: "Medical, dental, and vision coverage for you and your family",
    iconBg: "#fdf1f4",
    iconColor: "#cb5d7b",
  },
  {
    icon: "fa-solid fa-dollar-sign",
    title: "Competitive Pay",
    description: "Above-market wages with regular performance reviews",
    iconBg: "#ecfbf4",
    iconColor: "#4bbf7a",
  },
  {
    icon: "fa-solid fa-arrow-trend-up",
    title: "Career Growth",
    description: "Clear advancement paths and professional development",
    iconBg: "#eef3ff",
    iconColor: "#6f8ee7",
  },
  {
    icon: "fa-regular fa-clock",
    title: "Work-Life Balance",
    description: "Paid time off, holidays, and flexible scheduling options",
    iconBg: "#f4f0ff",
    iconColor: "#8f7be2",
  },
  {
    icon: "fa-regular fa-bookmark",
    title: "401k Matching",
    description: "Company-matched retirement savings plan",
    iconBg: "#fff8e7",
    iconColor: "#d2b254",
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Training & Development",
    description: "Ongoing training and certification programs",
    iconBg: "#eaf9fd",
    iconColor: "#62b6cc",
  },
];

registerBlockType("logiweb/custom-block-30", {
  ...metadata,
  attributes: {
    badge: {
      type: "string",
      default: "WHY DNH GROUP",
    },
    titleStart: {
      type: "string",
      default: "More Than Just a",
    },
    titleHighlight: {
      type: "string",
      default: "Job",
    },
    description: {
      type: "string",
      default:
        "We believe in taking care of our team. Here is what you can expect when you join the DNH Group family.",
    },
    items: {
      type: "array",
      default: DEFAULT_ITEMS,
    },
    ctaText: {
      type: "string",
      default: "Ready to join a company that invests in you?",
    },
    ctaButtonText: {
      type: "string",
      default: "View Open Positions",
    },
    ctaButtonUrl: {
      type: "string",
      default: "#",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      badge,
      titleStart,
      titleHighlight,
      description,
      items,
      ctaText,
      ctaButtonText,
      ctaButtonUrl,
    } = attributes;

    const updateItem = (index, field, value) => {
      const next = [...items];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ items: next });
    };

    const addItem = () => {
      setAttributes({
        items: [
          ...items,
          {
            icon: "fa-regular fa-star",
            title: "New Benefit",
            description: "Benefit description",
            iconBg: "#eef3ff",
            iconColor: "#6f8ee7",
          },
        ],
      });
    };

    const removeItem = (index) => {
      if (items.length <= 1) {
        return;
      }
      setAttributes({ items: items.filter((_, i) => i !== index) });
    };

    return (
      <div className="career-benefits-editor">
        <InspectorControls>
          <PanelBody title="Header" initialOpen={true}>
            <TextControl
              label="Badge"
              value={badge}
              onChange={(value) => setAttributes({ badge: value })}
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
          </PanelBody>

          <PanelBody title={`Benefits (${items.length})`} initialOpen={false}>
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <TextControl
                  label="Icon class"
                  value={item.icon}
                  onChange={(value) => updateItem(index, "icon", value)}
                />
                <TextControl
                  label="Title"
                  value={item.title}
                  onChange={(value) => updateItem(index, "title", value)}
                />
                <TextControl
                  label="Description"
                  value={item.description}
                  onChange={(value) => updateItem(index, "description", value)}
                />
                <TextControl
                  label="Icon Background"
                  value={item.iconBg}
                  onChange={(value) => updateItem(index, "iconBg", value)}
                />
                <TextControl
                  label="Icon Color"
                  value={item.iconColor}
                  onChange={(value) => updateItem(index, "iconColor", value)}
                />
                <Button
                  isSecondary
                  isDestructive
                  isSmall
                  disabled={items.length <= 1}
                  onClick={() => removeItem(index)}
                >
                  Remove benefit
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addItem}>
              Add benefit
            </Button>
          </PanelBody>

          <PanelBody title="Bottom CTA" initialOpen={false}>
            <TextControl
              label="CTA Text"
              value={ctaText}
              onChange={(value) => setAttributes({ ctaText: value })}
            />
            <TextControl
              label="CTA Button Text"
              value={ctaButtonText}
              onChange={(value) => setAttributes({ ctaButtonText: value })}
            />
            <TextControl
              label="CTA Button URL"
              value={ctaButtonUrl}
              onChange={(value) => setAttributes({ ctaButtonUrl: value })}
            />
          </PanelBody>
        </InspectorControls>

        <section className="career-benefits-block">
          <div className="career-benefits-inner">
            <div className="career-benefits-header">
              <p className="career-benefits-badge">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
                {badge}
              </p>
              <h2 className="career-benefits-title">
                <RichText
                  tagName="span"
                  value={titleStart}
                  onChange={(value) => setAttributes({ titleStart: value })}
                  placeholder="More Than Just a"
                />{" "}
                <span className="career-benefits-title-highlight">
                  <RichText
                    tagName="span"
                    value={titleHighlight}
                    onChange={(value) =>
                      setAttributes({ titleHighlight: value })
                    }
                    placeholder="Job"
                  />
                </span>
              </h2>
              <RichText
                tagName="p"
                className="career-benefits-description"
                value={description}
                onChange={(value) => setAttributes({ description: value })}
                placeholder="Add description"
              />
            </div>

            <div className="career-benefits-grid">
              {items.map((item, index) => (
                <article className="career-benefit-card" key={index}>
                  <span
                    className="career-benefit-icon"
                    style={{
                      backgroundColor: item.iconBg,
                      color: item.iconColor,
                    }}
                  >
                    <i className={item.icon}></i>
                  </span>
                  <h3 className="career-benefit-title">{item.title}</h3>
                  <p className="career-benefit-description">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="career-benefits-cta">
              <p className="career-benefits-cta-text">{ctaText}</p>
              <a
                href={ctaButtonUrl || "#"}
                className="career-benefits-cta-button"
              >
                {ctaButtonText}
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const {
      badge,
      titleStart,
      titleHighlight,
      description,
      items,
      ctaText,
      ctaButtonText,
      ctaButtonUrl,
    } = attributes;

    return (
      <section
        className="career-benefits-block fade-in-on-scroll"
        data-block="career-benefits"
      >
        <div className="career-benefits-inner">
          <div className="career-benefits-header">
            <p className="career-benefits-badge">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
              {badge}
            </p>
            <h2 className="career-benefits-title">
              {titleStart}{" "}
              <span className="career-benefits-title-highlight">
                {titleHighlight}
              </span>
            </h2>
            <p className="career-benefits-description">{description}</p>
          </div>

          <div className="career-benefits-grid">
            {items.map((item, index) => (
              <article className="career-benefit-card" key={index}>
                <span
                  className="career-benefit-icon"
                  style={{
                    backgroundColor: item.iconBg,
                    color: item.iconColor,
                  }}
                >
                  <i className={item.icon}></i>
                </span>
                <h3 className="career-benefit-title">{item.title}</h3>
                <p className="career-benefit-description">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="career-benefits-cta">
            <p className="career-benefits-cta-text">{ctaText}</p>
            <a
              href={ctaButtonUrl || "#"}
              className="career-benefits-cta-button"
            >
              {ctaButtonText}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    );
  },
});
