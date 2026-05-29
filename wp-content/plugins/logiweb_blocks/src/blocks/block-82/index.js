import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import {
  PanelBody,
  PanelRow,
  TextControl,
  TextareaControl,
  Button,
} from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_FEATURES = [
  {
    icon: "fa-solid fa-spray-can-sparkles",
    title: "Fine-Finish Spraying",
    description:
      "Factory-smooth cabinet painting, built-ins, wainscoting, and intricate crown molding. Our spray booth technique delivers a finish indistinguishable from original manufacturing.",
  },
  {
    icon: "fa-solid fa-palette",
    title: "Expert Color Consultation",
    description:
      "Professional design guidance to select the perfect modern palettes - crisp whites, warm neutrals, and bold contemporary dark accents that complement your specific lighting and floor plans.",
  },
  {
    icon: "fa-solid fa-check",
    title: "Accent Walls & Feature Details",
    description:
      "Statement walls, coffered ceiling details, trim contrast work, and custom stencil applications that add depth, character, and architectural interest to any space.",
  },
];

registerBlockType(metadata.name, {
  ...metadata,
  attributes: {
    badge: { type: "string", default: "Specialty Finishes" },
    titleStart: { type: "string", default: "Fine-Finish & Accent" },
    titleHighlight: { type: "string", default: "Details" },
    description: {
      type: "string",
      default:
        "High-end clients love custom details. Our specialty fine-finish work transforms ordinary surfaces into showroom-quality centerpieces that define a room.",
    },
    imageUrl: { type: "string", default: "" },
    imageAlt: { type: "string", default: "" },
    imageCaptionTitle: {
      type: "string",
      default: "Factory-Smooth Cabinet Finish",
    },
    imageCaptionSubtitle: {
      type: "string",
      default: "Navy & Gold Luxury Kitchen",
    },
    features: { type: "array", default: DEFAULT_FEATURES },
  },

  edit({ attributes, setAttributes }) {
    const {
      badge,
      titleStart,
      titleHighlight,
      description,
      imageUrl,
      imageAlt,
      imageCaptionTitle,
      imageCaptionSubtitle,
      features,
    } = attributes;

    const safeFeatures =
      Array.isArray(features) && features.length ? features : DEFAULT_FEATURES;

    const blockProps = useBlockProps({ className: "specialty-split-block" });

    const updateFeature = (index, key, value) => {
      const next = safeFeatures.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [key]: value } : item,
      );
      setAttributes({ features: next });
    };

    const addFeature = () => {
      setAttributes({
        features: [
          ...safeFeatures,
          {
            icon: "fa-solid fa-check",
            title: "New specialty",
            description: "Specialty description",
          },
        ],
      });
    };

    const removeFeature = (index) => {
      if (safeFeatures.length <= 1) {
        return;
      }
      setAttributes({
        features: safeFeatures.filter((_, itemIndex) => itemIndex !== index),
      });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Main Image" initialOpen={true}>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) =>
                  setAttributes({
                    imageUrl: media.url,
                    imageAlt: media.alt || "",
                  })
                }
                allowedTypes={["image"]}
                render={({ open }) => (
                  <div>
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt=""
                        style={{
                          width: "100%",
                          borderRadius: 8,
                          marginBottom: 8,
                        }}
                      />
                    ) : null}
                    <Button isSecondary onClick={open}>
                      {imageUrl ? "Change image" : "Select image"}
                    </Button>
                  </div>
                )}
              />
            </MediaUploadCheck>
            <TextControl
              label="Image alt text"
              value={imageAlt}
              onChange={(value) => setAttributes({ imageAlt: value })}
            />
            <TextControl
              label="Image caption title"
              value={imageCaptionTitle}
              onChange={(value) => setAttributes({ imageCaptionTitle: value })}
            />
            <TextControl
              label="Image caption subtitle"
              value={imageCaptionSubtitle}
              onChange={(value) =>
                setAttributes({ imageCaptionSubtitle: value })
              }
            />
          </PanelBody>

          <PanelBody title="Header" initialOpen={false}>
            <TextControl
              label="Badge"
              value={badge}
              onChange={(value) => setAttributes({ badge: value })}
            />
            <TextControl
              label="Title start"
              value={titleStart}
              onChange={(value) => setAttributes({ titleStart: value })}
            />
            <TextControl
              label="Title highlight"
              value={titleHighlight}
              onChange={(value) => setAttributes({ titleHighlight: value })}
            />
            <TextareaControl
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
            />
          </PanelBody>

          {safeFeatures.map((feature, index) => (
            <PanelBody
              key={index}
              title={`Feature ${index + 1}`}
              initialOpen={false}
            >
              <TextControl
                label="Icon class"
                value={feature.icon || ""}
                onChange={(value) => updateFeature(index, "icon", value)}
              />
              <TextControl
                label="Feature title"
                value={feature.title || ""}
                onChange={(value) => updateFeature(index, "title", value)}
              />
              <TextareaControl
                label="Feature description"
                value={feature.description || ""}
                onChange={(value) => updateFeature(index, "description", value)}
              />
              <PanelRow>
                <Button
                  isDestructive
                  isSmall
                  onClick={() => removeFeature(index)}
                  disabled={safeFeatures.length <= 1}
                >
                  Remove specialty
                </Button>
              </PanelRow>
            </PanelBody>
          ))}

          <PanelBody title="Actions" initialOpen={false}>
            <Button isPrimary isSmall onClick={addFeature}>
              + Add specialty
            </Button>
          </PanelBody>
        </InspectorControls>

        <section {...blockProps}>
          <div className="specialty-split-inner">
            <div className="specialty-split-media">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={imageAlt || ""}
                  className="specialty-split-image"
                />
              ) : (
                <div className="specialty-split-image-placeholder">
                  Select image
                </div>
              )}
              <div className="specialty-split-caption">
                <p className="specialty-split-caption-title">
                  {imageCaptionTitle}
                </p>
                <p className="specialty-split-caption-subtitle">
                  {imageCaptionSubtitle}
                </p>
              </div>
            </div>

            <div className="specialty-split-content">
              <RichText
                tagName="p"
                className="specialty-split-badge"
                value={badge}
                onChange={(value) => setAttributes({ badge: value })}
                placeholder="Badge"
              />

              <h2 className="specialty-split-title">
                <RichText
                  tagName="span"
                  value={titleStart}
                  onChange={(value) => setAttributes({ titleStart: value })}
                  placeholder="Title start"
                />{" "}
                <RichText
                  tagName="span"
                  className="specialty-split-title-highlight"
                  value={titleHighlight}
                  onChange={(value) => setAttributes({ titleHighlight: value })}
                  placeholder="Title highlight"
                />
              </h2>

              <RichText
                tagName="p"
                className="specialty-split-description"
                value={description}
                onChange={(value) => setAttributes({ description: value })}
                placeholder="Description"
              />

              <div className="specialty-split-features">
                {safeFeatures.map((feature, index) => (
                  <article key={index} className="specialty-split-feature-item">
                    <div className="specialty-split-feature-icon">
                      <i
                        className={feature.icon || "fa-solid fa-check"}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="specialty-split-feature-text">
                      <h3 className="specialty-split-feature-title">
                        {feature.title}
                      </h3>
                      <p className="specialty-split-feature-description">
                        {feature.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  },

  save() {
    return null;
  },
});
