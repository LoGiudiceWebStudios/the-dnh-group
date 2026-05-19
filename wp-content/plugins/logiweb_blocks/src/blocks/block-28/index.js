import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_STATS = [
  { value: "150+", label: "Team Members" },
  { value: "25+", label: "Certified Professionals" },
  { value: "15", label: "Avg. Years Experience" },
  { value: "98%", label: "Employee Retention" },
];

registerBlockType("logiweb/custom-block-28", {
  ...metadata,
  attributes: {
    stats: {
      type: "array",
      default: DEFAULT_STATS,
    },
    ctaTitle: {
      type: "string",
      default: "Want to Join Our Team?",
    },
    ctaDescription: {
      type: "string",
      default:
        "We're always looking for talented, dedicated professionals who share our passion for excellence.",
    },
    ctaButtonText: {
      type: "string",
      default: "View Career Opportunities",
    },
    ctaButtonUrl: {
      type: "string",
      default: "#",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { stats, ctaTitle, ctaDescription, ctaButtonText, ctaButtonUrl } =
      attributes;

    const updateStat = (index, field, value) => {
      const next = [...stats];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ stats: next });
    };

    const addStat = () => {
      setAttributes({
        stats: [...stats, { value: "10+", label: "New Stat" }],
      });
    };

    const removeStat = (index) => {
      if (stats.length <= 1) {
        return;
      }
      setAttributes({ stats: stats.filter((_, i) => i !== index) });
    };

    return (
      <div className="team-join-cta-editor">
        <InspectorControls>
          <PanelBody title={`Stats (${stats.length})`} initialOpen={true}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <TextControl
                  label={`Stat ${index + 1} Value`}
                  value={stat.value}
                  onChange={(value) => updateStat(index, "value", value)}
                />
                <TextControl
                  label={`Stat ${index + 1} Label`}
                  value={stat.label}
                  onChange={(value) => updateStat(index, "label", value)}
                />
                <Button
                  isSecondary
                  isDestructive
                  isSmall
                  disabled={stats.length <= 1}
                  onClick={() => removeStat(index)}
                >
                  Remove stat
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addStat}>
              Add stat
            </Button>
          </PanelBody>

          <PanelBody title="CTA Content" initialOpen={false}>
            <TextControl
              label="CTA Title"
              value={ctaTitle}
              onChange={(value) => setAttributes({ ctaTitle: value })}
            />
            <TextControl
              label="CTA Description"
              value={ctaDescription}
              onChange={(value) => setAttributes({ ctaDescription: value })}
            />
            <TextControl
              label="Button Text"
              value={ctaButtonText}
              onChange={(value) => setAttributes({ ctaButtonText: value })}
            />
            <TextControl
              label="Button URL"
              value={ctaButtonUrl}
              onChange={(value) => setAttributes({ ctaButtonUrl: value })}
            />
          </PanelBody>
        </InspectorControls>

        <section className="team-join-cta-block">
          <div className="team-join-stats-row" data-count-group>
            {stats.map((stat, index) => (
              <div className="team-join-stat" key={index}>
                <RichText
                  tagName="p"
                  className="team-join-stat-value"
                  value={stat.value}
                  onChange={(value) => updateStat(index, "value", value)}
                  placeholder="150+"
                />
                <RichText
                  tagName="p"
                  className="team-join-stat-label"
                  value={stat.label}
                  onChange={(value) => updateStat(index, "label", value)}
                  placeholder="Stat label"
                />
              </div>
            ))}
          </div>

          <div className="team-join-cta-panel">
            <RichText
              tagName="h2"
              className="team-join-cta-title"
              value={ctaTitle}
              onChange={(value) => setAttributes({ ctaTitle: value })}
              placeholder="CTA title"
            />
            <RichText
              tagName="p"
              className="team-join-cta-description"
              value={ctaDescription}
              onChange={(value) => setAttributes({ ctaDescription: value })}
              placeholder="CTA description"
            />
            <a href={ctaButtonUrl || "#"} className="team-join-cta-button">
              {ctaButtonText}
            </a>
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const { stats, ctaTitle, ctaDescription, ctaButtonText, ctaButtonUrl } =
      attributes;

    return (
      <section
        className="team-join-cta-block fade-in-on-scroll"
        data-block="team-join-cta"
      >
        <div className="team-join-stats-row" data-count-group>
          {stats.map((stat, index) => (
            <div className="team-join-stat" key={index}>
              <p className="team-join-stat-value" data-count={stat.value}>
                {stat.value}
              </p>
              <p className="team-join-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="team-join-cta-panel">
          <h2 className="team-join-cta-title">{ctaTitle}</h2>
          <p className="team-join-cta-description">{ctaDescription}</p>
          <a href={ctaButtonUrl || "#"} className="team-join-cta-button">
            {ctaButtonText}
          </a>
        </div>
      </section>
    );
  },
});
