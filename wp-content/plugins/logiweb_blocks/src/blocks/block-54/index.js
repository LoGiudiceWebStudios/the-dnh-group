import { registerBlockType } from "@wordpress/blocks";
import { RichText, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-54", {
  ...metadata,
  attributes: {
    title: {
      type: "string",
      default: "Had a Great Experience?",
    },
    description: {
      type: "string",
      default:
        "Your feedback helps other homeowners make informed decisions about their home improvement projects.",
    },
    buttonText: {
      type: "string",
      default: "Share Your Story",
    },
    buttonUrl: {
      type: "string",
      default: "#",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { title, description, buttonText, buttonUrl } = attributes;

    return (
      <section className="review-story-cta-block">
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

        <div className="review-story-cta-inner">
          <RichText
            tagName="h2"
            className="review-story-cta-title"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
            placeholder="Section title"
          />
          <RichText
            tagName="p"
            className="review-story-cta-description"
            value={description}
            onChange={(value) => setAttributes({ description: value })}
            placeholder="Section description"
          />
          <div className="review-story-cta-actions">
            <RichText
              tagName="button"
              className="review-story-cta-button"
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
      <section
        className="review-story-cta-block fade-in-on-scroll"
        data-block="review-story-cta"
      >
        <div className="review-story-cta-inner">
          <h2 className="review-story-cta-title">{title}</h2>
          <p className="review-story-cta-description">{description}</p>
          {buttonText ? (
            <div className="review-story-cta-actions">
              <a className="review-story-cta-button" href={buttonUrl || "#"}>
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
