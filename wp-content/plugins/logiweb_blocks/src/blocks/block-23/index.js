import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-23", {
  title: "Story Hero Banner",
  icon: "align-center",
  category: "widgets",
  attributes: {
    subtitle: {
      type: "string",
      default: "ABOUT US",
    },
    titleStart: {
      type: "string",
      default: "Our",
    },
    titleHighlight: {
      type: "string",
      default: "Story",
    },
    description: {
      type: "string",
      default:
        "From a single dream in 1980 to a trusted name across the Tri-State area. Discover the DNH Group journey through the decades.",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { subtitle, titleStart, titleHighlight, description } = attributes;

    return (
      <div className="story-hero-editor">
        <InspectorControls>
          <PanelBody title="Content" initialOpen={true}>
            <TextControl
              label="Subtitle"
              value={subtitle}
              onChange={(value) => setAttributes({ subtitle: value })}
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
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
            />
          </PanelBody>
        </InspectorControls>

        <section className="story-hero">
          <div className="story-hero-inner">
            <p className="story-hero-subtitle">{subtitle}</p>
            <h2 className="story-hero-title">
              <RichText
                tagName="span"
                value={titleStart}
                onChange={(value) => setAttributes({ titleStart: value })}
                placeholder="Title start"
              />{" "}
              <span className="story-hero-highlight">
                <RichText
                  tagName="span"
                  value={titleHighlight}
                  onChange={(value) => setAttributes({ titleHighlight: value })}
                  placeholder="Title highlight"
                />
              </span>
            </h2>
            <RichText
              tagName="p"
              className="story-hero-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Add description"
            />
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const { subtitle, titleStart, titleHighlight, description } = attributes;

    return (
      <section className="story-hero fade-in-on-scroll" data-block="story-hero">
        <div className="story-hero-inner">
          <p className="story-hero-subtitle">{subtitle}</p>
          <h2 className="story-hero-title">
            {titleStart}{" "}
            <span className="story-hero-highlight">{titleHighlight}</span>
          </h2>
          <p className="story-hero-description">{description}</p>
        </div>
      </section>
    );
  },
});
