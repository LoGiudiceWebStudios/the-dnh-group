import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import { useState, useMemo } from "@wordpress/element";
import "../../global-styles.scss";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-19", {
  title: "Why Choose Us - Stats & Benefits",
  icon: "chart-pie",
  category: "widgets",
  attributes: {
    subtitle: {
      type: "string",
      default: "WHY CHOOSE US",
    },
    title: {
      type: "string",
      default: "The DNH Difference",
    },
    description: {
      type: "string",
      default:
        "We're not just another contractor. We're your partners in creating the home you've always wanted.",
    },
    stats: {
      type: "array",
      default: [
        { number: "8+", label: "Years Experience" },
        { number: "1,333+", label: "Projects Completed" },
        { number: "52%", label: "Client Satisfaction" },
        { number: "26+", label: "Industry Awards" },
      ],
    },
    benefits: {
      type: "array",
      default: [
        {
          icon: "fa-solid fa-shield-halved",
          title: "Licensed & Insured",
          tag: "Full Liability Coverage",
          description:
            "Full coverage protection for your peace of mind. Every project is backed by comprehensive insurance.",
        },
        {
          icon: "fa-solid fa-clock",
          title: "On-Time Guarantee",
          tag: "98% On-Time Rate",
          description:
            "We respect your time. Projects completed on schedule or we discount 10% per day late.",
        },
        {
          icon: "fa-solid fa-tag",
          title: "No Hidden Fees",
          tag: "Fixed Price Promise",
          description:
            "Transparent pricing from day one. What we quote is what you pay. No surprises, ever.",
        },
        {
          icon: "fa-solid fa-star",
          title: "5-Year Warranty",
          tag: "Best in Industry",
          description:
            "Our work is built to last. Every project comes with an industry-leading warranty.",
        },
      ],
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { subtitle, title, description, stats, benefits } = attributes;

    const updateStat = (index, field, value) => {
      const nextStats = [...stats];
      nextStats[index] = { ...nextStats[index], [field]: value };
      setAttributes({ stats: nextStats });
    };

    const addStat = () => {
      setAttributes({
        stats: [...stats, { number: "0+", label: "New Stat" }],
      });
    };

    const removeStat = (index) => {
      if (stats.length <= 1) return;
      setAttributes({ stats: stats.filter((_, i) => i !== index) });
    };

    const updateBenefit = (index, field, value) => {
      const nextBenefits = [...benefits];
      nextBenefits[index] = { ...nextBenefits[index], [field]: value };
      setAttributes({ benefits: nextBenefits });
    };

    const addBenefit = () => {
      setAttributes({
        benefits: [
          ...benefits,
          {
            icon: "✨",
            title: "New",
            tag: "New Tag",
            description: "Description",
          },
        ],
      });
    };

    const removeBenefit = (index) => {
      if (benefits.length <= 1) return;
      setAttributes({ benefits: benefits.filter((_, i) => i !== index) });
    };

    const statCountLabel = useMemo(
      () => `${stats.length} stat${stats.length === 1 ? "" : "s"}`,
      [stats.length],
    );
    const benefitCountLabel = useMemo(
      () => `${benefits.length} benefit${benefits.length === 1 ? "" : "s"}`,
      [benefits.length],
    );

    return (
      <div className="why-choose-us-block">
        <InspectorControls>
          <PanelBody title="Section Header" initialOpen={true}>
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

          <PanelBody title={`Stats (${statCountLabel})`} initialOpen={true}>
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
                  label={`Stat ${index + 1} - Number`}
                  value={stat.number}
                  onChange={(value) => updateStat(index, "number", value)}
                />
                <TextControl
                  label={`Stat ${index + 1} - Label`}
                  value={stat.label}
                  onChange={(value) => updateStat(index, "label", value)}
                />
                <Button
                  isDestructive
                  isSmall
                  onClick={() => removeStat(index)}
                  disabled={stats.length <= 1}
                >
                  Remove Stat
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addStat}>
              + Add Stat
            </Button>
          </PanelBody>

          <PanelBody
            title={`Benefits (${benefitCountLabel})`}
            initialOpen={true}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <TextControl
                  label={`Benefit ${index + 1} - Icon (FA class, e.g. fa-solid fa-shield-halved)`}
                  value={benefit.icon}
                  onChange={(value) => updateBenefit(index, "icon", value)}
                />
                <TextControl
                  label={`Benefit ${index + 1} - Title`}
                  value={benefit.title}
                  onChange={(value) => updateBenefit(index, "title", value)}
                />
                <TextControl
                  label={`Benefit ${index + 1} - Tag`}
                  value={benefit.tag}
                  onChange={(value) => updateBenefit(index, "tag", value)}
                />
                <TextControl
                  label={`Benefit ${index + 1} - Description`}
                  value={benefit.description}
                  onChange={(value) =>
                    updateBenefit(index, "description", value)
                  }
                />
                <Button
                  isDestructive
                  isSmall
                  onClick={() => removeBenefit(index)}
                  disabled={benefits.length <= 1}
                >
                  Remove Benefit
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addBenefit}>
              + Add Benefit
            </Button>
          </PanelBody>
        </InspectorControls>

        <section className="why-choose-us-preview">
          <div className="why-choose-us-heading">
            <p className="why-choose-us-subtitle">{subtitle}</p>
            <RichText
              tagName="h2"
              className="why-choose-us-title"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
              placeholder="Add title"
            />
            <RichText
              tagName="p"
              className="why-choose-us-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Add description"
            />
          </div>

          <div className="why-choose-us-stats">
            {stats.map((stat, index) => (
              <div key={index} className="why-choose-us-stat-card">
                <div className="why-choose-us-stat-number">{stat.number}</div>
                <div className="why-choose-us-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="why-choose-us-benefits">
            {benefits.map((benefit, index) => (
              <div key={index} className="why-choose-us-benefit-card">
                <div className="why-choose-us-benefit-icon">
                  <i className={benefit.icon}></i>
                </div>
                <div className="why-choose-us-benefit-content">
                  <h3 className="why-choose-us-benefit-title">
                    {benefit.title}
                  </h3>
                  <span className="why-choose-us-benefit-tag">
                    {benefit.tag}
                  </span>
                  <p className="why-choose-us-benefit-description">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const { subtitle, title, description, stats, benefits } = attributes;

    return (
      <section
        className="why-choose-us fade-in-on-scroll"
        data-block="why-choose-us"
      >
        <div className="why-choose-us-heading">
          <p className="why-choose-us-subtitle">{subtitle}</p>
          <h2 className="why-choose-us-title">{title}</h2>
          <p className="why-choose-us-description">{description}</p>
        </div>

        <div className="why-choose-us-stats">
          {stats.map((stat, index) => (
            <div key={index} className="why-choose-us-stat-card">
              <div
                className="why-choose-us-stat-number"
                data-count={stat.number}
              >
                0
              </div>
              <div className="why-choose-us-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="why-choose-us-benefits">
          {benefits.map((benefit, index) => (
            <div key={index} className="why-choose-us-benefit-card">
              <div className="why-choose-us-benefit-icon">
                <i className={benefit.icon}></i>
              </div>
              <div className="why-choose-us-benefit-content">
                <h3 className="why-choose-us-benefit-title">{benefit.title}</h3>
                <span className="why-choose-us-benefit-tag">{benefit.tag}</span>
                <p className="why-choose-us-benefit-description">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  },
});
