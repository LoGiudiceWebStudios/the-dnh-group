import { registerBlockType } from "@wordpress/blocks";
import {
  MediaUpload,
  MediaUploadCheck,
  InspectorControls,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, Button, TextControl } from "@wordpress/components";
import { useState, useEffect, useRef } from "@wordpress/element";
import "../../global-styles.scss";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-10", {
  title: "Certifications Carousel",
  icon: "admin-site",
  category: "widgets",
  attributes: {
    title: {
      type: "string",
      default: "Trusted by Industry Leaders",
    },
    images: {
      type: "array",
      default: [],
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { title = "", images = [] } = attributes;
    const [startIndex, setStartIndex] = useState(0);
    const intervalRef = useRef();

    const onSelectImages = (media) => {
      setAttributes({
        images: media.map((img) => ({
          id: img.id,
          url: img.url,
          alt: img.alt || "",
          caption: img.caption?.raw || img.caption || img.title || "",
        })),
      });
      setStartIndex(0);
    };

    // Show 5 items for desktop preview
    const visibleImages = images.slice(startIndex, startIndex + 5);

    // Auto-scroll simulation in editor
    useEffect(() => {
      if (images.length <= 5) return;
      intervalRef.current = setInterval(() => {
        setStartIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(intervalRef.current);
    }, [images.length]);

    return (
      <div
        className="block-editor-container"
        style={{ width: "100%", padding: "2rem 0" }}
      >
        <InspectorControls>
          <PanelBody title="Carousel Settings">
            <TextControl
              label="Section Title"
              value={title}
              onChange={(val) => setAttributes({ title: val })}
            />
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectImages}
                allowedTypes={["image"]}
                multiple
                gallery
                value={images.map((img) => img.id)}
                render={({ open }) => (
                  <Button onClick={open} isPrimary>
                    {images.length ? "Edit Images" : "Add Images"}
                  </Button>
                )}
              />
            </MediaUploadCheck>
          </PanelBody>
        </InspectorControls>

        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <p
            style={{
              fontSize: "0.85rem",
              color: "#999",
              margin: 0,
              marginBottom: "0.5rem",
            }}
          >
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 600, margin: 0 }}>
            {title}
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
            overflow: "hidden",
            padding: "1rem",
          }}
        >
          {visibleImages.length > 0 ? (
            visibleImages.map((img, idx) => (
              <div
                key={img.id || idx}
                style={{
                  flex: "0 0 auto",
                  width: "120px",
                  height: "120px",
                  background: "#f5f5f5",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                  padding: "0.75rem 0.5rem",
                }}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  style={{
                    maxWidth: "80%",
                    maxHeight: "80%",
                    objectFit: "contain",
                  }}
                />
                {img.caption ? (
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      lineHeight: 1.2,
                      textAlign: "center",
                      color: "#2d3748",
                    }}
                  >
                    {img.caption}
                  </span>
                ) : null}
              </div>
            ))
          ) : (
            <p style={{ color: "#999" }}>Add images to start</p>
          )}
        </div>
      </div>
    );
  },

  save: ({ attributes }) => {
    const { title = "Trusted by Industry Leaders", images = [] } = attributes;
    return (
      <section
        className="certifications-carousel fade-in-on-scroll"
        data-block="certifications"
      >
        <div className="certifications-content">
          <div className="certifications-header">
            <p className="certifications-subtitle">
              Trusted by Industry Leaders
            </p>
            <h2 className="certifications-title">{title}</h2>
          </div>

          <div className="certifications-track" data-carousel-track>
            {images.map((img, idx) => (
              <div
                key={img.id || idx}
                className="certification-item"
                data-carousel-item
              >
                <img
                  src={img.url}
                  alt={img.alt || "Certification"}
                  className="certification-logo"
                />
                {img.caption ? (
                  <span className="certification-caption">{img.caption}</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
