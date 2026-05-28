import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
  useBlockProps,
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
    : "https://via.placeholder.com/960x640?text=Service+Image";

const DEFAULT_CARDS = [
  {
    number: "1",
    title: "Interior & Exterior Painting",
    kicker: "Premium Quality Finishes That Last",
    description:
      "Transform your home with our professional painting services. From refreshing a single room to complete exterior repainting, we deliver durable finishes with precise prep work.",
    featuresText:
      "Free color consultation included\nPremium paint brands & materials\n5-year workmanship warranty\nClean, professional crews",
    linkText: "Learn More",
    linkUrl: "#",
    imageUrl: DEFAULT_IMAGE,
    imageAlt: "Interior painting service",
  },
  {
    number: "2",
    title: "Exterior Cleaning & Surface Prep",
    kicker: "Restore Your Home's Curb Appeal",
    description:
      "Our comprehensive cleaning services remove years of dirt, grime, and mildew. We prepare surfaces properly so every follow-up trade starts from a solid foundation.",
    featuresText:
      "Pressure washing & soft washing\nMold & mildew removal\nSurface sanding & prep\nDeck & fence restoration",
    linkText: "Learn More",
    linkUrl: "#",
    imageUrl: DEFAULT_IMAGE,
    imageAlt: "Exterior cleaning service",
  },
  {
    number: "3",
    title: "Home Remodeling & Improvements",
    kicker: "Transform Your Living Space",
    description:
      "From kitchen and bathroom renovations to full home makeovers, our skilled craftsmen bring your vision to life with careful planning and polished execution.",
    featuresText:
      "Kitchen & bathroom renovations\nFlooring installation\nCustom carpentry work\nProject management included",
    linkText: "Learn More",
    linkUrl: "#",
    imageUrl: DEFAULT_IMAGE,
    imageAlt: "Home remodeling service",
  },
  {
    number: "4",
    title: "Roofing & Electrical Solutions",
    kicker: "Protect & Power Your Home",
    description:
      "Keep your home safe and functional with our roofing and electrical services. From repairs to complete upgrades, we coordinate dependable crews and clear timelines.",
    featuresText:
      "Roof repair & replacement\nLicensed electricians\nEmergency services available\nInspections & maintenance",
    linkText: "Learn More",
    linkUrl: "#",
    imageUrl: DEFAULT_IMAGE,
    imageAlt: "Roofing and electrical service",
  },
];

const toList = (value = "") =>
  String(value)
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);

registerBlockType("logiweb/custom-block-75", {
  ...metadata,
  attributes: {
    eyebrow: { type: "string", default: "What We Do" },
    title: { type: "string", default: "Comprehensive Home Services" },
    description: {
      type: "string",
      default:
        "From painting to remodeling, we handle it all with expert craftsmanship and attention to detail.",
    },
    supportText: {
      type: "string",
      default: "Not sure which service you need? We're here to help.",
    },
    buttonText: { type: "string", default: "Get a Free Consultation" },
    buttonUrl: { type: "string", default: "#" },
    cards: { type: "array", default: DEFAULT_CARDS },
  },

  edit({ attributes, setAttributes }) {
    const {
      eyebrow,
      title,
      description,
      supportText,
      buttonText,
      buttonUrl,
      cards = DEFAULT_CARDS,
    } = attributes;

    const safeCards =
      Array.isArray(cards) && cards.length ? cards : DEFAULT_CARDS;
    const blockProps = useBlockProps({
      className: "services-editorial-grid-block",
    });

    const updateCard = (index, patch) => {
      const nextCards = safeCards.map((card, cardIndex) =>
        cardIndex === index ? { ...card, ...patch } : card,
      );
      setAttributes({ cards: nextCards });
    };

    const addCard = () => {
      setAttributes({
        cards: [
          ...safeCards,
          {
            number: String(safeCards.length + 1),
            title: "New Service",
            kicker: "Short supporting line",
            description: "Describe this service offering.",
            featuresText: "Benefit one\nBenefit two\nBenefit three",
            linkText: "Learn More",
            linkUrl: "#",
            imageUrl: DEFAULT_IMAGE,
            imageAlt: "Service image",
          },
        ],
      });
    };

    const removeCard = (index) => {
      if (safeCards.length <= 1) {
        return;
      }

      setAttributes({
        cards: safeCards.filter((_, cardIndex) => cardIndex !== index),
      });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Section Content" initialOpen={true}>
            <TextControl
              label="Eyebrow"
              value={eyebrow}
              onChange={(value) => setAttributes({ eyebrow: value })}
            />
            <TextControl
              label="Title"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
            />
            <TextareaControl
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
            />
            <TextControl
              label="Support text"
              value={supportText}
              onChange={(value) => setAttributes({ supportText: value })}
            />
            <TextControl
              label="Button text"
              value={buttonText}
              onChange={(value) => setAttributes({ buttonText: value })}
            />
            <TextControl
              label="Button URL"
              value={buttonUrl}
              onChange={(value) => setAttributes({ buttonUrl: value })}
            />
          </PanelBody>

          {safeCards.map((card, index) => (
            <PanelBody
              key={index}
              title={`Card ${index + 1}`}
              initialOpen={false}
            >
              <TextControl
                label="Badge number"
                value={card.number || ""}
                onChange={(value) => updateCard(index, { number: value })}
              />
              <TextControl
                label="Title"
                value={card.title || ""}
                onChange={(value) => updateCard(index, { title: value })}
              />
              <TextControl
                label="Supporting line"
                value={card.kicker || ""}
                onChange={(value) => updateCard(index, { kicker: value })}
              />
              <TextareaControl
                label="Description"
                value={card.description || ""}
                onChange={(value) => updateCard(index, { description: value })}
              />
              <TextareaControl
                label="Checklist items (one per line)"
                value={card.featuresText || ""}
                onChange={(value) => updateCard(index, { featuresText: value })}
              />
              <TextControl
                label="Link text"
                value={card.linkText || ""}
                onChange={(value) => updateCard(index, { linkText: value })}
              />
              <TextControl
                label="Link URL"
                value={card.linkUrl || ""}
                onChange={(value) => updateCard(index, { linkUrl: value })}
              />
              <TextControl
                label="Image alt"
                value={card.imageAlt || ""}
                onChange={(value) => updateCard(index, { imageAlt: value })}
              />
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) =>
                    updateCard(index, {
                      imageUrl: media.url || DEFAULT_IMAGE,
                      imageAlt: media.alt || card.imageAlt || "",
                    })
                  }
                  allowedTypes={["image"]}
                  render={({ open }) => (
                    <Button isSecondary onClick={open}>
                      {card.imageUrl ? "Change image" : "Select image"}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
              <Button
                isDestructive
                isSmall
                onClick={() => removeCard(index)}
                disabled={safeCards.length <= 1}
              >
                Remove card
              </Button>
            </PanelBody>
          ))}

          <PanelBody title="Add Card" initialOpen={false}>
            <Button isPrimary onClick={addCard}>
              Add card
            </Button>
          </PanelBody>
        </InspectorControls>

        <section {...blockProps}>
          <div className="services-editorial-grid-inner">
            <header className="services-editorial-grid-header">
              <p className="services-editorial-grid-eyebrow">{eyebrow}</p>
              <RichText
                tagName="h2"
                className="services-editorial-grid-title"
                value={title}
                onChange={(value) => setAttributes({ title: value })}
                placeholder="Section title"
              />
              <RichText
                tagName="p"
                className="services-editorial-grid-description"
                value={description}
                onChange={(value) => setAttributes({ description: value })}
                placeholder="Section description"
              />
            </header>

            <div className="services-editorial-grid-cards">
              {safeCards.map((card, index) => {
                const features = toList(card.featuresText);

                return (
                  <article className="services-editorial-card" key={index}>
                    <div className="services-editorial-card-media-wrap">
                      <span className="services-editorial-card-badge">
                        {card.number || index + 1}
                      </span>
                      <div className="services-editorial-card-media">
                        <img
                          src={card.imageUrl || DEFAULT_IMAGE}
                          alt={card.imageAlt || card.title || "Service image"}
                        />
                      </div>
                    </div>
                    <div className="services-editorial-card-body">
                      <RichText
                        tagName="h3"
                        className="services-editorial-card-title"
                        value={card.title}
                        onChange={(value) =>
                          updateCard(index, { title: value })
                        }
                        placeholder="Card title"
                      />
                      <RichText
                        tagName="p"
                        className="services-editorial-card-kicker"
                        value={card.kicker}
                        onChange={(value) =>
                          updateCard(index, { kicker: value })
                        }
                        placeholder="Supporting line"
                      />
                      <RichText
                        tagName="p"
                        className="services-editorial-card-description"
                        value={card.description}
                        onChange={(value) =>
                          updateCard(index, { description: value })
                        }
                        placeholder="Description"
                      />
                      <ul className="services-editorial-card-features">
                        {features.map((feature, featureIndex) => (
                          <li key={`${feature}-${featureIndex}`}>{feature}</li>
                        ))}
                      </ul>
                      <a
                        className="services-editorial-card-link"
                        href={card.linkUrl || "#"}
                        onClick={(event) => event.preventDefault()}
                      >
                        <span>{card.linkText || "Learn More"}</span>
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

            <div className="services-editorial-grid-footer">
              <RichText
                tagName="p"
                className="services-editorial-grid-support"
                value={supportText}
                onChange={(value) => setAttributes({ supportText: value })}
                placeholder="Support text"
              />
              <a
                className="services-editorial-grid-button btn-primary"
                href={buttonUrl || "#"}
                onClick={(event) => event.preventDefault()}
              >
                <span>{buttonText}</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </section>
      </>
    );
  },

  save({ attributes }) {
    const {
      eyebrow,
      title,
      description,
      supportText,
      buttonText,
      buttonUrl,
      cards = DEFAULT_CARDS,
    } = attributes;
    const safeCards =
      Array.isArray(cards) && cards.length ? cards : DEFAULT_CARDS;
    const blockProps = useBlockProps.save({
      className: "services-editorial-grid-block fade-in-on-scroll",
    });

    return (
      <section {...blockProps}>
        <div className="services-editorial-grid-inner">
          <header className="services-editorial-grid-header">
            <p className="services-editorial-grid-eyebrow">{eyebrow}</p>
            <h2 className="services-editorial-grid-title">{title}</h2>
            <p className="services-editorial-grid-description">{description}</p>
          </header>

          <div className="services-editorial-grid-cards">
            {safeCards.map((card, index) => {
              const features = toList(card.featuresText);

              return (
                <article className="services-editorial-card" key={index}>
                  <div className="services-editorial-card-media-wrap">
                    <span className="services-editorial-card-badge">
                      {card.number || index + 1}
                    </span>
                    <div className="services-editorial-card-media">
                      <img
                        src={card.imageUrl || DEFAULT_IMAGE}
                        alt={card.imageAlt || card.title || "Service image"}
                      />
                    </div>
                  </div>
                  <div className="services-editorial-card-body">
                    <h3 className="services-editorial-card-title">
                      {card.title}
                    </h3>
                    <p className="services-editorial-card-kicker">
                      {card.kicker}
                    </p>
                    <p className="services-editorial-card-description">
                      {card.description}
                    </p>
                    <ul className="services-editorial-card-features">
                      {features.map((feature, featureIndex) => (
                        <li key={`${feature}-${featureIndex}`}>{feature}</li>
                      ))}
                    </ul>
                    <a
                      className="services-editorial-card-link"
                      href={card.linkUrl || "#"}
                    >
                      <span>{card.linkText || "Learn More"}</span>
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

          <div className="services-editorial-grid-footer">
            <p className="services-editorial-grid-support">{supportText}</p>
            <a
              className="services-editorial-grid-button btn-primary"
              href={buttonUrl || "#"}
            >
              <span>{buttonText}</span>
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>
    );
  },
});
