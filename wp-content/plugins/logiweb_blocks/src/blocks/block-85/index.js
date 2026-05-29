import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_ITEMS = [
  {
    icon: "fa-solid fa-droplet",
    title:
      "Soft Washing vs. Pressure Blasting: Why High-Pressure Water is Ruining Modern Siding Materials",
    description:
      "High-pressure water streams can destroy vinyl, composite, and cedar siding. Learn why soft washing is the only safe method for premium exterior materials.",
    linkText: "Read More",
    linkUrl: "#",
  },
  {
    icon: "fa-regular fa-shield",
    title:
      "The Science of Concrete Sealing: How to Protect Aggregate Drives from Midwestern Winters",
    description:
      "Freeze-thaw cycles destroy unprotected concrete. Discover how premium sealants create a barrier against moisture, salt, and temperature extremes.",
    linkText: "Read More",
    linkUrl: "#",
  },
  {
    icon: "fa-regular fa-book-open",
    title:
      "Pre-Paint Checklist: Why Intensive Surface Prep Dictates 90% of Your Exterior Paint Lifespan",
    description:
      "The secret to a 10-year paint job is not the paint - it is the prep. Our complete checklist ensures your coating bonds perfectly and lasts.",
    linkText: "Read More",
    linkUrl: "#",
  },
];

registerBlockType(metadata.name, {
  ...metadata,
  attributes: {
    badge: { type: "string", default: "Expert Resources" },
    titleStart: { type: "string", default: "Technical" },
    titleHighlight: { type: "string", default: "Insights" },
    description: {
      type: "string",
      default: "Deep-dive guides from our restoration specialists.",
    },
    cards: { type: "array", default: DEFAULT_ITEMS },
  },

  edit({ attributes, setAttributes }) {
    const { badge, titleStart, titleHighlight, description, cards } =
      attributes;
    const safeCards =
      Array.isArray(cards) && cards.length === 3 ? cards : DEFAULT_ITEMS;
    const blockProps = useBlockProps({ className: "technical-insights-block" });

    const updateCard = (index, key, value) => {
      const next = safeCards.map((card, i) =>
        i === index ? { ...card, [key]: value } : card,
      );
      setAttributes({ cards: next });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Header" initialOpen={true}>
            <TextControl
              label="Badge"
              value={badge}
              onChange={(value) => setAttributes({ badge: value })}
            />
            <TextControl
              label="Title start"
              value={titleStart}
              onChange={(value) => setAttributes({ titleStart: value })}
            />
            <TextControl
              label="Title highlight"
              value={titleHighlight}
              onChange={(value) => setAttributes({ titleHighlight: value })}
            />
            <TextareaControl
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
            />
          </PanelBody>

          {safeCards.map((card, index) => (
            <PanelBody
              key={index}
              title={`Card ${index + 1}`}
              initialOpen={index === 0}
            >
              <TextControl
                label="Icon class (Font Awesome)"
                value={card.icon || ""}
                onChange={(value) => updateCard(index, "icon", value)}
              />
              <TextareaControl
                label="Title"
                value={card.title || ""}
                onChange={(value) => updateCard(index, "title", value)}
              />
              <TextareaControl
                label="Description"
                value={card.description || ""}
                onChange={(value) => updateCard(index, "description", value)}
              />
              <TextControl
                label="Link text"
                value={card.linkText || ""}
                onChange={(value) => updateCard(index, "linkText", value)}
              />
              <TextControl
                label="Link URL"
                value={card.linkUrl || ""}
                onChange={(value) => updateCard(index, "linkUrl", value)}
              />
            </PanelBody>
          ))}
        </InspectorControls>

        <section {...blockProps}>
          <div className="technical-insights-inner">
            <p className="technical-insights-badge">{badge}</p>
            <h2 className="technical-insights-title">
              {titleStart} <span>{titleHighlight}</span>
            </h2>
            <p className="technical-insights-description">{description}</p>

            <div className="technical-insights-grid">
              {safeCards.map((card, index) => (
                <article key={index} className="technical-insights-card">
                  <div className="technical-insights-card-icon">
                    <i
                      className={card.icon || "fa-solid fa-circle"}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="technical-insights-card-title">
                    {card.title}
                  </h3>
                  <p className="technical-insights-card-description">
                    {card.description}
                  </p>
                  <a
                    href={card.linkUrl || "#"}
                    className="technical-insights-card-link"
                  >
                    {card.linkText || "Read More"}
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  },

  save({ attributes }) {
    const { badge, titleStart, titleHighlight, description, cards } =
      attributes;
    const safeCards =
      Array.isArray(cards) && cards.length === 3 ? cards : DEFAULT_ITEMS;

    return (
      <section className="technical-insights-block">
        <div className="technical-insights-inner">
          <p className="technical-insights-badge">{badge}</p>
          <h2 className="technical-insights-title">
            {titleStart} <span>{titleHighlight}</span>
          </h2>
          <p className="technical-insights-description">{description}</p>

          <div className="technical-insights-grid">
            {safeCards.map((card, index) => (
              <article key={index} className="technical-insights-card">
                <div className="technical-insights-card-icon">
                  <i
                    className={card.icon || "fa-solid fa-circle"}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="technical-insights-card-title">
                  <RichText.Content value={card.title} />
                </h3>
                <p className="technical-insights-card-description">
                  <RichText.Content value={card.description} />
                </p>
                <a
                  href={card.linkUrl || "#"}
                  className="technical-insights-card-link"
                >
                  {card.linkText || "Read More"}
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
