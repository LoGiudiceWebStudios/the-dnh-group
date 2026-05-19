import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import { useMemo, useState } from "@wordpress/element";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_FILTERS = [
  { label: "All Positions", count: "12" },
  { label: "Operations", count: "4" },
  { label: "Sales & Customer Service", count: "3" },
  { label: "Skilled Trades", count: "3" },
  { label: "Administrative", count: "2" },
];

const DEFAULT_JOBS = [
  {
    status: "Actively Hiring",
    statusType: "active",
    postedAgo: "2 days ago",
    title: "Project Manager - Residential Remodeling",
    location: "Cincinnati, OH",
    jobType: "Full-time",
    salary: "$65,000 - $85,000/year",
    category: "Operations",
    summary:
      "Lead residential remodeling projects from start to finish, ensuring quality, timeline, and budget goals are met.",
    requirements:
      "3+ years project management experience, Construction or remodeling background preferred, Strong organizational and communication skills",
    benefits: "Health insurance, 401k match, Paid time off, Company vehicle",
    ctaText: "Apply Now",
    ctaUrl: "#",
  },
  {
    status: "Actively Hiring",
    statusType: "active",
    postedAgo: "1 week ago",
    title: "Senior Exterior Painter",
    location: "Louisville, KY",
    jobType: "Full-time",
    salary: "$22 - $28/hour",
    category: "Skilled Trades",
    summary:
      "Execute high-quality exterior painting projects safely and efficiently.",
    requirements:
      "2+ years painting experience, Knowledge of prep and finishing techniques, Valid driver's license",
    benefits: "Health insurance, Paid holidays, Career growth",
    ctaText: "Apply Now",
    ctaUrl: "#",
  },
  {
    status: "Actively Hiring",
    statusType: "active",
    postedAgo: "3 days ago",
    title: "Sales Consultant - Home Improvement",
    location: "Indianapolis, IN",
    jobType: "Full-time",
    salary: "$50,000 - $90,000/year + Commission",
    category: "Sales & Customer Service",
    summary:
      "Guide homeowners through project planning and close high-value opportunities.",
    requirements:
      "2+ years consultative sales, Great communication, CRM familiarity",
    benefits: "Commission plan, Health insurance, Training",
    ctaText: "Apply Now",
    ctaUrl: "#",
  },
  {
    status: "Reviewing Applications",
    statusType: "review",
    postedAgo: "2 weeks ago",
    title: "Roofing Crew Lead",
    location: "Columbus, OH",
    jobType: "Full-time",
    salary: "$28 - $35/hour",
    category: "Skilled Trades",
    summary:
      "Coordinate roofing teams and maintain strict quality and safety standards.",
    requirements: "Lead experience, Roofing system knowledge, OSHA mindset",
    benefits: "Paid time off, Safety bonus, Advancement path",
    ctaText: "Apply Now",
    ctaUrl: "#",
  },
  {
    status: "Actively Hiring",
    statusType: "active",
    postedAgo: "5 days ago",
    title: "Customer Service Representative",
    location: "Cincinnati, OH",
    jobType: "Full-time",
    salary: "$18 - $22/hour",
    category: "Sales & Customer Service",
    summary:
      "Support customers with scheduling, updates, and service excellence.",
    requirements:
      "Call center or customer support experience, Empathy and communication, Basic software skills",
    benefits: "Health insurance, PTO, Team culture",
    ctaText: "Apply Now",
    ctaUrl: "#",
  },
  {
    status: "Actively Hiring",
    statusType: "active",
    postedAgo: "1 week ago",
    title: "Interior Remodeling Specialist",
    location: "Lexington, KY",
    jobType: "Full-time",
    salary: "$25 - $32/hour",
    category: "Skilled Trades",
    summary:
      "Deliver interior renovation projects with precision and craftsmanship.",
    requirements: "Remodeling experience, Tool proficiency, Team collaboration",
    benefits: "Paid holidays, Growth opportunities, Benefits package",
    ctaText: "Apply Now",
    ctaUrl: "#",
  },
  {
    status: "Position Closed",
    statusType: "closed",
    postedAgo: "3 weeks ago",
    title: "Operations Coordinator",
    location: "Cincinnati, OH",
    jobType: "Full-time",
    salary: "$45,000 - $55,000/year",
    category: "Operations",
    summary:
      "Coordinate scheduling, materials, and logistics to ensure smooth project execution.",
    requirements:
      "2+ years operations or logistics experience, Strong organizational skills, Proficiency in project management software",
    benefits:
      "Health insurance, 401k match, Paid time off, Professional development",
    ctaText: "Position Closed",
    ctaUrl: "#",
  },
  {
    status: "Actively Hiring",
    statusType: "active",
    postedAgo: "4 days ago",
    title: "Marketing Specialist",
    location: "Remote / Cincinnati, OH",
    jobType: "Full-time",
    salary: "$50,000 - $65,000/year",
    category: "Administrative",
    summary: "Manage campaigns, content, and lead generation initiatives.",
    requirements:
      "2+ years marketing experience, Content and analytics skills, Cross-team collaboration",
    benefits: "Remote flexibility, Health plan, Learning budget",
    ctaText: "Apply Now",
    ctaUrl: "#",
  },
];

const DEFAULT_REVIEWS = [
  {
    text: '"DNH Group truly cares about their employees. I have been here 5 years and have grown from a painter to a project manager. The opportunities are real."',
    name: "Michael T.",
    years: "5 years",
    stars: "5",
  },
  {
    text: '"Best company I have ever worked for. Great pay, amazing benefits, and the team feels like family. Management actually listens to us."',
    name: "Sarah K.",
    years: "3 years",
    stars: "5",
  },
  {
    text: '"Year-round work, fair pay, and they treat us with respect. After 8 years here, I would not work anywhere else."',
    name: "James R.",
    years: "8 years",
    stars: "5",
  },
];

const toList = (value) =>
  String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

registerBlockType("logiweb/custom-block-31", {
  ...metadata,
  attributes: {
    subtitle: { type: "string", default: "OPEN POSITIONS" },
    titleStart: { type: "string", default: "Find Your" },
    titleHighlight: { type: "string", default: "Perfect Role" },
    hiringCountText: { type: "string", default: "9 positions actively hiring" },
    filters: { type: "array", default: DEFAULT_FILTERS },
    jobs: { type: "array", default: DEFAULT_JOBS },
    reviewsTitle: { type: "string", default: "Employee Reviews" },
    reviews: { type: "array", default: DEFAULT_REVIEWS },
    referralTitle: { type: "string", default: "Referral Bonus" },
    referralText: {
      type: "string",
      default:
        "Know someone perfect for our team? Refer them and earn up to $500 when they are hired!",
    },
    referralButtonText: { type: "string", default: "Refer Someone" },
    referralButtonUrl: { type: "string", default: "#" },
    questionsTitle: { type: "string", default: "Questions?" },
    questionsText: {
      type: "string",
      default:
        "Our HR team is here to help with any questions about careers at DNH Group.",
    },
    questionsEmail: { type: "string", default: "careers@dnhgroup.com" },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      subtitle,
      titleStart,
      titleHighlight,
      hiringCountText,
      filters,
      jobs,
      reviewsTitle,
      reviews,
      referralTitle,
      referralText,
      referralButtonText,
      referralButtonUrl,
      questionsTitle,
      questionsText,
      questionsEmail,
    } = attributes;

    const [activeFilter, setActiveFilter] = useState(
      filters[0]?.label || "All Positions",
    );
    const [openIndex, setOpenIndex] = useState(0);

    const updateFilter = (index, field, value) => {
      const next = [...filters];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ filters: next });
    };

    const updateJob = (index, field, value) => {
      const next = [...jobs];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ jobs: next });
    };

    const visibleJobs = useMemo(() => {
      const normalized = String(activeFilter || "")
        .trim()
        .toLowerCase();
      if (!normalized || normalized === "all positions") {
        return jobs;
      }
      return jobs.filter(
        (job) =>
          String(job.category || "")
            .trim()
            .toLowerCase() === normalized,
      );
    }, [activeFilter, jobs]);

    return (
      <div className="openings-board-editor">
        <InspectorControls>
          <PanelBody title="Header" initialOpen={true}>
            <TextControl
              label="Subtitle"
              value={subtitle}
              onChange={(v) => setAttributes({ subtitle: v })}
            />
            <TextControl
              label="Title Start"
              value={titleStart}
              onChange={(v) => setAttributes({ titleStart: v })}
            />
            <TextControl
              label="Title Highlight"
              value={titleHighlight}
              onChange={(v) => setAttributes({ titleHighlight: v })}
            />
            <TextControl
              label="Hiring Count Text"
              value={hiringCountText}
              onChange={(v) => setAttributes({ hiringCountText: v })}
            />
          </PanelBody>

          <PanelBody title={`Filters (${filters.length})`} initialOpen={false}>
            {filters.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "0.8rem",
                  borderBottom: "1px solid #e0e0e0",
                  paddingBottom: "0.8rem",
                }}
              >
                <TextControl
                  label="Label"
                  value={item.label}
                  onChange={(v) => updateFilter(index, "label", v)}
                />
                <TextControl
                  label="Count"
                  value={item.count}
                  onChange={(v) => updateFilter(index, "count", v)}
                />
              </div>
            ))}
          </PanelBody>

          <PanelBody title={`Jobs (${jobs.length})`} initialOpen={false}>
            {jobs.map((job, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "0.95rem",
                  borderBottom: "1px solid #e0e0e0",
                  paddingBottom: "0.95rem",
                }}
              >
                <TextControl
                  label="Title"
                  value={job.title}
                  onChange={(v) => updateJob(index, "title", v)}
                />
                <TextControl
                  label="Category"
                  value={job.category}
                  onChange={(v) => updateJob(index, "category", v)}
                />
                <TextControl
                  label="Status"
                  value={job.status}
                  onChange={(v) => updateJob(index, "status", v)}
                />
                <TextControl
                  label="Status Type (active/review/closed)"
                  value={job.statusType}
                  onChange={(v) => updateJob(index, "statusType", v)}
                />
                <TextControl
                  label="Posted Ago"
                  value={job.postedAgo}
                  onChange={(v) => updateJob(index, "postedAgo", v)}
                />
                <TextControl
                  label="Location"
                  value={job.location}
                  onChange={(v) => updateJob(index, "location", v)}
                />
                <TextControl
                  label="Job Type"
                  value={job.jobType}
                  onChange={(v) => updateJob(index, "jobType", v)}
                />
                <TextControl
                  label="Salary"
                  value={job.salary}
                  onChange={(v) => updateJob(index, "salary", v)}
                />
                <TextControl
                  label="Summary"
                  value={job.summary}
                  onChange={(v) => updateJob(index, "summary", v)}
                />
                <TextControl
                  label="Requirements (comma separated)"
                  value={job.requirements}
                  onChange={(v) => updateJob(index, "requirements", v)}
                />
                <TextControl
                  label="Benefits (comma separated)"
                  value={job.benefits}
                  onChange={(v) => updateJob(index, "benefits", v)}
                />
                <TextControl
                  label="Button Text"
                  value={job.ctaText}
                  onChange={(v) => updateJob(index, "ctaText", v)}
                />
              </div>
            ))}
          </PanelBody>
        </InspectorControls>

        <section className="openings-board-block">
          <div className="openings-board-inner">
            <div className="openings-board-header">
              <div>
                <p className="openings-board-subtitle">{subtitle}</p>
                <h2 className="openings-board-title">
                  <RichText
                    tagName="span"
                    value={titleStart}
                    onChange={(v) => setAttributes({ titleStart: v })}
                  />{" "}
                  <span className="openings-board-title-highlight">
                    <RichText
                      tagName="span"
                      value={titleHighlight}
                      onChange={(v) => setAttributes({ titleHighlight: v })}
                    />
                  </span>
                </h2>
              </div>
              <p className="openings-board-count">
                <span></span>
                {hiringCountText}
              </p>
            </div>

            <div className="openings-board-filters">
              {filters.map((f, i) => (
                <button
                  key={i}
                  type="button"
                  className={`openings-filter-pill ${String(activeFilter).toLowerCase() === String(f.label).toLowerCase() ? "is-active" : ""}`}
                  onClick={() => setActiveFilter(f.label)}
                >
                  {f.label}
                  <span>{f.count}</span>
                </button>
              ))}
            </div>

            <div className="openings-board-grid">
              <div className="openings-board-list">
                {visibleJobs.map((job, index) => {
                  const isOpen = index === openIndex;
                  return (
                    <article
                      key={index}
                      className={`opening-card ${isOpen ? "is-open" : ""}`}
                    >
                      <button
                        type="button"
                        className="opening-card-head"
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      >
                        <p
                          className={`opening-card-status is-${job.statusType || "active"}`}
                        >
                          {job.status}
                          <span>• {job.postedAgo}</span>
                        </p>
                        <h3 className="opening-card-title">{job.title}</h3>
                        <p className="opening-card-meta">
                          <i className="fa-solid fa-location-dot"></i>
                          {job.location}
                          <i className="fa-regular fa-briefcase"></i>
                          {job.jobType}
                          <i className="fa-solid fa-dollar-sign"></i>
                          {job.salary}
                        </p>
                      </button>
                      {isOpen ? (
                        <div className="opening-card-details">
                          <p className="opening-card-summary">{job.summary}</p>
                          <div className="opening-card-columns">
                            <div>
                              <h4>Requirements</h4>
                              <ul>
                                {toList(job.requirements).map((r, i) => (
                                  <li key={i}>{r}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4>Benefits</h4>
                              <ul>
                                {toList(job.benefits).map((b, i) => (
                                  <li key={i}>{b}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="opening-card-actions">
                            <a
                              href={job.ctaUrl || "#"}
                              className="opening-apply-btn"
                            >
                              {job.ctaText || "Apply Now"}
                            </a>
                            <button type="button" className="opening-share-btn">
                              Share
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>

              <aside className="openings-board-sidebar">
                <div className="openings-reviews-card">
                  <h3>
                    <i className="fa-regular fa-star"></i>
                    {reviewsTitle}
                  </h3>
                  {reviews.map((r, i) => (
                    <div key={i} className="openings-review-item">
                      <p className="stars">★★★★★</p>
                      <p className="text">{r.text}</p>
                      <p className="meta">
                        <span>{r.name}</span>
                        <strong>{r.years}</strong>
                      </p>
                    </div>
                  ))}
                </div>

                <div className="openings-referral-card">
                  <h4>{referralTitle}</h4>
                  <p>{referralText}</p>
                  <a href={referralButtonUrl || "#"}>{referralButtonText}</a>
                </div>

                <div className="openings-questions-card">
                  <h4>{questionsTitle}</h4>
                  <p>{questionsText}</p>
                  <a href={`mailto:${questionsEmail}`}>
                    <i className="fa-regular fa-envelope"></i>
                    {questionsEmail}
                  </a>
                </div>
              </aside>
            </div>
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
      hiringCountText,
      filters,
      jobs,
      reviewsTitle,
      reviews,
      referralTitle,
      referralText,
      referralButtonText,
      referralButtonUrl,
      questionsTitle,
      questionsText,
      questionsEmail,
    } = attributes;

    return (
      <section
        className="openings-board-block fade-in-on-scroll"
        data-career-openings
      >
        <div className="openings-board-inner">
          <div className="openings-board-header">
            <div>
              <p className="openings-board-subtitle">{subtitle}</p>
              <h2 className="openings-board-title">
                {titleStart}{" "}
                <span className="openings-board-title-highlight">
                  {titleHighlight}
                </span>
              </h2>
            </div>
            <p className="openings-board-count">
              <span></span>
              {hiringCountText}
            </p>
          </div>

          <div className="openings-board-filters">
            {filters.map((f, i) => (
              <button
                key={i}
                type="button"
                className={`openings-filter-pill ${i === 0 ? "is-active" : ""}`}
                data-career-filter={f.label}
              >
                {f.label}
                <span>{f.count}</span>
              </button>
            ))}
          </div>

          <div className="openings-board-grid">
            <div className="openings-board-list">
              {jobs.map((job, index) => (
                <article
                  key={index}
                  className={`opening-card ${index === 0 ? "is-open" : ""}`}
                  data-career-job
                  data-career-category={job.category || ""}
                >
                  <button
                    type="button"
                    className="opening-card-head"
                    data-career-toggle
                    aria-expanded={index === 0 ? "true" : "false"}
                  >
                    <p
                      className={`opening-card-status is-${job.statusType || "active"}`}
                    >
                      {job.status}
                      <span>• {job.postedAgo}</span>
                    </p>
                    <h3 className="opening-card-title">{job.title}</h3>
                    <p className="opening-card-meta">
                      <i className="fa-solid fa-location-dot"></i>
                      {job.location}
                      <i className="fa-regular fa-briefcase"></i>
                      {job.jobType}
                      <i className="fa-solid fa-dollar-sign"></i>
                      {job.salary}
                    </p>
                  </button>
                  <div className="opening-card-details" data-career-detail>
                    <p className="opening-card-summary">{job.summary}</p>
                    <div className="opening-card-columns">
                      <div>
                        <h4>Requirements</h4>
                        <ul>
                          {toList(job.requirements).map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>Benefits</h4>
                        <ul>
                          {toList(job.benefits).map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="opening-card-actions">
                      <a href={job.ctaUrl || "#"} className="opening-apply-btn">
                        {job.ctaText || "Apply Now"}
                      </a>
                      <button type="button" className="opening-share-btn">
                        Share
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="openings-board-sidebar">
              <div className="openings-reviews-card">
                <h3>
                  <i className="fa-regular fa-star"></i>
                  {reviewsTitle}
                </h3>
                {reviews.map((r, i) => (
                  <div key={i} className="openings-review-item">
                    <p className="stars">★★★★★</p>
                    <p className="text">{r.text}</p>
                    <p className="meta">
                      <span>{r.name}</span>
                      <strong>{r.years}</strong>
                    </p>
                  </div>
                ))}
              </div>

              <div className="openings-referral-card">
                <h4>{referralTitle}</h4>
                <p>{referralText}</p>
                <a href={referralButtonUrl || "#"}>{referralButtonText}</a>
              </div>

              <div className="openings-questions-card">
                <h4>{questionsTitle}</h4>
                <p>{questionsText}</p>
                <a href={`mailto:${questionsEmail}`}>
                  <i className="fa-regular fa-envelope"></i>
                  {questionsEmail}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    );
  },
});
