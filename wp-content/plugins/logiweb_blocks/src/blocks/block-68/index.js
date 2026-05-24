import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl } from "@wordpress/components";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-68", {
  ...metadata,

  edit({ attributes, setAttributes }) {
    const {
      leftTitle,
      bullet1,
      bullet2,
      bullet3,
      bullet4,
      bullet5,
      callTitle,
      callPhone,
      callHours,
      formTitle,
      cf7Shortcode,
      privacyText,
    } = attributes;

    const blockProps = useBlockProps({ className: "quote-cf7-block" });
    const bullets = [bullet1, bullet2, bullet3, bullet4, bullet5].filter(
      Boolean,
    );

    return (
      <>
        <InspectorControls>
          <PanelBody title="Left Column" initialOpen={true}>
            <TextControl
              label="Title"
              value={leftTitle}
              onChange={(value) => setAttributes({ leftTitle: value })}
            />
            <TextControl
              label="Bullet 1"
              value={bullet1}
              onChange={(value) => setAttributes({ bullet1: value })}
            />
            <TextControl
              label="Bullet 2"
              value={bullet2}
              onChange={(value) => setAttributes({ bullet2: value })}
            />
            <TextControl
              label="Bullet 3"
              value={bullet3}
              onChange={(value) => setAttributes({ bullet3: value })}
            />
            <TextControl
              label="Bullet 4"
              value={bullet4}
              onChange={(value) => setAttributes({ bullet4: value })}
            />
            <TextControl
              label="Bullet 5"
              value={bullet5}
              onChange={(value) => setAttributes({ bullet5: value })}
            />
            <TextControl
              label="Call Box Title"
              value={callTitle}
              onChange={(value) => setAttributes({ callTitle: value })}
            />
            <TextControl
              label="Call Phone"
              value={callPhone}
              onChange={(value) => setAttributes({ callPhone: value })}
            />
            <TextControl
              label="Call Hours"
              value={callHours}
              onChange={(value) => setAttributes({ callHours: value })}
            />
          </PanelBody>

          <PanelBody title="Form" initialOpen={false}>
            <TextControl
              label="Form Title"
              value={formTitle}
              onChange={(value) => setAttributes({ formTitle: value })}
            />
            <TextareaControl
              label="Contact Form 7 Shortcode"
              help='Example: [contact-form-7 id="1234" title="Project Quote Form"]'
              value={cf7Shortcode}
              onChange={(value) => setAttributes({ cf7Shortcode: value })}
            />
            <TextControl
              label="Privacy Text"
              value={privacyText}
              onChange={(value) => setAttributes({ privacyText: value })}
            />
          </PanelBody>
        </InspectorControls>

        <section {...blockProps}>
          <div className="quote-cf7-inner">
            <div className="quote-cf7-left">
              <h2 className="quote-cf7-left-title">{leftTitle}</h2>

              <ul className="quote-cf7-benefits">
                {bullets.map((item, idx) => (
                  <li key={idx} className="quote-cf7-benefit-item">
                    <span className="quote-cf7-check" aria-hidden="true">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="quote-cf7-callbox">
                <h3>{callTitle}</h3>
                <p className="quote-cf7-phone">{callPhone}</p>
                <p className="quote-cf7-hours">{callHours}</p>
              </div>
            </div>

            <div className="quote-cf7-form-card">
              <h3 className="quote-cf7-form-title">{formTitle}</h3>
              {cf7Shortcode ? (
                <div className="quote-cf7-shortcode-note">
                  <p>Contact Form 7 shortcode is configured:</p>
                  <code>{cf7Shortcode}</code>
                </div>
              ) : (
                <div className="quote-cf7-fallback-preview">
                  <div className="quote-cf7-row">
                    <input type="text" placeholder="First Name *" readOnly />
                    <input type="text" placeholder="Last Name *" readOnly />
                  </div>
                  <div className="quote-cf7-row">
                    <input
                      type="email"
                      placeholder="Email Address *"
                      readOnly
                    />
                    <input type="text" placeholder="Phone Number *" readOnly />
                  </div>
                  <input type="text" placeholder="Address" readOnly />
                  <div className="quote-cf7-row quote-cf7-row--small">
                    <select disabled>
                      <option>Select a Service *</option>
                    </select>
                    <select disabled>
                      <option>Project Timeline</option>
                    </select>
                  </div>
                  <textarea
                    placeholder="Tell us about your project..."
                    readOnly
                  />
                  <button type="button" className="quote-cf7-submit-preview">
                    Get My Free Quote
                  </button>
                </div>
              )}
              <p className="quote-cf7-privacy">{privacyText}</p>
            </div>
          </div>
        </section>
      </>
    );
  },

  save() {
    return null;
  },
});
