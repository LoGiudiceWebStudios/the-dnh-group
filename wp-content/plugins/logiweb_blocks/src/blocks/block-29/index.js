import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_STATS = [
  { icon: "fa-solid fa-users", value: "150+", label: "Team Members" },
  { icon: "fa-solid fa-star", value: "4.8/5", label: "Employee Rating" },
  {
    icon: "fa-solid fa-arrow-trend-up",
    value: "46",
    label: "Years in Business",
  },
];

registerBlockType("logiweb/custom-block-29", {
  ...metadata,
  attributes: {
    badge: {
      type: "string",
      default: "JOIN OUR TEAM",
    },
    titleStart: {
      type: "string",
      default: "Build Your",
    },
    titleHighlight: {
      type: "string",
      default: "Career",
    },
    titleEnd: {
      type: "string",
      default: "With Us",
    },
    description: {
      type: "string",
      default:
        "Join a team that values craftsmanship, integrity, and growth. At DNH Group, we are not just building homes - we are building careers.",
    },
    stats: {
      type: "array",
      default: DEFAULT_STATS,
    },
    formTitle: {
      type: "string",
      default: "Get Job Alerts",
    },
    formDescription: {
      type: "string",
      default:
        "Be the first to know about new opportunities. Sign up for job alerts tailored to your interests.",
    },
    inputPlaceholder: {
      type: "string",
      default: "Enter your email",
    },
    buttonText: {
      type: "string",
      default: "Subscribe to Alerts",
    },
    privacyText: {
      type: "string",
      default: "We respect your privacy. Unsubscribe anytime.",
    },
    contactForm7Shortcode: {
      type: "string",
      default: "",
    },
    buttonUrl: {
      type: "string",
      default: "#",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      badge,
      titleStart,
      titleHighlight,
      titleEnd,
      description,
      stats,
      formTitle,
      formDescription,
      inputPlaceholder,
      buttonText,
      privacyText,
      contactForm7Shortcode,
      buttonUrl,
    } = attributes;

    const updateStat = (index, field, value) => {
      const next = [...stats];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ stats: next });
    };

    const addStat = () => {
      setAttributes({
        stats: [
          ...stats,
          { icon: "fa-solid fa-chart-line", value: "10+", label: "New Stat" },
        ],
      });
    };

    const removeStat = (index) => {
      if (stats.length <= 1) {
        return;
      }
      setAttributes({ stats: stats.filter((_, i) => i !== index) });
    };

    return (
      <div className="career-join-editor">
        <InspectorControls>
          <PanelBody title="Left Content" initialOpen={true}>
            <TextControl
              label="Badge"
              value={badge}
              onChange={(value) => setAttributes({ badge: value })}
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
              label="Title End"
              value={titleEnd}
              onChange={(value) => setAttributes({ titleEnd: value })}
            />
            <TextControl
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
            />
          </PanelBody>

          <PanelBody title={`Stats (${stats.length})`} initialOpen={false}>
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
                  label="Icon class"
                  value={stat.icon}
                  onChange={(value) => updateStat(index, "icon", value)}
                />
                <TextControl
                  label="Value"
                  value={stat.value}
                  onChange={(value) => updateStat(index, "value", value)}
                />
                <TextControl
                  label="Label"
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

          <PanelBody title="Right Card" initialOpen={false}>
            <TextControl
              label="Card Title"
              value={formTitle}
              onChange={(value) => setAttributes({ formTitle: value })}
            />
            <TextControl
              label="Card Description"
              value={formDescription}
              onChange={(value) => setAttributes({ formDescription: value })}
            />
            <TextControl
              label="Input Placeholder"
              value={inputPlaceholder}
              onChange={(value) => setAttributes({ inputPlaceholder: value })}
            />
            <TextControl
              label="Button Text"
              value={buttonText}
              onChange={(value) => setAttributes({ buttonText: value })}
            />
            <TextControl
              label="Button URL"
              value={buttonUrl}
              onChange={(value) => setAttributes({ buttonUrl: value })}
            />
            <TextControl
              label="Privacy Text"
              value={privacyText}
              onChange={(value) => setAttributes({ privacyText: value })}
            />
            <TextControl
              label="Contact Form 7 Shortcode"
              value={contactForm7Shortcode}
              onChange={(value) =>
                setAttributes({ contactForm7Shortcode: value })
              }
              help='Example: [contact-form-7 id="123" title="Job Alerts"]'
            />
          </PanelBody>
        </InspectorControls>

        <section className="career-join-block">
          <div className="career-join-inner">
            <div className="career-join-left">
              <p className="career-join-badge">
                <i className="fa-solid fa-briefcase"></i>
                {badge}
              </p>

              <h2 className="career-join-title">
                <RichText
                  tagName="span"
                  value={titleStart}
                  onChange={(value) => setAttributes({ titleStart: value })}
                  placeholder="Build Your"
                />{" "}
                <span className="career-join-title-highlight">
                  <RichText
                    tagName="span"
                    value={titleHighlight}
                    onChange={(value) =>
                      setAttributes({ titleHighlight: value })
                    }
                    placeholder="Career"
                  />
                </span>
                <br />
                <RichText
                  tagName="span"
                  value={titleEnd}
                  onChange={(value) => setAttributes({ titleEnd: value })}
                  placeholder="With Us"
                />
              </h2>

              <RichText
                tagName="p"
                className="career-join-description"
                value={description}
                onChange={(value) => setAttributes({ description: value })}
                placeholder="Add description"
              />

              <div className="career-join-stats">
                {stats.map((stat, index) => (
                  <div className="career-join-stat" key={index}>
                    <span className="career-join-stat-icon">
                      <i className={stat.icon}></i>
                    </span>
                    <div>
                      <p className="career-join-stat-value">{stat.value}</p>
                      <p className="career-join-stat-label">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="career-join-card">
              <h3 className="career-join-card-title">
                <i className="fa-regular fa-bell"></i>
                {formTitle}
              </h3>
              <p className="career-join-card-description">{formDescription}</p>
              {contactForm7Shortcode ? (
                <div className="career-join-cf7-preview">
                  Contact Form 7 shortcode connected:
                  <code>{contactForm7Shortcode}</code>
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    className="career-join-input"
                    placeholder={inputPlaceholder}
                    disabled
                  />
                  <a href={buttonUrl || "#"} className="career-join-button">
                    <i className="fa-regular fa-bell"></i>
                    {buttonText}
                  </a>
                  <p className="career-join-privacy">{privacyText}</p>
                </>
              )}
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
      titleEnd,
      description,
      stats,
      formTitle,
      formDescription,
      inputPlaceholder,
      buttonText,
      privacyText,
      buttonUrl,
    } = attributes;

    return (
      <section
        className="career-join-block fade-in-on-scroll"
        data-block="career-join"
      >
        <div className="career-join-inner">
          <div className="career-join-left">
            <p className="career-join-badge">
              <i className="fa-solid fa-briefcase"></i>
              {badge}
            </p>

            <h2 className="career-join-title">
              {titleStart}{" "}
              <span className="career-join-title-highlight">
                {titleHighlight}
              </span>
              <br />
              {titleEnd}
            </h2>

            <p className="career-join-description">{description}</p>

            <div className="career-join-stats">
              {stats.map((stat, index) => (
                <div className="career-join-stat" key={index}>
                  <span className="career-join-stat-icon">
                    <i className={stat.icon}></i>
                  </span>
                  <div>
                    <p className="career-join-stat-value">{stat.value}</p>
                    <p className="career-join-stat-label">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="career-join-card">
            <h3 className="career-join-card-title">
              <i className="fa-regular fa-bell"></i>
              {formTitle}
            </h3>
            <p className="career-join-card-description">{formDescription}</p>
            <input
              type="email"
              className="career-join-input"
              placeholder={inputPlaceholder}
            />
            <a href={buttonUrl || "#"} className="career-join-button">
              <i className="fa-regular fa-bell"></i>
              {buttonText}
            </a>
            <p className="career-join-privacy">{privacyText}</p>
          </div>
        </div>
      </section>
    );
  },
});
