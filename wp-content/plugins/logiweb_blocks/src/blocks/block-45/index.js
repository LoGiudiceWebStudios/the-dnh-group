import { registerBlockType } from "@wordpress/blocks";
import {
  useBlockProps,
  InspectorControls,
  RichText,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,
} from "@wordpress/components";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-45", {
  ...metadata,
  edit({ attributes, setAttributes }) {
    const {
      resultsTitle,
      resultsSubtitle,
      editBtnText,
      formPageUrl,
      bottomCta,
      bottomPhone,
      bottomMsg,
      options = [],
    } = attributes;
    const blockProps = useBlockProps({ className: "financing-results-editor" });

    const updateOption = (index, key, value) => {
      const next = [...options];
      next[index] = { ...next[index], [key]: value };
      setAttributes({ options: next });
    };

    const addOption = () => {
      const next = [
        ...options,
        {
          name: "New Partner",
          initials: "NP",
          logoColor: "#3654de",
          rating: "4.5",
          minScore: "620+",
          apr: "8.99% - 17.99%",
          terms: "12 - 120 months",
          benefitsText: "Benefit one\nBenefit two\nBenefit three",
          applyUrl: "#",
        },
      ];
      setAttributes({ options: next });
    };

    const removeOption = (index) => {
      const next = options.filter((_, i) => i !== index);
      setAttributes({ options: next });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Settings" initialOpen={true}>
            <TextControl
              label="Form Page URL (for Edit Info)"
              value={formPageUrl || ""}
              onChange={(v) => setAttributes({ formPageUrl: v })}
              help="Example: /apply-now/"
            />
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

          <PanelBody
            title={`Financing Options (${options.length})`}
            initialOpen={false}
          >
            {options.map((option, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "14px",
                  borderBottom: "1px solid #e3e8f2",
                  paddingBottom: "14px",
                }}
              >
                <TextControl
                  label={`Option ${i + 1} Name`}
                  value={option.name || ""}
                  onChange={(v) => updateOption(i, "name", v)}
                />
                <TextControl
                  label="Initials"
                  value={option.initials || ""}
                  onChange={(v) => updateOption(i, "initials", v)}
                />
                <TextControl
                  label="Logo Color"
                  value={option.logoColor || ""}
                  onChange={(v) => updateOption(i, "logoColor", v)}
                />
                <TextControl
                  label="Rating"
                  value={option.rating || ""}
                  onChange={(v) => updateOption(i, "rating", v)}
                />
                <TextControl
                  label="Min Score"
                  value={option.minScore || ""}
                  onChange={(v) => updateOption(i, "minScore", v)}
                />
                <TextControl
                  label="APR"
                  value={option.apr || ""}
                  onChange={(v) => updateOption(i, "apr", v)}
                />
                <TextControl
                  label="Terms"
                  value={option.terms || ""}
                  onChange={(v) => updateOption(i, "terms", v)}
                />
                <TextareaControl
                  label="Benefits (one per line)"
                  value={option.benefitsText || ""}
                  onChange={(v) => updateOption(i, "benefitsText", v)}
                />
                <TextControl
                  label="Apply URL"
                  value={option.applyUrl || ""}
                  onChange={(v) => updateOption(i, "applyUrl", v)}
                />
                <Button isDestructive isSmall onClick={() => removeOption(i)}>
                  Remove Option
                </Button>
              </div>
            ))}

            <Button isPrimary isSmall onClick={addOption}>
              + Add Option
            </Button>
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
              {options.map((option, i) => (
                <div
                  key={i}
                  className="financing-option-card"
                  style={{ opacity: 0.6 }}
                >
                  <div
                    className="option-logo"
                    style={{ backgroundColor: option.logoColor || "#3654de" }}
                  >
                    {option.initials || "NA"}
                  </div>
                  <h3>{option.name || "Partner Name"}</h3>
                  <p className="option-rating">⭐ {option.rating || "4.5"}</p>
                  <ul style={{ fontSize: "0.85rem", color: "#666" }}>
                    <li>Min. Credit Score: {option.minScore || "N/A"}</li>
                    <li>APR Range: {option.apr || "N/A"}</li>
                    <li>Terms: {option.terms || "N/A"}</li>
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
