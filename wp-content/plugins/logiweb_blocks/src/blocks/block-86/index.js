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
  TextControl,
  TextareaControl,
  Button,
} from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_FEATURES = [
  {
    icon: "fa-regular fa-eye",
    title: "Design & Visual Planning",
    description:
      "Helping clients conceptualize spatial layouts, architectural flow, material selections, and modern color palettes before construction even begins.",
  },
  {
    icon: "fa-solid fa-hammer",
    title: "Premium Material Procurement",
    description:
      "Sourcing elite flooring, custom-grade trim, architectural fixtures, and heavy-duty structural components built to last.",
  },
];

registerBlockType(metadata.name, {
  ...metadata,
  attributes: {
    badge: { type: "string", default: "The Upsell Details" },
    titleStart: { type: "string", default: "Design & Material" },
    titleHighlight: { type: "string", default: "Excellence" },
    description: {
      type: "string",
      default:
        "Beyond construction, we guide you through every design decision - from spatial planning to material selection - ensuring your remodel is cohesive, functional, and stunning.",
    },
    imageUrl: { type: "string", default: "" },
    imageAlt: { type: "string", default: "" },
    imageCaptionTitle: {
      type: "string",
      default: "In-House Design Consultation",
    },
    imageCaptionSubtitle: {
      type: "string",
      default: "Blueprints, Materials & 3D Planning",
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
      Array.isArray(features) && features.length === 2
        ? features
        : DEFAULT_FEATURES;

    const blockProps = useBlockProps({
      className: "design-material-split-block",
    });

    const updateFeature = (index, key, value) => {
      const next = safeFeatures.map((feature, i) =>
        i === index ? { ...feature, [key]: value } : feature,
      );
      setAttributes({ features: next });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Header" initialOpen={true}>
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

          <PanelBody title="Featured Image" initialOpen={false}>
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
              label="Image alt"
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
                label="Title"
                value={feature.title || ""}
                onChange={(value) => updateFeature(index, "title", value)}
              />
              <TextareaControl
                label="Description"
                value={feature.description || ""}
                onChange={(value) => updateFeature(index, "description", value)}
              />
            </PanelBody>
          ))}
        </InspectorControls>

        <section {...blockProps}>
          <div className="design-material-split-inner">
            <div className="design-material-split-content">
              <RichText
                tagName="p"
                className="design-material-split-badge"
                value={badge}
                onChange={(value) => setAttributes({ badge: value })}
                placeholder="Badge"
              />

              <h2 className="design-material-split-title">
                <RichText
                  tagName="span"
                  value={titleStart}
                  onChange={(value) => setAttributes({ titleStart: value })}
                  placeholder="Title start"
                />{" "}
                <RichText
                  tagName="span"
                  className="design-material-split-title-highlight"
                  value={titleHighlight}
                  onChange={(value) => setAttributes({ titleHighlight: value })}
                  placeholder="Title highlight"
                />
              </h2>

              <RichText
                tagName="p"
                className="design-material-split-description"
                value={description}
                onChange={(value) => setAttributes({ description: value })}
                placeholder="Description"
              />

              <div className="design-material-split-features">
                {safeFeatures.map((feature, index) => (
                  <article
                    key={index}
                    className="design-material-split-feature-item"
                  >
                    <div className="design-material-split-feature-icon">
                      <i
                        className={feature.icon || "fa-solid fa-check"}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="design-material-split-feature-text">
                      <h3 className="design-material-split-feature-title">
                        {feature.title}
                      </h3>
                      <p className="design-material-split-feature-description">
                        {feature.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="design-material-split-media">
              {imageUrl ? (
                <img
                  className="design-material-split-image"
                  src={imageUrl}
                  alt={imageAlt || ""}
                />
              ) : (
                <div className="design-material-split-image-placeholder">
                  Select image
                </div>
              )}
              <div className="design-material-split-caption">
                <p className="design-material-split-caption-title">
                  {imageCaptionTitle}
                </p>
                <p className="design-material-split-caption-subtitle">
                  {imageCaptionSubtitle}
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  },

  save({ attributes }) {
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
      Array.isArray(features) && features.length === 2
        ? features
        : DEFAULT_FEATURES;

    return (
      <section className="design-material-split-block">
        <div className="design-material-split-inner">
          <div className="design-material-split-content">
            <p className="design-material-split-badge">
              <RichText.Content value={badge} />
            </p>

            <h2 className="design-material-split-title">
              <RichText.Content value={titleStart} />{" "}
              <span className="design-material-split-title-highlight">
                <RichText.Content value={titleHighlight} />
              </span>
            </h2>

            <p className="design-material-split-description">
              <RichText.Content value={description} />
            </p>

            <div className="design-material-split-features">
              {safeFeatures.map((feature, index) => (
                <article
                  key={index}
                  className="design-material-split-feature-item"
                >
                  <div className="design-material-split-feature-icon">
                    <i
                      className={feature.icon || "fa-solid fa-check"}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="design-material-split-feature-text">
                    <h3 className="design-material-split-feature-title">
                      <RichText.Content value={feature.title} />
                    </h3>
                    <p className="design-material-split-feature-description">
                      <RichText.Content value={feature.description} />
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="design-material-split-media">
            {imageUrl ? (
              <img
                className="design-material-split-image"
                src={imageUrl}
                alt={imageAlt || ""}
              />
            ) : (
              <div className="design-material-split-image-placeholder">
                Select image
              </div>
            )}
            <div className="design-material-split-caption">
              <p className="design-material-split-caption-title">
                <RichText.Content value={imageCaptionTitle} />
              </p>
              <p className="design-material-split-caption-subtitle">
                <RichText.Content value={imageCaptionSubtitle} />
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  },
});
