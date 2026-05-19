import { registerBlockType } from "@wordpress/blocks";
import {
  useBlockProps,
  InspectorControls,
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,
} from "@wordpress/components";
import metadata from "./block.json";

const norm = (value = "") => String(value).trim();
const getProjectImageUrl = (project) =>
  project?.photoUrl || project?.imageUrl || "";

registerBlockType("logiweb/custom-block-46", {
  ...metadata,
  edit({ attributes, setAttributes }) {
    const { projects = [] } = attributes;
    const blockProps = useBlockProps({
      className: "portfolio-showcase-editor",
    });

    const categories = [
      "All",
      ...Array.from(
        new Set(projects.map((p) => norm(p.category)).filter(Boolean)),
      ),
    ];

    const updateProject = (index, key, value) => {
      const next = [...projects];
      next[index] = { ...next[index], [key]: value };
      setAttributes({ projects: next });
    };

    const addProject = () => {
      setAttributes({
        projects: [
          ...projects,
          {
            category: "Painting",
            title: "New Project",
            imageUrl: "",
            imageAlt: "New Project",
            description: "Project description",
            location: "City, State",
            size: "1,200 sq ft",
            duration: "10 days",
            completed: "April 1, 2026",
            rating: "4.9",
            featuresText: "Feature one\nFeature two\nFeature three",
            badge: "Featured Project",
            letter: "N",
            startDate: "March 20, 2026",
            teamSize: "4 specialists",
            testimonial: "Great project outcome.",
            testimonialAuthor: "Client Name",
            primaryCtaText: "Start Your Project",
            primaryCtaUrl: "#",
            secondaryCtaText: "Explore Financing",
            secondaryCtaUrl: "#",
          },
        ],
      });
    };

    const removeProject = (index) => {
      setAttributes({ projects: projects.filter((_, i) => i !== index) });
    };

    const updateProjectImage = (index, media) => {
      if (!media?.url) {
        return;
      }

      const next = [...projects];
      next[index] = {
        ...next[index],
        photoUrl: media.url,
        imageUrl: media.url,
        imageAlt:
          media.alt || media.title || next[index]?.title || "Project image",
      };
      setAttributes({ projects: next });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title={`Projects (${projects.length})`} initialOpen={true}>
            {projects.map((project, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "14px",
                  borderBottom: "1px solid #e5eaf4",
                  paddingBottom: "14px",
                }}
              >
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) => updateProjectImage(i, media)}
                    allowedTypes={["image"]}
                    render={({ open }) => (
                      <Button onClick={open} isSecondary>
                        {getProjectImageUrl(project)
                          ? "Change image"
                          : "Add image"}
                      </Button>
                    )}
                  />
                </MediaUploadCheck>
                {getProjectImageUrl(project) ? (
                  <div
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      border: "1px solid #e5eaf4",
                    }}
                  >
                    <img
                      src={getProjectImageUrl(project)}
                      alt={project.imageAlt || project.title || "Project image"}
                      style={{
                        width: "100%",
                        maxHeight: "150px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                ) : null}

                <TextControl
                  label={`Project ${i + 1} Category`}
                  value={project.category || ""}
                  onChange={(v) => updateProject(i, "category", v)}
                />
                <TextControl
                  label="Title"
                  value={project.title || ""}
                  onChange={(v) => updateProject(i, "title", v)}
                />
                <TextControl
                  label="Image alt"
                  value={project.imageAlt || ""}
                  onChange={(v) => updateProject(i, "imageAlt", v)}
                />
                <TextareaControl
                  label="Description"
                  value={project.description || ""}
                  onChange={(v) => updateProject(i, "description", v)}
                />
                <TextControl
                  label="Location"
                  value={project.location || ""}
                  onChange={(v) => updateProject(i, "location", v)}
                />
                <TextControl
                  label="Size"
                  value={project.size || ""}
                  onChange={(v) => updateProject(i, "size", v)}
                />
                <TextControl
                  label="Duration"
                  value={project.duration || ""}
                  onChange={(v) => updateProject(i, "duration", v)}
                />
                <TextControl
                  label="Completed"
                  value={project.completed || ""}
                  onChange={(v) => updateProject(i, "completed", v)}
                />
                <TextControl
                  label="Rating"
                  value={project.rating || ""}
                  onChange={(v) => updateProject(i, "rating", v)}
                />
                <TextareaControl
                  label="Features (one per line)"
                  value={project.featuresText || ""}
                  onChange={(v) => updateProject(i, "featuresText", v)}
                />
                <TextControl
                  label="Badge"
                  value={project.badge || ""}
                  onChange={(v) => updateProject(i, "badge", v)}
                />
                <TextControl
                  label="Placeholder Letter"
                  value={project.letter || ""}
                  onChange={(v) => updateProject(i, "letter", v)}
                />
                <TextControl
                  label="Start Date"
                  value={project.startDate || ""}
                  onChange={(v) => updateProject(i, "startDate", v)}
                />
                <TextControl
                  label="Team Size"
                  value={project.teamSize || ""}
                  onChange={(v) => updateProject(i, "teamSize", v)}
                />
                <TextareaControl
                  label="Testimonial"
                  value={project.testimonial || ""}
                  onChange={(v) => updateProject(i, "testimonial", v)}
                />
                <TextControl
                  label="Testimonial Author"
                  value={project.testimonialAuthor || ""}
                  onChange={(v) => updateProject(i, "testimonialAuthor", v)}
                />
                <TextControl
                  label="Primary CTA Text"
                  value={project.primaryCtaText || ""}
                  onChange={(v) => updateProject(i, "primaryCtaText", v)}
                />
                <TextControl
                  label="Primary CTA URL"
                  value={project.primaryCtaUrl || ""}
                  onChange={(v) => updateProject(i, "primaryCtaUrl", v)}
                />
                <TextControl
                  label="Secondary CTA Text"
                  value={project.secondaryCtaText || ""}
                  onChange={(v) => updateProject(i, "secondaryCtaText", v)}
                />
                <TextControl
                  label="Secondary CTA URL"
                  value={project.secondaryCtaUrl || ""}
                  onChange={(v) => updateProject(i, "secondaryCtaUrl", v)}
                />

                <Button isDestructive isSmall onClick={() => removeProject(i)}>
                  Remove Project
                </Button>
              </div>
            ))}

            <Button isPrimary isSmall onClick={addProject}>
              + Add Project
            </Button>
          </PanelBody>
        </InspectorControls>

        <section {...blockProps} data-portfolio-showcase="1">
          <div className="portfolio-showcase-filters">
            {categories.map((category, i) => (
              <button
                type="button"
                key={`${category}-${i}`}
                className={`portfolio-filter-btn ${i === 0 ? "is-active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="portfolio-showcase-grid">
            {projects.map((project, i) => {
              const features = String(project.featuresText || "")
                .split(/\r?\n/)
                .map((item) => item.trim())
                .filter(Boolean);

              return (
                <article className="portfolio-project-card" key={i}>
                  <div className="portfolio-project-media">
                    <span className="portfolio-project-chip">
                      {project.category || "Project"}
                    </span>
                    <span className="portfolio-project-score">
                      ★ {project.rating || "5.0"}
                    </span>
                    <div className="portfolio-project-placeholder">
                      {project.letter || "P"}
                    </div>
                    <span className="portfolio-project-badge">
                      {project.badge || "Featured Project"}
                    </span>
                  </div>

                  <div className="portfolio-project-content">
                    <p className="portfolio-project-category">
                      {project.category || "Category"}
                    </p>
                    <RichText
                      tagName="h3"
                      className="portfolio-project-title"
                      value={project.title}
                      onChange={(v) => updateProject(i, "title", v)}
                      placeholder="Project title"
                    />
                    <p className="portfolio-project-description">
                      {project.description || "Project description"}
                    </p>

                    <div className="portfolio-project-meta">
                      <span>Location: {project.location || "-"}</span>
                      <span>Size: {project.size || "-"}</span>
                      <span>Duration: {project.duration || "-"}</span>
                      <span>Completed: {project.completed || "-"}</span>
                    </div>

                    <div className="portfolio-project-tags">
                      {features.slice(0, 3).map((feature, idx) => (
                        <span key={idx}>{feature}</span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="portfolio-project-cta"
                      disabled
                    >
                      View Project Details
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </>
    );
  },

  save({ attributes }) {
    const { projects = [] } = attributes;

    const categories = [
      "All",
      ...Array.from(
        new Set(projects.map((p) => norm(p.category)).filter(Boolean)),
      ),
    ];

    return (
      <section className="portfolio-showcase-block" data-portfolio-showcase="1">
        <div
          className="portfolio-showcase-filters"
          role="tablist"
          aria-label="Project categories"
        >
          {categories.map((category, i) => (
            <button
              key={`${category}-${i}`}
              type="button"
              className={`portfolio-filter-btn ${i === 0 ? "is-active" : ""}`}
              data-filter={category.toLowerCase()}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-showcase-grid">
          {projects.map((project, i) => {
            const features = String(project.featuresText || "")
              .split(/\r?\n/)
              .map((item) => item.trim())
              .filter(Boolean);

            return (
              <article
                key={i}
                className="portfolio-project-card"
                data-category={(project.category || "all").toLowerCase()}
                data-project-title={project.title || "Project"}
                data-project-category={project.category || "Project"}
                data-project-description={project.description || ""}
                data-project-location={project.location || ""}
                data-project-size={project.size || ""}
                data-project-duration={project.duration || ""}
                data-project-completed={project.completed || ""}
                data-project-rating={project.rating || "5.0"}
                data-project-image={getProjectImageUrl(project)}
                data-project-image-alt={
                  project.imageAlt || project.title || "Project image"
                }
                data-project-start={project.startDate || ""}
                data-project-team={project.teamSize || ""}
                data-project-features={features.join("||")}
                data-project-letter={project.letter || "P"}
                data-project-testimonial={project.testimonial || ""}
                data-project-author={project.testimonialAuthor || ""}
                data-project-primary-text={project.primaryCtaText || ""}
                data-project-primary-url={project.primaryCtaUrl || "#"}
                data-project-secondary-text={project.secondaryCtaText || ""}
                data-project-secondary-url={project.secondaryCtaUrl || "#"}
                role="button"
                tabIndex="0"
                aria-label={`Open project ${project.title || "details"}`}
              >
                <div className="portfolio-project-media">
                  <span className="portfolio-project-chip">
                    {project.category || "Project"}
                  </span>
                  <span className="portfolio-project-score">
                    ★ {project.rating || "5.0"}
                  </span>
                  {getProjectImageUrl(project) ? (
                    <img
                      className="portfolio-project-image"
                      src={getProjectImageUrl(project)}
                      alt={project.imageAlt || project.title || "Project image"}
                    />
                  ) : (
                    <div className="portfolio-project-placeholder">
                      {project.letter || "P"}
                    </div>
                  )}
                  <span className="portfolio-project-badge">
                    {project.badge || "Featured Project"}
                  </span>
                </div>

                <div className="portfolio-project-content">
                  <p className="portfolio-project-category">
                    {project.category || "Category"}
                  </p>
                  <h3 className="portfolio-project-title">
                    {project.title || "Project title"}
                  </h3>
                  <p className="portfolio-project-description">
                    {project.description || ""}
                  </p>

                  <div className="portfolio-project-meta">
                    <span>{project.location || "-"}</span>
                    <span>{project.size || "-"}</span>
                    <span>{project.duration || "-"}</span>
                    <span>{project.completed || "-"}</span>
                  </div>

                  <div className="portfolio-project-tags">
                    {features.slice(0, 3).map((feature, idx) => (
                      <span key={idx}>{feature}</span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="portfolio-project-cta"
                    data-project-open
                  >
                    View Project Details
                    <i
                      className="fa-solid fa-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="portfolio-modal" data-portfolio-modal hidden>
          <div className="portfolio-modal-backdrop" data-portfolio-close></div>
          <div
            className="portfolio-modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Project details popup"
          >
            <button
              type="button"
              className="portfolio-modal-close"
              data-portfolio-close
              aria-label="Close popup"
            >
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>

            <div className="portfolio-modal-media">
              <img
                className="portfolio-modal-image"
                src=""
                alt=""
                data-modal-image
                hidden
              />
              <div className="portfolio-modal-placeholder" data-modal-letter>
                V
              </div>
              <p data-modal-title-media>Project title</p>
              <span className="portfolio-modal-chip" data-modal-category-chip>
                Category
              </span>
            </div>

            <div className="portfolio-modal-content">
              <p className="portfolio-modal-category" data-modal-category>
                Category
              </p>
              <h3 data-modal-title>Project title</h3>
              <p className="portfolio-modal-location" data-modal-location>
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                <span>Location</span>
              </p>
              <p className="portfolio-modal-rating" data-modal-rating>
                <i className="fa-solid fa-star" aria-hidden="true"></i>
                <span>5.0 Customer Rating</span>
              </p>

              <p className="portfolio-modal-about-title">About this project</p>
              <p className="portfolio-modal-description" data-modal-description>
                Project description
              </p>

              <div className="portfolio-modal-details-grid">
                <span>
                  <strong>Start Date</strong>
                  <em data-modal-start>Date</em>
                </span>
                <span>
                  <strong>Completed</strong>
                  <em data-modal-completed>Date</em>
                </span>
                <span>
                  <strong>Square Footage</strong>
                  <em data-modal-size>Size</em>
                </span>
                <span>
                  <strong>Duration</strong>
                  <em data-modal-duration>Duration</em>
                </span>
                <span>
                  <strong>Team Size</strong>
                  <em data-modal-team>Team</em>
                </span>
              </div>

              <div
                className="portfolio-modal-features"
                data-modal-features
              ></div>

              <div className="portfolio-modal-testimonial">
                <p data-modal-testimonial>Testimonial</p>
                <small data-modal-author>Author</small>
              </div>

              <div className="portfolio-modal-actions">
                <a
                  href="#"
                  className="portfolio-modal-btn is-primary"
                  data-modal-primary
                >
                  <span data-modal-primary-text>Start Your Project</span>
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </a>
                <a
                  href="#"
                  className="portfolio-modal-btn is-secondary"
                  data-modal-secondary
                >
                  <span data-modal-secondary-text>Explore Financing</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
});
