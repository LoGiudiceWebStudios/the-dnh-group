import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  useBlockProps,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,
} from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_STATS = [
  {
    icon: "fa-solid fa-truck",
    value: "45+",
    label: "Service Vehicles",
  },
  {
    icon: "fa-solid fa-users",
    value: "150+",
    label: "Crew Members",
  },
  {
    icon: "fa-solid fa-location-dot",
    value: "All 88",
    label: "Ohio Counties",
  },
  {
    icon: "fa-regular fa-clock",
    value: "24/7",
    label: "Emergency Response",
  },
];

registerBlockType("logiweb/custom-block-72", {
  ...metadata,
  attributes: {
    badgeText: { type: "string", default: "Statewide Coverage" },
    titleStart: { type: "string", default: "A Fleet & Crew Ready for" },
    titleHighlight: { type: "string", default: "Ohio" },
    description: {
      type: "string",
      default:
        "Branded vehicles, uniformed crews, and the equipment to handle any project across all 88 counties.",
    },
    backgroundImage: {
      type: "string",
      default:
        "https://images.unsplash.com/photo-1632759145351-1d5920be8f4a?w=1600&q=80",
    },
    stats: { type: "array", default: DEFAULT_STATS },
  },

  edit({ attributes, setAttributes }) {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      description,
      backgroundImage,
      stats,
    } = attributes;
    const safeStats =
      Array.isArray(stats) && stats.length ? stats : DEFAULT_STATS;
    const blockProps = useBlockProps({ className: "fleet-coverage-hero" });

    const updateStat = (index, key, value) => {
      const next = safeStats.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [key]: value } : item,
      );
      setAttributes({ stats: next });
    };

    const addStat = () => {
      setAttributes({
        stats: [
          ...safeStats,
          {
            icon: "fa-solid fa-star",
            value: "New",
            label: "Stat Label",
          },
        ],
      });
    };

    const removeStat = (index) => {
      if (safeStats.length <= 1) return;
      setAttributes({
        stats: safeStats.filter((_, itemIndex) => itemIndex !== index),
      });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Hero Content" initialOpen={true}>
            <TextControl
              label="Badge"
              value={badgeText}
              onChange={(value) => setAttributes({ badgeText: value })}
            />
            <TextControl
              label="Title start"
              value={titleStart}
              onChange={(value) => setAttributes({ titleStart: value })}
            />
            <TextControl
              label="Highlighted title"
              value={titleHighlight}
              onChange={(value) => setAttributes({ titleHighlight: value })}
            />
            <TextareaControl
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
            />
          </PanelBody>

          <PanelBody title="Background Image" initialOpen={false}>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) =>
                  setAttributes({ backgroundImage: media.url })
                }
                allowedTypes={["image"]}
                render={({ open }) => (
                  <div>
                    {backgroundImage ? (
                      <img
                        src={backgroundImage}
                        alt=""
                        style={{
                          width: "100%",
                          borderRadius: 8,
                          marginBottom: 8,
                        }}
                      />
                    ) : null}
                    <Button isSecondary onClick={open}>
                      {backgroundImage ? "Change image" : "Select image"}
                    </Button>
                  </div>
                )}
              />
            </MediaUploadCheck>
          </PanelBody>

          {safeStats.map((stat, index) => (
            <PanelBody
              key={index}
              title={`Stat ${index + 1}`}
              initialOpen={false}
            >
              <TextControl
                label="Font Awesome icon class"
                value={stat.icon || ""}
                onChange={(value) => updateStat(index, "icon", value)}
              />
              <TextControl
                label="Value"
                value={stat.value || ""}
                onChange={(value) => updateStat(index, "value", value)}
              />
              <TextControl
                label="Label"
                value={stat.label || ""}
                onChange={(value) => updateStat(index, "label", value)}
              />
              <Button
                isDestructive
                disabled={safeStats.length <= 1}
                onClick={() => removeStat(index)}
              >
                Remove stat
              </Button>
            </PanelBody>
          ))}

          <PanelBody title="Add Stat" initialOpen={false}>
            <Button isPrimary onClick={addStat}>
              + Add stat
            </Button>
          </PanelBody>
        </InspectorControls>

        <section {...blockProps}>
          <div
            className="fleet-coverage-hero-media"
            style={
              backgroundImage
                ? { backgroundImage: `url(${backgroundImage})` }
                : {}
            }
          />
          <div className="fleet-coverage-hero-overlay" />
          <div className="fleet-coverage-hero-inner">
            <p className="fleet-coverage-hero-badge">
              <i className="fa-regular fa-map" aria-hidden="true"></i>
              <span>{badgeText}</span>
            </p>
            <h2 className="fleet-coverage-hero-title">
              {titleStart} <span>{titleHighlight}</span>
            </h2>
            <p className="fleet-coverage-hero-description">{description}</p>
            <div className="fleet-coverage-hero-stats">
              {safeStats.map((stat, index) => (
                <article key={index} className="fleet-coverage-hero-stat-card">
                  <div className="fleet-coverage-hero-stat-icon">
                    <i
                      className={stat.icon || "fa-solid fa-star"}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
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
      backgroundImage,
      stats,
    } = attributes;
    const safeStats =
      Array.isArray(stats) && stats.length ? stats : DEFAULT_STATS;
    const blockProps = useBlockProps.save({ className: "fleet-coverage-hero" });

    return (
      <section {...blockProps}>
        <div
          className="fleet-coverage-hero-media"
          style={
            backgroundImage
              ? { backgroundImage: `url(${backgroundImage})` }
              : {}
          }
        />
        <div className="fleet-coverage-hero-overlay" />
        <div className="fleet-coverage-hero-inner">
          <p className="fleet-coverage-hero-badge">
            <i className="fa-regular fa-map" aria-hidden="true"></i>
            <span>{badgeText}</span>
          </p>
          <h2 className="fleet-coverage-hero-title">
            {titleStart} <span>{titleHighlight}</span>
          </h2>
          <p className="fleet-coverage-hero-description">{description}</p>
          <div className="fleet-coverage-hero-stats">
            {safeStats.map((stat, index) => (
              <article key={index} className="fleet-coverage-hero-stat-card">
                <div className="fleet-coverage-hero-stat-icon">
                  <i
                    className={stat.icon || "fa-solid fa-star"}
                    aria-hidden="true"
                  ></i>
                </div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
