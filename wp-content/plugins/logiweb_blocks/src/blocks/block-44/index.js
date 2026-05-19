import { registerBlockType } from "@wordpress/blocks";
import {
  useBlockProps,
  InspectorControls,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-44", {
  ...metadata,
  edit({ attributes, setAttributes }) {
    const { formTitle, formDescription, resultsPageUrl, buttonText } =
      attributes;
    const blockProps = useBlockProps({
      className: "financing-app-form-editor",
    });

    return (
      <>
        <InspectorControls>
          <PanelBody title="Settings" initialOpen={true}>
            <TextControl
              label="Results Page URL"
              value={resultsPageUrl}
              onChange={(v) => setAttributes({ resultsPageUrl: v })}
              help="Where to redirect after form submission"
            />
            <TextControl
              label="Button Text"
              value={buttonText}
              onChange={(v) => setAttributes({ buttonText: v })}
            />
          </PanelBody>
        </InspectorControls>

        <div {...blockProps}>
          <div className="financing-app-form-inner">
            <RichText
              tagName="h2"
              className="financing-app-form-title"
              value={formTitle}
              onChange={(v) => setAttributes({ formTitle: v })}
              placeholder="Form Title"
            />
            <RichText
              tagName="p"
              className="financing-app-form-description"
              value={formDescription}
              onChange={(v) => setAttributes({ formDescription: v })}
              placeholder="Form Description"
            />

            <form className="financing-app-form-preview">
              <div className="form-row">
                <input
                  type="text"
                  placeholder="First Name"
                  disabled
                  style={{ backgroundColor: "#f0f0f0" }}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  disabled
                  style={{ backgroundColor: "#f0f0f0" }}
                />
              </div>
              <div className="form-row">
                <input
                  type="email"
                  placeholder="Email Address"
                  disabled
                  style={{ backgroundColor: "#f0f0f0" }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  disabled
                  style={{ backgroundColor: "#f0f0f0" }}
                />
              </div>
              <input
                type="text"
                placeholder="Street Address"
                disabled
                style={{ backgroundColor: "#f0f0f0", width: "100%" }}
              />
              <div className="form-row">
                <input
                  type="text"
                  placeholder="City"
                  disabled
                  style={{ backgroundColor: "#f0f0f0" }}
                />
                <select disabled style={{ backgroundColor: "#f0f0f0" }}>
                  <option>Select State</option>
                </select>
                <input
                  type="text"
                  placeholder="ZIP"
                  disabled
                  style={{ backgroundColor: "#f0f0f0" }}
                />
              </div>
              <select
                disabled
                style={{ backgroundColor: "#f0f0f0", width: "100%" }}
              >
                <option>Select Project Type</option>
              </select>
              <textarea
                placeholder="Project Details"
                disabled
                style={{
                  backgroundColor: "#f0f0f0",
                  width: "100%",
                  minHeight: "100px",
                }}
              />
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Total Project Amount ($)"
                  disabled
                  style={{ backgroundColor: "#f0f0f0" }}
                />
                <input
                  type="date"
                  disabled
                  style={{ backgroundColor: "#f0f0f0" }}
                />
              </div>
              <button
                type="button"
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#2f4ee0",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "not-allowed",
                }}
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </>
    );
  },

  save() {
    return null; // Dynamic block - rendered via PHP
  },
});
