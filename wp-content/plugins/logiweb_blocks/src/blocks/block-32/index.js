import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-32", {
  ...metadata,
  attributes: {
    iconClass: { type: "string", default: "fa-regular fa-comment-dots" },
    title: { type: "string", default: "Still Have Questions?" },
    description: {
      type: "string",
      default:
        "Our friendly team is here to help. Reach out and we will get back to you within 24 hours.",
    },
    primaryButtonText: { type: "string", default: "Contact Us" },
    primaryButtonUrl: { type: "string", default: "#" },
    phoneLabel: { type: "string", default: "(555) 123-4567" },
    phoneUrl: { type: "string", default: "tel:+15551234567" },
    emailLabel: { type: "string", default: "info@dnhgroup.com" },
    emailUrl: { type: "string", default: "mailto:info@dnhgroup.com" },
    hoursLabel: { type: "string", default: "Mon-Fri: 8AM-6PM" },
    hoursIconClass: { type: "string", default: "fa-regular fa-clock" },
    emailIconClass: { type: "string", default: "fa-regular fa-envelope" },
    phoneIconClass: { type: "string", default: "fa-solid fa-phone" },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      iconClass,
      title,
      description,
      primaryButtonText,
      primaryButtonUrl,
      phoneLabel,
      phoneUrl,
      emailLabel,
      emailUrl,
      hoursLabel,
      hoursIconClass,
      emailIconClass,
      phoneIconClass,
    } = attributes;

    return (
      <div className="questions-cta-editor">
        <InspectorControls>
          <PanelBody title="Content" initialOpen={true}>
            <TextControl
              label="Main Icon Class"
              value={iconClass}
              onChange={(value) => setAttributes({ iconClass: value })}
            />
            <TextControl
              label="Primary Button Text"
              value={primaryButtonText}
              onChange={(value) => setAttributes({ primaryButtonText: value })}
            />
            <TextControl
              label="Primary Button URL"
              value={primaryButtonUrl}
              onChange={(value) => setAttributes({ primaryButtonUrl: value })}
            />
            <TextControl
              label="Phone Label"
              value={phoneLabel}
              onChange={(value) => setAttributes({ phoneLabel: value })}
            />
            <TextControl
              label="Phone URL"
              value={phoneUrl}
              onChange={(value) => setAttributes({ phoneUrl: value })}
            />
            <TextControl
              label="Phone Icon Class"
              value={phoneIconClass}
              onChange={(value) => setAttributes({ phoneIconClass: value })}
            />
            <TextControl
              label="Email Label"
              value={emailLabel}
              onChange={(value) => setAttributes({ emailLabel: value })}
            />
            <TextControl
              label="Email URL"
              value={emailUrl}
              onChange={(value) => setAttributes({ emailUrl: value })}
            />
            <TextControl
              label="Email Icon Class"
              value={emailIconClass}
              onChange={(value) => setAttributes({ emailIconClass: value })}
            />
            <TextControl
              label="Hours Label"
              value={hoursLabel}
              onChange={(value) => setAttributes({ hoursLabel: value })}
            />
            <TextControl
              label="Hours Icon Class"
              value={hoursIconClass}
              onChange={(value) => setAttributes({ hoursIconClass: value })}
            />
          </PanelBody>
        </InspectorControls>

        <section className="questions-cta-block">
          <div className="questions-cta-inner">
            <span className="questions-cta-icon-wrap">
              <i className={iconClass}></i>
            </span>

            <RichText
              tagName="h2"
              className="questions-cta-title"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
              placeholder="Still Have Questions?"
            />

            <RichText
              tagName="p"
              className="questions-cta-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Add support description"
            />

            <div className="questions-cta-actions">
              <a
                className="questions-cta-button questions-cta-button-primary"
                href={primaryButtonUrl || "#"}
              >
                <span>{primaryButtonText}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a
                className="questions-cta-button questions-cta-button-secondary"
                href={phoneUrl || "#"}
              >
                <i className={phoneIconClass}></i>
                <span>{phoneLabel}</span>
              </a>
            </div>

            <div className="questions-cta-meta">
              <a className="questions-cta-meta-item" href={emailUrl || "#"}>
                <i className={emailIconClass}></i>
                <span>{emailLabel}</span>
              </a>
              <span className="questions-cta-meta-item">
                <i className={hoursIconClass}></i>
                <span>{hoursLabel}</span>
              </span>
            </div>
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const {
      iconClass,
      title,
      description,
      primaryButtonText,
      primaryButtonUrl,
      phoneLabel,
      phoneUrl,
      emailLabel,
      emailUrl,
      hoursLabel,
      hoursIconClass,
      emailIconClass,
      phoneIconClass,
    } = attributes;

    return (
      <section className="questions-cta-block">
        <div className="questions-cta-inner">
          <span className="questions-cta-icon-wrap">
            <i className={iconClass}></i>
          </span>

          <h2 className="questions-cta-title">
            <RichText.Content value={title} />
          </h2>

          <RichText.Content
            tagName="p"
            className="questions-cta-description"
            value={description}
          />

          <div className="questions-cta-actions">
            <a
              className="questions-cta-button questions-cta-button-primary"
              href={primaryButtonUrl || "#"}
            >
              <span>{primaryButtonText}</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              className="questions-cta-button questions-cta-button-secondary"
              href={phoneUrl || "#"}
            >
              <i className={phoneIconClass}></i>
              <span>{phoneLabel}</span>
            </a>
          </div>

          <div className="questions-cta-meta">
            <a className="questions-cta-meta-item" href={emailUrl || "#"}>
              <i className={emailIconClass}></i>
              <span>{emailLabel}</span>
            </a>
            <span className="questions-cta-meta-item">
              <i className={hoursIconClass}></i>
              <span>{hoursLabel}</span>
            </span>
          </div>
        </div>
      </section>
    );
  },
});
