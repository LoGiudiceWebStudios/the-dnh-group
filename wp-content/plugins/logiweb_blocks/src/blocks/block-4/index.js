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
registerBlockType("logiweb/custom-block-4", {
  title: "Custom Block 4",
  icon: "smiley",
  category: "widgets",
  attributes: {
    subtitle: { type: "string" },
    title: { type: "string" },
    description: { type: "string" },
    backgroundImage: { type: "string" },
    primary_btn_text: { type: "string", default: "Learn More" },
    primary_btn_link: { type: "string" },
    tertiary_btn_text: { type: "string", default: "Get Started" },
    tertiary_btn_link: { type: "string" },
    feature1_description: { type: "string" },
    feature2_description: { type: "string" },
    feature3_description: { type: "string" },
  },
  edit: ({ attributes, setAttributes }) => {
    const {
      subtitle,
      title,
      description,
      backgroundImage,
      primary_btn_link,
      primary_btn_text,
      tertiary_btn_text,
      tertiary_btn_link,
      feature1_description,
      feature2_description,
      feature3_description,
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
          </PanelBody>
        </InspectorControls>

        <div className="section-container section-type-4">
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
                <RichText
                  tagName="div"
                  className="description"
                  value={feature1_description}
                  onChange={(value) =>
                    setAttributes({ feature1_description: value })
                  }
                  placeholder="Add Text"
                />
              </div>

              <div className="benefits-list-item">
                <RichText
                  tagName="div"
                  className="description"
                  value={feature2_description}
                  onChange={(value) =>
                    setAttributes({ feature2_description: value })
                  }
                  placeholder="Add Text"
                />
              </div>

              <div className="benefits-list-item">
                <RichText
                  tagName="div"
                  className="description"
                  value={feature3_description}
                  onChange={(value) =>
                    setAttributes({ feature3_description: value })
                  }
                  placeholder="Add Text"
                />
              </div>
            </div>

            <InspectorControls>
              <PanelBody title="Primary Button Settings">
                <TextControl
                  label="Button Text"
                  value={primary_btn_text}
                  onChange={(value) =>
                    setAttributes({ primary_btn_text: value })
                  }
                />
                <URLInput
                  label="Button Link"
                  value={primary_btn_link}
                  onChange={(value) =>
                    setAttributes({ primary_btn_link: value })
                  }
                />
              </PanelBody>
            </InspectorControls>

            <InspectorControls>
              <PanelBody title="Tertiary Button Settings">
                <TextControl
                  label="Button Text"
                  value={tertiary_btn_text}
                  onChange={(value) =>
                    setAttributes({ tertiary_btn_text: value })
                  }
                />
                <URLInput
                  label="Button Link"
                  value={tertiary_btn_link}
                  onChange={(value) =>
                    setAttributes({ tertiary_btn_link: value })
                  }
                />
              </PanelBody>
            </InspectorControls>
            <div className="buttons">
              <RichText
                tagName="button"
                className="btn-primary"
                value={primary_btn_text}
                onChange={(value) => setAttributes({ primary_btn_text: value })}
                placeholder="Button Text"
                href={primary_btn_link}
              />

              <RichText
                tagName="button"
                className="btn-tertiary"
                value={tertiary_btn_text}
                onChange={(value) =>
                  setAttributes({ tertiary_btn_text: value })
                }
                placeholder="Button Text"
                href={tertiary_btn_link}
              />
            </div>
          </div>

          <div
            className="container-right"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <img
              src={
                window.location.origin +
                "/wp-content/plugins/logiweb_blocks/assets/Placeholder_Image_4.png"
              }
              alt="Placeholder Image"
            />
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
      primary_btn_link,
      primary_btn_text,
      tertiary_btn_text,
      tertiary_btn_link,
      feature1_description,
      feature2_description,
      feature3_description,
    } = attributes;

    return (
      <div className="section-container section-type-4">
        <div className="container-left">
          <div className="subtitle">{subtitle}</div>
          <div className="title">{title}</div>
          <div className="description">
            <RichText.Content value={description} tagName="div" />
          </div>
          <div className="benefits-list">
            <div className="benefits-list-item">
              <i class="fa-solid fa-cube"></i>
              <div className="description-small">
                <RichText.Content value={feature1_description} tagName="div" />
              </div>
            </div>
            <div className="benefits-list-item">
              <i class="fa-solid fa-cube"></i>
              <div className="description-small">
                <RichText.Content value={feature2_description} tagName="div" />
              </div>
            </div>
            <div className="benefits-list-item">
              <i class="fa-solid fa-cube"></i>
              <div className="description-small">
                <RichText.Content value={feature3_description} tagName="div" />
              </div>
            </div>
          </div>
          <div className="buttons">
            <a className="btn-primary" href={primary_btn_link}>
              {primary_btn_text}
            </a>
            <a className="btn-tertiary" href={tertiary_btn_link}>
                {tertiary_btn_text} <span className="material-symbols-outlined notranslate">chevron_right</span>
            </a>
          </div>
        </div>

        <div
          className="container-right"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <img
            src={
              window.location.origin +
              "/wp-content/plugins/logiweb_blocks/assets/Placeholder_Image_4.png"
            }
            alt="Placeholder Image"
          />
        </div>
      </div>
    );
  },
});
