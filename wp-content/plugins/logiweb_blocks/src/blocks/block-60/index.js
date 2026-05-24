import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_FEATURED = {
  imageUrl: "",
  quote:
    '"DNH Group completely transformed our kitchen. The craftsmanship, communication, and cleanup were top notch. We have already recommended them to three of our neighbors."',
  initials: "MR",
  name: "Michael & Rachel Richardson",
  meta: "Kitchen Remodel - Cincinnati, OH",
  duration: "2:34",
  videoUrl: "#",
};

const DEFAULT_ITEMS = [
  {
    imageUrl: "",
    duration: "1:48",
    initials: "DK",
    name: "David Kim",
    meta: "Interior Painting - Louisville, KY",
    quote:
      '"The crew was professional, clean, and the finish is flawless. Best painting job we have ever had."',
    videoUrl: "#",
  },
  {
    imageUrl: "",
    duration: "2:15",
    initials: "JW",
    name: "Jennifer Walsh",
    meta: "Roof Replacement - Indianapolis, IN",
    quote:
      '"They handled everything with our insurance. The new roof looks incredible and the warranty gives us peace of mind."',
    videoUrl: "#",
  },
  {
    imageUrl: "",
    duration: "1:52",
    initials: "ST",
    name: "Sarah Thompson",
    meta: "Exterior Painting - Cincinnati, OH",
    quote:
      '"Our curb appeal increased tenfold. Neighbors keep asking who did the work. Absolutely recommend."',
    videoUrl: "#",
  },
];

const MediaSelector = ({ label, imageUrl, onSelect }) => {
  return (
    <MediaUploadCheck>
      <MediaUpload
        onSelect={(media) => onSelect(media?.url || "")}
        allowedTypes={["image"]}
        render={({ open }) => (
          <Button isSecondary onClick={open} style={{ marginBottom: "10px" }}>
            {imageUrl ? `Replace ${label}` : `Upload ${label}`}
          </Button>
        )}
      />
    </MediaUploadCheck>
  );
};

registerBlockType("logiweb/custom-block-60", {
  ...metadata,
  attributes: {
    badgeText: {
      type: "string",
      default: "Customer Spotlight",
    },
    titleStart: {
      type: "string",
      default: "Real Stories,",
    },
    titleHighlight: {
      type: "string",
      default: "Real Results",
    },
    description: {
      type: "string",
      default:
        "Hear directly from homeowners who trusted DNH Group with their most important investment - their home.",
    },
    featured: {
      type: "object",
      default: DEFAULT_FEATURED,
    },
    items: {
      type: "array",
      default: DEFAULT_ITEMS,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      description,
      featured = DEFAULT_FEATURED,
      items = DEFAULT_ITEMS,
    } = attributes;
    const [openVideoUrl, setOpenVideoUrl] = useState(null);

    const updateFeatured = (field, value) => {
      setAttributes({
        featured: {
          ...featured,
          [field]: value,
        },
      });
    };

    const updateItem = (index, field, value) => {
      const next = [...items];
      next[index] = {
        ...next[index],
        [field]: value,
      };
      setAttributes({ items: next });
    };

    const addItem = () => {
      setAttributes({
        items: [
          ...items,
          {
            imageUrl: "",
            duration: "1:30",
            initials: "NR",
            name: "New Reviewer",
            meta: "Service - City, ST",
            quote: '"Add testimonial quote here."',
            videoUrl: "#",
          },
        ],
      });
    };

    const removeItem = (index) => {
      if (items.length <= 1) {
        return;
      }
      setAttributes({ items: items.filter((_, i) => i !== index) });
    };

    return (
      <section className="video-testimonials-block">
        <InspectorControls>
          <PanelBody title="Header" initialOpen={true}>
            <TextControl
              label="Badge"
              value={badgeText}
              onChange={(value) => setAttributes({ badgeText: value })}
            />
            <TextControl
              label="Title Start"
              value={titleStart}
              onChange={(value) => setAttributes({ titleStart: value })}
            />
            <TextControl
              label="Highlighted Title"
              value={titleHighlight}
              onChange={(value) => setAttributes({ titleHighlight: value })}
            />
            <TextareaControl
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
            />
          </PanelBody>

          <PanelBody title="Featured Video" initialOpen={false}>
            <MediaSelector
              label="featured image"
              imageUrl={featured.imageUrl}
              onSelect={(value) => updateFeatured("imageUrl", value)}
            />
            <TextareaControl
              label="Quote"
              value={featured.quote || ""}
              onChange={(value) => updateFeatured("quote", value)}
            />
            <TextControl
              label="Initials"
              value={featured.initials || ""}
              onChange={(value) => updateFeatured("initials", value)}
            />
            <TextControl
              label="Name"
              value={featured.name || ""}
              onChange={(value) => updateFeatured("name", value)}
            />
            <TextControl
              label="Meta"
              value={featured.meta || ""}
              onChange={(value) => updateFeatured("meta", value)}
            />
            <TextControl
              label="Duration"
              value={featured.duration || ""}
              onChange={(value) => updateFeatured("duration", value)}
            />
            <TextControl
              label="Video URL"
              value={featured.videoUrl || ""}
              onChange={(value) => updateFeatured("videoUrl", value)}
            />
          </PanelBody>

          <PanelBody
            title={`Small Videos (${items.length})`}
            initialOpen={false}
          >
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "14px",
                  borderBottom: "1px solid #e3e9f2",
                  paddingBottom: "14px",
                }}
              >
                <p style={{ margin: "0 0 8px", fontWeight: 600 }}>
                  Card {index + 1}
                </p>
                <MediaSelector
                  label={`card ${index + 1} image`}
                  imageUrl={item.imageUrl}
                  onSelect={(value) => updateItem(index, "imageUrl", value)}
                />
                <TextControl
                  label="Duration"
                  value={item.duration || ""}
                  onChange={(value) => updateItem(index, "duration", value)}
                />
                <TextControl
                  label="Initials"
                  value={item.initials || ""}
                  onChange={(value) => updateItem(index, "initials", value)}
                />
                <TextControl
                  label="Name"
                  value={item.name || ""}
                  onChange={(value) => updateItem(index, "name", value)}
                />
                <TextControl
                  label="Meta"
                  value={item.meta || ""}
                  onChange={(value) => updateItem(index, "meta", value)}
                />
                <TextareaControl
                  label="Quote"
                  value={item.quote || ""}
                  onChange={(value) => updateItem(index, "quote", value)}
                />
                <TextControl
                  label="Video URL"
                  value={item.videoUrl || ""}
                  onChange={(value) => updateItem(index, "videoUrl", value)}
                />
                <Button
                  isSecondary
                  isDestructive
                  isSmall
                  disabled={items.length <= 1}
                  onClick={() => removeItem(index)}
                >
                  Remove card
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addItem}>
              Add card
            </Button>
          </PanelBody>
        </InspectorControls>

        <div className="video-testimonials-inner">
          <div className="video-testimonials-header">
            <p className="video-testimonials-badge">{badgeText}</p>
            <h2 className="video-testimonials-title">
              <RichText
                tagName="span"
                value={titleStart}
                onChange={(value) => setAttributes({ titleStart: value })}
                placeholder="Real Stories,"
              />{" "}
              <span className="video-testimonials-title-highlight">
                <RichText
                  tagName="span"
                  value={titleHighlight}
                  onChange={(value) => setAttributes({ titleHighlight: value })}
                  placeholder="Real Results"
                />
              </span>
            </h2>
            <RichText
              tagName="p"
              className="video-testimonials-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Section description"
            />
          </div>

          <article className="video-testimonials-featured">
            {featured.imageUrl ? (
              <img
                src={featured.imageUrl}
                alt={featured.name || "Featured testimonial"}
              />
            ) : (
              <div className="video-testimonials-image-placeholder">
                Upload featured image
              </div>
            )}
            <div className="video-testimonials-overlay"></div>
            <button
              type="button"
              className="video-testimonials-play"
              onClick={() => setOpenVideoUrl(featured.videoUrl)}
              aria-label="Play featured testimonial"
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-play" aria-hidden="true"></i>
            </button>
            <div className="video-testimonials-featured-content">
              <RichText
                tagName="p"
                className="video-testimonials-featured-quote"
                value={featured.quote}
                onChange={(value) => updateFeatured("quote", value)}
              />
              <div className="video-testimonials-author-row">
                <span className="video-testimonials-avatar">
                  {featured.initials || "MR"}
                </span>
                <div>
                  <RichText
                    tagName="p"
                    className="video-testimonials-author-name"
                    value={featured.name}
                    onChange={(value) => updateFeatured("name", value)}
                  />
                  <RichText
                    tagName="p"
                    className="video-testimonials-author-meta"
                    value={featured.meta}
                    onChange={(value) => updateFeatured("meta", value)}
                  />
                </div>
              </div>
            </div>
            <span className="video-testimonials-duration">
              {featured.duration}
            </span>
          </article>

          <div className="video-testimonials-grid">
            {items.map((item, index) => (
              <article className="video-testimonials-item" key={index}>
                <div className="video-testimonials-thumb">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.name || "Testimonial video"}
                    />
                  ) : (
                    <div className="video-testimonials-image-placeholder">
                      Upload card image
                    </div>
                  )}
                  <button
                    type="button"
                    className="video-testimonials-play is-small"
                    aria-label="Play testimonial"
                    onClick={() => setOpenVideoUrl(item.videoUrl)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    <i className="fa-solid fa-play" aria-hidden="true"></i>
                  </button>
                  <span className="video-testimonials-duration is-small">
                    {item.duration}
                  </span>
                </div>

                <div className="video-testimonials-item-body">
                  <div className="video-testimonials-author-row is-small">
                    <span className="video-testimonials-avatar is-small">
                      {item.initials || "AB"}
                    </span>
                    <div>
                      <RichText
                        tagName="p"
                        className="video-testimonials-author-name"
                        value={item.name}
                        onChange={(value) => updateItem(index, "name", value)}
                      />
                      <RichText
                        tagName="p"
                        className="video-testimonials-author-meta"
                        value={item.meta}
                        onChange={(value) => updateItem(index, "meta", value)}
                      />
                    </div>
                  </div>

                  <RichText
                    tagName="p"
                    className="video-testimonials-item-quote"
                    value={item.quote}
                    onChange={(value) => updateItem(index, "quote", value)}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {openVideoUrl && (
          <div
            className="video-testimonials-modal"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.85)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
            }}
            onClick={() => setOpenVideoUrl(null)}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "900px",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "0",
                  background: "none",
                  border: "none",
                  color: "#ffffff",
                  font: "bold 2rem Arial, sans-serif",
                  cursor: "pointer",
                  zIndex: 10000,
                }}
                onClick={() => setOpenVideoUrl(null)}
              >
                ✕
              </button>
              <video
                src={openVideoUrl}
                controls
                autoPlay
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  background: "#000",
                }}
              />
            </div>
          </div>
        )}
      </section>
    );
  },

  save: ({ attributes }) => {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      description,
      featured = DEFAULT_FEATURED,
      items = DEFAULT_ITEMS,
    } = attributes;

    return (
      <section
        className="video-testimonials-block fade-in-on-scroll"
        data-block="video-testimonials"
      >
        <div className="video-testimonials-inner">
          <div className="video-testimonials-header">
            <p className="video-testimonials-badge">{badgeText}</p>
            <h2 className="video-testimonials-title">
              {titleStart}{" "}
              <span className="video-testimonials-title-highlight">
                {titleHighlight}
              </span>
            </h2>
            <p className="video-testimonials-description">{description}</p>
          </div>

          <article className="video-testimonials-featured">
            {featured.imageUrl ? (
              <img
                src={featured.imageUrl}
                alt={featured.name || "Featured testimonial"}
              />
            ) : (
              <div className="video-testimonials-image-placeholder">
                Image not set
              </div>
            )}
            <div className="video-testimonials-overlay"></div>
            <button
              type="button"
              className="video-testimonials-play"
              aria-label="Play featured testimonial"
              data-video-url={featured.videoUrl || ""}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <i className="fa-solid fa-play" aria-hidden="true"></i>
            </button>
            <div className="video-testimonials-featured-content">
              <p className="video-testimonials-featured-quote">
                {featured.quote}
              </p>
              <div className="video-testimonials-author-row">
                <span className="video-testimonials-avatar">
                  {featured.initials || "MR"}
                </span>
                <div>
                  <p className="video-testimonials-author-name">
                    {featured.name}
                  </p>
                  <p className="video-testimonials-author-meta">
                    {featured.meta}
                  </p>
                </div>
              </div>
            </div>
            <span className="video-testimonials-duration">
              {featured.duration}
            </span>
          </article>

          <div className="video-testimonials-grid">
            {items.map((item, index) => (
              <article className="video-testimonials-item" key={index}>
                <div className="video-testimonials-thumb">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.name || "Testimonial video"}
                    />
                  ) : (
                    <div className="video-testimonials-image-placeholder">
                      Image not set
                    </div>
                  )}
                  <button
                    type="button"
                    className="video-testimonials-play is-small"
                    aria-label="Play testimonial"
                    data-video-url={item.videoUrl || ""}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    <i className="fa-solid fa-play" aria-hidden="true"></i>
                  </button>
                  <span className="video-testimonials-duration is-small">
                    {item.duration}
                  </span>
                </div>

                <div className="video-testimonials-item-body">
                  <div className="video-testimonials-author-row is-small">
                    <span className="video-testimonials-avatar is-small">
                      {item.initials || "AB"}
                    </span>
                    <div>
                      <p className="video-testimonials-author-name">
                        {item.name}
                      </p>
                      <p className="video-testimonials-author-meta">
                        {item.meta}
                      </p>
                    </div>
                  </div>

                  <p className="video-testimonials-item-quote">{item.quote}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
