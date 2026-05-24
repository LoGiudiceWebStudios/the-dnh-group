import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import { RawHTML } from "@wordpress/element";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-65", {
  ...metadata,
  attributes: {
    badgeText: { type: "string", default: "Insights & Inspiration" },
    titleStart: { type: "string", default: "Blog & Case" },
    titleHighlight: { type: "string", default: "Studies" },
    description: {
      type: "string",
      default:
        "Expert advice, project spotlights, and behind-the-scenes looks at how we transform homes across the Tri-State area.",
    },
    leftCtaText: {
      type: "string",
      default: "Subscribe for weekly home improvement tips",
    },
    cardTitle: { type: "string", default: "Join 5,000+ Subscribers" },
    cardDescription: {
      type: "string",
      default:
        "Get weekly home improvement tips, design inspiration, and exclusive offers delivered to your inbox.",
    },
    inputPlaceholder: { type: "string", default: "Enter your email" },
    buttonText: { type: "string", default: "Subscribe to Newsletter" },
    disclaimerText: {
      type: "string",
      default: "No spam. Unsubscribe anytime.",
    },
    cf7Shortcode: {
      type: "string",
      default: "",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      description,
      leftCtaText,
      cardTitle,
      cardDescription,
      inputPlaceholder,
      buttonText,
      disclaimerText,
      cf7Shortcode,
    } = attributes;

    return (
      <>
        <InspectorControls>
          <PanelBody title="Section Content" initialOpen={true}>
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
              label="Title Highlight"
              value={titleHighlight}
              onChange={(value) => setAttributes({ titleHighlight: value })}
            />
            <TextControl
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
            />
            <TextControl
              label="Left CTA Text"
              value={leftCtaText}
              onChange={(value) => setAttributes({ leftCtaText: value })}
            />
            <TextControl
              label="Card Title"
              value={cardTitle}
              onChange={(value) => setAttributes({ cardTitle: value })}
            />
            <TextControl
              label="Card Description"
              value={cardDescription}
              onChange={(value) => setAttributes({ cardDescription: value })}
            />
            <TextControl
              label="Input Placeholder"
              value={inputPlaceholder}
              onChange={(value) => setAttributes({ inputPlaceholder: value })}
            />
            <TextControl
              label="Button Text"
              value={buttonText}
              onChange={(value) => setAttributes({ buttonText: value })}
            />
            <TextControl
              label="Disclaimer"
              value={disclaimerText}
              onChange={(value) => setAttributes({ disclaimerText: value })}
            />
            <TextControl
              label="Contact Form 7 Shortcode"
              help='Esempio: [contact-form-7 id="1234" title="Blog Subscribe"]'
              value={cf7Shortcode}
              onChange={(value) => setAttributes({ cf7Shortcode: value })}
            />
          </PanelBody>
        </InspectorControls>

        <section className="blog-case-subscribe">
          <div className="blog-case-subscribe-inner">
            <div className="blog-case-subscribe-left">
              <p className="blog-case-subscribe-badge">
                <i className="fa-regular fa-book-open" aria-hidden="true"></i>
                <span>{badgeText}</span>
              </p>

              <h2 className="blog-case-subscribe-title">
                {titleStart}
                <br />
                <span>{titleHighlight}</span>
              </h2>

              <RichText
                tagName="p"
                className="blog-case-subscribe-description"
                value={description}
                onChange={(value) => setAttributes({ description: value })}
                placeholder="Left column description"
              />

              <p className="blog-case-subscribe-cta">
                <i className="fa-regular fa-envelope" aria-hidden="true"></i>
                <span>{leftCtaText}</span>
              </p>
            </div>

            <aside className="blog-case-subscribe-card">
              <RichText
                tagName="h3"
                className="blog-case-card-title"
                value={cardTitle}
                onChange={(value) => setAttributes({ cardTitle: value })}
                placeholder="Card title"
              />

              <RichText
                tagName="p"
                className="blog-case-card-description"
                value={cardDescription}
                onChange={(value) => setAttributes({ cardDescription: value })}
                placeholder="Card description"
              />

              {cf7Shortcode ? (
                <div className="blog-case-card-cf7-placeholder">
                  <p>Contact Form 7 shortcode configurato.</p>
                  <code>{cf7Shortcode}</code>
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    className="blog-case-card-input"
                    placeholder={inputPlaceholder}
                    readOnly
                  />

                  <button type="button" className="blog-case-card-button">
                    <i
                      className="fa-regular fa-envelope"
                      aria-hidden="true"
                    ></i>
                    <span>{buttonText}</span>
                  </button>
                </>
              )}

              <p className="blog-case-card-disclaimer">{disclaimerText}</p>
            </aside>
          </div>
        </section>
      </>
    );
  },

  save: ({ attributes }) => {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      description,
      leftCtaText,
      cardTitle,
      cardDescription,
      inputPlaceholder,
      buttonText,
      disclaimerText,
      cf7Shortcode,
    } = attributes;

    return (
      <section className="blog-case-subscribe">
        <div className="blog-case-subscribe-inner">
          <div className="blog-case-subscribe-left">
            <p className="blog-case-subscribe-badge">
              <i className="fa-regular fa-book-open" aria-hidden="true"></i>
              <span>{badgeText}</span>
            </p>

            <h2 className="blog-case-subscribe-title">
              {titleStart}
              <br />
              <span>{titleHighlight}</span>
            </h2>

            <p className="blog-case-subscribe-description">{description}</p>

            <p className="blog-case-subscribe-cta">
              <i className="fa-regular fa-envelope" aria-hidden="true"></i>
              <span>{leftCtaText}</span>
            </p>
          </div>

          <aside className="blog-case-subscribe-card">
            <h3 className="blog-case-card-title">{cardTitle}</h3>
            <p className="blog-case-card-description">{cardDescription}</p>

            {cf7Shortcode ? (
              <div className="blog-case-card-cf7-wrap">
                <RawHTML>{cf7Shortcode}</RawHTML>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  className="blog-case-card-input"
                  placeholder={inputPlaceholder}
                  readOnly
                />

                <button type="button" className="blog-case-card-button">
                  <i className="fa-regular fa-envelope" aria-hidden="true"></i>
                  <span>{buttonText}</span>
                </button>
              </>
            )}

            <p className="blog-case-card-disclaimer">{disclaimerText}</p>
          </aside>
        </div>
      </section>
    );
  },
});
