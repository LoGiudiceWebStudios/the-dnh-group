import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import {
  Button,
  PanelBody,
  PanelRow,
  TextControl,
  TextareaControl,
} from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_STATS = [
  {
    value: "0%",
    label: "Promotional APR Available",
  },
  {
    value: "Same Day",
    label: "Approval Decision",
  },
  {
    value: "6+",
    label: "Financing Partners",
  },
  {
    value: "No",
    label: "Prepayment Penalties",
  },
];

registerBlockType(metadata.name, {
  ...metadata,
  attributes: {
    badge: { type: "string", default: "FINANCING OPTIONS" },
    titleLine1: { type: "string", default: "Financing Made" },
    titleLine2: { type: "string", default: "Simple" },
    description: {
      type: "string",
      default:
        "Transform your home without the stress. We partner with leading lenders to offer flexible financing options that fit your budget.",
    },
    primaryCtaText: { type: "string", default: "Apply Now" },
    primaryCtaUrl: { type: "string", default: "#" },
    secondaryCtaText: { type: "string", default: "Calculate Payment" },
    secondaryCtaUrl: { type: "string", default: "#" },
    stats: { type: "array", default: DEFAULT_STATS },
  },

  edit({ attributes, setAttributes }) {
    const {
      badge,
      titleLine1,
      titleLine2,
      description,
      primaryCtaText,
      primaryCtaUrl,
      secondaryCtaText,
      secondaryCtaUrl,
      stats,
    } = attributes;

    const safeStats =
      Array.isArray(stats) && stats.length ? stats : DEFAULT_STATS;

    const blockProps = useBlockProps({ className: "financing-simple-block" });

    const updateStat = (index, key, value) => {
      const next = safeStats.map((stat, i) =>
        i === index ? { ...stat, [key]: value } : stat,
      );
      setAttributes({ stats: next });
    };

    const addStat = () => {
      setAttributes({
        stats: [
          ...safeStats,
          {
            value: "New Value",
            label: "New label",
          },
        ],
      });
    };

    const removeStat = (index) => {
      if (safeStats.length <= 1) {
        return;
      }
      setAttributes({ stats: safeStats.filter((_, i) => i !== index) });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Header" initialOpen={true}>
            <TextControl
              label="Badge"
              value={badge}
              onChange={(value) => setAttributes({ badge: value })}
            />
            <TextControl
              label="Title line 1"
              value={titleLine1}
              onChange={(value) => setAttributes({ titleLine1: value })}
            />
            <TextControl
              label="Title line 2"
              value={titleLine2}
              onChange={(value) => setAttributes({ titleLine2: value })}
            />
            <TextareaControl
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
            />
          </PanelBody>

          <PanelBody title="Primary CTA" initialOpen={false}>
            <TextControl
              label="Text"
              value={primaryCtaText}
              onChange={(value) => setAttributes({ primaryCtaText: value })}
            />
            <TextControl
              label="URL"
              value={primaryCtaUrl}
              onChange={(value) => setAttributes({ primaryCtaUrl: value })}
            />
          </PanelBody>

          <PanelBody title="Secondary CTA" initialOpen={false}>
            <TextControl
              label="Text"
              value={secondaryCtaText}
              onChange={(value) => setAttributes({ secondaryCtaText: value })}
            />
            <TextControl
              label="URL"
              value={secondaryCtaUrl}
              onChange={(value) => setAttributes({ secondaryCtaUrl: value })}
            />
          </PanelBody>

          {safeStats.map((stat, index) => (
            <PanelBody
              key={index}
              title={`Stat ${index + 1}`}
              initialOpen={index === 0}
            >
              <TextControl
                label="Value"
                value={stat.value || ""}
                onChange={(value) => updateStat(index, "value", value)}
              />
              <TextControl
                label="Label"
                value={stat.label || ""}
                onChange={(value) => updateStat(index, "label", value)}
              />
              <PanelRow>
                <Button
                  isDestructive
                  isSmall
                  onClick={() => removeStat(index)}
                  disabled={safeStats.length <= 1}
                >
                  Remove stat
                </Button>
              </PanelRow>
            </PanelBody>
          ))}

          <PanelBody title="Actions" initialOpen={false}>
            <Button isPrimary isSmall onClick={addStat}>
              + Add stat
            </Button>
          </PanelBody>
        </InspectorControls>

        <section {...blockProps}>
          <div className="financing-simple-inner">
            <div className="financing-simple-content">
              <p className="financing-simple-badge">{badge}</p>

              <h2 className="financing-simple-title">
                <RichText
                  tagName="span"
                  value={titleLine1}
                  onChange={(value) => setAttributes({ titleLine1: value })}
                  placeholder="Title line 1"
                />
                <br />
                <RichText
                  tagName="span"
                  value={titleLine2}
                  onChange={(value) => setAttributes({ titleLine2: value })}
                  placeholder="Title line 2"
                />
              </h2>

              <RichText
                tagName="p"
                className="financing-simple-description"
                value={description}
                onChange={(value) => setAttributes({ description: value })}
                placeholder="Description"
              />

              <div className="financing-simple-actions">
                <a
                  href={primaryCtaUrl || "#"}
                  className="financing-simple-btn financing-simple-btn-primary"
                >
                  {primaryCtaText}
                  <span aria-hidden="true">→</span>
                </a>

                <a
                  href={secondaryCtaUrl || "#"}
                  className="financing-simple-btn financing-simple-btn-secondary"
                >
                  {secondaryCtaText}
                </a>
              </div>
            </div>

            <div className="financing-simple-stats-grid">
              {safeStats.map((stat, index) => (
                <article key={index} className="financing-simple-stat-card">
                  <h3 className="financing-simple-stat-value">{stat.value}</h3>
                  <p className="financing-simple-stat-label">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  },

  save({ attributes }) {
    const {
      badge,
      titleLine1,
      titleLine2,
      description,
      primaryCtaText,
      primaryCtaUrl,
      secondaryCtaText,
      secondaryCtaUrl,
      stats,
    } = attributes;

    const safeStats =
      Array.isArray(stats) && stats.length ? stats : DEFAULT_STATS;

    return (
      <section className="financing-simple-block">
        <div className="financing-simple-inner">
          <div className="financing-simple-content">
            <p className="financing-simple-badge">{badge}</p>
            <h2 className="financing-simple-title">
              <RichText.Content value={titleLine1} />
              <br />
              <RichText.Content value={titleLine2} />
            </h2>
            <p className="financing-simple-description">
              <RichText.Content value={description} />
            </p>

            <div className="financing-simple-actions">
              <a
                href={primaryCtaUrl || "#"}
                className="financing-simple-btn financing-simple-btn-primary"
              >
                {primaryCtaText}
                <span aria-hidden="true">→</span>
              </a>

              <a
                href={secondaryCtaUrl || "#"}
                className="financing-simple-btn financing-simple-btn-secondary"
              >
                {secondaryCtaText}
              </a>
            </div>
          </div>

          <div className="financing-simple-stats-grid">
            {safeStats.map((stat, index) => (
              <article key={index} className="financing-simple-stat-card">
                <h3 className="financing-simple-stat-value">{stat.value}</h3>
                <p className="financing-simple-stat-label">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
