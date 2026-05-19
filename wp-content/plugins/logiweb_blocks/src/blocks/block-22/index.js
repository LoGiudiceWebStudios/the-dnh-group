import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_STATS = [
  { value: "24h", label: "Response Time" },
  { value: "Free", label: "Consultation" },
  { value: "100%", label: "Satisfaction" },
];

registerBlockType("logiweb/custom-block-22", {
  title: "CTA Hero - Let's Work Together",
  icon: "megaphone",
  category: "widgets",
  attributes: {
    badgeText: { type: "string", default: "Start Your Project Today" },
    titleStart: { type: "string", default: "Let's Work" },
    titleHighlight: { type: "string", default: "Together" },
    description: {
      type: "string",
      default:
        "Ready to transform your digital presence? Get in touch with us and let's discuss how we can help bring your vision to life.",
    },
    primaryBtnText: { type: "string", default: "Start a Project" },
    primaryBtnUrl: { type: "string", default: "#" },
    secondaryBtnText: { type: "string", default: "View Our Work" },
    secondaryBtnUrl: { type: "string", default: "#" },
    stats: { type: "array", default: DEFAULT_STATS },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      description,
      primaryBtnText,
      primaryBtnUrl,
      secondaryBtnText,
      secondaryBtnUrl,
      stats,
    } = attributes;

    const updateStat = (index, field, value) => {
      const next = [...stats];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ stats: next });
    };

    return (
      <div className="cta-hero-editor">
        <InspectorControls>
          <PanelBody title="Badge" initialOpen={true}>
            <TextControl
              label="Badge Text"
              value={badgeText}
              onChange={(v) => setAttributes({ badgeText: v })}
            />
          </PanelBody>
          <PanelBody title="Title" initialOpen={true}>
            <TextControl
              label="Title — Start"
              value={titleStart}
              onChange={(v) => setAttributes({ titleStart: v })}
            />
            <TextControl
              label="Title — Highlight (blue)"
              value={titleHighlight}
              onChange={(v) => setAttributes({ titleHighlight: v })}
            />
          </PanelBody>
          <PanelBody title="Buttons" initialOpen={false}>
            <TextControl
              label="Primary Button Text"
              value={primaryBtnText}
              onChange={(v) => setAttributes({ primaryBtnText: v })}
            />
            <TextControl
              label="Primary Button URL"
              value={primaryBtnUrl}
              onChange={(v) => setAttributes({ primaryBtnUrl: v })}
            />
            <TextControl
              label="Secondary Button Text"
              value={secondaryBtnText}
              onChange={(v) => setAttributes({ secondaryBtnText: v })}
            />
            <TextControl
              label="Secondary Button URL"
              value={secondaryBtnUrl}
              onChange={(v) => setAttributes({ secondaryBtnUrl: v })}
            />
          </PanelBody>
          <PanelBody title="Stats" initialOpen={false}>
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <TextControl
                  label={`Stat ${i + 1} — Value`}
                  value={stat.value}
                  onChange={(v) => updateStat(i, "value", v)}
                />
                <TextControl
                  label={`Stat ${i + 1} — Label`}
                  value={stat.label}
                  onChange={(v) => updateStat(i, "label", v)}
                />
              </div>
            ))}
          </PanelBody>
        </InspectorControls>

        <section className="cta-hero">
          <div className="cta-hero-bg-glow"></div>
          <div className="cta-hero-dots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="cta-hero-inner">
            <div className="cta-hero-badge">
              <i className="fa-solid fa-circle-dot"></i>
              {badgeText}
            </div>

            <h2 className="cta-hero-title">
              <RichText
                tagName="span"
                value={titleStart}
                onChange={(v) => setAttributes({ titleStart: v })}
                placeholder="Title start"
              />{" "}
              <span className="cta-hero-highlight">
                <RichText
                  tagName="span"
                  value={titleHighlight}
                  onChange={(v) => setAttributes({ titleHighlight: v })}
                  placeholder="Highlight"
                />
              </span>
            </h2>

            <RichText
              tagName="p"
              className="cta-hero-description"
              value={description}
              onChange={(v) => setAttributes({ description: v })}
              placeholder="Add description"
            />

            <div className="cta-hero-actions">
              <a href={primaryBtnUrl} className="cta-hero-btn-primary">
                {primaryBtnText} <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href={secondaryBtnUrl} className="cta-hero-btn-secondary">
                {secondaryBtnText}
              </a>
            </div>

            <div className="cta-hero-divider"></div>

            <div className="cta-hero-stats">
              {stats.map((stat, i) => (
                <div key={i} className="cta-hero-stat">
                  <span className="cta-hero-stat-value">{stat.value}</span>
                  <span className="cta-hero-stat-label">{stat.label}</span>
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
      badgeText,
      titleStart,
      titleHighlight,
      description,
      primaryBtnText,
      primaryBtnUrl,
      secondaryBtnText,
      secondaryBtnUrl,
      stats,
    } = attributes;

    return (
      <section className="cta-hero fade-in-on-scroll">
        <div className="cta-hero-bg-glow"></div>
        <div className="cta-hero-dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="cta-hero-inner">
          <div className="cta-hero-badge">
            <i className="fa-solid fa-circle-dot"></i>
            {badgeText}
          </div>

          <h2 className="cta-hero-title">
            {titleStart}{" "}
            <span className="cta-hero-highlight">{titleHighlight}</span>
          </h2>

          <p className="cta-hero-description">{description}</p>

          <div className="cta-hero-actions">
            <a href={primaryBtnUrl} className="cta-hero-btn-primary">
              {primaryBtnText} <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href={secondaryBtnUrl} className="cta-hero-btn-secondary">
              {secondaryBtnText}
            </a>
          </div>

          <div className="cta-hero-divider"></div>

          <div className="cta-hero-stats">
            {stats.map((stat, i) => (
              <div key={i} className="cta-hero-stat">
                <span className="cta-hero-stat-value">{stat.value}</span>
                <span className="cta-hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
