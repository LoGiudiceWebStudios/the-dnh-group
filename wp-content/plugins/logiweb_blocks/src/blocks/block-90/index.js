import { registerBlockType } from "@wordpress/blocks";
import {
  RichText,
  InspectorControls,
  useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  ...metadata,
  attributes: {
    iconClass: {
      type: "string",
      default: "fa-solid fa-paintbrush",
    },
    title: {
      type: "string",
      default: "Ready for a Flawless Finish?",
    },
    accentWord: {
      type: "string",
      default: "Flawless",
    },
    description: {
      type: "string",
      default:
        "Schedule your free in-home color consultation and see why homeowners across three states trust DNH for their most important spaces.",
    },
    buttonText: {
      type: "string",
      default: "Schedule Free Consultation",
    },
    buttonUrl: {
      type: "string",
      default: "#",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { iconClass, title, accentWord, description, buttonText, buttonUrl } =
      attributes;
    const blockProps = useBlockProps({
      className: "flawless-finish-cta-block",
    });

    const renderTitle = () => {
      const safeTitle = (title || "").trim();
      const safeAccent = (accentWord || "").trim();

      if (!safeAccent || !safeTitle) {
        return safeTitle;
      }

      const titleLower = safeTitle.toLowerCase();
      const accentLower = safeAccent.toLowerCase();
      const index = titleLower.indexOf(accentLower);

      if (index === -1) {
        return safeTitle;
      }

      const before = safeTitle.slice(0, index);
      const accent = safeTitle.slice(index, index + safeAccent.length);
      const after = safeTitle.slice(index + safeAccent.length);

      return (
        <>
          {before}
          <span className="flawless-finish-cta-title-accent">{accent}</span>
          {after}
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
              label="Highlighted word"
              value={accentWord}
              onChange={(value) => setAttributes({ accentWord: value })}
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
          </PanelBody>
        </InspectorControls>

        <div className="flawless-finish-cta-inner">
          <span className="flawless-finish-cta-icon" aria-hidden="true">
            <i className={iconClass}></i>
          </span>

          <RichText
            tagName="h2"
            className="flawless-finish-cta-title"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
            placeholder="Title"
          />

          <RichText
            tagName="p"
            className="flawless-finish-cta-description"
            value={description}
            onChange={(value) => setAttributes({ description: value })}
            placeholder="Description"
          />

          <div className="flawless-finish-cta-actions">
            <a
              className="flawless-finish-cta-btn"
              href={buttonUrl || "#"}
              onClick={(event) => event.preventDefault()}
            >
              <RichText
                tagName="span"
                value={buttonText}
                onChange={(value) => setAttributes({ buttonText: value })}
                placeholder="Button text"
              />
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>
    );
  },

  save: ({ attributes }) => {
    const { iconClass, title, accentWord, description, buttonText, buttonUrl } =
      attributes;

    const renderTitle = () => {
      const safeTitle = (title || "").trim();
      const safeAccent = (accentWord || "").trim();

      if (!safeAccent || !safeTitle) {
        return safeTitle;
      }

      const titleLower = safeTitle.toLowerCase();
      const accentLower = safeAccent.toLowerCase();
      const index = titleLower.indexOf(accentLower);

      if (index === -1) {
        return safeTitle;
      }

      const before = safeTitle.slice(0, index);
      const accent = safeTitle.slice(index, index + safeAccent.length);
      const after = safeTitle.slice(index + safeAccent.length);

      return (
        <>
          {before}
          <span className="flawless-finish-cta-title-accent">{accent}</span>
          {after}
        </>
      );
    };

    return (
      <section className="flawless-finish-cta-block fade-in-on-scroll">
        <div className="flawless-finish-cta-inner">
          <span className="flawless-finish-cta-icon" aria-hidden="true">
            <i className={iconClass}></i>
          </span>
          <h2 className="flawless-finish-cta-title">{renderTitle()}</h2>
          <p className="flawless-finish-cta-description">{description}</p>
          {buttonText ? (
            <div className="flawless-finish-cta-actions">
              <a className="flawless-finish-cta-btn" href={buttonUrl || "#"}>
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
