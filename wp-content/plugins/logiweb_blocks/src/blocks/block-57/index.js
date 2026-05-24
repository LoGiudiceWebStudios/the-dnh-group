import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  RichText,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,
} from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_IMAGE =
  typeof logiweb_blocks !== "undefined" && logiweb_blocks.placeholder_image
    ? logiweb_blocks.placeholder_image
    : "https://via.placeholder.com/720x460?text=Service+Image";

const DEFAULT_SERVICES = [
  {
    imageUrl: DEFAULT_IMAGE,
    title: "Interior Painting",
    description: "Expert painting services for Ohio homes.",
  },
  {
    imageUrl: DEFAULT_IMAGE,
    title: "Exterior Cleaning",
    description: "Pressure washing and surface preparation.",
  },
  {
    imageUrl: DEFAULT_IMAGE,
    title: "Home Remodeling",
    description: "Kitchen, bath, and full home renovations.",
  },
  {
    imageUrl: DEFAULT_IMAGE,
    title: "Roofing & Electrical",
    description: "Professional roofing and electrical solutions.",
  },
];

registerBlockType("logiweb/custom-block-57", {
  ...metadata,
  attributes: {
    title: {
      type: "string",
      default: "Our Services in Ohio",
    },
    services: {
      type: "array",
      default: DEFAULT_SERVICES,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { title, services = [] } = attributes;

    const updateService = (index, key, value) => {
      const next = [...services];
      next[index] = { ...next[index], [key]: value };
      setAttributes({ services: next });
    };

    const addService = () => {
      setAttributes({
        services: [
          ...services,
          {
            imageUrl: DEFAULT_IMAGE,
            title: "New Service",
            description: "Service description",
          },
        ],
      });
    };

    const removeService = (index) => {
      if (services.length <= 1) {
        return;
      }
      setAttributes({ services: services.filter((_, i) => i !== index) });
    };

    return (
      <section className="ohio-services-grid-block">
        <InspectorControls>
          <PanelBody title={`Services (${services.length})`} initialOpen={true}>
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "14px",
                  borderBottom: "1px solid #e3e9f2",
                  paddingBottom: "14px",
                }}
              >
                <p style={{ margin: "0 0 8px", fontWeight: 600 }}>
                  Service {index + 1}
                </p>

                <MediaUpload
                  onSelect={(media) =>
                    updateService(index, "imageUrl", media?.url || "")
                  }
                  allowedTypes={["image"]}
                  value={service.imageUrl}
                  render={({ open }) => (
                    <Button isSecondary isSmall onClick={open}>
                      {service.imageUrl ? "Change image" : "Set image"}
                    </Button>
                  )}
                />

                <TextControl
                  label="Title"
                  value={service.title || ""}
                  onChange={(value) => updateService(index, "title", value)}
                />
                <TextareaControl
                  label="Description"
                  value={service.description || ""}
                  onChange={(value) =>
                    updateService(index, "description", value)
                  }
                />

                <Button
                  isSecondary
                  isDestructive
                  isSmall
                  disabled={services.length <= 1}
                  onClick={() => removeService(index)}
                >
                  Remove service
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addService}>
              Add service
            </Button>
          </PanelBody>
        </InspectorControls>

        <div className="ohio-services-grid-inner">
          <RichText
            tagName="h2"
            className="ohio-services-grid-title"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
            placeholder="Section title"
          />

          <div className="ohio-services-grid-cards">
            {services.map((service, index) => (
              <article className="ohio-services-grid-card" key={index}>
                <div className="ohio-services-grid-media">
                  <img
                    className="ohio-services-grid-image"
                    src={service.imageUrl || DEFAULT_IMAGE}
                    alt={service.title || "Service"}
                  />
                </div>
                <div className="ohio-services-grid-content">
                  <RichText
                    tagName="h3"
                    className="ohio-services-grid-card-title"
                    value={service.title}
                    onChange={(value) => updateService(index, "title", value)}
                    placeholder="Service title"
                  />
                  <RichText
                    tagName="p"
                    className="ohio-services-grid-card-description"
                    value={service.description}
                    onChange={(value) =>
                      updateService(index, "description", value)
                    }
                    placeholder="Service description"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  },

  save: ({ attributes }) => {
    const { title, services = [] } = attributes;

    return (
      <section
        className="ohio-services-grid-block fade-in-on-scroll"
        data-block="ohio-services-grid"
      >
        <div className="ohio-services-grid-inner">
          <h2 className="ohio-services-grid-title">{title}</h2>

          <div className="ohio-services-grid-cards">
            {services.map((service, index) => (
              <article className="ohio-services-grid-card" key={index}>
                <div className="ohio-services-grid-media">
                  <img
                    className="ohio-services-grid-image"
                    src={service.imageUrl || DEFAULT_IMAGE}
                    alt={service.title || "Service"}
                  />
                </div>
                <div className="ohio-services-grid-content">
                  <h3 className="ohio-services-grid-card-title">
                    {service.title}
                  </h3>
                  <p className="ohio-services-grid-card-description">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
