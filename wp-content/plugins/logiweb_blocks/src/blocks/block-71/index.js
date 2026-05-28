import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import { useRef } from "@wordpress/element";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,
} from "@wordpress/components";
import metadata from "./block.json";

const DEFAULT_PROJECTS = [
  {
    tag: "Full Exterior Painting - Hyde Park",
    title: "Cincinnati Colonial Revival",
    description:
      "Before & After transformation with premium Sherwin-Williams Duration paint system.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
  },
  {
    tag: "Complete Remodel - Custom Cabinetry",
    title: "Indian Hill Kitchen Renovation",
    description:
      "Open-concept kitchen with quartz countertops and brass hardware.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
  },
  {
    tag: "Whole Home Interior Painting",
    title: "Dublin Interior Refresh",
    description: "Modern greige palette throughout 4,200 sq ft home.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
  },
  {
    tag: "GAF Timberline HDZ - Hail Damage",
    title: "West Chester Roof Replacement",
    description: "Full tear-off and replacement with insurance coordination.",
    image:
      "https://images.unsplash.com/photo-1632759145351-1d5920be8f4a?w=1200&q=80",
  },
];

registerBlockType("logiweb/custom-block-71", {
  ...metadata,
  attributes: {
    badgeText: { type: "string", default: "Ohio Project Showcase" },
    title: { type: "string", default: "Recent Work Across Ohio" },
    projects: { type: "array", default: DEFAULT_PROJECTS },
  },

  edit({ attributes, setAttributes }) {
    const { badgeText, title, projects } = attributes;
    const safeProjects =
      Array.isArray(projects) && projects.length ? projects : DEFAULT_PROJECTS;
    const blockProps = useBlockProps({ className: "recent-work-slider-block" });
    const trackRef = useRef(null);

    const scrollTrackByDirection = (direction) => {
      const track = trackRef.current;
      if (!track) return;

      const amount = Math.max(300, Math.round(track.clientWidth * 0.78));
      const left = direction * amount;

      if (typeof track.scrollBy === "function") {
        track.scrollBy({ left, behavior: "smooth" });
        return;
      }

      track.scrollLeft += left;
    };

    const addProject = () => {
      setAttributes({
        projects: [
          ...safeProjects,
          {
            tag: "New Project Tag",
            title: "New Project Title",
            description: "Project description",
            image: "",
          },
        ],
      });
    };

    const removeProject = (index) => {
      if (safeProjects.length <= 1) return;
      setAttributes({ projects: safeProjects.filter((_, i) => i !== index) });
    };

    const updateProject = (index, key, value) => {
      const updated = safeProjects.map((p, i) =>
        i === index ? { ...p, [key]: value } : p,
      );
      setAttributes({ projects: updated });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Header" initialOpen={true}>
            <TextControl
              label="Badge"
              value={badgeText}
              onChange={(value) => setAttributes({ badgeText: value })}
            />
            <TextControl
              label="Title"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
            />
          </PanelBody>

          {safeProjects.map((project, i) => (
            <PanelBody key={i} title={`Project ${i + 1}`} initialOpen={false}>
              <TextControl
                label="Tag"
                value={project.tag || ""}
                onChange={(value) => updateProject(i, "tag", value)}
              />
              <TextControl
                label="Title"
                value={project.title || ""}
                onChange={(value) => updateProject(i, "title", value)}
              />
              <TextareaControl
                label="Description"
                value={project.description || ""}
                onChange={(value) => updateProject(i, "description", value)}
              />
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => updateProject(i, "image", media.url)}
                  allowedTypes={["image"]}
                  render={({ open }) => (
                    <div>
                      {project.image ? (
                        <img
                          src={project.image}
                          alt=""
                          style={{
                            width: "100%",
                            borderRadius: 8,
                            marginBottom: 8,
                          }}
                        />
                      ) : null}
                      <Button isSecondary onClick={open}>
                        {project.image ? "Change image" : "Select image"}
                      </Button>
                    </div>
                  )}
                />
              </MediaUploadCheck>
              <Button
                isDestructive
                style={{ marginTop: 10 }}
                disabled={safeProjects.length <= 1}
                onClick={() => removeProject(i)}
              >
                Remove project
              </Button>
            </PanelBody>
          ))}

          <PanelBody title="Add Project" initialOpen={false}>
            <Button isPrimary onClick={addProject}>
              + Add project
            </Button>
          </PanelBody>
        </InspectorControls>

        <section {...blockProps}>
          <div className="recent-work-slider-header">
            <div className="recent-work-slider-heading">
              <p className="recent-work-slider-badge">
                <i className="fa-regular fa-star" aria-hidden="true"></i>
                <span>{badgeText}</span>
              </p>
              <h2 className="recent-work-slider-title">{title}</h2>
            </div>

            <div className="recent-work-slider-controls" aria-label="Project slider controls">
              <button
                type="button"
                className="recent-work-slider-arrow"
                data-direction="left"
                aria-label="Previous projects"
                onClick={() => scrollTrackByDirection(-1)}
              >
                <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                className="recent-work-slider-arrow"
                data-direction="right"
                aria-label="Next projects"
                onClick={() => scrollTrackByDirection(1)}
              >
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          <div className="recent-work-slider-track" ref={trackRef}>
            {safeProjects.map((project, i) => (
              <article key={i} className="recent-work-slider-card">
                <div
                  className="recent-work-slider-image"
                  style={
                    project.image
                      ? { backgroundImage: `url(${project.image})` }
                      : {}
                  }
                ></div>
                <div className="recent-work-slider-content">
                  <p className="recent-work-slider-tag">{project.tag}</p>
                  <h3 className="recent-work-slider-card-title">
                    {project.title}
                  </h3>
                  <RichText
                    tagName="p"
                    className="recent-work-slider-description"
                    value={project.description}
                    onChange={(value) => updateProject(i, "description", value)}
                    placeholder="Project description"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      </>
    );
  },

  save() {
    return null;
  },
});
