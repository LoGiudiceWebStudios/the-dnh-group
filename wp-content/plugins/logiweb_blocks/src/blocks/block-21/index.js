import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_PROJECTS = [
  {
    imageUrl: "",
    imageAlt: "Interior & Exterior Painting",
    tag: "Painting Services",
    tagIcon: "fa-solid fa-paint-roller",
    tagColor: "#6c63ff",
    stat: "500+ Projects",
    title: "Interior & Exterior Painting",
    description:
      "Complete home transformation with premium paints and expert craftsmanship.",
    btnText: "View Projects",
    btnUrl: "#",
    externalUrl: "#",
  },
  {
    imageUrl: "",
    imageAlt: "Exterior Cleaning & Prep",
    tag: "Cleaning Services",
    tagIcon: "fa-solid fa-droplet",
    tagColor: "#22c55e",
    stat: "300+ Homes",
    title: "Exterior Cleaning & Prep",
    description:
      "Pressure washing and surface preparation for lasting results.",
    btnText: "View Estimate",
    btnUrl: "#",
    externalUrl: "#",
  },
  {
    imageUrl: "",
    imageAlt: "Home Remodeling",
    tag: "Remodeling Services",
    tagIcon: "fa-solid fa-hammer",
    tagColor: "#a855f7",
    stat: "200+ Renovations",
    title: "Home Remodeling",
    description:
      "Kitchen, bathroom, and full home renovations that exceed expectations.",
    btnText: "View Projects",
    btnUrl: "#",
    externalUrl: "#",
  },
  {
    imageUrl: "",
    imageAlt: "Roofing & Electrical",
    tag: "Roofing Services",
    tagIcon: "fa-solid fa-house",
    tagColor: "#f59e0b",
    stat: "100+ Projects",
    title: "Roofing & Electrical",
    description:
      "Professional roofing repairs and electrical solutions for your home.",
    btnText: "View Projects",
    btnUrl: "#",
    externalUrl: "#",
  },
];

registerBlockType("logiweb/custom-block-21", {
  title: "Featured Projects Grid",
  icon: "grid-view",
  category: "widgets",
  attributes: {
    subtitle: { type: "string", default: "FEATURED PROJECTS" },
    titleStart: { type: "string", default: "Our Work" },
    titleHighlight: { type: "string", default: "Speaks" },
    titleEnd: { type: "string", default: "For Itself" },
    description: {
      type: "string",
      default:
        "Browse our portfolio of completed projects across all our service categories.",
    },
    ctaText: { type: "string", default: "View All Projects" },
    ctaUrl: { type: "string", default: "#" },
    projects: { type: "array", default: DEFAULT_PROJECTS },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      subtitle,
      titleStart,
      titleHighlight,
      titleEnd,
      description,
      ctaText,
      ctaUrl,
      projects,
    } = attributes;

    const updateProject = (index, field, value) => {
      const next = [...projects];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ projects: next });
    };

    const addProject = () =>
      setAttributes({
        projects: [
          ...projects,
          {
            imageUrl: "",
            imageAlt: "New Project",
            tag: "Service",
            tagIcon: "fa-solid fa-star",
            tagColor: "#3b82f6",
            stat: "0+ Projects",
            title: "New Project",
            description: "Project description.",
            btnText: "View Projects",
            btnUrl: "#",
            externalUrl: "#",
          },
        ],
      });

    const removeProject = (index) => {
      if (projects.length <= 1) return;
      setAttributes({ projects: projects.filter((_, i) => i !== index) });
    };

    return (
      <div className="fp-block-editor">
        <InspectorControls>
          <PanelBody title="Section Header" initialOpen={true}>
            <TextControl
              label="Subtitle"
              value={subtitle}
              onChange={(v) => setAttributes({ subtitle: v })}
            />
            <TextControl
              label="Title — Start"
              value={titleStart}
              onChange={(v) => setAttributes({ titleStart: v })}
            />
            <TextControl
              label="Title — Highlighted word"
              value={titleHighlight}
              onChange={(v) => setAttributes({ titleHighlight: v })}
            />
            <TextControl
              label="Title — End"
              value={titleEnd}
              onChange={(v) => setAttributes({ titleEnd: v })}
            />
            <TextControl
              label="Description (right column)"
              value={description}
              onChange={(v) => setAttributes({ description: v })}
            />
          </PanelBody>

          <PanelBody title="CTA Button" initialOpen={false}>
            <TextControl
              label="Button Text"
              value={ctaText}
              onChange={(v) => setAttributes({ ctaText: v })}
            />
            <TextControl
              label="Button URL"
              value={ctaUrl}
              onChange={(v) => setAttributes({ ctaUrl: v })}
            />
          </PanelBody>

          <PanelBody title={`Projects (${projects.length})`} initialOpen={true}>
            {projects.map((proj, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "1.25rem",
                  paddingBottom: "1.25rem",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <p style={{ fontWeight: 600, margin: "0 0 0.5rem" }}>
                  Project {i + 1}
                </p>
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) =>
                      updateProject(i, "imageUrl", media.url)
                    }
                    allowedTypes={["image"]}
                    value={proj.imageUrl}
                    render={({ open }) => (
                      <div style={{ marginBottom: "0.75rem" }}>
                        {proj.imageUrl ? (
                          <img
                            src={proj.imageUrl}
                            alt=""
                            style={{
                              width: "100%",
                              height: "80px",
                              objectFit: "cover",
                              borderRadius: "6px",
                              marginBottom: "0.4rem",
                            }}
                          />
                        ) : null}
                        <Button isSecondary isSmall onClick={open}>
                          {proj.imageUrl ? "Change Image" : "Set Image"}
                        </Button>
                      </div>
                    )}
                  />
                </MediaUploadCheck>
                <TextControl
                  label="Image Alt"
                  value={proj.imageAlt}
                  onChange={(v) => updateProject(i, "imageAlt", v)}
                />
                <TextControl
                  label="Tag Label"
                  value={proj.tag}
                  onChange={(v) => updateProject(i, "tag", v)}
                />
                <TextControl
                  label="Tag Icon (FA class)"
                  value={proj.tagIcon}
                  onChange={(v) => updateProject(i, "tagIcon", v)}
                />
                <TextControl
                  label="Tag Color (hex)"
                  value={proj.tagColor}
                  onChange={(v) => updateProject(i, "tagColor", v)}
                />
                <TextControl
                  label="Stat (e.g. 500+ Projects)"
                  value={proj.stat}
                  onChange={(v) => updateProject(i, "stat", v)}
                />
                <TextControl
                  label="Title"
                  value={proj.title}
                  onChange={(v) => updateProject(i, "title", v)}
                />
                <TextControl
                  label="Description"
                  value={proj.description}
                  onChange={(v) => updateProject(i, "description", v)}
                />
                <TextControl
                  label="Button Text"
                  value={proj.btnText}
                  onChange={(v) => updateProject(i, "btnText", v)}
                />
                <TextControl
                  label="Button URL"
                  value={proj.btnUrl}
                  onChange={(v) => updateProject(i, "btnUrl", v)}
                />
                <TextControl
                  label="External Link URL"
                  value={proj.externalUrl}
                  onChange={(v) => updateProject(i, "externalUrl", v)}
                />
                <Button
                  isDestructive
                  isSmall
                  onClick={() => removeProject(i)}
                  disabled={projects.length <= 1}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addProject}>
              + Add Project
            </Button>
          </PanelBody>
        </InspectorControls>

        {/* Editor preview */}
        <section className="fp-section">
          <div className="fp-inner">
            <div className="fp-header">
              <div className="fp-header-left">
                <p className="fp-subtitle">{subtitle}</p>
                <h2 className="fp-title">
                  {titleStart}{" "}
                  <span className="fp-title-highlight">{titleHighlight}</span>{" "}
                  {titleEnd}
                </h2>
              </div>
              <div className="fp-header-right">
                <p className="fp-description">{description}</p>
              </div>
            </div>

            <div className="fp-grid">
              {projects.map((proj, i) => (
                <div
                  key={i}
                  className="fp-card"
                  style={{
                    backgroundImage: proj.imageUrl
                      ? `url(${proj.imageUrl})`
                      : undefined,
                    backgroundColor: proj.imageUrl ? undefined : "#1a1a2e",
                  }}
                >
                  <div className="fp-card-overlay"></div>
                  <div className="fp-card-body">
                    <div className="fp-card-tags">
                      <span
                        className="fp-tag fp-tag-service"
                        style={{
                          background: proj.tagColor + "33",
                          color: proj.tagColor,
                        }}
                      >
                        <i className={proj.tagIcon}></i> {proj.tag}
                      </span>
                      <span className="fp-tag fp-tag-stat">{proj.stat}</span>
                    </div>
                    <h3 className="fp-card-title">{proj.title}</h3>
                    <p className="fp-card-description">{proj.description}</p>
                    <div className="fp-card-actions">
                      <a href={proj.btnUrl} className="fp-card-btn">
                        {proj.btnText}{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                      <a
                        href={proj.externalUrl}
                        className="fp-card-external"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {ctaText && (
              <div className="fp-cta">
                <a href={ctaUrl} className="fp-cta-btn">
                  {ctaText} <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const {
      subtitle,
      titleStart,
      titleHighlight,
      titleEnd,
      description,
      ctaText,
      ctaUrl,
      projects,
    } = attributes;

    return (
      <section className="fp-section fade-in-on-scroll">
        <div className="fp-inner">
          <div className="fp-header">
            <div className="fp-header-left">
              <p className="fp-subtitle">{subtitle}</p>
              <h2 className="fp-title">
                {titleStart}{" "}
                <span className="fp-title-highlight">{titleHighlight}</span>{" "}
                {titleEnd}
              </h2>
            </div>
            <div className="fp-header-right">
              <p className="fp-description">{description}</p>
            </div>
          </div>

          <div className="fp-grid">
            {projects.map((proj, i) => (
              <div
                key={i}
                className="fp-card"
                style={{
                  backgroundImage: proj.imageUrl
                    ? `url(${proj.imageUrl})`
                    : undefined,
                }}
              >
                <div className="fp-card-overlay"></div>
                <div className="fp-card-body">
                  <div className="fp-card-tags">
                    <span
                      className="fp-tag fp-tag-service"
                      style={{
                        background: proj.tagColor + "33",
                        color: proj.tagColor,
                      }}
                    >
                      <i className={proj.tagIcon}></i> {proj.tag}
                    </span>
                    <span className="fp-tag fp-tag-stat">{proj.stat}</span>
                  </div>
                  <h3 className="fp-card-title">{proj.title}</h3>
                  <p className="fp-card-description">{proj.description}</p>
                  <div className="fp-card-actions">
                    <a href={proj.btnUrl} className="fp-card-btn">
                      {proj.btnText} <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <a
                      href={proj.externalUrl}
                      className="fp-card-external"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {ctaText && (
            <div className="fp-cta">
              <a href={ctaUrl} className="fp-cta-btn">
                {ctaText} <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          )}
        </div>
      </section>
    );
  },
});
