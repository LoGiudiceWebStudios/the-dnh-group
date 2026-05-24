import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,
} from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_TESTIMONIALS = [
  {
    initials: "ST",
    name: "Sarah Thompson",
    location: "Cincinnati, OH",
    service: "Kitchen Remodel",
    quote:
      '"DNH Group completely transformed our dated kitchen into a modern, open-concept space. The crew was professional, on time every day, and the quality exceeded our expectations. We have already recommended them to two neighbors in Hyde Park."',
  },
  {
    initials: "DK",
    name: "David Kim",
    location: "West Chester, OH",
    service: "Exterior Painting",
    quote:
      '"We hired DNH to repaint our entire exterior after storm damage. They handled the insurance paperwork, matched our colors perfectly, and the crew was incredibly respectful of our property. Best contractor experience we have ever had in Ohio."',
  },
  {
    initials: "JW",
    name: "Jennifer Walsh",
    location: "Columbus, OH",
    service: "Roof Replacement",
    quote:
      '"Our roof was leaking after a bad hail storm. DNH came out within 24 hours, gave us a clear quote, and had the new roof on in three days. The project manager kept us informed every step of the way. Outstanding service."',
  },
];

registerBlockType("logiweb/custom-block-73", {
  ...metadata,
  attributes: {
    badgeText: { type: "string", default: "Local Proof" },
    titleStart: { type: "string", default: "Ohio Homeowners" },
    titleHighlight: { type: "string", default: "Love Our Work" },
    testimonials: { type: "array", default: DEFAULT_TESTIMONIALS },
  },

  edit({ attributes, setAttributes }) {
    const { badgeText, titleStart, titleHighlight, testimonials } = attributes;
    const safeTestimonials =
      Array.isArray(testimonials) && testimonials.length
        ? testimonials
        : DEFAULT_TESTIMONIALS;
    const blockProps = useBlockProps({ className: "ohio-testimonials-proof" });

    const updateTestimonial = (index, key, value) => {
      const next = safeTestimonials.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [key]: value } : item,
      );
      setAttributes({ testimonials: next });
    };

    const addTestimonial = () => {
      setAttributes({
        testimonials: [
          ...safeTestimonials,
          {
            initials: "NP",
            name: "New Person",
            location: "Ohio",
            service: "Service",
            quote: '"Customer testimonial text."',
          },
        ],
      });
    };

    const removeTestimonial = (index) => {
      if (safeTestimonials.length <= 1) return;
      setAttributes({
        testimonials: safeTestimonials.filter(
          (_, itemIndex) => itemIndex !== index,
        ),
      });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Section Header" initialOpen={true}>
            <TextControl
              label="Badge"
              value={badgeText}
              onChange={(value) => setAttributes({ badgeText: value })}
            />
            <TextControl
              label="Title start"
              value={titleStart}
              onChange={(value) => setAttributes({ titleStart: value })}
            />
            <TextControl
              label="Highlighted title"
              value={titleHighlight}
              onChange={(value) => setAttributes({ titleHighlight: value })}
            />
          </PanelBody>

          {safeTestimonials.map((item, index) => (
            <PanelBody
              key={index}
              title={`Testimonial ${index + 1}`}
              initialOpen={false}
            >
              <TextControl
                label="Initials"
                value={item.initials || ""}
                onChange={(value) =>
                  updateTestimonial(index, "initials", value)
                }
              />
              <TextControl
                label="Name"
                value={item.name || ""}
                onChange={(value) => updateTestimonial(index, "name", value)}
              />
              <TextControl
                label="Location"
                value={item.location || ""}
                onChange={(value) =>
                  updateTestimonial(index, "location", value)
                }
              />
              <TextControl
                label="Service"
                value={item.service || ""}
                onChange={(value) => updateTestimonial(index, "service", value)}
              />
              <TextareaControl
                label="Quote"
                value={item.quote || ""}
                onChange={(value) => updateTestimonial(index, "quote", value)}
              />
              <Button
                isDestructive
                disabled={safeTestimonials.length <= 1}
                onClick={() => removeTestimonial(index)}
              >
                Remove testimonial
              </Button>
            </PanelBody>
          ))}

          <PanelBody title="Add Testimonial" initialOpen={false}>
            <Button isPrimary onClick={addTestimonial}>
              + Add testimonial
            </Button>
          </PanelBody>
        </InspectorControls>

        <section {...blockProps}>
          <div className="ohio-testimonials-proof-inner">
            <p className="ohio-testimonials-proof-badge">
              <i className="fa-regular fa-star" aria-hidden="true"></i>
              <span>{badgeText}</span>
            </p>
            <h2 className="ohio-testimonials-proof-title">
              {titleStart} <span>{titleHighlight}</span>
            </h2>
            <div className="ohio-testimonials-proof-grid">
              {safeTestimonials.map((item, index) => (
                <article key={index} className="ohio-testimonials-proof-card">
                  <div className="ohio-testimonials-proof-card-head">
                    <div className="ohio-testimonials-proof-avatar">
                      {item.initials}
                    </div>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <div className="ohio-testimonials-proof-meta">
                    <div
                      className="ohio-testimonials-proof-stars"
                      aria-hidden="true"
                    >
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <i key={starIndex} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                    <span className="ohio-testimonials-proof-service">
                      {item.service}
                    </span>
                  </div>
                  <p className="ohio-testimonials-proof-quote">{item.quote}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  },

  save({ attributes }) {
    const { badgeText, titleStart, titleHighlight, testimonials } = attributes;
    const safeTestimonials =
      Array.isArray(testimonials) && testimonials.length
        ? testimonials
        : DEFAULT_TESTIMONIALS;
    const blockProps = useBlockProps.save({
      className: "ohio-testimonials-proof",
    });

    return (
      <section {...blockProps}>
        <div className="ohio-testimonials-proof-inner">
          <p className="ohio-testimonials-proof-badge">
            <i className="fa-regular fa-star" aria-hidden="true"></i>
            <span>{badgeText}</span>
          </p>
          <h2 className="ohio-testimonials-proof-title">
            {titleStart} <span>{titleHighlight}</span>
          </h2>
          <div className="ohio-testimonials-proof-grid">
            {safeTestimonials.map((item, index) => (
              <article key={index} className="ohio-testimonials-proof-card">
                <div className="ohio-testimonials-proof-card-head">
                  <div className="ohio-testimonials-proof-avatar">
                    {item.initials}
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.location}</p>
                  </div>
                </div>
                <div className="ohio-testimonials-proof-meta">
                  <div
                    className="ohio-testimonials-proof-stars"
                    aria-hidden="true"
                  >
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <i key={starIndex} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <span className="ohio-testimonials-proof-service">
                    {item.service}
                  </span>
                </div>
                <p className="ohio-testimonials-proof-quote">{item.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
