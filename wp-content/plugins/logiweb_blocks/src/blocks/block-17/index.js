import { registerBlockType } from "@wordpress/blocks";
import {
  RichText,
  MediaUpload,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, Button } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-17", {
  title: "Video Popover",
  icon: "smiley",
  category: "widgets",
  attributes: {
    subtitle: { type: "string" },
    title: { type: "string" },
    description: { type: "string" },
    videoUrl: { type: "string", default: "" },
  },
  edit: ({ attributes, setAttributes }) => {
    const {
      subtitle,
      title,
      description,
      videoUrl,
    } = attributes;

    const onSelectVideo = (media) => {
      setAttributes({ videoUrl: media.url });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Video Settings">
            <MediaUpload
              onSelect={onSelectVideo}
              allowedTypes={["video"]}
              value={videoUrl}
              render={({ open }) => (
                <Button onClick={open}>
                  {videoUrl ? "Change Video" : "Select Video"}
                </Button>
              )}
            />
          </PanelBody>
        </InspectorControls>

        <div className="section-container section-type-2">
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
          </div>
          <div className="container-right">
            {videoUrl ? (
              <video
                src={videoUrl}
                controls
                style={{
                  width: "100%",
                  maxWidth: "700px",
                  borderRadius: "10px",
                  background: "#000",
                }}
              />
            ) : (
              <div style={{
                background: "#eee",
                width: "100%",
                height: "350px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                color: "#999"
              }}>
                No video selected
              </div>
            )}
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
      videoUrl,
    } = attributes;

    return (
      <div className="section-container section-type-2">
        <div className="container-left">
          <div className="subtitle">{subtitle}</div>
          <div className="title">{title}</div>
          <div className="description">
            <RichText.Content value={description} tagName="div" />
          </div>
        </div>
        <div className="container-right">
          {videoUrl ? (
            <video
              src={videoUrl}
              controls
              style={{
                width: "100%",
                maxWidth: "700px",
                borderRadius: "10px",
                background: "#000",
              }}
            />
          ) : (
            <div style={{
              background: "#eee",
              width: "100%",
              height: "350px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              color: "#999"
            }}>
              No video selected
            </div>
          )}
        </div>
      </div>
    );
  },
});