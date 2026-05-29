import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  ...metadata,
  attributes: {
    badge: { type: "string", default: "Residential Painting Specialists" },
    badgeIcon: { type: "string", default: "fa-solid fa-paintbrush" },
    titleLine1: { type: "string", default: "Studio-Quality Painting." },
    titleHighlight: { type: "string", default: "Immaculate" },
    titleLine2: { type: "string", default: "Execution." },
    description: {
      type: "string",
      default:
        "From flawless, crisp interior walls to ultra-durable weather-resistant exterior coatings. The DNH Group delivers sharp, luxury finishes tailored for high-end properties across Ohio, Indiana, and Kentucky.",
    },
    ctaText: {
      type: "string",
      default: "Schedule Your In-Home Color Consultation",
    },
    ctaUrl: { type: "string", default: "#" },
    backgroundImageUrl: { type: "string", default: "" },
  },

  edit({ attributes, setAttributes }) {
    const {
      badge,
      badgeIcon,
      titleLine1,
      titleHighlight,
      titleLine2,
      description,
      ctaText,
      ctaUrl,
      backgroundImageUrl,
    } = attributes;

    const blockProps = useBlockProps({ className: "hero-split-block" });

    const previewStyle = backgroundImageUrl
      ? { backgroundImage: `url(${backgroundImageUrl})` }
      : {};

    return (
      <>
        <InspectorControls>
          <PanelBody title="Background Image" initialOpen={true}>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) =>
                  setAttributes({ backgroundImageUrl: media.url })
                }
                allowedTypes={["image"]}
                render={({ open }) => (
                  <div>
                    {backgroundImageUrl ? (
                      <img
                        src={backgroundImageUrl}
                        alt=""
                        style={{
                          width: "100%",
                          borderRadius: 8,
                          marginBottom: 6,
                        }}
                      />
                    ) : null}
                    <Button isSecondary onClick={open}>
                      {backgroundImageUrl ? "Change image" : "Select image"}
                    </Button>
                  </div>
                )}
              />
            </MediaUploadCheck>
          </PanelBody>

          <PanelBody title="Content" initialOpen={true}>
            <TextControl
              label="Badge icon (Font Awesome class)"
              value={badgeIcon}
              onChange={(value) => setAttributes({ badgeIcon: value })}
            />
            <TextControl
              label="Badge text"
              value={badge}
              onChange={(value) => setAttributes({ badge: value })}
            />
            <TextControl
              label="Title line 1"
              value={titleLine1}
              onChange={(value) => setAttributes({ titleLine1: value })}
            />
            <TextControl
              label="Title highlight word"
              value={titleHighlight}
              onChange={(value) => setAttributes({ titleHighlight: value })}
            />
            <TextControl
              label="Title line 2 (after highlight)"
              value={titleLine2}
              onChange={(value) => setAttributes({ titleLine2: value })}
            />
            <TextControl
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
            />
            <TextControl
              label="CTA button text"
              value={ctaText}
              onChange={(value) => setAttributes({ ctaText: value })}
            />
            <TextControl
              label="CTA button URL"
              value={ctaUrl}
              onChange={(value) => setAttributes({ ctaUrl: value })}
            />
          </PanelBody>
        </InspectorControls>

        <section {...blockProps} style={previewStyle}>
          <div className="hero-split-overlay" />
          <div className="hero-split-content">
            <p className="hero-split-badge">
              <i className={badgeIcon} aria-hidden="true" />
              <span>{badge}</span>
            </p>
            <h1 className="hero-split-title">
              {titleLine1}
              <br />
              <span className="hero-split-title-highlight">
                {titleHighlight}
              </span>{" "}
              {titleLine2}
            </h1>
            <p className="hero-split-description">{description}</p>
            <a href={ctaUrl} className="hero-split-cta btn-primary">
              {ctaText} <span className="hero-split-cta-arrow">→</span>
            </a>
          </div>
        </section>
      </>
    );
  },

  save() {
    return null;
  },
});
