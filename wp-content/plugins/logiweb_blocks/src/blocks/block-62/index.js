import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl, SelectControl } from "@wordpress/components";
import { useState } from "@wordpress/element";
import metadata from "./block.json";

const DEFAULT_CARDS = [
  {
    title: "Painting",
    icon: "paint-roller",
    certs: [
      {
        name: "EPA Lead-Safe Certified",
        issuer: "U.S. Environmental Protection Agency",
      },
      {
        name: "Master Painter Certification",
        issuer: "Painting & Decorating Contractors of America",
      },
      {
        name: "Sherwin-Williams PRO Partner",
        issuer: "Sherwin-Williams",
      },
      {
        name: "Benjamin Moore Authorized",
        issuer: "Benjamin Moore & Co.",
      },
    ],
  },
  {
    title: "Roofing & Electrical",
    icon: "bolt",
    certs: [
      {
        name: "Licensed Roofing Contractor",
        issuer: "State of Ohio / Kentucky / Indiana",
      },
      { name: "Licensed Master Electrician", issuer: "State Licensing Boards" },
      { name: "HAAG Certified Inspector", issuer: "HAAG Engineering" },
      {
        name: "OSHA 30-Hour Certified",
        issuer: "Occupational Safety & Health Administration",
      },
    ],
  },
  {
    title: "Remodeling",
    icon: "house",
    certs: [
      {
        name: "Certified General Contractor",
        issuer: "State Construction Industry Licensing Board",
      },
      { name: "NKBA Member", issuer: "National Kitchen & Bath Association" },
      {
        name: "NAHB Certified",
        issuer: "National Association of Home Builders",
      },
      { name: "LEED Green Associate", issuer: "U.S. Green Building Council" },
    ],
  },
  {
    title: "Exterior Cleaning",
    icon: "droplet",
    certs: [
      {
        name: "Pressure Washing Certified",
        issuer: "Power Washers of North America",
      },
      { name: "SoftWash Systems Certified", issuer: "SoftWash Systems" },
      {
        name: "Mold Remediation Licensed",
        issuer: "State Environmental Agencies",
      },
      { name: "", issuer: "" },
    ],
  },
];

const ICON_OPTIONS = [
  { label: "Paint Roller", value: "paint-roller" },
  { label: "Bolt", value: "bolt" },
  { label: "House", value: "house" },
  { label: "Droplet", value: "droplet" },
  { label: "Shield", value: "shield" },
  { label: "Wrench", value: "wrench" },
  { label: "Award", value: "award" },
  { label: "Certificate", value: "certificate" },
];

const getIconClass = (icon) => {
  const map = {
    "paint-roller": "fa-paint-roller",
    bolt: "fa-bolt",
    house: "fa-house",
    droplet: "fa-droplet",
    shield: "fa-shield-halved",
    wrench: "fa-wrench",
    award: "fa-award",
    certificate: "fa-certificate",
  };

  return map[icon] || "fa-award";
};

registerBlockType("logiweb/custom-block-62", {
  ...metadata,
  attributes: {
    badgeText: { type: "string", default: "Industry Recognized" },
    titleStart: { type: "string", default: "Core Industry" },
    titleHighlight: { type: "string", default: "Certifications" },
    description: {
      type: "string",
      default:
        "Credentials held across every department we operate. Verified. Current. Backed by the industries we serve.",
    },
    cards: {
      type: "array",
      default: DEFAULT_CARDS,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      description,
      cards = DEFAULT_CARDS,
    } = attributes;

    const [activeCard, setActiveCard] = useState(0);

    const updateCard = (cardIndex, field, value) => {
      const next = [...cards];
      next[cardIndex] = { ...next[cardIndex], [field]: value };
      setAttributes({ cards: next });
    };

    const updateCert = (cardIndex, certIndex, field, value) => {
      const next = [...cards];
      const certs = Array.isArray(next[cardIndex]?.certs)
        ? [...next[cardIndex].certs]
        : [];

      while (certs.length <= certIndex) {
        certs.push({ name: "", issuer: "" });
      }

      certs[certIndex] = {
        ...(certs[certIndex] || { name: "", issuer: "" }),
        [field]: value,
      };

      next[cardIndex] = { ...next[cardIndex], certs };
      setAttributes({ cards: next });
    };

    const activeCerts = cards[activeCard]?.certs || [];

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
          </PanelBody>

          <PanelBody
            title={`Card ${activeCard + 1} Settings`}
            initialOpen={false}
          >
            <TextControl
              label="Card Title"
              value={cards[activeCard]?.title || ""}
              onChange={(value) => updateCard(activeCard, "title", value)}
            />
            <SelectControl
              label="Category Icon"
              value={cards[activeCard]?.icon || "award"}
              options={ICON_OPTIONS}
              onChange={(value) => updateCard(activeCard, "icon", value)}
            />

            {[0, 1, 2, 3].map((certIndex) => (
              <div
                key={certIndex}
                style={{
                  paddingTop: 10,
                  borderTop: certIndex === 0 ? "none" : "1px solid #e5e7eb",
                }}
              >
                <TextControl
                  label={`Certification ${certIndex + 1} Name`}
                  value={activeCerts[certIndex]?.name || ""}
                  onChange={(value) =>
                    updateCert(activeCard, certIndex, "name", value)
                  }
                />
                <TextControl
                  label={`Certification ${certIndex + 1} Issuer`}
                  value={activeCerts[certIndex]?.issuer || ""}
                  onChange={(value) =>
                    updateCert(activeCard, certIndex, "issuer", value)
                  }
                />
              </div>
            ))}
          </PanelBody>
        </InspectorControls>

        <section className="industry-certs">
          <div className="industry-certs-header">
            <p className="industry-certs-badge">
              <i className="fa-regular fa-circle-check" aria-hidden="true"></i>
              <span>{badgeText}</span>
            </p>

            <h2 className="industry-certs-title">
              {titleStart} <span>{titleHighlight}</span>
            </h2>

            <p className="industry-certs-description">{description}</p>
          </div>

          <div className="industry-certs-grid">
            {cards.map((card, cardIndex) => {
              const certs = (card.certs || []).filter((cert) => cert?.name);

              return (
                <article
                  key={`${card.title}-${cardIndex}`}
                  className={`industry-certs-card ${activeCard === cardIndex ? "is-active" : ""}`}
                  onClick={() => setActiveCard(cardIndex)}
                >
                  <div className="industry-certs-card-title-row">
                    <span className="industry-certs-card-icon">
                      <i
                        className={`fa-solid ${getIconClass(card.icon)}`}
                        aria-hidden="true"
                      ></i>
                    </span>
                    <RichText
                      tagName="h3"
                      className="industry-certs-card-title"
                      value={card.title}
                      onChange={(value) =>
                        updateCard(cardIndex, "title", value)
                      }
                      placeholder="Card title"
                    />
                  </div>

                  <div className="industry-certs-list">
                    {certs.map((cert, certIndex) => (
                      <div
                        className="industry-certs-item"
                        key={`${cert.name}-${certIndex}`}
                      >
                        <i
                          className="fa-regular fa-circle-check"
                          aria-hidden="true"
                        ></i>
                        <div>
                          <p className="industry-certs-item-name">
                            {cert.name}
                          </p>
                          {cert.issuer ? (
                            <p className="industry-certs-item-issuer">
                              {cert.issuer}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
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
    } = attributes;

    return (
      <section className="industry-certs">
        <div className="industry-certs-header">
          <p className="industry-certs-badge">
            <i className="fa-regular fa-circle-check" aria-hidden="true"></i>
            <span>{badgeText}</span>
          </p>

          <h2 className="industry-certs-title">
            {titleStart} <span>{titleHighlight}</span>
          </h2>

          <p className="industry-certs-description">{description}</p>
        </div>

        <div className="industry-certs-grid">
          {cards.map((card, cardIndex) => {
            const certs = (card.certs || []).filter((cert) => cert?.name);

            return (
              <article
                key={`${card.title}-${cardIndex}`}
                className="industry-certs-card"
              >
                <div className="industry-certs-card-title-row">
                  <span className="industry-certs-card-icon">
                    <i
                      className={`fa-solid ${getIconClass(card.icon)}`}
                      aria-hidden="true"
                    ></i>
                  </span>
                  <h3 className="industry-certs-card-title">{card.title}</h3>
                </div>

                <div className="industry-certs-list">
                  {certs.map((cert, certIndex) => (
                    <div
                      className="industry-certs-item"
                      key={`${cert.name}-${certIndex}`}
                    >
                      <i
                        className="fa-regular fa-circle-check"
                        aria-hidden="true"
                      ></i>
                      <div>
                        <p className="industry-certs-item-name">{cert.name}</p>
                        {cert.issuer ? (
                          <p className="industry-certs-item-issuer">
                            {cert.issuer}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  },
});
