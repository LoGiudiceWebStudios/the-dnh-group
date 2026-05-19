import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-26", {
  ...metadata,
  attributes: {
    titleStart: {
      type: "string",
      default: "Ready to Start Your",
    },
    titleHighlight: {
      type: "string",
      default: "Project?",
    },
    description: {
      type: "string",
      default:
        "Join thousands of satisfied homeowners who trust DNH Group for their home improvement needs.",
    },
    primaryBtnText: {
      type: "string",
      default: "Get Your Free Quote",
    },
    primaryBtnUrl: {
      type: "string",
      default: "#",
    },
    secondaryBtnText: {
      type: "string",
      default: "Book a Consultation",
    },
    secondaryBtnUrl: {
      type: "string",
      default: "#",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      titleStart,
      titleHighlight,
      description,
      primaryBtnText,
      primaryBtnUrl,
      secondaryBtnText,
      secondaryBtnUrl,
    } = attributes;

    return (
      <div className="project-cta-editor">
        <InspectorControls>
          <PanelBody title="Content" initialOpen={true}>
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
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
            />
          </PanelBody>

          <PanelBody title="Primary Button" initialOpen={false}>
            <TextControl
              label="Text"
              value={primaryBtnText}
              onChange={(value) => setAttributes({ primaryBtnText: value })}
            />
            <TextControl
              label="URL"
              value={primaryBtnUrl}
              onChange={(value) => setAttributes({ primaryBtnUrl: value })}
            />
          </PanelBody>

          <PanelBody title="Secondary Button" initialOpen={false}>
            <TextControl
              label="Text"
              value={secondaryBtnText}
              onChange={(value) => setAttributes({ secondaryBtnText: value })}
            />
            <TextControl
              label="URL"
              value={secondaryBtnUrl}
              onChange={(value) => setAttributes({ secondaryBtnUrl: value })}
            />
          </PanelBody>
        </InspectorControls>

        <section className="project-cta">
          <div className="project-cta-inner">
            <h2 className="project-cta-title">
              <RichText
                tagName="span"
                value={titleStart}
                onChange={(value) => setAttributes({ titleStart: value })}
                placeholder="Title start"
              />{" "}
              <span className="project-cta-title-highlight">
                <RichText
                  tagName="span"
                  value={titleHighlight}
                  onChange={(value) => setAttributes({ titleHighlight: value })}
                  placeholder="Highlighted word"
                />
              </span>
            </h2>

            <RichText
              tagName="p"
              className="project-cta-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Add description"
            />

            <div className="project-cta-actions">
              <a
                className="project-cta-btn project-cta-btn-primary"
                href={primaryBtnUrl}
              >
                {primaryBtnText}
                <i className="fa-solid fa-arrow-right"></i>
              </a>

              <a
                className="project-cta-btn project-cta-btn-secondary"
                href={secondaryBtnUrl}
              >
                {secondaryBtnText}
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const {
      titleStart,
      titleHighlight,
      description,
      primaryBtnText,
      primaryBtnUrl,
      secondaryBtnText,
      secondaryBtnUrl,
    } = attributes;

    return (
      <section
        className="project-cta fade-in-on-scroll"
        data-block="project-cta"
      >
        <div className="project-cta-inner">
          <h2 className="project-cta-title">
            {titleStart}{" "}
            <span className="project-cta-title-highlight">
              {titleHighlight}
            </span>
          </h2>

          <p className="project-cta-description">{description}</p>

          <div className="project-cta-actions">
            <a
              className="project-cta-btn project-cta-btn-primary"
              href={primaryBtnUrl}
            >
              {primaryBtnText}
              <i className="fa-solid fa-arrow-right"></i>
            </a>

            <a
              className="project-cta-btn project-cta-btn-secondary"
              href={secondaryBtnUrl}
            >
              {secondaryBtnText}
            </a>
          </div>
        </div>
      </section>
    );
  },
});
