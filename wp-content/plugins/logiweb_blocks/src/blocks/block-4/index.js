import { registerBlockType } from "@wordpress/blocks";
import {
  RichText,
  MediaUpload,
  InspectorControls,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  Button,
  SelectControl,
} from "@wordpress/components";
import { URLInput } from "@wordpress/block-editor";
import "../../global-styles.scss";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-4", {
  ...metadata,
  attributes: {
    subtitle: {
      type: "string",
      default: "Our Core Service",
    },
    title: {
      type: "string",
      default: "Interior Painting",
    },
    description: {
      type: "string",
      default:
        "Refresh your living spaces with our professional interior painting services. We use premium paints and meticulous techniques to deliver flawless finishes.",
    },
    backgroundImage: {
      type: "string",
      default:
        typeof logiweb_blocks !== "undefined" &&
        logiweb_blocks.placeholder_image
          ? logiweb_blocks.placeholder_image
          : "https://via.placeholder.com/400x300?text=Add+Image",
    },
    imagePosition: {
      type: "string",
      default: "left",
    },
    primary_btn_text: { type: "string", default: "Get a Quote" },
    primary_btn_link: { type: "string" },
    feature1_description: { type: "string", default: "Walls & ceilings" },
    feature2_description: { type: "string", default: "Trim & molding" },
    feature3_description: {
      type: "string",
      default: "Cabinets & built-ins",
    },
    feature4_description: { type: "string", default: "Accent walls" },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      subtitle,
      title,
      description,
      backgroundImage,
      imagePosition,
      primary_btn_link,
      primary_btn_text,
      feature1_description,
      feature2_description,
      feature3_description,
      feature4_description,
    } = attributes;

    const onSelectImage = (media) => {
      setAttributes({ backgroundImage: media.url });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Image Settings">
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={["image"]}
              value={backgroundImage}
              render={({ open }) => (
                <Button onClick={open}>Select Image</Button>
              )}
            />
            <SelectControl
              label="Image Side"
              value={imagePosition}
              options={[
                { label: "Left", value: "left" },
                { label: "Right", value: "right" },
              ]}
              onChange={(value) => setAttributes({ imagePosition: value })}
            />
          </PanelBody>

          <PanelBody title="Primary Button Settings">
            <TextControl
              label="Button Text"
              value={primary_btn_text}
              onChange={(value) => setAttributes({ primary_btn_text: value })}
            />
            <URLInput
              label="Button Link"
              value={primary_btn_link}
              onChange={(value) => setAttributes({ primary_btn_link: value })}
            />
          </PanelBody>
        </InspectorControls>

        <div
          className={`section-container section-type-4 ${
            imagePosition === "right" ? "image-right" : "image-left"
          }`}
        >
          <div className="container-left">
            <RichText
              tagName="div"
              className="subtitle"
              value={subtitle}
              onChange={(value) => setAttributes({ subtitle: value })}
              placeholder="Add subtitle"
            />
            <RichText
              tagName="div"
              className="title"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
              placeholder="Add title"
            />
            <RichText
              tagName="div"
              className="description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Add description"
            />

            <div className="benefits-list">
              <div className="benefits-list-item">
                <span className="benefit-check" aria-hidden="true">
                  <i className="fa-solid fa-check"></i>
                </span>
                <RichText
                  tagName="div"
                  className="description-small"
                  value={feature1_description}
                  onChange={(value) =>
                    setAttributes({ feature1_description: value })
                  }
                  placeholder="Add Text"
                />
              </div>

              <div className="benefits-list-item">
                <span className="benefit-check" aria-hidden="true">
                  <i className="fa-solid fa-check"></i>
                </span>
                <RichText
                  tagName="div"
                  className="description-small"
                  value={feature2_description}
                  onChange={(value) =>
                    setAttributes({ feature2_description: value })
                  }
                  placeholder="Add Text"
                />
              </div>

              <div className="benefits-list-item">
                <span className="benefit-check" aria-hidden="true">
                  <i className="fa-solid fa-check"></i>
                </span>
                <RichText
                  tagName="div"
                  className="description-small"
                  value={feature3_description}
                  onChange={(value) =>
                    setAttributes({ feature3_description: value })
                  }
                  placeholder="Add Text"
                />
              </div>

              <div className="benefits-list-item">
                <span className="benefit-check" aria-hidden="true">
                  <i className="fa-solid fa-check"></i>
                </span>
                <RichText
                  tagName="div"
                  className="description-small"
                  value={feature4_description}
                  onChange={(value) =>
                    setAttributes({ feature4_description: value })
                  }
                  placeholder="Add Text"
                />
              </div>
            </div>

            <div className="buttons">
              <RichText
                tagName="button"
                className="btn-primary"
                value={primary_btn_text}
                onChange={(value) => setAttributes({ primary_btn_text: value })}
                placeholder="Button Text"
              />
            </div>
          </div>

          <div
            className="container-right"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <img src={backgroundImage} alt={title || "Service image"} />
          </div>
        </div>
      </>
    );
  },

  save: ({ attributes }) => {
    const {
      subtitle,
      title,
      description,
      backgroundImage,
      imagePosition,
      primary_btn_link,
      primary_btn_text,
      feature1_description,
      feature2_description,
      feature3_description,
      feature4_description,
    } = attributes;

    return (
      <div
        className={`section-container section-type-4 ${
          imagePosition === "right" ? "image-right" : "image-left"
        }`}
      >
        <div className="container-left">
          <div className="subtitle">{subtitle}</div>
          <div className="title">{title}</div>
          <div className="description">
            <RichText.Content value={description} tagName="div" />
          </div>

          <div className="benefits-list">
            <div className="benefits-list-item">
              <span className="benefit-check" aria-hidden="true">
                <i className="fa-solid fa-check"></i>
              </span>
              <div className="description-small">
                <RichText.Content value={feature1_description} tagName="div" />
              </div>
            </div>
            <div className="benefits-list-item">
              <span className="benefit-check" aria-hidden="true">
                <i className="fa-solid fa-check"></i>
              </span>
              <div className="description-small">
                <RichText.Content value={feature2_description} tagName="div" />
              </div>
            </div>
            <div className="benefits-list-item">
              <span className="benefit-check" aria-hidden="true">
                <i className="fa-solid fa-check"></i>
              </span>
              <div className="description-small">
                <RichText.Content value={feature3_description} tagName="div" />
              </div>
            </div>
            <div className="benefits-list-item">
              <span className="benefit-check" aria-hidden="true">
                <i className="fa-solid fa-check"></i>
              </span>
              <div className="description-small">
                <RichText.Content value={feature4_description} tagName="div" />
              </div>
            </div>
          </div>

          <div className="buttons">
            {primary_btn_text && (
              <a className="btn-primary" href={primary_btn_link}>
                {primary_btn_text}
                <span
                  className="material-symbols-outlined notranslate"
                  aria-hidden="true"
                >
                  chevron_right
                </span>
              </a>
            )}
          </div>
        </div>

        <div
          className="container-right"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <img src={backgroundImage} alt={title || "Service image"} />
        </div>
      </div>
    );
  },
});
