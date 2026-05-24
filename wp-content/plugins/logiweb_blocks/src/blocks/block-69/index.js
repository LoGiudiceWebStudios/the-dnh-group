import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-69", {
  ...metadata,
  attributes: {
    badgeText: { type: "string", default: "Serving All of Ohio Since 1980" },
    titleStart: { type: "string", default: "Ohio's Trusted" },
    titleHighlight: { type: "string", default: "Home" },
    titleEnd: { type: "string", default: "Experts" },
    description: {
      type: "string",
      default:
        "From the shores of Lake Erie to the Ohio River valley - Cincinnati, Columbus, Cleveland, and everywhere between. DNH Group brings 46 years of craftsmanship to every county in the Buckeye State.",
    },
    ctaText: { type: "string", default: "Get a Free Ohio Quote" },
    ctaUrl: { type: "string", default: "#" },
    phoneText: { type: "string", default: "(555) 123-4567" },
    phoneUrl: { type: "string", default: "tel:+15551234567" },
    stat1Value: { type: "string", default: "46" },
    stat1Label: { type: "string", default: "Years" },
    stat2Value: { type: "string", default: "88" },
    stat2Label: { type: "string", default: "Counties" },
    stat3Value: { type: "string", default: "2,500+" },
    stat3Label: { type: "string", default: "Ohio Homes" },
    imageTopLeft: {
      type: "string",
      default:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    },
    imageTopRight: {
      type: "string",
      default:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    },
    imageBottomLeft: {
      type: "string",
      default:
        "https://images.unsplash.com/photo-1632759145351-1d5920be8f4a?w=1200&q=80",
    },
  },

  edit({ attributes, setAttributes }) {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      titleEnd,
      description,
      ctaText,
      ctaUrl,
      phoneText,
      phoneUrl,
      stat1Value,
      stat1Label,
      stat2Value,
      stat2Label,
      stat3Value,
      stat3Label,
      imageTopLeft,
      imageTopRight,
      imageBottomLeft,
    } = attributes;

    const blockProps = useBlockProps({ className: "ohio-trusted-hero" });

    const imagePicker = (label, value, key) => (
      <div style={{ marginBottom: 12 }}>
        <p style={{ margin: "0 0 6px", fontSize: 12 }}>{label}</p>
        <MediaUploadCheck>
          <MediaUpload
            onSelect={(media) => setAttributes({ [key]: media.url })}
            allowedTypes={["image"]}
            render={({ open }) => (
              <div>
                {value ? (
                  <img
                    src={value}
                    alt=""
                    style={{ width: "100%", borderRadius: 8, marginBottom: 6 }}
                  />
                ) : null}
                <Button isSecondary onClick={open}>
                  {value ? "Change image" : "Select image"}
                </Button>
              </div>
            )}
          />
        </MediaUploadCheck>
      </div>
    );

    return (
      <>
        <InspectorControls>
          <PanelBody title="Hero Content" initialOpen={true}>
            <TextControl
              label="Badge"
              value={badgeText}
              onChange={(value) => setAttributes({ badgeText: value })}
            />
            <TextControl
              label="Title line 1"
              value={titleStart}
              onChange={(value) => setAttributes({ titleStart: value })}
            />
            <TextControl
              label="Highlighted word"
              value={titleHighlight}
              onChange={(value) => setAttributes({ titleHighlight: value })}
            />
            <TextControl
              label="Title line 2 end"
              value={titleEnd}
              onChange={(value) => setAttributes({ titleEnd: value })}
            />
            <TextControl
              label="CTA text"
              value={ctaText}
              onChange={(value) => setAttributes({ ctaText: value })}
            />
            <TextControl
              label="CTA URL"
              value={ctaUrl}
              onChange={(value) => setAttributes({ ctaUrl: value })}
            />
            <TextControl
              label="Phone text"
              value={phoneText}
              onChange={(value) => setAttributes({ phoneText: value })}
            />
            <TextControl
              label="Phone URL"
              value={phoneUrl}
              onChange={(value) => setAttributes({ phoneUrl: value })}
            />
          </PanelBody>

          <PanelBody title="Stats" initialOpen={false}>
            <TextControl
              label="Stat 1 value"
              value={stat1Value}
              onChange={(v) => setAttributes({ stat1Value: v })}
            />
            <TextControl
              label="Stat 1 label"
              value={stat1Label}
              onChange={(v) => setAttributes({ stat1Label: v })}
            />
            <TextControl
              label="Stat 2 value"
              value={stat2Value}
              onChange={(v) => setAttributes({ stat2Value: v })}
            />
            <TextControl
              label="Stat 2 label"
              value={stat2Label}
              onChange={(v) => setAttributes({ stat2Label: v })}
            />
            <TextControl
              label="Stat 3 value"
              value={stat3Value}
              onChange={(v) => setAttributes({ stat3Value: v })}
            />
            <TextControl
              label="Stat 3 label"
              value={stat3Label}
              onChange={(v) => setAttributes({ stat3Label: v })}
            />
          </PanelBody>

          <PanelBody title="Mosaic Images" initialOpen={false}>
            {imagePicker("Top-left image", imageTopLeft, "imageTopLeft")}
            {imagePicker("Top-right image", imageTopRight, "imageTopRight")}
            {imagePicker(
              "Bottom-left image",
              imageBottomLeft,
              "imageBottomLeft",
            )}
          </PanelBody>
        </InspectorControls>

        <section {...blockProps}>
          <div className="ohio-trusted-hero-inner">
            <div className="ohio-trusted-hero-mosaic">
              <div
                className="ohio-tile ohio-tile--a"
                style={{ backgroundImage: `url(${imageTopLeft})` }}
              ></div>
              <div
                className="ohio-tile ohio-tile--b"
                style={{ backgroundImage: `url(${imageTopRight})` }}
              ></div>
              <div
                className="ohio-tile ohio-tile--c"
                style={{ backgroundImage: `url(${imageBottomLeft})` }}
              ></div>
              <div className="ohio-tile ohio-tile--d">
                <div className="ohio-shield"></div>
              </div>
            </div>

            <div className="ohio-trusted-hero-content">
              <p className="ohio-hero-badge">
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                <span>{badgeText}</span>
              </p>

              <h2 className="ohio-hero-title">
                {titleStart}
                <br />
                <span>{titleHighlight}</span> {titleEnd}
              </h2>

              <RichText
                tagName="p"
                className="ohio-hero-description"
                value={description}
                onChange={(value) => setAttributes({ description: value })}
                placeholder="Hero description"
              />

              <div className="ohio-hero-actions">
                <a href={ctaUrl || "#"} className="ohio-hero-cta">
                  <span>{ctaText}</span>
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </a>

                <a href={phoneUrl || "#"} className="ohio-hero-phone">
                  <i className="fa-solid fa-phone" aria-hidden="true"></i>
                  <span>{phoneText}</span>
                </a>
              </div>

              <div className="ohio-hero-stats">
                <div className="ohio-hero-stat">
                  <strong>{stat1Value}</strong>
                  <span>{stat1Label}</span>
                </div>
                <div className="ohio-hero-stat">
                  <strong>{stat2Value}</strong>
                  <span>{stat2Label}</span>
                </div>
                <div className="ohio-hero-stat">
                  <strong>{stat3Value}</strong>
                  <span>{stat3Label}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  },

  save({ attributes }) {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      titleEnd,
      description,
      ctaText,
      ctaUrl,
      phoneText,
      phoneUrl,
      stat1Value,
      stat1Label,
      stat2Value,
      stat2Label,
      stat3Value,
      stat3Label,
      imageTopLeft,
      imageTopRight,
      imageBottomLeft,
    } = attributes;

    return (
      <section className="ohio-trusted-hero">
        <div className="ohio-trusted-hero-inner">
          <div className="ohio-trusted-hero-mosaic">
            <div
              className="ohio-tile ohio-tile--a"
              style={{ backgroundImage: `url(${imageTopLeft})` }}
            ></div>
            <div
              className="ohio-tile ohio-tile--b"
              style={{ backgroundImage: `url(${imageTopRight})` }}
            ></div>
            <div
              className="ohio-tile ohio-tile--c"
              style={{ backgroundImage: `url(${imageBottomLeft})` }}
            ></div>
            <div className="ohio-tile ohio-tile--d">
              <div className="ohio-shield"></div>
            </div>
          </div>

          <div className="ohio-trusted-hero-content">
            <p className="ohio-hero-badge">
              <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
              <span>{badgeText}</span>
            </p>

            <h2 className="ohio-hero-title">
              {titleStart}
              <br />
              <span>{titleHighlight}</span> {titleEnd}
            </h2>

            <p className="ohio-hero-description">{description}</p>

            <div className="ohio-hero-actions">
              <a href={ctaUrl || "#"} className="ohio-hero-cta">
                <span>{ctaText}</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>

              <a href={phoneUrl || "#"} className="ohio-hero-phone">
                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                <span>{phoneText}</span>
              </a>
            </div>

            <div className="ohio-hero-stats">
              <div className="ohio-hero-stat">
                <strong>{stat1Value}</strong>
                <span>{stat1Label}</span>
              </div>
              <div className="ohio-hero-stat">
                <strong>{stat2Value}</strong>
                <span>{stat2Label}</span>
              </div>
              <div className="ohio-hero-stat">
                <strong>{stat3Value}</strong>
                <span>{stat3Label}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
});
