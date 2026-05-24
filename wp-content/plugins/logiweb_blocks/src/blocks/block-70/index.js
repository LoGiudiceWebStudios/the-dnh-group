import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,
} from "@wordpress/components";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-70", {
  ...metadata,
  attributes: {
    badgeText: { type: "string", default: "Service Territory" },
    titleStart: { type: "string", default: "Every Region of" },
    titleHighlight: { type: "string", default: "Ohio Covered" },
    description: {
      type: "string",
      default:
        "Hover over a region to see where we operate. From the largest metro to the smallest town - we go where Ohio homeowners need us.",
    },
    mapImage: { type: "string", default: "" },
    mapHintText: {
      type: "string",
      default: "Hover over any county to see details",
    },
    countiesText: { type: "string", default: "88 counties" },
    servicesTitle: { type: "string", default: "Services Available in Ohio" },
    servicesListText: {
      type: "string",
      default:
        "Interior & Exterior Painting\nResidential Remodeling\nKitchen & Bathroom Renovation\nRoof Repair & Replacement\nElectrical Services\nPressure Washing & Surface Prep\nDeck Restoration & Staining\nEmergency Storm Damage Repair\nColor Consultation & Design\nProject Management Included\nLicensed & Insured in Ohio\nFree In-Home Estimates",
    },
    ctaText: { type: "string", default: "Request Free Ohio Estimate" },
    ctaUrl: { type: "string", default: "#" },
  },

  edit({ attributes, setAttributes }) {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      description,
      mapImage,
      servicesTitle,
      servicesListText,
      ctaText,
      ctaUrl,
    } = attributes;

    const blockProps = useBlockProps({ className: "ohio-coverage-block" });
    const services = (servicesListText || "")
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);

    return (
      <>
        <InspectorControls>
          <PanelBody title="Header" initialOpen={true}>
            <TextControl
              label="Badge text"
              value={badgeText}
              onChange={(value) => setAttributes({ badgeText: value })}
            />
            <TextControl
              label="Title start"
              value={titleStart}
              onChange={(value) => setAttributes({ titleStart: value })}
            />
            <TextControl
              label="Title highlight"
              value={titleHighlight}
              onChange={(value) => setAttributes({ titleHighlight: value })}
            />
            <TextareaControl
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
            />
          </PanelBody>

          <PanelBody title="Map" initialOpen={false}>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) => setAttributes({ mapImage: media.url })}
                allowedTypes={["image"]}
                render={({ open }) => (
                  <div>
                    {mapImage ? (
                      <img
                        src={mapImage}
                        alt=""
                        style={{
                          width: "100%",
                          borderRadius: 8,
                          marginBottom: 8,
                        }}
                      />
                    ) : null}
                    <Button isSecondary onClick={open}>
                      {mapImage ? "Change map image" : "Select map image"}
                    </Button>
                  </div>
                )}
              />
            </MediaUploadCheck>
          </PanelBody>

          <PanelBody title="Services Card" initialOpen={false}>
            <TextControl
              label="Card title"
              value={servicesTitle}
              onChange={(value) => setAttributes({ servicesTitle: value })}
            />
            <TextareaControl
              label="Services (one per line)"
              value={servicesListText}
              onChange={(value) => setAttributes({ servicesListText: value })}
            />
            <TextControl
              label="CTA text"
              value={ctaText}
              onChange={(value) => setAttributes({ ctaText: value })}
            />
            <TextControl
              label="CTA URL"
              value={ctaUrl}
              onChange={(value) => setAttributes({ ctaUrl: value })}
            />
          </PanelBody>
        </InspectorControls>

        <section {...blockProps}>
          <div className="ohio-coverage-header">
            <p className="ohio-coverage-badge">
              <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
              <span>{badgeText}</span>
            </p>

            <h2 className="ohio-coverage-title">
              {titleStart} <span>{titleHighlight}</span>
            </h2>

            <RichText
              tagName="p"
              className="ohio-coverage-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Description"
            />
          </div>

          <div className="ohio-coverage-body">
            <div className="ohio-coverage-map-card">
              <div
                className="ohio-coverage-map"
                style={mapImage ? { backgroundImage: `url(${mapImage})` } : {}}
              />
            </div>

            <aside className="ohio-coverage-services-card">
              <h3>{servicesTitle}</h3>
              <ul>
                {services.map((item, idx) => (
                  <li key={idx}>
                    <i
                      className="fa-regular fa-circle-check"
                      aria-hidden="true"
                    ></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={ctaUrl || "#"} className="ohio-coverage-cta">
                <span>{ctaText}</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            </aside>
          </div>
        </section>
      </>
    );
  },

  save({ attributes }) {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      description,
      mapImage,
      servicesTitle,
      servicesListText,
      ctaText,
      ctaUrl,
    } = attributes;

    const services = (servicesListText || "")
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);

    return (
      <section className="ohio-coverage-block">
        <div className="ohio-coverage-header">
          <p className="ohio-coverage-badge">
            <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
            <span>{badgeText}</span>
          </p>

          <h2 className="ohio-coverage-title">
            {titleStart} <span>{titleHighlight}</span>
          </h2>

          <p className="ohio-coverage-description">{description}</p>
        </div>

        <div className="ohio-coverage-body">
          <div className="ohio-coverage-map-card">
            <div
              className="ohio-coverage-map"
              style={mapImage ? { backgroundImage: `url(${mapImage})` } : {}}
            />
          </div>

          <aside className="ohio-coverage-services-card">
            <h3>{servicesTitle}</h3>
            <ul>
              {services.map((item, idx) => (
                <li key={idx}>
                  <i
                    className="fa-regular fa-circle-check"
                    aria-hidden="true"
                  ></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href={ctaUrl || "#"} className="ohio-coverage-cta">
              <span>{ctaText}</span>
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
          </aside>
        </div>
      </section>
    );
  },
});
