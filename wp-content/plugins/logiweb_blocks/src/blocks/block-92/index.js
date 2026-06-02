import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  ...metadata,
  attributes: {
    iconClass: { type: "string", default: "fa-regular fa-star" },
    title: { type: "string", default: "Join 2,500+ Happy Families" },
    highlightText: { type: "string", default: "2,500+" },
    description: {
      type: "string",
      default:
        "Your home deserves the best. See why homeowners across the Tri-State area trust DNH Group for their most important projects.",
    },
    primaryButtonText: { type: "string", default: "Get Your Free Quote" },
    primaryButtonUrl: { type: "string", default: "#" },
    secondaryButtonText: { type: "string", default: "See Our Work" },
    secondaryButtonUrl: { type: "string", default: "#" },
    trustPointOne: { type: "string", default: "Free consultation" },
    trustPointTwo: { type: "string", default: "No obligation" },
    trustPointThree: { type: "string", default: "5-year warranty" },
  },

  edit({ attributes, setAttributes }) {
    const {
      iconClass,
      title,
      highlightText,
      description,
      primaryButtonText,
      primaryButtonUrl,
      secondaryButtonText,
      secondaryButtonUrl,
      trustPointOne,
      trustPointTwo,
      trustPointThree,
    } = attributes;

    const blockProps = useBlockProps({
      className: "happy-families-cta-block",
    });

    const renderHighlightedTitle = () => {
      const fullTitle = (title || "").trim();
      const highlight = (highlightText || "").trim();

      if (!fullTitle || !highlight) {
        return fullTitle;
      }

      const titleLower = fullTitle.toLowerCase();
      const highlightLower = highlight.toLowerCase();
      const startIndex = titleLower.indexOf(highlightLower);

      if (startIndex === -1) {
        return fullTitle;
      }

      const endIndex = startIndex + highlight.length;
      return (
        <>
          {fullTitle.slice(0, startIndex)}
          <span className="happy-families-cta-title-highlight">
            {fullTitle.slice(startIndex, endIndex)}
          </span>
          {fullTitle.slice(endIndex)}
        </>
      );
    };

    return (
      <section {...blockProps}>
        <InspectorControls>
          <PanelBody title="Content" initialOpen={true}>
            <TextControl
              label="Icon class"
              value={iconClass}
              onChange={(value) => setAttributes({ iconClass: value })}
            />
            <TextControl
              label="Title"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
            />
            <TextControl
              label="Highlighted text in title"
              value={highlightText}
              onChange={(value) => setAttributes({ highlightText: value })}
            />
            <TextControl
              label="Primary button URL"
              value={primaryButtonUrl}
              onChange={(value) => setAttributes({ primaryButtonUrl: value })}
            />
            <TextControl
              label="Secondary button URL"
              value={secondaryButtonUrl}
              onChange={(value) => setAttributes({ secondaryButtonUrl: value })}
            />
          </PanelBody>
        </InspectorControls>

        <div className="happy-families-cta-inner">
          <span className="happy-families-cta-icon" aria-hidden="true">
            <i className={iconClass}></i>
          </span>

          <h2 className="happy-families-cta-title">
            {renderHighlightedTitle()}
          </h2>

          <RichText
            tagName="p"
            className="happy-families-cta-description"
            value={description}
            onChange={(value) => setAttributes({ description: value })}
            placeholder="Description"
          />

          <div className="happy-families-cta-actions">
            <a
              className="happy-families-cta-btn is-primary"
              href={primaryButtonUrl || "#"}
              onClick={(event) => event.preventDefault()}
            >
              <RichText
                tagName="span"
                value={primaryButtonText}
                onChange={(value) =>
                  setAttributes({ primaryButtonText: value })
                }
                placeholder="Primary button text"
              />
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>

            <a
              className="happy-families-cta-btn is-secondary"
              href={secondaryButtonUrl || "#"}
              onClick={(event) => event.preventDefault()}
            >
              <RichText
                tagName="span"
                value={secondaryButtonText}
                onChange={(value) =>
                  setAttributes({ secondaryButtonText: value })
                }
                placeholder="Secondary button text"
              />
            </a>
          </div>

          <div className="happy-families-cta-trust">
            <span className="happy-families-cta-trust-item">
              <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
              <RichText
                tagName="span"
                value={trustPointOne}
                onChange={(value) => setAttributes({ trustPointOne: value })}
                placeholder="Trust point"
              />
            </span>

            <span className="happy-families-cta-trust-item">
              <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
              <RichText
                tagName="span"
                value={trustPointTwo}
                onChange={(value) => setAttributes({ trustPointTwo: value })}
                placeholder="Trust point"
              />
            </span>

            <span className="happy-families-cta-trust-item">
              <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
              <RichText
                tagName="span"
                value={trustPointThree}
                onChange={(value) => setAttributes({ trustPointThree: value })}
                placeholder="Trust point"
              />
            </span>
          </div>
        </div>
      </section>
    );
  },

  save({ attributes }) {
    const {
      iconClass,
      title,
      highlightText,
      description,
      primaryButtonText,
      primaryButtonUrl,
      secondaryButtonText,
      secondaryButtonUrl,
      trustPointOne,
      trustPointTwo,
      trustPointThree,
    } = attributes;

    const renderHighlightedTitle = () => {
      const fullTitle = (title || "").trim();
      const highlight = (highlightText || "").trim();

      if (!fullTitle || !highlight) {
        return fullTitle;
      }

      const titleLower = fullTitle.toLowerCase();
      const highlightLower = highlight.toLowerCase();
      const startIndex = titleLower.indexOf(highlightLower);

      if (startIndex === -1) {
        return fullTitle;
      }

      const endIndex = startIndex + highlight.length;
      return (
        <>
          {fullTitle.slice(0, startIndex)}
          <span className="happy-families-cta-title-highlight">
            {fullTitle.slice(startIndex, endIndex)}
          </span>
          {fullTitle.slice(endIndex)}
        </>
      );
    };

    return (
      <section className="happy-families-cta-block fade-in-on-scroll">
        <div className="happy-families-cta-inner">
          <span className="happy-families-cta-icon" aria-hidden="true">
            <i className={iconClass}></i>
          </span>

          <h2 className="happy-families-cta-title">
            {renderHighlightedTitle()}
          </h2>

          <p className="happy-families-cta-description">{description}</p>

          <div className="happy-families-cta-actions">
            {primaryButtonText ? (
              <a
                className="happy-families-cta-btn is-primary"
                href={primaryButtonUrl || "#"}
              >
                {primaryButtonText}
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            ) : null}

            {secondaryButtonText ? (
              <a
                className="happy-families-cta-btn is-secondary"
                href={secondaryButtonUrl || "#"}
              >
                {secondaryButtonText}
              </a>
            ) : null}
          </div>

          <div className="happy-families-cta-trust">
            <span className="happy-families-cta-trust-item">
              <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
              <span>{trustPointOne}</span>
            </span>
            <span className="happy-families-cta-trust-item">
              <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
              <span>{trustPointTwo}</span>
            </span>
            <span className="happy-families-cta-trust-item">
              <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
              <span>{trustPointThree}</span>
            </span>
          </div>
        </div>
      </section>
    );
  },
});
