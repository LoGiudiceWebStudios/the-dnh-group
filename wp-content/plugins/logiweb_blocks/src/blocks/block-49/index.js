import { registerBlockType } from "@wordpress/blocks";
import { RichText, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-49", {
  ...metadata,
  attributes: {
    title: {
      type: "string",
      default: "Not Sure What You Need?",
    },
    description: {
      type: "string",
      default:
        "Our experts can help you determine the right services for your home. Schedule a free consultation today.",
    },
    buttonText: {
      type: "string",
      default: "Get a Free Consultation",
    },
    buttonUrl: {
      type: "string",
      default: "#",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { title, description, buttonText, buttonUrl } = attributes;

    return (
      <section className="centered-cta-strip-block">
        <InspectorControls>
          <PanelBody title="Button Settings" initialOpen={true}>
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
          </PanelBody>
        </InspectorControls>

        <div className="centered-cta-strip-inner">
          <RichText
            tagName="h2"
            className="centered-cta-strip-title"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
            placeholder="Title"
          />
          <RichText
            tagName="p"
            className="centered-cta-strip-description"
            value={description}
            onChange={(value) => setAttributes({ description: value })}
            placeholder="Description"
          />

          <div className="centered-cta-strip-actions">
            <RichText
              tagName="button"
              className="btn-primary centered-cta-strip-btn"
              value={buttonText}
              onChange={(value) => setAttributes({ buttonText: value })}
              placeholder="Button text"
            />
          </div>
        </div>
      </section>
    );
  },

  save: ({ attributes }) => {
    const { title, description, buttonText, buttonUrl } = attributes;

    return (
      <section className="centered-cta-strip-block fade-in-on-scroll">
        <div className="centered-cta-strip-inner">
          <h2 className="centered-cta-strip-title">{title}</h2>
          <p className="centered-cta-strip-description">{description}</p>
          {buttonText ? (
            <div className="centered-cta-strip-actions">
              <a
                className="btn-primary centered-cta-strip-btn"
                href={buttonUrl}
              >
                {buttonText}
                <span
                  className="material-symbols-outlined notranslate"
                  aria-hidden="true"
                >
                  chevron_right
                </span>
              </a>
            </div>
          ) : null}
        </div>
      </section>
    );
  },
});
