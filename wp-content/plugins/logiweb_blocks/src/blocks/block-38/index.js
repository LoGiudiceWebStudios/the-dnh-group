import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";
import metadata from "./block.json";
import "../../global-styles.scss";

const DEFAULT_PARTNERS = [
  {
    name: "GreenSky",
    minScore: "640+",
    aprRange: "0% - 12.99%",
    terms: "12 - 120 months",
    feature: "Same-day approval",
    accentColor: "#56a160",
    cardTint: "#edf9ef",
    scoreTint: "#e9f8ea",
    darkCard: false,
  },
  {
    name: "Synchrony",
    minScore: "600+",
    aprRange: "0% - 14.99%",
    terms: "6 - 84 months",
    feature: "Promotional financing",
    accentColor: "#5d74df",
    cardTint: "#eff2ff",
    scoreTint: "#edf2ff",
    darkCard: false,
  },
  {
    name: "Wells Fargo",
    minScore: "660+",
    aprRange: "6.99% - 15.99%",
    terms: "24 - 144 months",
    feature: "High loan limits",
    accentColor: "#cc4f5e",
    cardTint: "#fdeff1",
    scoreTint: "#fdeef1",
    darkCard: false,
  },
  {
    name: "EnerBank",
    minScore: "620+",
    aprRange: "8.99% - 17.99%",
    terms: "12 - 180 months",
    feature: "Home improvement focus",
    accentColor: "#d07a3f",
    cardTint: "#fff3e9",
    scoreTint: "#fff2e8",
    darkCard: false,
  },
  {
    name: "Service Finance",
    minScore: "580+",
    aprRange: "9.99% - 21.99%",
    terms: "12 - 96 months",
    feature: "Flexible credit options",
    accentColor: "#8b63de",
    cardTint: "#f4eeff",
    scoreTint: "#f5efff",
    darkCard: false,
  },
  {
    name: "DNH In-House",
    minScore: "No Minimum",
    aprRange: "Varies",
    terms: "Custom",
    feature: "Personalized solutions",
    accentColor: "#d0d957",
    cardTint: "#233f8a",
    scoreTint: "#395198",
    darkCard: true,
  },
];

const DEFAULT_TRUST_ITEMS = [
  {
    icon: "fa-solid fa-shield-halved",
    title: "Bank-Level Security",
    text: "Your data is protected",
    color: "#58c279",
    bg: "#ebfaf0",
  },
  {
    icon: "fa-regular fa-clock",
    title: "Fast Approval",
    text: "Decisions in minutes",
    color: "#5f82ec",
    bg: "#eff3ff",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Build Credit",
    text: "Improve your score",
    color: "#9265e3",
    bg: "#f3edff",
  },
];

registerBlockType("logiweb/custom-block-38", {
  ...metadata,
  attributes: {
    badge: { type: "string", default: "Trusted Partners" },
    titleStart: { type: "string", default: "Our Financing" },
    titleHighlight: { type: "string", default: "Partners" },
    description: {
      type: "string",
      default:
        "We partner with industry-leading lenders to offer you competitive rates and flexible terms that fit your budget.",
    },
    partners: { type: "array", default: DEFAULT_PARTNERS },
    trustItems: { type: "array", default: DEFAULT_TRUST_ITEMS },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      badge,
      titleStart,
      titleHighlight,
      description,
      partners = [],
      trustItems = [],
    } = attributes;

    const updatePartner = (index, field, value) => {
      const next = [...partners];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ partners: next });
    };

    const updateTrustItem = (index, field, value) => {
      const next = [...trustItems];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ trustItems: next });
    };

    return (
      <div className="financing-partners-editor">
        <InspectorControls>
          <PanelBody title="Header" initialOpen={true}>
            <TextControl
              label="Badge"
              value={badge}
              onChange={(value) => setAttributes({ badge: value })}
            />
          </PanelBody>

          <PanelBody
            title={`Partners (${partners.length})`}
            initialOpen={false}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "0.95rem",
                  borderBottom: "1px solid #e4e7ef",
                  paddingBottom: "0.95rem",
                }}
              >
                <TextControl
                  label={`Partner ${index + 1} Name`}
                  value={partner.name}
                  onChange={(value) => updatePartner(index, "name", value)}
                />
                <TextControl
                  label="Accent Color"
                  value={partner.accentColor}
                  onChange={(value) =>
                    updatePartner(index, "accentColor", value)
                  }
                />
                <TextControl
                  label="Card Tint"
                  value={partner.cardTint}
                  onChange={(value) => updatePartner(index, "cardTint", value)}
                />
                <TextControl
                  label="Score Pill Tint"
                  value={partner.scoreTint}
                  onChange={(value) => updatePartner(index, "scoreTint", value)}
                />
                <ToggleControl
                  label="Featured Dark Card"
                  checked={!!partner.darkCard}
                  onChange={(value) => updatePartner(index, "darkCard", value)}
                />
              </div>
            ))}
          </PanelBody>

          <PanelBody
            title={`Trust Items (${trustItems.length})`}
            initialOpen={false}
          >
            {trustItems.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "0.95rem",
                  borderBottom: "1px solid #e4e7ef",
                  paddingBottom: "0.95rem",
                }}
              >
                <TextControl
                  label={`Item ${index + 1} Icon Class`}
                  value={item.icon}
                  onChange={(value) => updateTrustItem(index, "icon", value)}
                />
                <TextControl
                  label="Color"
                  value={item.color}
                  onChange={(value) => updateTrustItem(index, "color", value)}
                />
                <TextControl
                  label="Background"
                  value={item.bg}
                  onChange={(value) => updateTrustItem(index, "bg", value)}
                />
              </div>
            ))}
          </PanelBody>
        </InspectorControls>

        <section className="financing-partners-block">
          <div className="financing-partners-inner">
            <p className="financing-partners-badge">{badge}</p>
            <h2 className="financing-partners-title">
              <RichText
                tagName="span"
                value={titleStart}
                onChange={(value) => setAttributes({ titleStart: value })}
                placeholder="Our Financing"
              />{" "}
              <span className="financing-partners-highlight">
                <RichText
                  tagName="span"
                  value={titleHighlight}
                  onChange={(value) => setAttributes({ titleHighlight: value })}
                  placeholder="Partners"
                />
              </span>
            </h2>
            <RichText
              tagName="p"
              className="financing-partners-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Section description"
            />

            <div className="financing-partners-grid">
              {partners.map((partner, index) => (
                <article
                  className={`financing-partner-card ${
                    partner.darkCard ? "is-dark" : ""
                  }`}
                  key={index}
                >
                  <div
                    className="financing-partner-name"
                    style={{
                      backgroundColor: partner.darkCard
                        ? "rgba(255,255,255,0.1)"
                        : partner.cardTint || "#eef3ff",
                      color: partner.darkCard
                        ? "#ffffff"
                        : partner.accentColor || "#4f68d9",
                    }}
                  >
                    <RichText
                      tagName="h3"
                      value={partner.name}
                      onChange={(value) => updatePartner(index, "name", value)}
                      placeholder="Partner name"
                    />
                  </div>

                  <div className="financing-partner-stats">
                    <div className="financing-partner-row">
                      <span>Min. Credit Score</span>
                      <span
                        className="value-pill"
                        style={{
                          backgroundColor: partner.darkCard
                            ? "rgba(255,255,255,0.2)"
                            : partner.scoreTint || "#eff3ff",
                          color: partner.darkCard
                            ? "#ffffff"
                            : partner.accentColor || "#4f68d9",
                        }}
                      >
                        <RichText
                          tagName="span"
                          value={partner.minScore}
                          onChange={(value) =>
                            updatePartner(index, "minScore", value)
                          }
                          placeholder="Credit score"
                        />
                      </span>
                    </div>
                    <div className="financing-partner-row">
                      <span>APR Range</span>
                      <RichText
                        tagName="strong"
                        value={partner.aprRange}
                        onChange={(value) =>
                          updatePartner(index, "aprRange", value)
                        }
                        placeholder="APR"
                      />
                    </div>
                    <div className="financing-partner-row">
                      <span>Terms</span>
                      <RichText
                        tagName="strong"
                        value={partner.terms}
                        onChange={(value) =>
                          updatePartner(index, "terms", value)
                        }
                        placeholder="Terms"
                      />
                    </div>
                  </div>

                  <div className="financing-partner-note">
                    <span
                      className="dot"
                      style={{
                        backgroundColor: partner.darkCard
                          ? "#d0d957"
                          : partner.accentColor || "#4f68d9",
                      }}
                    ></span>
                    <RichText
                      tagName="p"
                      value={partner.feature}
                      onChange={(value) =>
                        updatePartner(index, "feature", value)
                      }
                      placeholder="Feature"
                    />
                  </div>
                </article>
              ))}
            </div>

            <div className="financing-partners-trust-row">
              {trustItems.map((item, index) => (
                <div className="financing-trust-item" key={index}>
                  <span
                    className="trust-icon"
                    style={{
                      color: item.color || "#5f82ec",
                      backgroundColor: item.bg || "#eff3ff",
                    }}
                  >
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <RichText
                      tagName="h4"
                      value={item.title}
                      onChange={(value) =>
                        updateTrustItem(index, "title", value)
                      }
                      placeholder="Title"
                    />
                    <RichText
                      tagName="p"
                      value={item.text}
                      onChange={(value) =>
                        updateTrustItem(index, "text", value)
                      }
                      placeholder="Text"
                    />
                  </div>
                </div>
              ))}
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
      partners = [],
      trustItems = [],
    } = attributes;

    return (
      <section className="financing-partners-block">
        <div className="financing-partners-inner">
          <p className="financing-partners-badge">{badge}</p>
          <h2 className="financing-partners-title">
            <RichText.Content value={titleStart} />{" "}
            <span className="financing-partners-highlight">
              <RichText.Content value={titleHighlight} />
            </span>
          </h2>
          <RichText.Content
            tagName="p"
            className="financing-partners-description"
            value={description}
          />

          <div className="financing-partners-grid">
            {partners.map((partner, index) => (
              <article
                className={`financing-partner-card ${
                  partner.darkCard ? "is-dark" : ""
                }`}
                key={index}
              >
                <div
                  className="financing-partner-name"
                  style={{
                    backgroundColor: partner.darkCard
                      ? "rgba(255,255,255,0.1)"
                      : partner.cardTint || "#eef3ff",
                    color: partner.darkCard
                      ? "#ffffff"
                      : partner.accentColor || "#4f68d9",
                  }}
                >
                  <h3>
                    <RichText.Content value={partner.name} />
                  </h3>
                </div>

                <div className="financing-partner-stats">
                  <div className="financing-partner-row">
                    <span>Min. Credit Score</span>
                    <span
                      className="value-pill"
                      style={{
                        backgroundColor: partner.darkCard
                          ? "rgba(255,255,255,0.2)"
                          : partner.scoreTint || "#eff3ff",
                        color: partner.darkCard
                          ? "#ffffff"
                          : partner.accentColor || "#4f68d9",
                      }}
                    >
                      <RichText.Content value={partner.minScore} />
                    </span>
                  </div>
                  <div className="financing-partner-row">
                    <span>APR Range</span>
                    <strong>
                      <RichText.Content value={partner.aprRange} />
                    </strong>
                  </div>
                  <div className="financing-partner-row">
                    <span>Terms</span>
                    <strong>
                      <RichText.Content value={partner.terms} />
                    </strong>
                  </div>
                </div>

                <div className="financing-partner-note">
                  <span
                    className="dot"
                    style={{
                      backgroundColor: partner.darkCard
                        ? "#d0d957"
                        : partner.accentColor || "#4f68d9",
                    }}
                  ></span>
                  <RichText.Content tagName="p" value={partner.feature} />
                </div>
              </article>
            ))}
          </div>

          <div className="financing-partners-trust-row">
            {trustItems.map((item, index) => (
              <div className="financing-trust-item" key={index}>
                <span
                  className="trust-icon"
                  style={{
                    color: item.color || "#5f82ec",
                    backgroundColor: item.bg || "#eff3ff",
                  }}
                >
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h4>
                    <RichText.Content value={item.title} />
                  </h4>
                  <RichText.Content tagName="p" value={item.text} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
