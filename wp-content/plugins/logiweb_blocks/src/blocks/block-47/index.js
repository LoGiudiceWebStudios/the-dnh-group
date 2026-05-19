import { registerBlockType } from "@wordpress/blocks";
import {
  RichText,
  MediaUpload,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import { URLInput } from "@wordpress/block-editor";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_IMAGE =
  window.location.origin +
  "/wp-content/plugins/logiweb_blocks/assets/Placeholder_Image_4.png";

const DEFAULT_FEATURES = [
  {
    title: "Kitchen Renovations",
    description:
      "Custom kitchen designs with quality cabinets, countertops, and finishes.",
  },
  {
    title: "Bathroom Remodels",
    description:
      "Transform your bathroom into a spa-like retreat with modern fixtures and tile.",
  },
  {
    title: "Basement Finishing",
    description:
      "Maximize your living space with professional basement renovations.",
  },
  {
    title: "Room Additions",
    description:
      "Expand your home with seamless room additions and expansions.",
  },
];

registerBlockType("logiweb/custom-block-47", {
  ...metadata,
  attributes: {
    title: {
      type: "string",
      default: "Expert Home Remodeling",
    },
    description: {
      type: "string",
      default:
        "From concept to completion, our skilled craftsmen bring your vision to life with quality materials and attention to every detail.",
    },
    imageUrl: {
      type: "string",
      default: DEFAULT_IMAGE,
    },
    imageAlt: {
      type: "string",
      default: "Home remodeling project",
    },
    ctaText: {
      type: "string",
      default: "Start Your Project",
    },
    ctaUrl: {
      type: "string",
      default: "#",
    },
    features: {
      type: "array",
      default: DEFAULT_FEATURES,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      title,
      description,
      imageUrl,
      imageAlt,
      ctaText,
      ctaUrl,
      features = [],
    } = attributes;

    const onSelectImage = (media) => {
      setAttributes({
        imageUrl: media?.url || imageUrl,
        imageAlt: media?.alt || media?.title || imageAlt,
      });
    };

    const updateFeature = (index, key, value) => {
      const next = [...features];
      next[index] = {
        ...next[index],
        [key]: value,
      };
      setAttributes({ features: next });
    };

    const addFeature = () => {
      setAttributes({
        features: [
          ...features,
          { title: "New Service", description: "Service description" },
        ],
      });
    };

    const removeFeature = (index) => {
      if (features.length <= 1) {
        return;
      }
      setAttributes({ features: features.filter((_, i) => i !== index) });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Image Settings" initialOpen={true}>
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={["image"]}
              value={imageUrl}
              render={({ open }) => (
                <Button onClick={open} isSecondary>
                  Select Image
                </Button>
              )}
            />
            <TextControl
              label="Image Alt"
              value={imageAlt}
              onChange={(value) => setAttributes({ imageAlt: value })}
            />
          </PanelBody>

          <PanelBody title="CTA Settings" initialOpen={false}>
            <TextControl
              label="Button Text"
              value={ctaText}
              onChange={(value) => setAttributes({ ctaText: value })}
            />
            <URLInput
              label="Button Link"
              value={ctaUrl}
              onChange={(value) => setAttributes({ ctaUrl: value })}
            />
          </PanelBody>

          <PanelBody
            title={`Service Cards (${features.length})`}
            initialOpen={false}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "10px",
                  borderBottom: "1px solid #e5e9f1",
                  paddingBottom: "10px",
                }}
              >
                <TextControl
                  label={`Card ${index + 1} Title`}
                  value={feature.title || ""}
                  onChange={(value) => updateFeature(index, "title", value)}
                />
                <TextControl
                  label="Description"
                  value={feature.description || ""}
                  onChange={(value) =>
                    updateFeature(index, "description", value)
                  }
                />
                <Button
                  isSmall
                  isDestructive
                  onClick={() => removeFeature(index)}
                  disabled={features.length <= 1}
                >
                  Remove card
                </Button>
              </div>
            ))}

            <Button isPrimary isSmall onClick={addFeature}>
              + Add card
            </Button>
          </PanelBody>
        </InspectorControls>

        <section className="remodeling-showcase-block">
          <div className="remodeling-showcase-inner">
            <div
              className="remodeling-showcase-media"
              style={{ backgroundImage: `url(${imageUrl})` }}
            >
              <img src={imageUrl} alt={imageAlt || "Showcase image"} />
            </div>

            <div className="remodeling-showcase-content">
              <RichText
                tagName="h2"
                className="remodeling-showcase-title"
                value={title}
                onChange={(value) => setAttributes({ title: value })}
                placeholder="Block title"
              />
              <RichText
                tagName="p"
                className="remodeling-showcase-description"
                value={description}
                onChange={(value) => setAttributes({ description: value })}
                placeholder="Block description"
              />

              <div className="remodeling-showcase-list">
                {features.map((feature, index) => (
                  <article key={index} className="remodeling-feature-card">
                    <span
                      className="remodeling-feature-check"
                      aria-hidden="true"
                    >
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <div className="remodeling-feature-copy">
                      <RichText
                        tagName="h3"
                        className="remodeling-feature-title"
                        value={feature.title}
                        onChange={(value) =>
                          updateFeature(index, "title", value)
                        }
                        placeholder="Service title"
                      />
                      <RichText
                        tagName="p"
                        className="remodeling-feature-description"
                        value={feature.description}
                        onChange={(value) =>
                          updateFeature(index, "description", value)
                        }
                        placeholder="Service description"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="remodeling-showcase-actions">
            <RichText
              tagName="button"
              className="btn-primary remodeling-showcase-btn"
              value={ctaText}
              onChange={(value) => setAttributes({ ctaText: value })}
              placeholder="Button text"
            />
          </div>
        </section>
      </>
    );
  },

  save: ({ attributes }) => {
    const {
      title,
      description,
      imageUrl,
      imageAlt,
      ctaText,
      ctaUrl,
      features = [],
    } = attributes;

    return (
      <section className="remodeling-showcase-block fade-in-on-scroll">
        <div className="remodeling-showcase-inner">
          <div
            className="remodeling-showcase-media"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <img src={imageUrl} alt={imageAlt || "Showcase image"} />
          </div>

          <div className="remodeling-showcase-content">
            <h2 className="remodeling-showcase-title">{title}</h2>
            <p className="remodeling-showcase-description">{description}</p>

            <div className="remodeling-showcase-list">
              {features.map((feature, index) => (
                <article key={index} className="remodeling-feature-card">
                  <span className="remodeling-feature-check" aria-hidden="true">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  <div className="remodeling-feature-copy">
                    <h3 className="remodeling-feature-title">
                      {feature.title}
                    </h3>
                    <p className="remodeling-feature-description">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {ctaText ? (
          <div className="remodeling-showcase-actions">
            <a className="btn-primary remodeling-showcase-btn" href={ctaUrl}>
              {ctaText}
              <span
                className="material-symbols-outlined notranslate"
                aria-hidden="true"
              >
                chevron_right
              </span>
            </a>
          </div>
        ) : null}
      </section>
    );
  },
});
