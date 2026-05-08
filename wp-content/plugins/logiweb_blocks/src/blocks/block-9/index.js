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
registerBlockType("logiweb/custom-block-9", {
  title: "Half Screen Image",
  icon: "admin-site",
  category: "widgets",
  attributes: {
    imageUrl: {
      type: "string",
      default: "",
    },
    imageId: {
      type: "number",
      default: null,
    },
    overlayText: {
      type: "string",
      default: "",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { imageUrl, imageId, overlayText } = attributes;

    const onSelectImage = (media) => {
      setAttributes({
        imageUrl: media.url,
        imageId: media.id,
      });
    };

    return (
      <div
        className="half-screen-image-block"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          width: "100%",
          position: "relative",
        }}
      >
        <InspectorControls>
          <PanelBody title="Background Image Settings">
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={["image"]}
              value={imageId}
              render={({ open }) => (
                <Button onClick={open}>
                  {imageUrl ? "Change Image" : "Upload Image"}
                </Button>
              )}
            />
          </PanelBody>
          <PanelBody title="Overlay Text">
            <TextControl
              label="Text over image"
              value={overlayText}
              onChange={(value) => setAttributes({ overlayText: value })}
              placeholder="Enter overlay text"
            />
          </PanelBody>
        </InspectorControls>

        {imageUrl && (
          <>
            <div
              className="image-black-overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.3)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <RichText
              tagName="div"
              className="overlay-text"
              value={overlayText}
              onChange={(value) => setAttributes({ overlayText: value })}
              placeholder="Add text over the image"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                textAlign: "center",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: "6rem",
                letterSpacing: "2px",
                width: "90%",
                zIndex: 2,
              }}
            />
          </>
        )}

        {!imageUrl && (
          <div className="image-placeholder">
            Upload an image to display half-screen.
          </div>
        )}
      </div>
    );
  },

  save: ({ attributes }) => {
    const { imageUrl, overlayText } = attributes;
    return (
      <div
        className="half-screen-image-block"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          width: "100%",
          position: "relative",
        }}
      >
        {overlayText && (
          <>
            <div
              className="image-black-overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.3)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <div
              className="overlay-text"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                textAlign: "center",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: "6rem",
                letterSpacing: "2px",
                width: "90%",
                zIndex: 2,
              }}
            >
              <RichText.Content value={overlayText} />
            </div>
          </>
        )}
      </div>
    );
  },
});
