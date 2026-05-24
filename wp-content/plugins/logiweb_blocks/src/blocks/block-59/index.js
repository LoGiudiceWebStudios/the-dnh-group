import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_OFFICE_HOURS = [
  { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
  { day: "Saturday", time: "9:00 AM - 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const DEFAULT_SERVICE_AREAS = [
  "Ohio - Cincinnati, Columbus, Cleveland",
  "Kentucky - Louisville, Lexington",
  "Indiana - Indianapolis, Fort Wayne",
];

registerBlockType("logiweb/custom-block-59", {
  ...metadata,
  attributes: {
    sectionTitle: {
      type: "string",
      default: "Send Us a Message",
    },
    sectionSubtitle: {
      type: "string",
      default: "Fill out the form below and we'll respond as soon as possible.",
    },
    contactForm7Shortcode: {
      type: "string",
      default: "",
    },
    scheduleTitle: {
      type: "string",
      default: "Prefer to Talk?",
    },
    scheduleButtonText: {
      type: "string",
      default: "Schedule a Call",
    },
    scheduleButtonUrl: {
      type: "string",
      default: "#",
    },
    officeTitle: {
      type: "string",
      default: "Office Hours",
    },
    officeHours: {
      type: "array",
      default: DEFAULT_OFFICE_HOURS,
    },
    serviceAreasTitle: {
      type: "string",
      default: "Service Areas",
    },
    serviceAreas: {
      type: "array",
      default: DEFAULT_SERVICE_AREAS,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      sectionTitle,
      sectionSubtitle,
      contactForm7Shortcode,
      scheduleTitle,
      scheduleButtonText,
      scheduleButtonUrl,
      officeTitle,
      officeHours,
      serviceAreasTitle,
      serviceAreas,
    } = attributes;

    const updateOfficeHour = (index, key, value) => {
      const next = [...officeHours];
      next[index] = { ...next[index], [key]: value };
      setAttributes({ officeHours: next });
    };

    const addOfficeHour = () => {
      setAttributes({
        officeHours: [
          ...officeHours,
          { day: "New Day", time: "9:00 AM - 5:00 PM" },
        ],
      });
    };

    const removeOfficeHour = (index) => {
      if (officeHours.length <= 1) {
        return;
      }
      setAttributes({ officeHours: officeHours.filter((_, i) => i !== index) });
    };

    const updateServiceArea = (index, value) => {
      const next = [...serviceAreas];
      next[index] = value;
      setAttributes({ serviceAreas: next });
    };

    const addServiceArea = () => {
      setAttributes({ serviceAreas: [...serviceAreas, "New area"] });
    };

    const removeServiceArea = (index) => {
      if (serviceAreas.length <= 1) {
        return;
      }
      setAttributes({
        serviceAreas: serviceAreas.filter((_, i) => i !== index),
      });
    };

    return (
      <section className="contact-split-block">
        <InspectorControls>
          <PanelBody title="Main Content" initialOpen={true}>
            <TextControl
              label="Section title"
              value={sectionTitle}
              onChange={(value) => setAttributes({ sectionTitle: value })}
            />
            <TextControl
              label="Section subtitle"
              value={sectionSubtitle}
              onChange={(value) => setAttributes({ sectionSubtitle: value })}
            />
            <TextControl
              label="Contact Form 7 shortcode"
              value={contactForm7Shortcode}
              onChange={(value) =>
                setAttributes({ contactForm7Shortcode: value })
              }
              help='Example: [contact-form-7 id="123" title="Contact form 1"]'
            />
          </PanelBody>

          <PanelBody title="Schedule Card" initialOpen={false}>
            <TextControl
              label="Card title"
              value={scheduleTitle}
              onChange={(value) => setAttributes({ scheduleTitle: value })}
            />
            <TextControl
              label="Button text"
              value={scheduleButtonText}
              onChange={(value) => setAttributes({ scheduleButtonText: value })}
            />
            <TextControl
              label="Button URL"
              value={scheduleButtonUrl}
              onChange={(value) => setAttributes({ scheduleButtonUrl: value })}
            />
          </PanelBody>

          <PanelBody
            title={`Office Hours (${officeHours.length})`}
            initialOpen={false}
          >
            <TextControl
              label="Office title"
              value={officeTitle}
              onChange={(value) => setAttributes({ officeTitle: value })}
            />
            {officeHours.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "14px",
                  borderBottom: "1px solid #e3e9f2",
                  paddingBottom: "14px",
                }}
              >
                <TextControl
                  label="Day"
                  value={item.day || ""}
                  onChange={(value) => updateOfficeHour(index, "day", value)}
                />
                <TextControl
                  label="Time"
                  value={item.time || ""}
                  onChange={(value) => updateOfficeHour(index, "time", value)}
                />
                <Button
                  isSecondary
                  isDestructive
                  isSmall
                  disabled={officeHours.length <= 1}
                  onClick={() => removeOfficeHour(index)}
                >
                  Remove row
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addOfficeHour}>
              Add row
            </Button>
          </PanelBody>

          <PanelBody
            title={`Service Areas (${serviceAreas.length})`}
            initialOpen={false}
          >
            <TextControl
              label="Service areas title"
              value={serviceAreasTitle}
              onChange={(value) => setAttributes({ serviceAreasTitle: value })}
            />
            {serviceAreas.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "14px",
                  borderBottom: "1px solid #e3e9f2",
                  paddingBottom: "14px",
                }}
              >
                <TextControl
                  label={`Area ${index + 1}`}
                  value={item || ""}
                  onChange={(value) => updateServiceArea(index, value)}
                />
                <Button
                  isSecondary
                  isDestructive
                  isSmall
                  disabled={serviceAreas.length <= 1}
                  onClick={() => removeServiceArea(index)}
                >
                  Remove area
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addServiceArea}>
              Add area
            </Button>
          </PanelBody>
        </InspectorControls>

        <div className="contact-split-inner">
          <div className="contact-split-form-card">
            <RichText
              tagName="h2"
              className="contact-split-title"
              value={sectionTitle}
              onChange={(value) => setAttributes({ sectionTitle: value })}
              placeholder="Send Us a Message"
            />
            <RichText
              tagName="p"
              className="contact-split-subtitle"
              value={sectionSubtitle}
              onChange={(value) => setAttributes({ sectionSubtitle: value })}
              placeholder="Fill out the form below and we'll respond as soon as possible."
            />

            <div className="contact-split-form-preview">
              {contactForm7Shortcode ? (
                <>
                  <p className="contact-split-shortcode-label">
                    Contact Form 7 connected:
                  </p>
                  <code>{contactForm7Shortcode}</code>
                </>
              ) : (
                <p>
                  Add your Contact Form 7 shortcode from the block settings.
                </p>
              )}
            </div>
          </div>

          <div className="contact-split-side-stack">
            <article className="contact-split-side-card">
              <h3 className="contact-split-side-title">{scheduleTitle}</h3>
              <a
                className="contact-split-outline-btn"
                href={scheduleButtonUrl || "#"}
              >
                <i className="fa-regular fa-calendar" aria-hidden="true"></i>
                {scheduleButtonText}
              </a>
            </article>

            <article className="contact-split-side-card">
              <h3 className="contact-split-side-title">{officeTitle}</h3>
              <div className="contact-split-hours-list">
                {officeHours.map((item, index) => (
                  <div className="contact-split-hours-row" key={index}>
                    <span>{item.day}</span>
                    <strong>{item.time}</strong>
                  </div>
                ))}
              </div>
            </article>

            <article className="contact-split-side-card">
              <h3 className="contact-split-side-title">{serviceAreasTitle}</h3>
              <div className="contact-split-areas-list">
                {serviceAreas.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  },

  save: () => {
    return null;
  },
});
