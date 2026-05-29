import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_CARDS = [
  {
    icon: "fa-solid fa-brush",
    title: "Interior Perfection",
    description:
      "We treat your home like an art gallery. Every line is laser-straight, and every surface is flawless. Our interior process is built around precision, cleanliness, and premium materials that elevate your living spaces.",
    bullets: [
      "Full-coverage surface protection — shielding floors, expensive furniture, and fixtures with heavy-duty drop cloths and plastic sheeting.",
      "Intensive drywall prep, hairline fracture repair, and micro-sanding for perfectly smooth walls before a single drop of paint is applied.",
      "Premium, low-VOC / eco-friendly luxury paints (Sherwin-Williams Emerald, Benjamin Moore Aura) for crisp, vibrant color depth and easy cleaning.",
    ],
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Exterior Armor",
    description:
      "Elite curb appeal engineered to withstand harsh midwestern seasonal extremes — from intense summer humidity to freezing winter snow. Our exterior systems are built to last, not just to look good on day one.",
    bullets: [
      "Advanced pressure washing, scraping, and surface prep to remove all loose material and ensure maximum bonding of the new coating.",
      "High-performance elastomeric and weather-locking sealants that prevent cracking, fading, and moisture damage through harsh seasonal swings.",
      "Premium, mildew-resistant exterior coatings backed by extensive durability warranties — engineered to look pristine for years.",
    ],
  },
];

registerBlockType(metadata.name, {
  ...metadata,
  attributes: {
    eyebrow: { type: "string", default: "Our Approach" },
    titleStart: { type: "string", default: "Interior Perfection." },
    titleHighlight: { type: "string", default: "Exterior Armor." },
    cards: { type: "array", default: DEFAULT_CARDS },
  },

  edit({ attributes, setAttributes }) {
    const { eyebrow, titleStart, titleHighlight, cards } = attributes;
    const safeCards =
      Array.isArray(cards) && cards.length === 2 ? cards : DEFAULT_CARDS;
    const blockProps = useBlockProps({ className: "our-approach-block" });

    const updateCard = (cardIndex, key, value) => {
      const next = safeCards.map((card, index) =>
        index === cardIndex ? { ...card, [key]: value } : card,
      );
      setAttributes({ cards: next });
    };

    const updateBullet = (cardIndex, bulletIndex, value) => {
      const next = safeCards.map((card, index) => {
        if (index !== cardIndex) return card;
        const nextBullets = card.bullets.map((bullet, currentIndex) =>
          currentIndex === bulletIndex ? value : bullet,
        );
        return { ...card, bullets: nextBullets };
      });
      setAttributes({ cards: next });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Header" initialOpen={true}>
            <TextControl
              label="Badge"
              value={eyebrow}
              onChange={(value) => setAttributes({ eyebrow: value })}
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
          </PanelBody>

          {safeCards.map((card, cardIndex) => (
            <PanelBody
              key={cardIndex}
              title={`Card ${cardIndex + 1}`}
              initialOpen={cardIndex === 0}
            >
              <TextControl
                label="Icon class"
                value={card.icon || ""}
                onChange={(value) => updateCard(cardIndex, "icon", value)}
              />
              <TextControl
                label="Title"
                value={card.title || ""}
                onChange={(value) => updateCard(cardIndex, "title", value)}
              />
              <TextareaControl
                label="Description"
                value={card.description || ""}
                onChange={(value) =>
                  updateCard(cardIndex, "description", value)
                }
              />
              {Array.isArray(card.bullets) &&
                card.bullets
                  .slice(0, 3)
                  .map((bullet, bulletIndex) => (
                    <TextareaControl
                      key={bulletIndex}
                      label={`Bullet ${bulletIndex + 1}`}
                      value={bullet || ""}
                      onChange={(value) =>
                        updateBullet(cardIndex, bulletIndex, value)
                      }
                    />
                  ))}
            </PanelBody>
          ))}
        </InspectorControls>

        <section {...blockProps}>
          <div className="our-approach-inner">
            <p className="our-approach-badge">
              <i className="fa-solid fa-check" aria-hidden="true" />
              <span>{eyebrow}</span>
            </p>

            <h2 className="our-approach-title">
              {titleStart} <span>{titleHighlight}</span>
            </h2>

            <div className="our-approach-grid">
              {safeCards.map((card, cardIndex) => (
                <article key={cardIndex} className="our-approach-card">
                  <div className="our-approach-card-icon">
                    <i className={card.icon} aria-hidden="true" />
                  </div>
                  <h3 className="our-approach-card-title">{card.title}</h3>
                  <p className="our-approach-card-description">
                    {card.description}
                  </p>
                  <ul className="our-approach-card-list">
                    {(card.bullets || []).map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="our-approach-card-list-item"
                      >
                        <span className="our-approach-card-list-icon">
                          <i className="fa-solid fa-check" aria-hidden="true" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  },

  save() {
    return null;
  },
});
