import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
} from "@wordpress/block-editor";
import { Button, PanelBody, TextControl } from "@wordpress/components";
import { useMemo } from "@wordpress/element";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_CARDS = [
  {
    iconUrl: "",
    iconId: null,
    imageAlt: "",
    title: "Interior & Exterior Painting",
    subtitle: "Premium quality finishes that last",
    description:
      "Transform your home with professional painting services and premium materials.",
    linkText: "Learn more",
    linkUrl: "#",
  },
  {
    iconUrl: "",
    iconId: null,
    imageAlt: "",
    title: "Exterior Cleaning & Surface Prep",
    subtitle: "Restore your home’s curb appeal",
    description:
      "Prepare exterior surfaces properly before painting or restoration work.",
    linkText: "Learn more",
    linkUrl: "#",
  },
  {
    iconUrl: "",
    iconId: null,
    imageAlt: "",
    title: "Home Remodeling & Improvements",
    subtitle: "Upgrade your living space",
    description:
      "From small upgrades to complete renovations, we help bring your vision to life.",
    linkText: "Learn more",
    linkUrl: "#",
  },
  {
    iconUrl: "",
    iconId: null,
    imageAlt: "",
    title: "Roofing & Electrical Solutions",
    subtitle: "Protect and power your home",
    description:
      "Reliable home services that keep your property safe, efficient, and ready to use.",
    linkText: "Learn more",
    linkUrl: "#",
  },
];

const getMediaImageUrl = (media) =>
  media?.sizes?.full?.url ||
  media?.sizes?.large?.url ||
  media?.sizes?.medium?.url ||
  media?.source_url ||
  media?.url ||
  media?.guid?.rendered ||
  "";

const getMediaImageAlt = (media) =>
  media?.alt || media?.title || media?.caption?.raw || media?.caption || "";

const getCardImageUrl = (card) =>
  card?.iconUrl || card?.image || card?.imageUrl || "";

registerBlockType("logiweb/custom-block-18", {
  title: "Services Cards Showcase",
  icon: "screenoptions",
  category: "widgets",
  attributes: {
    subtitle: {
      type: "string",
      default: "OUR SERVICES",
    },
    title: {
      type: "string",
      default: "Comprehensive Home Solutions",
    },
    description: {
      type: "string",
      default:
        "From painting to remodeling, we provide everything you need to maintain, improve, and beautify your home.",
    },
    cards: {
      type: "array",
      default: DEFAULT_CARDS,
    },
    footerText: {
      type: "string",
      default: "Not sure which service you need? We're here to help.",
    },
    footerButtonText: {
      type: "string",
      default: "Get a Free Consultation",
    },
    footerButtonUrl: {
      type: "string",
      default: "#contact",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      subtitle,
      title,
      description,
      cards,
      footerText,
      footerButtonText,
      footerButtonUrl,
    } = attributes;

    const updateCard = (index, field, value) => {
      const nextCards = [...cards];
      nextCards[index] = {
        ...nextCards[index],
        [field]: value,
      };
      setAttributes({ cards: nextCards });
    };

    const updateCardImage = (index, media) => {
      const imageUrl = getMediaImageUrl(media);

      updateCard(index, "iconUrl", imageUrl);
      updateCard(index, "iconId", media.id || null);
      updateCard(index, "imageAlt", getMediaImageAlt(media));
    };

    const addCard = () => {
      setAttributes({
        cards: [
          ...cards,
          {
            iconUrl: "",
            iconId: null,
            imageAlt: "",
            title: "New Service",
            subtitle: "Add a short subtitle",
            description: "Add the service description here.",
            linkText: "Learn more",
            linkUrl: "#",
          },
        ],
      });
    };

    const removeCard = (index) => {
      if (cards.length <= 1) {
        return;
      }

      setAttributes({
        cards: cards.filter((_, currentIndex) => currentIndex !== index),
      });
    };

    const cardCountLabel = useMemo(
      () => `${cards.length} card${cards.length === 1 ? "" : "s"}`,
      [cards.length],
    );

    return (
      <div className="services-showcase-block">
        <InspectorControls>
          <PanelBody title="Section Content" initialOpen={true}>
            <TextControl
              label="Subtitle"
              value={subtitle}
              onChange={(value) => setAttributes({ subtitle: value })}
            />
            <TextControl
              label="Title"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
            />
            <TextControl
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
            />
          </PanelBody>

          <PanelBody title={`Cards (${cardCountLabel})`} initialOpen={false}>
            {cards.map((card, index) => (
              <div key={index} className="services-card-controls">
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) => updateCardImage(index, media)}
                    allowedTypes={["image"]}
                    value={card.iconId}
                    render={({ open }) => (
                      <Button onClick={open} isSecondary>
                        {getCardImageUrl(card) ? "Change image" : "Add image"}
                      </Button>
                    )}
                  />
                </MediaUploadCheck>
                {getCardImageUrl(card) ? (
                  <div className="services-card-controls-preview">
                    <img
                      src={getCardImageUrl(card)}
                      alt={card.imageAlt || card.title}
                      className="services-card-controls-preview-image"
                    />
                  </div>
                ) : null}
                <TextControl
                  label="Image alt"
                  value={card.imageAlt}
                  onChange={(value) => updateCard(index, "imageAlt", value)}
                />
                <TextControl
                  label="Card title"
                  value={card.title}
                  onChange={(value) => updateCard(index, "title", value)}
                />
                <TextControl
                  label="Card subtitle"
                  value={card.subtitle}
                  onChange={(value) => updateCard(index, "subtitle", value)}
                />
                <TextControl
                  label="Card description"
                  value={card.description}
                  onChange={(value) => updateCard(index, "description", value)}
                />
                <TextControl
                  label="Learn more label"
                  value={card.linkText}
                  onChange={(value) => updateCard(index, "linkText", value)}
                />
                <TextControl
                  label="Learn more URL"
                  value={card.linkUrl}
                  onChange={(value) => updateCard(index, "linkUrl", value)}
                />
                <Button
                  isDestructive
                  isSecondary
                  onClick={() => removeCard(index)}
                  disabled={cards.length <= 1}
                >
                  Remove card
                </Button>
              </div>
            ))}
            <Button isPrimary onClick={addCard}>
              Add card
            </Button>
          </PanelBody>

          <PanelBody title="Footer CTA" initialOpen={false}>
            <TextControl
              label="Footer text"
              value={footerText}
              onChange={(value) => setAttributes({ footerText: value })}
            />
            <TextControl
              label="Button text"
              value={footerButtonText}
              onChange={(value) => setAttributes({ footerButtonText: value })}
            />
            <TextControl
              label="Button URL"
              value={footerButtonUrl}
              onChange={(value) => setAttributes({ footerButtonUrl: value })}
            />
          </PanelBody>
        </InspectorControls>

        <section className="services-showcase-preview">
          <div className="services-showcase-heading">
            <p className="services-showcase-subtitle">{subtitle}</p>
            <RichText
              tagName="h2"
              className="services-showcase-title"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
              placeholder="Add title"
            />
            <RichText
              tagName="p"
              className="services-showcase-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Add description"
            />
          </div>

          <div className="services-showcase-cards">
            {cards.map((card, index) => (
              <article key={index} className="services-showcase-card">
                <div className="services-showcase-card-imageWrap">
                  {getCardImageUrl(card) ? (
                    <img
                      src={getCardImageUrl(card)}
                      alt={card.imageAlt || card.title}
                      className="services-showcase-card-image"
                    />
                  ) : (
                    <div className="services-showcase-card-placeholder">
                      Add image
                    </div>
                  )}
                </div>
                <RichText
                  tagName="h3"
                  className="services-showcase-card-title"
                  value={card.title}
                  onChange={(value) => updateCard(index, "title", value)}
                  placeholder="Card title"
                />
                <RichText
                  tagName="p"
                  className="services-showcase-card-subtitle"
                  value={card.subtitle}
                  onChange={(value) => updateCard(index, "subtitle", value)}
                  placeholder="Card subtitle"
                />
                <RichText
                  tagName="div"
                  className="services-showcase-card-description"
                  value={card.description}
                  onChange={(value) => updateCard(index, "description", value)}
                  placeholder="Card description"
                />
                <a
                  className="services-showcase-card-link"
                  href={card.linkUrl || "#"}
                >
                  {card.linkText || "Learn more"}
                </a>
              </article>
            ))}
          </div>

          <div className="services-showcase-footer">
            <p className="services-showcase-footerText">{footerText}</p>
            <a
              className="services-showcase-button"
              href={footerButtonUrl || "#"}
            >
              {footerButtonText}
            </a>
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const {
      subtitle,
      title,
      description,
      cards,
      footerText,
      footerButtonText,
      footerButtonUrl,
    } = attributes;

    return (
      <section
        className="services-showcase fade-in-on-scroll"
        data-block="services-showcase"
      >
        <div className="services-showcase-heading">
          <p className="services-showcase-subtitle">{subtitle}</p>
          <h2 className="services-showcase-title">{title}</h2>
          <p className="services-showcase-description">{description}</p>
        </div>

        <div className="services-showcase-cards">
          {cards.map((card, index) => (
            <article key={index} className="services-showcase-card">
              <div className="services-showcase-card-imageWrap">
                {getCardImageUrl(card) ? (
                  <img
                    src={getCardImageUrl(card)}
                    alt={card.imageAlt || card.title}
                    className="services-showcase-card-image"
                  />
                ) : (
                  <div className="services-showcase-card-placeholder">
                    Add image
                  </div>
                )}
              </div>
              <h3 className="services-showcase-card-title">{card.title}</h3>
              <p className="services-showcase-card-subtitle">{card.subtitle}</p>
              <div className="services-showcase-card-description">
                {card.description}
              </div>
              <a
                className="services-showcase-card-link"
                href={card.linkUrl || "#"}
              >
                {card.linkText || "Learn more"}
              </a>
            </article>
          ))}
        </div>

        <div className="services-showcase-footer">
          <p className="services-showcase-footerText">{footerText}</p>
          <a className="services-showcase-button" href={footerButtonUrl || "#"}>
            {footerButtonText}
          </a>
        </div>
      </section>
    );
  },
});
