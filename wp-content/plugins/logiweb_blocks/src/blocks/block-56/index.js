import { registerBlockType } from "@wordpress/blocks";
import { RichText, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-56", {
  ...metadata,
  attributes: {
    title: {
      type: "string",
      default: "Ready to Transform Your Indiana Home?",
    },
    buttonText: {
      type: "string",
      default: "Get a Free Quote",
    },
    buttonUrl: {
      type: "string",
      default: "#",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { title, buttonText, buttonUrl } = attributes;

    return (
      <section className="indiana-cta-banner-block">
        <InspectorControls>
          <PanelBody title="Button" initialOpen={true}>
            <TextControl
              label="Button text"
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

        <div className="indiana-cta-banner-inner">
          <RichText
            tagName="h2"
            className="indiana-cta-banner-title"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
            placeholder="Banner title"
          />
          <div className="indiana-cta-banner-actions">
            <RichText
              tagName="button"
              className="indiana-cta-banner-button"
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
    const { title, buttonText, buttonUrl } = attributes;

    return (
      <section
        className="indiana-cta-banner-block fade-in-on-scroll"
        data-block="indiana-cta-banner"
      >
        <div className="indiana-cta-banner-inner">
          <h2 className="indiana-cta-banner-title">{title}</h2>
          {buttonText ? (
            <div className="indiana-cta-banner-actions">
              <a className="indiana-cta-banner-button" href={buttonUrl || "#"}>
                {buttonText}
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          ) : null}
        </div>
      </section>
    );
  },
});
