import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, Button, TextControl } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_CERTIFICATIONS = [
  { name: "Microsoft", badgeText: "M", badgeColor: "#dbe7ff" },
  { name: "Google", badgeText: "G", badgeColor: "#fbe1e1" },
  { name: "Amazon", badgeText: "A", badgeColor: "#f6e3bf" },
  { name: "Meta", badgeText: "F", badgeColor: "#d9e2ff" },
  { name: "Apple", badgeText: "A", badgeColor: "#ececf1" },
  { name: "Netflix", badgeText: "N", badgeColor: "#f5d9dc" },
  { name: "Spotify", badgeText: "S", badgeColor: "#dbf0da" },
  { name: "Slack", badgeText: "SL", badgeColor: "#e2daf9" },
];

const norm = (value = "") => String(value).trim();

const getBadgeText = (certification) => {
  const explicit = norm(certification?.badgeText);
  if (explicit) {
    return explicit;
  }
  return norm(certification?.name).charAt(0).toUpperCase() || "A";
};

registerBlockType("logiweb/custom-block-10", {
  ...metadata,
  attributes: {
    title: {
      type: "string",
      default: "TRUSTED BY INDUSTRY LEADERS",
    },
    certifications: {
      type: "array",
      default: DEFAULT_CERTIFICATIONS,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      title = "TRUSTED BY INDUSTRY LEADERS",
      certifications = DEFAULT_CERTIFICATIONS,
    } = attributes;

    const updateCertification = (index, key, value) => {
      const next = [...certifications];
      next[index] = {
        ...next[index],
        [key]: value,
      };
      setAttributes({ certifications: next });
    };

    const addCertification = () => {
      setAttributes({
        certifications: [
          ...certifications,
          { name: "New Certification", badgeText: "N", badgeColor: "#e8ecf5" },
        ],
      });
    };

    const removeCertification = (index) => {
      if (certifications.length <= 1) {
        return;
      }

      setAttributes({
        certifications: certifications.filter((_, certIndex) => certIndex !== index),
      });
    };

    return (
      <section className="certifications-carousel">
        <InspectorControls>
          <PanelBody title="Certifications" initialOpen>
            <TextControl
              label="Titolo"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
            />

            {certifications.map((certification, index) => (
              <div
                key={index}
                style={{
                  marginTop: "12px",
                  marginBottom: "12px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid #e5e9f2",
                }}
              >
                <TextControl
                  label={`Certification ${index + 1} - Nome`}
                  value={certification.name || ""}
                  onChange={(value) => updateCertification(index, "name", value)}
                />
                <TextControl
                  label="Badge Text"
                  value={certification.badgeText || ""}
                  onChange={(value) => updateCertification(index, "badgeText", value)}
                />
                <TextControl
                  label="Badge Color"
                  value={certification.badgeColor || "#e8ecf5"}
                  onChange={(value) => updateCertification(index, "badgeColor", value)}
                />
                <Button
                  isSmall
                  isDestructive
                  disabled={certifications.length <= 1}
                  onClick={() => removeCertification(index)}
                >
                  Rimuovi
                </Button>
              </div>
            ))}

            <Button isPrimary isSmall onClick={addCertification}>
              + Aggiungi certification
            </Button>
          </PanelBody>
        </InspectorControls>

        <div className="certifications-content">
          <RichText
            tagName="p"
            className="certifications-subtitle"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
            placeholder="TRUSTED BY INDUSTRY LEADERS"
          />

          <div className="slider" aria-label="Certifications">
            <div className="slide-track">
              <div className="carousel-group">
                {certifications.map((certification, index) => (
                  <div className="slide" key={`editor-original-${index}-${certification.name}`}>
                    <span
                      className="certification-badge"
                      style={{ backgroundColor: certification.badgeColor || "#e8ecf5" }}
                    >
                      {getBadgeText(certification)}
                    </span>
                    <span className="certification-name">{certification.name || "Brand"}</span>
                  </div>
                ))}
              </div>

              <div className="carousel-group" aria-hidden="true">
                {certifications.map((certification, index) => (
                  <div className="slide" key={`editor-duplicate-${index}-${certification.name}`}>
                    <span
                      className="certification-badge"
                      style={{ backgroundColor: certification.badgeColor || "#e8ecf5" }}
                    >
                      {getBadgeText(certification)}
                    </span>
                    <span className="certification-name">{certification.name || "Brand"}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },

  save: ({ attributes }) => {
    const {
      title = "TRUSTED BY INDUSTRY LEADERS",
      certifications = DEFAULT_CERTIFICATIONS,
    } = attributes;

    return (
      <section className="certifications-carousel fade-in-on-scroll" data-block="certifications">
        <div className="certifications-content">
          <p className="certifications-subtitle">{title}</p>

          <div className="slider" aria-label="Certifications">
            <div className="slide-track">
              <div className="carousel-group">
                {certifications.map((certification, index) => (
                  <div className="slide" key={`save-original-${index}-${certification.name}`}>
                    <span
                      className="certification-badge"
                      style={{ backgroundColor: certification.badgeColor || "#e8ecf5" }}
                    >
                      {getBadgeText(certification)}
                    </span>
                    <span className="certification-name">{certification.name || "Brand"}</span>
                  </div>
                ))}
              </div>

              <div className="carousel-group" aria-hidden="true">
                {certifications.map((certification, index) => (
                  <div className="slide" key={`save-duplicate-${index}-${certification.name}`}>
                    <span
                      className="certification-badge"
                      style={{ backgroundColor: certification.badgeColor || "#e8ecf5" }}
                    >
                      {getBadgeText(certification)}
                    </span>
                    <span className="certification-name">{certification.name || "Brand"}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
});
