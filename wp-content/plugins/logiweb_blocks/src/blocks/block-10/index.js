import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, Button, TextControl } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_COMPANIES = [
  { name: "Microsoft", badgeText: "M", badgeColor: "#dbe7ff" },
  { name: "Google", badgeText: "G", badgeColor: "#fbe1e1" },
  { name: "Amazon", badgeText: "A", badgeColor: "#f6e3bf" },
  { name: "Meta", badgeText: "F", badgeColor: "#d9e2ff" },
  { name: "Apple", badgeText: "A", badgeColor: "#ececf1" },
  { name: "Netflix", badgeText: "N", badgeColor: "#f5d9dc" },
  { name: "Spotify", badgeText: "S", badgeColor: "#dbf0da" },
  { name: "Slack", badgeText: "Sl", badgeColor: "#e2daf9" },
];

const norm = (value = "") => String(value).trim();

const getBadgeText = (company) => {
  const explicit = norm(company?.badgeText);
  if (explicit) {
    return explicit;
  }
  const fromName = norm(company?.name).charAt(0).toUpperCase();
  return fromName || "A";
};

registerBlockType("logiweb/custom-block-10", {
  ...metadata,
  attributes: {
    title: {
      type: "string",
      default: "Trusted by Industry Leaders",
    },
    companies: {
      type: "array",
      default: DEFAULT_COMPANIES,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { title = "", companies = DEFAULT_COMPANIES } = attributes;

    const updateCompany = (index, key, value) => {
      const next = [...companies];
      next[index] = {
        ...next[index],
        [key]: value,
      };
      setAttributes({ companies: next });
    };

    const addCompany = () => {
      setAttributes({
        companies: [
          ...companies,
          { name: "New Brand", badgeText: "N", badgeColor: "#e8ecf5" },
        ],
      });
    };

    const removeCompany = (index) => {
      if (companies.length <= 1) {
        return;
      }
      setAttributes({ companies: companies.filter((_, i) => i !== index) });
    };

    const editorLoopItems = [...companies, ...companies];

    return (
      <section className="certifications-carousel">
        <InspectorControls>
          <PanelBody title="Carousel Settings">
            <TextControl
              label="Section Title"
              value={title}
              onChange={(val) => setAttributes({ title: val })}
            />
            {companies.map((company, index) => (
              <div
                key={index}
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  borderBottom: "1px solid #e5e9f2",
                  paddingBottom: "10px",
                }}
              >
                <TextControl
                  label={`Brand ${index + 1} Name`}
                  value={company.name || ""}
                  onChange={(value) => updateCompany(index, "name", value)}
                />
                <TextControl
                  label="Badge Text"
                  value={company.badgeText || ""}
                  onChange={(value) => updateCompany(index, "badgeText", value)}
                />
                <TextControl
                  label="Badge Color"
                  value={company.badgeColor || "#e8ecf5"}
                  onChange={(value) =>
                    updateCompany(index, "badgeColor", value)
                  }
                />
                <Button
                  isSmall
                  isDestructive
                  onClick={() => removeCompany(index)}
                  disabled={companies.length <= 1}
                >
                  Remove brand
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addCompany}>
              + Add brand
            </Button>
          </PanelBody>
        </InspectorControls>

        <div className="certifications-content">
          <div className="certifications-header">
            <RichText
              tagName="p"
              className="certifications-subtitle"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
              placeholder="Trusted by industry leaders"
            />
          </div>

          <div className="certifications-marquee">
            <div className="certifications-track">
              {editorLoopItems.map((company, idx) => (
                <div
                  className="certification-item"
                  key={`${idx}-${company.name}`}
                >
                  <span
                    className="certification-badge"
                    style={{ backgroundColor: company.badgeColor || "#e8ecf5" }}
                  >
                    {getBadgeText(company)}
                  </span>
                  <span className="certification-caption">
                    {company.name || "Brand"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  },

  save: ({ attributes }) => {
    const {
      title = "Trusted by Industry Leaders",
      companies = DEFAULT_COMPANIES,
    } = attributes;
    const loopItems = [...companies, ...companies];

    return (
      <section
        className="certifications-carousel fade-in-on-scroll"
        data-block="certifications"
      >
        <div className="certifications-content">
          <div className="certifications-header">
            <p className="certifications-subtitle">{title}</p>
          </div>

          <div className="certifications-marquee" aria-label="Trusted brands">
            <div className="certifications-track" data-carousel-track>
              {loopItems.map((company, idx) => (
                <div
                  key={`${idx}-${company.name}`}
                  className="certification-item"
                  data-carousel-item
                >
                  <span
                    className="certification-badge"
                    style={{ backgroundColor: company.badgeColor || "#e8ecf5" }}
                  >
                    {getBadgeText(company)}
                  </span>
                  <span className="certification-caption">
                    {company.name || "Brand"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  },
});
