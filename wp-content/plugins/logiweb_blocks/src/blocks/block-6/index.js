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
registerBlockType("logiweb/custom-block-6", {
  title: "Custom Block 6",
  icon: "smiley",
  category: "widgets",
  attributes: {
    title: { type: "string" },
    description: { type: "string" },
    backgroundImage: {
      type: "string",
      default:
        window.location.origin +
        "/wp-content/plugins/logiweb_blocks/assets/Placeholder_Image_3.png",
    },
    feature1_title: { type: "string" },
    feature1_description: { type: "string" },
    feature2_title: { type: "string" },
    feature2_description: { type: "string" },
  },
  edit: ({ attributes, setAttributes }) => {
    const {
      title,
      description,
      backgroundImage,
      feature1_title,
      feature1_description,
      feature2_title,
      feature2_description,
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

        <div className="section-container section-type-6">
          <div className="container-top">
            <div className="container-left">
              <RichText
                tagName="div"
                className="title-medium"
                value={title}
                onChange={(value) => setAttributes({ title: value })}
                placeholder="Add title"
              />
            </div>
            <div className="container-right">
              <RichText
                tagName="div"
                className="description"
                value={description}
                onChange={(value) => setAttributes({ description: value })}
                placeholder="Add description"
              />

              <div className="benefits-list">
                <div className="list-item benefits-list-item">
                  <RichText
                    tagName="div"
                    className="title-small"
                    value={feature1_title}
                    onChange={(value) =>
                      setAttributes({ feature1_title: value })
                    }
                    placeholder="Add Feature 1 Title"
                  />
                  <RichText
                    tagName="div"
                    className="description-small"
                    value={feature1_description}
                    onChange={(value) =>
                      setAttributes({ feature1_description: value })
                    }
                    placeholder="Add Feature 1 Description"
                  />
                </div>
                <div className="list-item benefits-list-item">
                  <RichText
                    tagName="div"
                    className="title-small"
                    value={feature2_title}
                    onChange={(value) =>
                      setAttributes({ feature2_title: value })
                    }
                    placeholder="Add Feature 2 Title"
                  />
                  <RichText
                    tagName="div"
                    className="description-small"
                    value={feature2_description}
                    onChange={(value) =>
                      setAttributes({ feature2_description: value })
                    }
                    placeholder="Add Feature 2 Description"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="container-bottom"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <img
              src={
                window.location.origin +
                "/wp-content/plugins/logiweb_blocks/assets/Placeholder_Image_3.png"
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
      title,
      description,
      backgroundImage,
      feature1_title,
      feature1_description,
      feature2_title,
      feature2_description,
    } = attributes;

    return (
      <div className="section-container section-type-6">
        <div className="container-top">
          <div className="container-left">
            <div className="title-medium">{title}</div>
          </div>

          <div className="container-right">
            <div className="description">{description}</div>
            <div className="benefits-list">
              <div className="list-item benefits-list-item">
                <i class="icon fa-solid fa-cube"></i>
                <div className="title-small">{feature1_title}</div>
                <div className="description-small">{feature1_description}</div>
              </div>
              <div className="icon list-item benefits-list-item">
                <i class="icon fa-solid fa-cube"></i>
                <div className="title-small">{feature2_title}</div>
                <div className="description-small">{feature2_description}.</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-bottom"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <img
            src={
              window.location.origin +
              "/wp-content/plugins/logiweb_blocks/assets/Placeholder_Image_3.png"
            }
            alt="Placeholder Image"
          />
        </div>
      </div>
    );
  },
});
