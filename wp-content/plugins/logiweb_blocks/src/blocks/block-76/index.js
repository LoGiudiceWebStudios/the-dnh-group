import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_STATS = [
  {
    value: "8+",
    label: "Years Experience",
    icon: "fa-solid fa-clock",
    iconBg: "#6c63ff",
  },
  {
    value: "1,416+",
    label: "Projects Completed",
    icon: "fa-solid fa-check",
    iconBg: "#43c068",
  },
  {
    value: "55%",
    label: "Client Satisfaction",
    icon: "fa-solid fa-user-group",
    iconBg: "#a855f7",
  },
  {
    value: "28+",
    label: "Industry Awards",
    icon: "fa-solid fa-trophy",
    iconBg: "#f59e0b",
  },
];

const DEFAULT_FEATURES = [
  {
    title: "Licensed & Insured",
    badge: "$2M Liability Coverage",
    badgeColor: "green",
    icon: "fa-solid fa-shield-halved",
    description:
      "Full coverage protection for your peace of mind. Every project is backed by comprehensive insurance.",
  },
  {
    title: "On-Time Guarantee",
    badge: "98% On-Time Rate",
    badgeColor: "blue",
    icon: "fa-regular fa-clock",
    description:
      "We respect your time. Projects completed on schedule or we discount 10% per day late.",
  },
  {
    title: "No Hidden Fees",
    badge: "Fixed Price Promise",
    badgeColor: "green",
    icon: "fa-solid fa-circle-check",
    description:
      "Transparent pricing from day one. What we quote is what you pay. No surprises, ever.",
  },
  {
    title: "5-Year Warranty",
    badge: "Best in Industry",
    badgeColor: "blue",
    icon: "fa-solid fa-star",
    description:
      "Our work is built to last. Every project comes with an industry-leading warranty.",
  },
];

registerBlockType(metadata.name, {
  ...metadata,
  attributes: {
    eyebrow: { type: "string", default: "Why Choose Us" },
    title: { type: "string", default: "The DNH Difference" },
    titleHighlight: { type: "string", default: "Difference" },
    description: {
      type: "string",
      default:
        "We're not just another contractor. We're your partners in creating the home you've always wanted.",
    },
    stats: { type: "array", default: DEFAULT_STATS },
    features: { type: "array", default: DEFAULT_FEATURES },
  },

  edit({ attributes, setAttributes }) {
    const { eyebrow, title, titleHighlight, description, stats, features } =
      attributes;
    const blockProps = useBlockProps({ className: "dnh-difference-block" });

    const updateStat = (idx, key, val) => {
      const next = stats.map((s, i) => (i === idx ? { ...s, [key]: val } : s));
      setAttributes({ stats: next });
    };

    const updateFeature = (idx, key, val) => {
      const next = features.map((f, i) =>
        i === idx ? { ...f, [key]: val } : f,
      );
      setAttributes({ features: next });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Section Header" initialOpen>
            <TextControl
              label="Eyebrow"
              value={eyebrow}
              onChange={(v) => setAttributes({ eyebrow: v })}
            />
            <TextControl
              label="Title"
              value={title}
              onChange={(v) => setAttributes({ title: v })}
            />
            <TextControl
              label="Highlighted word"
              value={titleHighlight}
              onChange={(v) => setAttributes({ titleHighlight: v })}
            />
            <TextControl
              label="Description"
              value={description}
              onChange={(v) => setAttributes({ description: v })}
            />
          </PanelBody>

          {stats.map((stat, i) => (
            <PanelBody
              key={i}
              title={`Stat ${i + 1}: ${stat.value}`}
              initialOpen={false}
            >
              <TextControl
                label="Value"
                value={stat.value}
                onChange={(v) => updateStat(i, "value", v)}
              />
              <TextControl
                label="Label"
                value={stat.label}
                onChange={(v) => updateStat(i, "label", v)}
              />
              <TextControl
                label="Icon class"
                value={stat.icon}
                onChange={(v) => updateStat(i, "icon", v)}
              />
              <TextControl
                label="Icon bg color"
                value={stat.iconBg}
                onChange={(v) => updateStat(i, "iconBg", v)}
              />
            </PanelBody>
          ))}

          {features.map((feat, i) => (
            <PanelBody
              key={i}
              title={`Feature ${i + 1}: ${feat.title}`}
              initialOpen={false}
            >
              <TextControl
                label="Title"
                value={feat.title}
                onChange={(v) => updateFeature(i, "title", v)}
              />
              <TextControl
                label="Badge text"
                value={feat.badge}
                onChange={(v) => updateFeature(i, "badge", v)}
              />
              <TextControl
                label="Badge color (green/blue)"
                value={feat.badgeColor}
                onChange={(v) => updateFeature(i, "badgeColor", v)}
              />
              <TextControl
                label="Icon class"
                value={feat.icon}
                onChange={(v) => updateFeature(i, "icon", v)}
              />
              <TextControl
                label="Description"
                value={feat.description}
                onChange={(v) => updateFeature(i, "description", v)}
              />
            </PanelBody>
          ))}
        </InspectorControls>

        <div {...blockProps}>
          <div className="dnh-difference-inner">
            {/* Header */}
            <div className="dnh-difference-header">
              <span className="dnh-difference-eyebrow">{eyebrow}</span>
              <h2 className="dnh-difference-title">
                {title.replace(titleHighlight, "").trim()}{" "}
                <span className="dnh-difference-highlight">
                  {titleHighlight}
                </span>
              </h2>
              <p className="dnh-difference-desc">{description}</p>
            </div>

            {/* Stats */}
            <div className="dnh-difference-stats">
              {stats.map((stat, i) => (
                <div key={i} className="dnh-difference-stat">
                  <span
                    className="dnh-difference-stat-icon"
                    style={{ background: stat.iconBg }}
                  >
                    <i className={stat.icon}></i>
                  </span>
                  <span className="dnh-difference-stat-value">
                    {stat.value}
                  </span>
                  <span className="dnh-difference-stat-label">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="dnh-difference-features">
              {features.map((feat, i) => (
                <div key={i} className="dnh-difference-feature-card">
                  <div className="dnh-difference-feature-top">
                    <span className="dnh-difference-feature-icon-wrap">
                      <i className={feat.icon}></i>
                    </span>
                    <span className="dnh-difference-feature-title">
                      {feat.title}
                    </span>
                    <span
                      className={`dnh-difference-feature-badge dnh-badge--${feat.badgeColor}`}
                    >
                      {feat.badge}
                    </span>
                  </div>
                  <p className="dnh-difference-feature-desc">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  },

  save({ attributes }) {
    const { eyebrow, title, titleHighlight, description, stats, features } =
      attributes;
    const blockProps = useBlockProps.save({
      className: "dnh-difference-block fade-in-on-scroll",
    });

    const titleBefore = title.replace(titleHighlight, "").trim();

    return (
      <div {...blockProps}>
        <div className="dnh-difference-inner">
          {/* Header */}
          <div className="dnh-difference-header">
            <span className="dnh-difference-eyebrow">{eyebrow}</span>
            <h2 className="dnh-difference-title">
              {titleBefore}{" "}
              <span className="dnh-difference-highlight">{titleHighlight}</span>
            </h2>
            <p className="dnh-difference-desc">{description}</p>
          </div>

          {/* Stats */}
          <div className="dnh-difference-stats">
            {stats.map((stat, i) => (
              <div key={i} className="dnh-difference-stat">
                <span
                  className="dnh-difference-stat-icon"
                  style={{ background: stat.iconBg }}
                >
                  <i className={stat.icon}></i>
                </span>
                <span className="dnh-difference-stat-value">{stat.value}</span>
                <span className="dnh-difference-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="dnh-difference-features">
            {features.map((feat, i) => (
              <div key={i} className="dnh-difference-feature-card">
                <div className="dnh-difference-feature-top">
                  <span className="dnh-difference-feature-icon-wrap">
                    <i className={feat.icon}></i>
                  </span>
                  <span className="dnh-difference-feature-title">
                    {feat.title}
                  </span>
                  <span
                    className={`dnh-difference-feature-badge dnh-badge--${feat.badgeColor}`}
                  >
                    {feat.badge}
                  </span>
                </div>
                <p className="dnh-difference-feature-desc">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
});
