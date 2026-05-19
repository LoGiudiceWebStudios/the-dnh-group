import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  RichText,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  Button,
  ColorPalette,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_IMAGE =
  typeof logiweb_blocks !== "undefined" && logiweb_blocks.placeholder_image
    ? logiweb_blocks.placeholder_image
    : "https://via.placeholder.com/500x400?text=Project+Image";

const DEFAULT_PROJECTS = [
  {
    imageUrl: DEFAULT_IMAGE,
    category: "Remodeling",
    categoryColor: "#10b981",
    title: "Modern Kitchen Refresh",
    location: "Cincinnati, OH",
    year: "2025",
    linkUrl: "#",
  },
  {
    imageUrl: DEFAULT_IMAGE,
    category: "Exterior Painting",
    categoryColor: "#3b82f6",
    title: "Colonial Exterior Transformation",
    location: "Louisville, KY",
    year: "2025",
    linkUrl: "#",
  },
  {
    imageUrl: DEFAULT_IMAGE,
    category: "Remodeling",
    categoryColor: "#10b981",
    title: "Luxury Bathroom Remodel",
    location: "Indianapolis, IN",
    year: "2024",
    linkUrl: "#",
  },
  {
    imageUrl: DEFAULT_IMAGE,
    category: "Roofing",
    categoryColor: "#f59e0b",
    title: "Full Roof Replacement",
    location: "Cincinnati, OH",
    year: "2024",
    linkUrl: "#",
  },
  {
    imageUrl: DEFAULT_IMAGE,
    category: "Cleaning",
    categoryColor: "#8b5cf6",
    title: "Deck Restoration",
    location: "Louisville, KY",
    year: "2025",
    linkUrl: "#",
  },
  {
    imageUrl: DEFAULT_IMAGE,
    category: "Interior Painting",
    categoryColor: "#ec4899",
    title: "Whole Home Makeover",
    location: "Indianapolis, IN",
    year: "2025",
    linkUrl: "#",
  },
];

const FILTER_OPTIONS = [
  "All Projects",
  "Interior Painting",
  "Exterior Painting",
  "Remodeling",
  "Roofing",
  "Cleaning",
];

registerBlockType("logiweb/custom-block-50", {
  ...metadata,
  attributes: {
    projects: {
      type: "array",
      default: DEFAULT_PROJECTS,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { projects = [] } = attributes;
    const [activeFilter, setActiveFilter] = useState("All Projects");

    const updateProject = (index, key, value) => {
      const next = [...projects];
      next[index] = { ...next[index], [key]: value };
      setAttributes({ projects: next });
    };

    const filteredProjects =
      activeFilter === "All Projects"
        ? projects
        : projects.filter((p) => p.category === activeFilter);

    return (
      <section className="portfolio-grid-block fade-in-on-scroll">
        <InspectorControls>
          <PanelBody
            title={`Portfolio Projects (${projects.length})`}
            initialOpen={true}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "16px",
                  borderBottom: "1px solid #e4e9f3",
                  paddingBottom: "14px",
                }}
              >
                <p style={{ margin: "0 0 8px", fontWeight: 600 }}>
                  Project {index + 1}
                </p>

                <MediaUpload
                  onSelect={(media) =>
                    updateProject(index, "imageUrl", media.url)
                  }
                  allowedTypes={["image"]}
                  value={project.imageUrl}
                  render={({ open }) => (
                    <Button isSecondary onClick={open}>
                      {project.imageUrl ? "Change Image" : "Select Image"}
                    </Button>
                  )}
                />

                <TextControl
                  label="Category"
                  value={project.category || ""}
                  onChange={(value) => updateProject(index, "category", value)}
                  placeholder="e.g., Remodeling"
                />

                <div style={{ marginTop: "8px" }}>
                  <label style={{ display: "block", marginBottom: "8px" }}>
                    Category Color
                  </label>
                  <ColorPalette
                    colors={[
                      { name: "Green", color: "#10b981" },
                      { name: "Blue", color: "#3b82f6" },
                      { name: "Amber", color: "#f59e0b" },
                      { name: "Purple", color: "#8b5cf6" },
                      { name: "Pink", color: "#ec4899" },
                    ]}
                    value={project.categoryColor}
                    onChange={(value) =>
                      updateProject(index, "categoryColor", value)
                    }
                  />
                </div>

                <TextControl
                  label="Title"
                  value={project.title || ""}
                  onChange={(value) => updateProject(index, "title", value)}
                  placeholder="Project title"
                />

                <TextControl
                  label="Location"
                  value={project.location || ""}
                  onChange={(value) => updateProject(index, "location", value)}
                  placeholder="e.g., Cincinnati, OH"
                />

                <TextControl
                  label="Year"
                  value={project.year || ""}
                  onChange={(value) => updateProject(index, "year", value)}
                  placeholder="e.g., 2025"
                />

                <TextControl
                  label="Project Link"
                  value={project.linkUrl || ""}
                  onChange={(value) => updateProject(index, "linkUrl", value)}
                  placeholder="https://example.com/project"
                />
              </div>
            ))}
          </PanelBody>
        </InspectorControls>

        <div className="portfolio-grid-toolbar">
          <div className="portfolio-grid-filters">
            {FILTER_OPTIONS.map((filter) => (
              <button
                key={filter}
                className={`portfolio-filter-btn ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="portfolio-grid-search">
            <input type="search" placeholder="Search projects..." readOnly />
          </div>
        </div>

        <div className="portfolio-grid-inner">
          {filteredProjects.map((project, index) => (
            <article key={index} className="portfolio-card">
              <div className="portfolio-card-media">
                <MediaUpload
                  onSelect={(media) =>
                    updateProject(index, "imageUrl", media.url)
                  }
                  allowedTypes={["image"]}
                  value={project.imageUrl}
                  render={({ open }) => (
                    <Button
                      isSecondary
                      isSmall
                      className="portfolio-card-image-button"
                      onClick={open}
                    >
                      {project.imageUrl ? "Change image" : "Add image"}
                    </Button>
                  )}
                />
                <img
                  className="portfolio-card-image"
                  src={project.imageUrl || DEFAULT_IMAGE}
                  alt={project.title || "Project"}
                />
                <RichText
                  tagName="span"
                  className="portfolio-card-badge"
                  style={{
                    backgroundColor: project.categoryColor || "#3b82f6",
                  }}
                  value={project.category}
                  onChange={(value) => updateProject(index, "category", value)}
                  placeholder="Category"
                />
              </div>

              <div className="portfolio-card-content">
                <RichText
                  tagName="h3"
                  className="portfolio-card-title"
                  value={project.title}
                  onChange={(value) => updateProject(index, "title", value)}
                  placeholder="Project title"
                />
                <div className="portfolio-card-footer">
                  <RichText
                    tagName="span"
                    className="portfolio-card-location"
                    value={project.location}
                    onChange={(value) =>
                      updateProject(index, "location", value)
                    }
                    placeholder="Location"
                  />
                  <RichText
                    tagName="span"
                    className="portfolio-card-year"
                    value={project.year}
                    onChange={(value) => updateProject(index, "year", value)}
                    placeholder="Year"
                  />
                </div>
                {project.linkUrl ? (
                  <p className="portfolio-card-link-indicator">Card link set</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  },

  save: ({ attributes }) => {
    const { projects = [] } = attributes;

    return (
      <section
        className="portfolio-grid-block fade-in-on-scroll"
        data-projects={JSON.stringify(projects)}
      >
        <div className="portfolio-grid-toolbar">
          <div className="portfolio-grid-filters">
            {FILTER_OPTIONS.map((filter) => (
              <button
                key={filter}
                className={`portfolio-filter-btn ${
                  filter === "All Projects" ? "active" : ""
                }`}
                data-filter={filter}
              >
                {filter}
              </button>
            ))}
          </div>

          <label className="portfolio-grid-search">
            <input
              type="search"
              placeholder="Search projects..."
              data-portfolio-search
            />
          </label>
        </div>

        <div className="portfolio-grid-inner">
          {projects.map((project, index) => (
            <a
              key={index}
              className="portfolio-card-link"
              href={project.linkUrl || "#"}
            >
              <article
                className="portfolio-card"
                data-category={project.category}
                data-title={project.title}
                data-location={project.location}
                data-year={project.year}
              >
                <div className="portfolio-card-media">
                  <img
                    className="portfolio-card-image"
                    src={project.imageUrl || DEFAULT_IMAGE}
                    alt={project.title || "Project"}
                  />
                  <span
                    className="portfolio-card-badge"
                    style={{
                      backgroundColor: project.categoryColor || "#3b82f6",
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="portfolio-card-content">
                  <h3 className="portfolio-card-title">{project.title}</h3>
                  <div className="portfolio-card-footer">
                    <span className="portfolio-card-location">
                      {project.location}
                    </span>
                    <span className="portfolio-card-year">{project.year}</span>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>
    );
  },
});
