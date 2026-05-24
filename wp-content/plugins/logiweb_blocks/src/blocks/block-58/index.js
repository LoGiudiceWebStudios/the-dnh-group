import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_CARDS = [
  {
    iconClass: "fa-regular fa-envelope",
    title: "Email Us",
    primaryText: "info@thednhgroup.com",
    secondaryText: "We reply within 24 hours",
    linkUrl: "mailto:info@thednhgroup.com",
  },
  {
    iconClass: "fa-solid fa-phone",
    title: "Call Us",
    primaryText: "(555) 123-4567",
    secondaryText: "Mon-Fri 8am-6pm",
    linkUrl: "tel:+15551234567",
  },
  {
    iconClass: "fa-solid fa-location-dot",
    title: "Visit Us",
    primaryText: "123 Main Street, Cincinnati, OH",
    secondaryText: "By appointment",
    linkUrl: "#",
  },
];

registerBlockType("logiweb/custom-block-58", {
  ...metadata,
  attributes: {
    cards: {
      type: "array",
      default: DEFAULT_CARDS,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { cards = [] } = attributes;

    const updateCard = (index, key, value) => {
      const next = [...cards];
      next[index] = { ...next[index], [key]: value };
      setAttributes({ cards: next });
    };

    const addCard = () => {
      setAttributes({
        cards: [
          ...cards,
          {
            iconClass: "fa-regular fa-comment-dots",
            title: "New Contact",
            primaryText: "Primary text",
            secondaryText: "Secondary text",
            linkUrl: "#",
          },
        ],
      });
    };

    const removeCard = (index) => {
      if (cards.length <= 1) {
        return;
      }
      setAttributes({ cards: cards.filter((_, i) => i !== index) });
    };

    return (
      <section className="contact-cards-strip-block">
        <InspectorControls>
          <PanelBody title={`Cards (${cards.length})`} initialOpen={true}>
            {cards.map((card, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "14px",
                  borderBottom: "1px solid #e3e9f2",
                  paddingBottom: "14px",
                }}
              >
                <p style={{ margin: "0 0 8px", fontWeight: 600 }}>
                  Card {index + 1}
                </p>
                <TextControl
                  label="Icon class"
                  value={card.iconClass || ""}
                  onChange={(value) => updateCard(index, "iconClass", value)}
                />
                <TextControl
                  label="Title"
                  value={card.title || ""}
                  onChange={(value) => updateCard(index, "title", value)}
                />
                <TextControl
                  label="Primary text"
                  value={card.primaryText || ""}
                  onChange={(value) => updateCard(index, "primaryText", value)}
                />
                <TextControl
                  label="Secondary text"
                  value={card.secondaryText || ""}
                  onChange={(value) =>
                    updateCard(index, "secondaryText", value)
                  }
                />
                <TextControl
                  label="Link URL"
                  value={card.linkUrl || ""}
                  onChange={(value) => updateCard(index, "linkUrl", value)}
                />
                <Button
                  isSecondary
                  isDestructive
                  isSmall
                  disabled={cards.length <= 1}
                  onClick={() => removeCard(index)}
                >
                  Remove card
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addCard}>
              Add card
            </Button>
          </PanelBody>
        </InspectorControls>

        <div className="contact-cards-strip-top"></div>

        <div className="contact-cards-strip-inner">
          <div className="contact-cards-strip-grid">
            {cards.map((card, index) => (
              <article className="contact-cards-strip-card" key={index}>
                <span className="contact-cards-strip-icon" aria-hidden="true">
                  <i className={card.iconClass || "fa-regular fa-envelope"}></i>
                </span>
                <RichText
                  tagName="h3"
                  className="contact-cards-strip-title"
                  value={card.title}
                  onChange={(value) => updateCard(index, "title", value)}
                  placeholder="Title"
                />
                <RichText
                  tagName="p"
                  className="contact-cards-strip-primary"
                  value={card.primaryText}
                  onChange={(value) => updateCard(index, "primaryText", value)}
                  placeholder="Primary text"
                />
                <RichText
                  tagName="p"
                  className="contact-cards-strip-secondary"
                  value={card.secondaryText}
                  onChange={(value) =>
                    updateCard(index, "secondaryText", value)
                  }
                  placeholder="Secondary text"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  },

  save: ({ attributes }) => {
    const { cards = [] } = attributes;

    return (
      <section
        className="contact-cards-strip-block fade-in-on-scroll"
        data-block="contact-cards-strip"
      >
        <div className="contact-cards-strip-top"></div>

        <div className="contact-cards-strip-inner">
          <div className="contact-cards-strip-grid">
            {cards.map((card, index) => (
              <article className="contact-cards-strip-card" key={index}>
                <span className="contact-cards-strip-icon" aria-hidden="true">
                  <i className={card.iconClass || "fa-regular fa-envelope"}></i>
                </span>
                <h3 className="contact-cards-strip-title">{card.title}</h3>
                {card.primaryText ? (
                  <a
                    className="contact-cards-strip-primary"
                    href={card.linkUrl || "#"}
                  >
                    {card.primaryText}
                  </a>
                ) : null}
                <p className="contact-cards-strip-secondary">
                  {card.secondaryText}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
