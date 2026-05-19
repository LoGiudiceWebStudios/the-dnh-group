import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
} from "@wordpress/block-editor";
import { Button, PanelBody, TextControl } from "@wordpress/components";
import { useMemo } from "@wordpress/element";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_SERVICES = [
  {
    photoUrl: "",
    title: "Service 1",
    subtitle: "Short subtitle",
    description: "Service description goes here.",
    linkText: "Learn more",
    linkUrl: "#",
  },
  {
    photoUrl: "",
    title: "Service 2",
    subtitle: "Short subtitle",
    description: "Service description goes here.",
    linkText: "Learn more",
    linkUrl: "#",
  },
  {
    photoUrl: "",
    title: "Service 3",
    subtitle: "Short subtitle",
    description: "Service description goes here.",
    linkText: "Learn more",
    linkUrl: "#",
  },
  {
    photoUrl: "",
    title: "Service 4",
    subtitle: "Short subtitle",
    description: "Service description goes here.",
    linkText: "Learn more",
    linkUrl: "#",
  },
];

const getServiceImageUrl = (service) => service?.photoUrl || "";

registerBlockType("logiweb/custom-block-7", {
  title: "Services Showcase",
  icon: "screenoptions",
  category: "widgets",
  attributes: {
    subtitle: {
      type: "string",
      default: "OUR SERVICES",
    },
    title: {
      type: "string",
      default: "Comprehensive Solutions",
    },
    description: {
      type: "string",
      default: "We provide everything you need.",
    },
    services: {
      type: "array",
      default: DEFAULT_SERVICES,
    },
    footerText: {
      type: "string",
      default: "Need help? Contact us today.",
    },
    footerButtonText: {
      type: "string",
      default: "Get Started",
    },
    footerButtonUrl: {
      type: "string",
      default: "#contact",
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const {
      subtitle,
      title,
      description,
      services,
      footerText,
      footerButtonText,
      footerButtonUrl,
    } = attributes;

    const updateService = (index, field, value) => {
      const nextServices = [...services];
      nextServices[index] = {
        ...nextServices[index],
        [field]: value,
      };
      setAttributes({ services: nextServices });
    };

    const updateServicePhoto = (index, media) => {
      updateService(index, "photoUrl", media.url);
    };

    const addService = () => {
      setAttributes({
        services: [
          ...services,
          {
            photoUrl: "",
            title: "New Service",
            subtitle: "Add a short subtitle",
            description: "Add the service description here.",
            linkText: "Learn more",
            linkUrl: "#",
          },
        ],
      });
    };

    const removeService = (index) => {
      if (services.length <= 1) {
        return;
      }
      setAttributes({
        services: services.filter((_, currentIndex) => currentIndex !== index),
      });
    };

    const serviceCountLabel = useMemo(
      () => `${services.length} service${services.length === 1 ? "" : "s"}`,
      [services.length],
    );

    return (
      <div className="services-showcase-block">
        <InspectorControls>
          <PanelBody title="Section Content" initialOpen={true}>
            <TextControl
              label="Subtitle"
              value={subtitle}
              onChange={(value) => setAttributes({ subtitle: value })}
            />
            <TextControl
              label="Title"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
            />
            <TextControl
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
            />
          </PanelBody>

          <PanelBody
            title={`Services (${serviceCountLabel})`}
            initialOpen={false}
          >
            {services.map((service, index) => (
              <div key={index} className="services-card-controls">
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) => updateServicePhoto(index, media)}
                    allowedTypes={["image"]}
                    render={({ open }) => (
                      <Button onClick={open} isSecondary>
                        {getServiceImageUrl(service)
                          ? "Change image"
                          : "Add image"}
                      </Button>
                    )}
                  />
                </MediaUploadCheck>
                {getServiceImageUrl(service) ? (
                  <div className="services-card-controls-preview">
                    <img
                      src={getServiceImageUrl(service)}
                      alt={service.title}
                      className="services-card-controls-preview-image"
                    />
                  </div>
                ) : null}
                <TextControl
                  label="Service title"
                  value={service.title}
                  onChange={(value) => updateService(index, "title", value)}
                />
                <TextControl
                  label="Service subtitle"
                  value={service.subtitle}
                  onChange={(value) => updateService(index, "subtitle", value)}
                />
                <TextControl
                  label="Service description"
                  value={service.description}
                  onChange={(value) =>
                    updateService(index, "description", value)
                  }
                />
                <TextControl
                  label="Learn more label"
                  value={service.linkText}
                  onChange={(value) => updateService(index, "linkText", value)}
                />
                <TextControl
                  label="Learn more URL"
                  value={service.linkUrl}
                  onChange={(value) => updateService(index, "linkUrl", value)}
                />
                <Button
                  isDestructive
                  isSecondary
                  onClick={() => removeService(index)}
                  disabled={services.length <= 1}
                >
                  Remove service
                </Button>
              </div>
            ))}
            <Button isPrimary onClick={addService}>
              Add service
            </Button>
          </PanelBody>

          <PanelBody title="Footer CTA" initialOpen={false}>
            <TextControl
              label="Footer text"
              value={footerText}
              onChange={(value) => setAttributes({ footerText: value })}
            />
            <TextControl
              label="Button text"
              value={footerButtonText}
              onChange={(value) => setAttributes({ footerButtonText: value })}
            />
            <TextControl
              label="Button URL"
              value={footerButtonUrl}
              onChange={(value) => setAttributes({ footerButtonUrl: value })}
            />
          </PanelBody>
        </InspectorControls>

        <section className="services-showcase-preview">
          <div className="services-showcase-heading">
            <p className="services-showcase-subtitle">{subtitle}</p>
            <RichText
              tagName="h2"
              className="services-showcase-title"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
              placeholder="Add title"
            />
            <RichText
              tagName="p"
              className="services-showcase-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Add description"
            />
          </div>

          <div className="services-showcase-cards">
            {services.map((service, index) => (
              <article key={index} className="services-showcase-card">
                <div className="services-showcase-card-imageWrap">
                  {getServiceImageUrl(service) ? (
                    <img
                      src={getServiceImageUrl(service)}
                      alt={service.title}
                      className="services-showcase-card-image"
                    />
                  ) : (
                    <div className="services-showcase-card-placeholder">
                      Add image
                    </div>
                  )}
                </div>
                <RichText
                  tagName="h3"
                  className="services-showcase-card-title"
                  value={service.title}
                  onChange={(value) => updateService(index, "title", value)}
                  placeholder="Service title"
                />
                <RichText
                  tagName="p"
                  className="services-showcase-card-subtitle"
                  value={service.subtitle}
                  onChange={(value) => updateService(index, "subtitle", value)}
                  placeholder="Service subtitle"
                />
                <RichText
                  tagName="div"
                  className="services-showcase-card-description"
                  value={service.description}
                  onChange={(value) =>
                    updateService(index, "description", value)
                  }
                  placeholder="Service description"
                />
                <a
                  className="services-showcase-card-link"
                  href={service.linkUrl || "#"}
                >
                  {service.linkText || "Learn more"}
                </a>
              </article>
            ))}
          </div>

          <div className="services-showcase-footer">
            <p className="services-showcase-footerText">{footerText}</p>
            <a
              className="services-showcase-button"
              href={footerButtonUrl || "#"}
            >
              {footerButtonText}
            </a>
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const {
      subtitle,
      title,
      description,
      services,
      footerText,
      footerButtonText,
      footerButtonUrl,
    } = attributes;

    return (
      <section
        className="services-showcase fade-in-on-scroll"
        data-block="services-showcase"
      >
        <div className="services-showcase-heading">
          <p className="services-showcase-subtitle">{subtitle}</p>
          <h2 className="services-showcase-title">{title}</h2>
          <p className="services-showcase-description">{description}</p>
        </div>

        <div className="services-showcase-cards">
          {services.map((service, index) => (
            <article key={index} className="services-showcase-card">
              <div className="services-showcase-card-imageWrap">
                {getServiceImageUrl(service) ? (
                  <img
                    src={getServiceImageUrl(service)}
                    alt={service.title}
                    className="services-showcase-card-image"
                  />
                ) : (
                  <div className="services-showcase-card-placeholder">
                    Add image
                  </div>
                )}
              </div>
              <h3 className="services-showcase-card-title">{service.title}</h3>
              <p className="services-showcase-card-subtitle">
                {service.subtitle}
              </p>
              <div className="services-showcase-card-description">
                {service.description}
              </div>
              <a
                className="services-showcase-card-link"
                href={service.linkUrl || "#"}
              >
                {service.linkText || "Learn more"}
              </a>
            </article>
          ))}
        </div>

        <div className="services-showcase-footer">
          <p className="services-showcase-footerText">{footerText}</p>
          <a className="services-showcase-button" href={footerButtonUrl || "#"}>
            {footerButtonText}
          </a>
        </div>
      </section>
    );
  },
});
