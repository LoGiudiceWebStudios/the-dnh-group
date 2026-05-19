import { registerBlockType } from "@wordpress/blocks";
import {
  useBlockProps,
  InspectorControls,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  edit({ attributes, setAttributes }) {
    const {
      resultsTitle,
      resultsSubtitle,
      editBtnText,
      bottomCta,
      bottomPhone,
      bottomMsg,
    } = attributes;
    const blockProps = useBlockProps({ className: "financing-results-editor" });

    return (
      <>
        <InspectorControls>
          <PanelBody title="Settings" initialOpen={true}>
            <TextControl
              label="Bottom CTA Text"
              value={bottomCta}
              onChange={(v) => setAttributes({ bottomCta: v })}
            />
            <TextControl
              label="Phone Number"
              value={bottomPhone}
              onChange={(v) => setAttributes({ bottomPhone: v })}
            />
            <TextControl
              label="Button Text"
              value={bottomMsg}
              onChange={(v) => setAttributes({ bottomMsg: v })}
            />
          </PanelBody>
        </InspectorControls>

        <div {...blockProps}>
          <div className="financing-results-inner">
            <div className="financing-results-header">
              <RichText
                tagName="h2"
                className="financing-results-title"
                value={resultsTitle}
                onChange={(v) => setAttributes({ resultsTitle: v })}
                placeholder="Title"
              />
              <RichText
                tagName="p"
                className="financing-results-subtitle"
                value={resultsSubtitle}
                onChange={(v) => setAttributes({ resultsSubtitle: v })}
                placeholder="Subtitle"
              />
            </div>

            <div className="financing-results-grid">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="financing-option-card"
                  style={{ opacity: 0.6 }}
                >
                  <div className="option-logo">GS</div>
                  <h3>Partner Name</h3>
                  <p className="option-rating">⭐ 4.8</p>
                  <ul style={{ fontSize: "0.85rem", color: "#666" }}>
                    <li>Min. Credit Score</li>
                    <li>APR Range</li>
                    <li>Terms</li>
                  </ul>
                  <button
                    disabled
                    style={{
                      width: "100%",
                      padding: "10px",
                      backgroundColor: "#ccc",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "not-allowed",
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>

            <div className="financing-results-bottom">
              <p style={{ marginBottom: "16px" }}>{bottomCta}</p>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="#"
                  className="btn-secondary"
                  onClick={(e) => e.preventDefault()}
                >
                  📞 {bottomPhone}
                </a>
                <a
                  href="#"
                  className="btn-secondary"
                  onClick={(e) => e.preventDefault()}
                >
                  💬 {bottomMsg}
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  },

  save() {
    return null; // Dynamic block - rendered via PHP
  },
});
