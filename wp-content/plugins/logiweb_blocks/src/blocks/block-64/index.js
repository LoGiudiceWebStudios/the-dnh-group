import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl, SelectControl } from "@wordpress/components";
import { useState } from "@wordpress/element";
import metadata from "./block.json";

const DEFAULT_CARDS = [
  {
    icon: "toolbox",
    title: "Workmanship Warranty",
    tag: "5 Years",
    description:
      "Every project we complete is backed by our 5-year workmanship guarantee. If anything fails due to our installation, we fix it - no questions, no charge.",
    coverageTitle: "Coverage includes:",
    items: [
      "Installation defects",
      "Labor issues",
      "Workmanship errors",
      "Prep & finishing problems",
    ],
  },
  {
    icon: "badge-check",
    title: "Manufacturer Warranty",
    tag: "Up to Lifetime",
    description:
      "We only use premium materials backed by their own manufacturer warranties. We help you register and file any claims.",
    coverageTitle: "Coverage includes:",
    items: [
      "Product defects",
      "Material failure",
      "Color fading (select products)",
      "Premature wear",
    ],
  },
];

const ICON_OPTIONS = [
  { label: "Toolbox", value: "toolbox" },
  { label: "Badge Check", value: "badge-check" },
  { label: "Shield", value: "shield" },
  { label: "Award", value: "award" },
  { label: "Hammer", value: "hammer" },
  { label: "Screwdriver", value: "screwdriver" },
];

const getIconClass = (icon) => {
  const map = {
    toolbox: "fa-toolbox",
    "badge-check": "fa-certificate",
    shield: "fa-shield-halved",
    award: "fa-award",
    hammer: "fa-hammer",
    screwdriver: "fa-screwdriver-wrench",
  };

  return map[icon] || "fa-toolbox";
};

registerBlockType("logiweb/custom-block-64", {
  ...metadata,
  attributes: {
    badgeText: { type: "string", default: "Our Promise" },
    titleStart: { type: "string", default: "Warranties &" },
    titleHighlight: { type: "string", default: "Guarantees" },
    description: {
      type: "string",
      default:
        "We back every project with protection you can count on. Two layers of coverage - our work, and the products we use.",
    },
    cards: { type: "array", default: DEFAULT_CARDS },
    bottomTitle: { type: "string", default: "Satisfaction Guarantee" },
    bottomDescription: {
      type: "string",
      default: "Not happy? We will make it right or refund your deposit.",
    },
    bottomPillText: {
      type: "string",
      default: "100% Money-Back Guarantee",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      description,
      cards = DEFAULT_CARDS,
      bottomTitle,
      bottomDescription,
      bottomPillText,
    } = attributes;

    const [activeCard, setActiveCard] = useState(0);

    const updateCard = (index, field, value) => {
      const next = [...cards];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ cards: next });
    };

    const updateItem = (cardIndex, itemIndex, value) => {
      const next = [...cards];
      const currentItems = Array.isArray(next[cardIndex]?.items)
        ? [...next[cardIndex].items]
        : [];

      while (currentItems.length <= itemIndex) {
        currentItems.push("");
      }

      currentItems[itemIndex] = value;
      next[cardIndex] = { ...next[cardIndex], items: currentItems };
      setAttributes({ cards: next });
    };

    const activeItems = cards[activeCard]?.items || [];

    return (
      <>
        <InspectorControls>
          <PanelBody title="Section Content" initialOpen={true}>
            <TextControl
              label="Badge"
              value={badgeText}
              onChange={(value) => setAttributes({ badgeText: value })}
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
            <TextControl
              label="Bottom Title"
              value={bottomTitle}
              onChange={(value) => setAttributes({ bottomTitle: value })}
            />
            <TextControl
              label="Bottom Description"
              value={bottomDescription}
              onChange={(value) => setAttributes({ bottomDescription: value })}
            />
            <TextControl
              label="Bottom Pill"
              value={bottomPillText}
              onChange={(value) => setAttributes({ bottomPillText: value })}
            />
          </PanelBody>

          <PanelBody
            title={`Card ${activeCard + 1} Settings`}
            initialOpen={false}
          >
            <SelectControl
              label="Icon"
              value={cards[activeCard]?.icon || "toolbox"}
              options={ICON_OPTIONS}
              onChange={(value) => updateCard(activeCard, "icon", value)}
            />
            <TextControl
              label="Title"
              value={cards[activeCard]?.title || ""}
              onChange={(value) => updateCard(activeCard, "title", value)}
            />
            <TextControl
              label="Tag"
              value={cards[activeCard]?.tag || ""}
              onChange={(value) => updateCard(activeCard, "tag", value)}
            />
            <TextControl
              label="Description"
              value={cards[activeCard]?.description || ""}
              onChange={(value) => updateCard(activeCard, "description", value)}
            />
            <TextControl
              label="Coverage Heading"
              value={cards[activeCard]?.coverageTitle || ""}
              onChange={(value) =>
                updateCard(activeCard, "coverageTitle", value)
              }
            />

            {[0, 1, 2, 3].map((i) => (
              <TextControl
                key={i}
                label={`Coverage Item ${i + 1}`}
                value={activeItems[i] || ""}
                onChange={(value) => updateItem(activeCard, i, value)}
              />
            ))}
          </PanelBody>
        </InspectorControls>

        <section className="warranty-guarantees">
          <div className="warranty-guarantees-header">
            <p className="warranty-guarantees-badge">
              <i className="fa-regular fa-clipboard" aria-hidden="true"></i>
              <span>{badgeText}</span>
            </p>
            <h2 className="warranty-guarantees-title">
              {titleStart} <span>{titleHighlight}</span>
            </h2>
            <RichText
              tagName="p"
              className="warranty-guarantees-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Section description"
            />
          </div>

          <div className="warranty-guarantees-cards">
            {cards.map((card, cardIndex) => (
              <article
                key={`${card.title}-${cardIndex}`}
                className={`warranty-guarantees-card ${activeCard === cardIndex ? "is-active" : ""}`}
                onClick={() => setActiveCard(cardIndex)}
              >
                <div className="warranty-guarantees-card-head">
                  <span className="warranty-guarantees-icon">
                    <i
                      className={`fa-solid ${getIconClass(card.icon)}`}
                      aria-hidden="true"
                    ></i>
                  </span>
                  <div>
                    <RichText
                      tagName="h3"
                      className="warranty-guarantees-card-title"
                      value={card.title}
                      onChange={(value) =>
                        updateCard(cardIndex, "title", value)
                      }
                      placeholder="Card title"
                    />
                    <span className="warranty-guarantees-tag">{card.tag}</span>
                  </div>
                </div>

                <RichText
                  tagName="p"
                  className="warranty-guarantees-card-description"
                  value={card.description}
                  onChange={(value) =>
                    updateCard(cardIndex, "description", value)
                  }
                  placeholder="Card description"
                />

                <p className="warranty-guarantees-coverage-title">
                  {card.coverageTitle}
                </p>

                <div className="warranty-guarantees-list">
                  {(card.items || []).filter(Boolean).map((item, itemIndex) => (
                    <p
                      className="warranty-guarantees-item"
                      key={`${item}-${itemIndex}`}
                    >
                      <i
                        className="fa-regular fa-circle-check"
                        aria-hidden="true"
                      ></i>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="warranty-guarantees-bottom">
            <div className="warranty-guarantees-bottom-left">
              <i className="fa-regular fa-circle-check" aria-hidden="true"></i>
              <div>
                <RichText
                  tagName="h4"
                  className="warranty-guarantees-bottom-title"
                  value={bottomTitle}
                  onChange={(value) => setAttributes({ bottomTitle: value })}
                  placeholder="Bottom title"
                />
                <RichText
                  tagName="p"
                  className="warranty-guarantees-bottom-description"
                  value={bottomDescription}
                  onChange={(value) =>
                    setAttributes({ bottomDescription: value })
                  }
                  placeholder="Bottom description"
                />
              </div>
            </div>
            <span className="warranty-guarantees-bottom-pill">
              {bottomPillText}
            </span>
          </div>
        </section>
      </>
    );
  },

  save: ({ attributes }) => {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      description,
      cards = DEFAULT_CARDS,
      bottomTitle,
      bottomDescription,
      bottomPillText,
    } = attributes;

    return (
      <section className="warranty-guarantees">
        <div className="warranty-guarantees-header">
          <p className="warranty-guarantees-badge">
            <i className="fa-regular fa-clipboard" aria-hidden="true"></i>
            <span>{badgeText}</span>
          </p>
          <h2 className="warranty-guarantees-title">
            {titleStart} <span>{titleHighlight}</span>
          </h2>
          <p className="warranty-guarantees-description">{description}</p>
        </div>

        <div className="warranty-guarantees-cards">
          {cards.map((card, cardIndex) => (
            <article
              className="warranty-guarantees-card"
              key={`${card.title}-${cardIndex}`}
            >
              <div className="warranty-guarantees-card-head">
                <span className="warranty-guarantees-icon">
                  <i
                    className={`fa-solid ${getIconClass(card.icon)}`}
                    aria-hidden="true"
                  ></i>
                </span>
                <div>
                  <h3 className="warranty-guarantees-card-title">
                    {card.title}
                  </h3>
                  <span className="warranty-guarantees-tag">{card.tag}</span>
                </div>
              </div>

              <p className="warranty-guarantees-card-description">
                {card.description}
              </p>

              <p className="warranty-guarantees-coverage-title">
                {card.coverageTitle}
              </p>

              <div className="warranty-guarantees-list">
                {(card.items || []).filter(Boolean).map((item, itemIndex) => (
                  <p
                    className="warranty-guarantees-item"
                    key={`${item}-${itemIndex}`}
                  >
                    <i
                      className="fa-regular fa-circle-check"
                      aria-hidden="true"
                    ></i>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="warranty-guarantees-bottom">
          <div className="warranty-guarantees-bottom-left">
            <i className="fa-regular fa-circle-check" aria-hidden="true"></i>
            <div>
              <h4 className="warranty-guarantees-bottom-title">
                {bottomTitle}
              </h4>
              <p className="warranty-guarantees-bottom-description">
                {bottomDescription}
              </p>
            </div>
          </div>
          <span className="warranty-guarantees-bottom-pill">
            {bottomPillText}
          </span>
        </div>
      </section>
    );
  },
});
