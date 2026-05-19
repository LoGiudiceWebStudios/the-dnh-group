import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_BADGES = [
  {
    icon: "fa-solid fa-circle-check",
    label: "Licensed & Insured",
    color: "#22a35a",
  },
  {
    icon: "fa-solid fa-shield-heart",
    label: "5-Year Warranty",
    color: "#3b5bdb",
  },
  {
    icon: "fa-solid fa-circle-check",
    label: "No Hidden Fees",
    color: "#d78d2f",
  },
];

const DEFAULT_CARDS = [
  {
    icon: "fa-regular fa-eye",
    title: "Our Vision",
    description:
      "To be the most trusted name in home improvement - where quality meets compassion.",
  },
  {
    icon: "fa-regular fa-heart",
    title: "Our Promise",
    description:
      "To treat every home like our own and every customer like family.",
  },
];

registerBlockType("logiweb/custom-block-24", {
  title: "Why Families Choose Us",
  icon: "groups",
  category: "widgets",
  attributes: {
    subtitle: { type: "string", default: "WHY FAMILIES CHOOSE US" },
    titleStart: { type: "string", default: "We're Not Just Contractors —" },
    titleHighlight: { type: "string", default: "We're Family" },
    descriptionOne: {
      type: "string",
      default:
        "When you invite DNH Group into your home, you're not just hiring a contractor - you're welcoming a team that genuinely cares. We understand that your home is more than walls and a roof; it's where memories are made, where children grow, and where life happens.",
    },
    descriptionTwo: {
      type: "string",
      default:
        "For over 46 years, we've treated every project as if it were our own family's home. That means honest advice, fair pricing, meticulous attention to detail, and a promise to never cut corners. Because at the end of the day, your trust is our greatest reward.",
    },
    imageUrl: {
      type: "string",
      default: "",
    },
    imageAlt: {
      type: "string",
      default: "Family at home",
    },
    testimonialQuote: {
      type: "string",
      default: '"DNH transformed our house into the home of our dreams."',
    },
    testimonialAuthor: {
      type: "string",
      default: "- The Richardson Family",
    },
    trustBadges: {
      type: "array",
      default: DEFAULT_BADGES,
    },
    infoCards: {
      type: "array",
      default: DEFAULT_CARDS,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      subtitle,
      titleStart,
      titleHighlight,
      descriptionOne,
      descriptionTwo,
      imageUrl,
      imageAlt,
      testimonialQuote,
      testimonialAuthor,
      trustBadges,
      infoCards,
    } = attributes;

    const updateBadge = (index, field, value) => {
      const next = [...trustBadges];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ trustBadges: next });
    };

    const addBadge = () => {
      setAttributes({
        trustBadges: [
          ...trustBadges,
          {
            icon: "fa-solid fa-circle-check",
            label: "New Badge",
            color: "#3b5bdb",
          },
        ],
      });
    };

    const removeBadge = (index) => {
      if (trustBadges.length <= 1) return;
      setAttributes({ trustBadges: trustBadges.filter((_, i) => i !== index) });
    };

    const updateCard = (index, field, value) => {
      const next = [...infoCards];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ infoCards: next });
    };

    const addCard = () => {
      setAttributes({
        infoCards: [
          ...infoCards,
          {
            icon: "fa-regular fa-star",
            title: "New Card",
            description: "Card description",
          },
        ],
      });
    };

    const removeCard = (index) => {
      if (infoCards.length <= 1) return;
      setAttributes({ infoCards: infoCards.filter((_, i) => i !== index) });
    };

    return (
      <div className="family-trust-editor">
        <InspectorControls>
          <PanelBody title="Main Content" initialOpen={true}>
            <TextControl
              label="Subtitle"
              value={subtitle}
              onChange={(value) => setAttributes({ subtitle: value })}
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
              label="Description Paragraph 1"
              value={descriptionOne}
              onChange={(value) => setAttributes({ descriptionOne: value })}
            />
            <TextControl
              label="Description Paragraph 2"
              value={descriptionTwo}
              onChange={(value) => setAttributes({ descriptionTwo: value })}
            />
          </PanelBody>

          <PanelBody title="Image & Testimonial" initialOpen={false}>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) =>
                  setAttributes({
                    imageUrl: media.url,
                    imageAlt: media.alt || imageAlt,
                  })
                }
                allowedTypes={["image"]}
                value={imageUrl}
                render={({ open }) => (
                  <Button isPrimary onClick={open}>
                    {imageUrl ? "Change Image" : "Set Image"}
                  </Button>
                )}
              />
            </MediaUploadCheck>
            <TextControl
              label="Image Alt"
              value={imageAlt}
              onChange={(value) => setAttributes({ imageAlt: value })}
            />
            <TextControl
              label="Testimonial Quote"
              value={testimonialQuote}
              onChange={(value) => setAttributes({ testimonialQuote: value })}
            />
            <TextControl
              label="Testimonial Author"
              value={testimonialAuthor}
              onChange={(value) => setAttributes({ testimonialAuthor: value })}
            />
          </PanelBody>

          <PanelBody
            title={`Trust Badges (${trustBadges.length})`}
            initialOpen={false}
          >
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <TextControl
                  label={`Badge ${index + 1} Icon (FA class)`}
                  value={badge.icon}
                  onChange={(value) => updateBadge(index, "icon", value)}
                />
                <TextControl
                  label={`Badge ${index + 1} Label`}
                  value={badge.label}
                  onChange={(value) => updateBadge(index, "label", value)}
                />
                <TextControl
                  label={`Badge ${index + 1} Color (hex)`}
                  value={badge.color}
                  onChange={(value) => updateBadge(index, "color", value)}
                />
                <Button
                  isDestructive
                  isSmall
                  onClick={() => removeBadge(index)}
                  disabled={trustBadges.length <= 1}
                >
                  Remove Badge
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addBadge}>
              + Add Badge
            </Button>
          </PanelBody>

          <PanelBody
            title={`Info Cards (${infoCards.length})`}
            initialOpen={false}
          >
            {infoCards.map((card, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <TextControl
                  label={`Card ${index + 1} Icon (FA class)`}
                  value={card.icon}
                  onChange={(value) => updateCard(index, "icon", value)}
                />
                <TextControl
                  label={`Card ${index + 1} Title`}
                  value={card.title}
                  onChange={(value) => updateCard(index, "title", value)}
                />
                <TextControl
                  label={`Card ${index + 1} Description`}
                  value={card.description}
                  onChange={(value) => updateCard(index, "description", value)}
                />
                <Button
                  isDestructive
                  isSmall
                  onClick={() => removeCard(index)}
                  disabled={infoCards.length <= 1}
                >
                  Remove Card
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addCard}>
              + Add Card
            </Button>
          </PanelBody>
        </InspectorControls>

        <section className="family-trust">
          <div className="family-trust-inner">
            <div className="family-trust-left">
              <div className="family-trust-image-wrap">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="family-trust-image"
                  />
                ) : (
                  <div className="family-trust-image-placeholder">
                    Set image
                  </div>
                )}
                <div className="family-trust-testimonial">
                  <span className="family-trust-testimonial-icon">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  <div>
                    <p className="family-trust-testimonial-quote">
                      {testimonialQuote}
                    </p>
                    <p className="family-trust-testimonial-author">
                      {testimonialAuthor}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="family-trust-right">
              <p className="family-trust-subtitle">{subtitle}</p>
              <h2 className="family-trust-title">
                <RichText
                  tagName="span"
                  value={titleStart}
                  onChange={(value) => setAttributes({ titleStart: value })}
                  placeholder="Title start"
                />{" "}
                <span className="family-trust-title-highlight">
                  <RichText
                    tagName="span"
                    value={titleHighlight}
                    onChange={(value) =>
                      setAttributes({ titleHighlight: value })
                    }
                    placeholder="Title highlight"
                  />
                </span>
              </h2>
              <RichText
                tagName="p"
                className="family-trust-description"
                value={descriptionOne}
                onChange={(value) => setAttributes({ descriptionOne: value })}
                placeholder="Description paragraph 1"
              />
              <RichText
                tagName="p"
                className="family-trust-description family-trust-description-second"
                value={descriptionTwo}
                onChange={(value) => setAttributes({ descriptionTwo: value })}
                placeholder="Description paragraph 2"
              />

              <div className="family-trust-badges">
                {trustBadges.map((badge, index) => (
                  <span
                    key={index}
                    className="family-trust-badge"
                    style={{ color: badge.color }}
                  >
                    <i className={badge.icon}></i>
                    {badge.label}
                  </span>
                ))}
              </div>

              <div className="family-trust-cards">
                {infoCards.map((card, index) => (
                  <div key={index} className="family-trust-card">
                    <div className="family-trust-card-icon">
                      <i className={card.icon}></i>
                    </div>
                    <h3 className="family-trust-card-title">{card.title}</h3>
                    <p className="family-trust-card-description">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const {
      subtitle,
      titleStart,
      titleHighlight,
      descriptionOne,
      descriptionTwo,
      imageUrl,
      imageAlt,
      testimonialQuote,
      testimonialAuthor,
      trustBadges,
      infoCards,
    } = attributes;

    return (
      <section
        className="family-trust fade-in-on-scroll"
        data-block="family-trust"
      >
        <div className="family-trust-inner">
          <div className="family-trust-left">
            <div className="family-trust-image-wrap">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="family-trust-image"
                />
              ) : null}
              <div className="family-trust-testimonial">
                <span className="family-trust-testimonial-icon">
                  <i className="fa-solid fa-check"></i>
                </span>
                <div>
                  <p className="family-trust-testimonial-quote">
                    {testimonialQuote}
                  </p>
                  <p className="family-trust-testimonial-author">
                    {testimonialAuthor}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="family-trust-right">
            <p className="family-trust-subtitle">{subtitle}</p>
            <h2 className="family-trust-title">
              {titleStart}{" "}
              <span className="family-trust-title-highlight">
                {titleHighlight}
              </span>
            </h2>
            <p className="family-trust-description">{descriptionOne}</p>
            <p className="family-trust-description family-trust-description-second">
              {descriptionTwo}
            </p>

            <div className="family-trust-badges">
              {trustBadges.map((badge, index) => (
                <span
                  key={index}
                  className="family-trust-badge"
                  style={{ color: badge.color }}
                >
                  <i className={badge.icon}></i>
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="family-trust-cards">
              {infoCards.map((card, index) => (
                <div key={index} className="family-trust-card">
                  <div className="family-trust-card-icon">
                    <i className={card.icon}></i>
                  </div>
                  <h3 className="family-trust-card-title">{card.title}</h3>
                  <p className="family-trust-card-description">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  },
});
