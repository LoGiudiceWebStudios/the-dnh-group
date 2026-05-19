import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  RichText,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,
} from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_IMAGE =
  typeof logiweb_blocks !== "undefined" && logiweb_blocks.placeholder_image
    ? logiweb_blocks.placeholder_image
    : "https://via.placeholder.com/600x400?text=Service+Image";

const DEFAULT_CARDS = [
  {
    iconClass: "fa-solid fa-paint-roller",
    title: "Interior & Exterior Painting",
    description:
      "Transform your home with premium painting services that deliver lasting beauty and protection.",
    itemsText:
      "Free color consultation\nPremium paint brands\n5-year warranty\nClean, professional crews",
    linkText: "Learn More",
    linkUrl: "#",
    imageUrl: DEFAULT_IMAGE,
    imageAlt: "Interior and exterior painting",
  },
  {
    iconClass: "fa-solid fa-droplet",
    title: "Exterior Cleaning & Surface Prep",
    description:
      "Restore your home's exterior beauty with professional pressure washing and surface preparation.",
    itemsText:
      "Pressure & soft washing\nMold & mildew removal\nSurface sanding & prep\nDeck restoration",
    linkText: "Learn More",
    linkUrl: "#",
    imageUrl: DEFAULT_IMAGE,
    imageAlt: "Exterior cleaning and prep",
  },
  {
    iconClass: "fa-solid fa-house",
    title: "Home Remodeling & Improvements",
    description:
      "Kitchen, bath, and full home renovations that exceed expectations and add lasting value.",
    itemsText:
      "Kitchen & bath renovations\nFlooring installation\nCustom carpentry\nProject management",
    linkText: "Learn More",
    linkUrl: "#",
    imageUrl: DEFAULT_IMAGE,
    imageAlt: "Home remodeling and improvements",
  },
  {
    iconClass: "fa-solid fa-bolt",
    title: "Roofing & Electrical Solutions",
    description:
      "Professional roofing repairs and electrical solutions to protect and power your home safely.",
    itemsText:
      "Roof repair & replacement\nLicensed electricians\nEmergency services\nInspections",
    linkText: "Learn More",
    linkUrl: "#",
    imageUrl: DEFAULT_IMAGE,
    imageAlt: "Roofing and electrical solutions",
  },
];

const toItems = (itemsText = "") =>
  String(itemsText)
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);

registerBlockType("logiweb/custom-block-48", {
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
            iconClass: "fa-solid fa-star",
            title: "New Service",
            description: "Service description",
            itemsText: "Benefit 1\nBenefit 2\nBenefit 3",
            linkText: "Learn More",
            linkUrl: "#",
            imageUrl: DEFAULT_IMAGE,
            imageAlt: "Service image",
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
      <section className="services-overlay-grid-block">
        <InspectorControls>
          <PanelBody
            title={`Service Cards (${cards.length})`}
            initialOpen={true}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "16px",
                  borderBottom: "1px solid #e4e9f3",
                  paddingBottom: "14px",
                }}
              >
                <p style={{ margin: "0 0 8px", fontWeight: 600 }}>
                  Card {index + 1}
                </p>

                <MediaUpload
                  onSelect={(media) => updateCard(index, "imageUrl", media.url)}
                  allowedTypes={["image"]}
                  value={card.imageUrl}
                  render={({ open }) => (
                    <Button isSecondary onClick={open}>
                      {card.imageUrl ? "Change Image" : "Select Image"}
                    </Button>
                  )}
                />

                <TextControl
                  label="Image Alt"
                  value={card.imageAlt || ""}
                  onChange={(value) => updateCard(index, "imageAlt", value)}
                />
                <TextControl
                  label="Icon Class (Font Awesome)"
                  value={card.iconClass || ""}
                  onChange={(value) => updateCard(index, "iconClass", value)}
                />
                <TextControl
                  label="Title"
                  value={card.title || ""}
                  onChange={(value) => updateCard(index, "title", value)}
                />
                <TextareaControl
                  label="Description"
                  value={card.description || ""}
                  onChange={(value) => updateCard(index, "description", value)}
                />
                <TextareaControl
                  label="Bullet List (one per line)"
                  value={card.itemsText || ""}
                  onChange={(value) => updateCard(index, "itemsText", value)}
                />
                <TextControl
                  label="Link Text"
                  value={card.linkText || ""}
                  onChange={(value) => updateCard(index, "linkText", value)}
                />
                <TextControl
                  label="Link URL"
                  value={card.linkUrl || ""}
                  onChange={(value) => updateCard(index, "linkUrl", value)}
                />

                <Button
                  isSmall
                  isDestructive
                  onClick={() => removeCard(index)}
                  disabled={cards.length <= 1}
                >
                  Remove card
                </Button>
              </div>
            ))}

            <Button isPrimary isSmall onClick={addCard}>
              + Add card
            </Button>
          </PanelBody>
        </InspectorControls>

        <div className="services-overlay-grid-inner">
          {cards.map((card, index) => {
            const items = toItems(card.itemsText);
            const imgUrl = card.imageUrl || DEFAULT_IMAGE;
            return (
              <article
                key={index}
                className="services-overlay-card"
                style={{ backgroundImage: `url(${imgUrl})` }}
              >
                <img
                  className="services-overlay-card-image"
                  src={imgUrl}
                  alt={card.imageAlt || card.title || "Service"}
                />
                <div className="services-overlay-card-layer"></div>
                <div className="services-overlay-card-content">
                  <span
                    className="services-overlay-card-icon"
                    aria-hidden="true"
                  >
                    <i className={card.iconClass || "fa-solid fa-star"}></i>
                  </span>
                  <RichText
                    tagName="h3"
                    className="services-overlay-card-title"
                    value={card.title}
                    onChange={(value) => updateCard(index, "title", value)}
                    placeholder="Service title"
                  />
                  <RichText
                    tagName="p"
                    className="services-overlay-card-description"
                    value={card.description}
                    onChange={(value) =>
                      updateCard(index, "description", value)
                    }
                    placeholder="Service description"
                  />
                  <ul className="services-overlay-card-list">
                    {items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <a
                    className="services-overlay-card-link"
                    href={card.linkUrl || "#"}
                  >
                    {card.linkText || "Learn More"}
                    <i
                      className="fa-solid fa-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  },

  save: ({ attributes }) => {
    const { cards = [] } = attributes;

    return (
      <section className="services-overlay-grid-block fade-in-on-scroll">
        <div className="services-overlay-grid-inner">
          {cards.map((card, index) => {
            const items = toItems(card.itemsText);
            const imgUrl = card.imageUrl || DEFAULT_IMAGE;
            return (
              <article
                key={index}
                className="services-overlay-card"
                style={{ backgroundImage: `url(${imgUrl})` }}
              >
                <img
                  className="services-overlay-card-image"
                  src={imgUrl}
                  alt={card.imageAlt || card.title || "Service"}
                />
                <div className="services-overlay-card-layer"></div>
                <div className="services-overlay-card-content">
                  <span
                    className="services-overlay-card-icon"
                    aria-hidden="true"
                  >
                    <i className={card.iconClass || "fa-solid fa-star"}></i>
                  </span>
                  <h3 className="services-overlay-card-title">{card.title}</h3>
                  <p className="services-overlay-card-description">
                    {card.description}
                  </p>
                  <ul className="services-overlay-card-list">
                    {items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <a
                    className="services-overlay-card-link"
                    href={card.linkUrl || "#"}
                  >
                    {card.linkText || "Learn More"}
                    <i
                      className="fa-solid fa-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  },
});
