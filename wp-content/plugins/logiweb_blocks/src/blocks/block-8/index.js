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
registerBlockType("logiweb/custom-block-8", {
  title: "Full Screen Image",
  icon: "admin-site",
  category: "widgets",
  attributes: {
    imageUrl: {
      type: "string",
      default: "",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { imageUrl } = attributes;

    const onSelectImage = (media) => {
      setAttributes({ imageUrl: media.url });
    };

    return (
      <div
        className="full-screen-image-block"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <InspectorControls>
          <PanelBody title="Background Image Settings">
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={["image"]}
              value={imageUrl}
              render={({ open }) => (
                <Button onClick={open}>
                  {imageUrl ? "Change Image" : "Upload Image"}
                </Button>
              )}
            />
          </PanelBody>
        </InspectorControls>

        {!imageUrl && (
          <div className="image-placeholder">
            Upload an image to display full-screen.
          </div>
        )}
      </div>
    );
  },

  save: ({ attributes }) => {
    const { imageUrl } = attributes;
    return (
      <div
        className="full-screen-image-block"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      ></div>
    );
  },
});
