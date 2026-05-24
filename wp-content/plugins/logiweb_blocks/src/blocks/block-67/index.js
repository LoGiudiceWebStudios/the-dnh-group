import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-67", {
  ...metadata,

  edit({ attributes, setAttributes }) {
    const { badge, title, tagline, videos } = attributes;
    const defaultVideos = metadata.attributes?.videos?.default || [];
    const safeVideos =
      Array.isArray(videos) && videos.length ? videos : defaultVideos;
    const blockProps = useBlockProps({
      className: "vlog-block vlog-block-editor",
    });

    function updateVideo(index, key, value) {
      const updated = safeVideos.map((v, i) =>
        i === index ? { ...v, [key]: value } : v,
      );
      setAttributes({ videos: updated });
    }

    function addVideo() {
      setAttributes({
        videos: [
          ...safeVideos,
          { url: "", thumbnail: "", duration: "0:00", title: "New Video" },
        ],
      });
    }

    function removeVideo(index) {
      setAttributes({ videos: safeVideos.filter((_, i) => i !== index) });
    }

    return (
      <>
        <InspectorControls>
          <PanelBody title="Header" initialOpen={true}>
            <TextControl
              label="Badge text"
              value={badge}
              onChange={(v) => setAttributes({ badge: v })}
            />
            <TextControl
              label="Title"
              value={title}
              onChange={(v) => setAttributes({ title: v })}
            />
            <TextControl
              label="Tagline (right)"
              value={tagline}
              onChange={(v) => setAttributes({ tagline: v })}
            />
          </PanelBody>
          {safeVideos.map((video, i) => (
            <PanelBody key={i} title={`Video ${i + 1}`} initialOpen={false}>
              <TextControl
                label="Title"
                value={video.title}
                onChange={(v) => updateVideo(i, "title", v)}
              />
              <TextControl
                label="YouTube / Video URL"
                value={video.url}
                onChange={(v) => updateVideo(i, "url", v)}
              />
              <TextControl
                label="Duration (e.g. 3:24)"
                value={video.duration}
                onChange={(v) => updateVideo(i, "duration", v)}
              />
              <p style={{ fontSize: 12, marginBottom: 6 }}>Thumbnail image</p>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => updateVideo(i, "thumbnail", media.url)}
                  allowedTypes={["image"]}
                  render={({ open }) => (
                    <div>
                      {video.thumbnail && (
                        <img
                          src={video.thumbnail}
                          alt=""
                          style={{
                            width: "100%",
                            marginBottom: 6,
                            borderRadius: 6,
                          }}
                        />
                      )}
                      <Button isSecondary onClick={open}>
                        {video.thumbnail
                          ? "Change thumbnail"
                          : "Select thumbnail"}
                      </Button>
                    </div>
                  )}
                />
              </MediaUploadCheck>
              <Button
                isDestructive
                style={{ marginTop: 10 }}
                onClick={() => removeVideo(i)}
              >
                Remove video
              </Button>
            </PanelBody>
          ))}
          <PanelBody title="Add Video">
            <Button isPrimary onClick={addVideo}>
              + Add Video
            </Button>
          </PanelBody>
        </InspectorControls>

        <div {...blockProps}>
          <div className="vlog-header">
            <div className="vlog-header-left">
              <span className="vlog-badge">
                <span className="vlog-badge-icon">▷</span> {badge}
              </span>
              <h2 className="vlog-title">{title}</h2>
            </div>
            <p className="vlog-tagline">{tagline}</p>
          </div>

          <div className="vlog-grid">
            {safeVideos.map((video, i) => (
              <div key={i} className="vlog-card">
                <div
                  className="vlog-card-thumb"
                  style={
                    video.thumbnail
                      ? { backgroundImage: `url(${video.thumbnail})` }
                      : {}
                  }
                >
                  <div className="vlog-play-btn">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="white"
                        fillOpacity="0.9"
                      />
                      <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="#111827" />
                    </svg>
                  </div>
                  {video.duration && (
                    <span className="vlog-duration">{video.duration}</span>
                  )}
                </div>
                <p className="vlog-card-title">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  },

  save() {
    return null;
  },
});
