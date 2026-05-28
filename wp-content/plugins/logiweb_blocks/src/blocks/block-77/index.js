import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_STATS = [
  { value: "2,500+", label: "Families Served" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "800+", label: "Google Reviews" },
  { value: "15+", label: "Years of Trust" },
];

const DEFAULT_REVIEWS = [
  {
    initials: "MR",
    name: "Michael Richardson",
    location: "Louisville, KY",
    age: "1 month ago",
    tag: "Kitchen Remodel",
    rating: 5,
    quote:
      "The DNH Group transformed our entire home exterior. From the initial consultation to the final walkthrough, everything was professional. The crew was punctual, respectful, and the quality of work exceeded our expectations.",
    helpful: "18 people found this helpful",
  },
  {
    initials: "ST",
    name: "Sarah Thompson",
    location: "Lexington, KY",
    age: "2 weeks ago",
    tag: "Exterior Painting",
    rating: 5,
    quote:
      "From color planning to cleanup, the process was smooth. Communication was clear every day and the finish quality looks amazing from every angle.",
    helpful: "24 people found this helpful",
  },
  {
    initials: "JW",
    name: "James Walker",
    location: "New Albany, IN",
    age: "3 weeks ago",
    tag: "Roof Replacement",
    rating: 5,
    quote:
      "Fast response, honest estimate, and zero surprises. They handled materials and scheduling perfectly, and the team finished exactly on timeline.",
    helpful: "11 people found this helpful",
  },
];

const renderStars = (rating = 5) => {
  const safeRating = Math.max(1, Math.min(5, Number(rating) || 5));
  return "★".repeat(safeRating);
};

registerBlockType(metadata.name, {
  ...metadata,
  attributes: {
    eyebrow: { type: "string", default: "Customer Reviews" },
    titleStart: { type: "string", default: "What Our" },
    titleHighlight: { type: "string", default: "Clients Say" },
    googleLabel: { type: "string", default: "Google Reviews" },
    googleScore: { type: "string", default: "4.9" },
    googleMeta: { type: "string", default: "Based on 800+ reviews" },
    stats: { type: "array", default: DEFAULT_STATS },
    reviews: { type: "array", default: DEFAULT_REVIEWS },
  },

  edit({ attributes, setAttributes }) {
    const {
      eyebrow,
      titleStart,
      titleHighlight,
      googleLabel,
      googleScore,
      googleMeta,
      stats,
      reviews,
    } = attributes;

    const safeStats =
      Array.isArray(stats) && stats.length === 4 ? stats : DEFAULT_STATS;
    const safeReviews =
      Array.isArray(reviews) && reviews.length === 3
        ? reviews
        : DEFAULT_REVIEWS;

    const updateStat = (index, key, value) => {
      const next = safeStats.map((item, i) =>
        i === index ? { ...item, [key]: value } : item,
      );
      setAttributes({ stats: next });
    };

    const updateReview = (index, key, value) => {
      const next = safeReviews.map((item, i) =>
        i === index ? { ...item, [key]: value } : item,
      );
      setAttributes({ reviews: next });
    };

    const blockProps = useBlockProps({ className: "reviews-spotlight-block" });

    return (
      <>
        <InspectorControls>
          <PanelBody title="Header" initialOpen>
            <TextControl
              label="Eyebrow"
              value={eyebrow}
              onChange={(value) => setAttributes({ eyebrow: value })}
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
            <TextControl
              label="Google label"
              value={googleLabel}
              onChange={(value) => setAttributes({ googleLabel: value })}
            />
            <TextControl
              label="Google score"
              value={googleScore}
              onChange={(value) => setAttributes({ googleScore: value })}
            />
            <TextControl
              label="Google meta"
              value={googleMeta}
              onChange={(value) => setAttributes({ googleMeta: value })}
            />
          </PanelBody>

          {safeStats.map((stat, index) => (
            <PanelBody
              key={index}
              title={`Stat ${index + 1}`}
              initialOpen={false}
            >
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
            </PanelBody>
          ))}

          {safeReviews.map((review, index) => (
            <PanelBody
              key={index}
              title={`Review ${index + 1}`}
              initialOpen={false}
            >
              <TextControl
                label="Initials"
                value={review.initials || ""}
                onChange={(value) => updateReview(index, "initials", value)}
              />
              <TextControl
                label="Name"
                value={review.name || ""}
                onChange={(value) => updateReview(index, "name", value)}
              />
              <TextControl
                label="Location"
                value={review.location || ""}
                onChange={(value) => updateReview(index, "location", value)}
              />
              <TextControl
                label="Date"
                value={review.age || ""}
                onChange={(value) => updateReview(index, "age", value)}
              />
              <TextControl
                label="Tag"
                value={review.tag || ""}
                onChange={(value) => updateReview(index, "tag", value)}
              />
              <TextControl
                label="Helpful text"
                value={review.helpful || ""}
                onChange={(value) => updateReview(index, "helpful", value)}
              />
              <TextControl
                label="Rating (1-5)"
                type="number"
                min={1}
                max={5}
                value={review.rating ?? 5}
                onChange={(value) => updateReview(index, "rating", value)}
              />
              <RichText
                tagName="p"
                label="Quote"
                value={review.quote || ""}
                onChange={(value) => updateReview(index, "quote", value)}
                placeholder="Write review quote"
              />
            </PanelBody>
          ))}
        </InspectorControls>

        <section {...blockProps}>
          <div className="reviews-spotlight-inner">
            <header className="reviews-spotlight-header">
              <p className="reviews-spotlight-eyebrow">{eyebrow}</p>
              <h2 className="reviews-spotlight-title">
                {titleStart} <span>{titleHighlight}</span>
              </h2>
            </header>

            <div className="reviews-spotlight-stats">
              {safeStats.map((stat, index) => (
                <div key={index} className="reviews-spotlight-stat">
                  <p className="reviews-spotlight-stat-value">{stat.value}</p>
                  <p className="reviews-spotlight-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="reviews-spotlight-google-pill">
              <span className="reviews-spotlight-google-icon">G</span>
              <span className="reviews-spotlight-google-label">
                {googleLabel}
              </span>
              <span className="reviews-spotlight-google-score">
                {googleScore}
              </span>
              <span className="reviews-spotlight-google-stars">★★★★★</span>
              <span className="reviews-spotlight-google-meta">
                {googleMeta}
              </span>
            </div>

            <div className="reviews-spotlight-carousel" data-current-index="0">
              <button
                className="reviews-spotlight-arrow reviews-spotlight-arrow-prev"
                type="button"
                aria-label="Previous review"
              >
                <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
              </button>

              <div className="reviews-spotlight-track" aria-live="polite">
                {safeReviews.map((review, index) => (
                  <article
                    key={index}
                    className={`reviews-spotlight-slide ${index === 0 ? "is-active" : ""}`}
                    data-slide-index={index}
                  >
                    <div className="reviews-spotlight-author-row">
                      <span className="reviews-spotlight-avatar">
                        {review.initials}
                      </span>
                      <div className="reviews-spotlight-author-main">
                        <p className="reviews-spotlight-author-name">
                          {review.name}
                        </p>
                        <p className="reviews-spotlight-author-location">
                          @ {review.location}
                        </p>
                      </div>
                      <span className="reviews-spotlight-verified">
                        <i className="fa-solid fa-check" aria-hidden="true"></i>{" "}
                        Verified
                      </span>
                      <span className="reviews-spotlight-age">
                        {review.age}
                      </span>
                    </div>

                    <div className="reviews-spotlight-meta-row">
                      <span className="reviews-spotlight-rating">
                        {renderStars(review.rating)}
                      </span>
                      <span className="reviews-spotlight-tag">
                        {review.tag}
                      </span>
                    </div>

                    <p className="reviews-spotlight-quote">{review.quote}</p>

                    <p className="reviews-spotlight-helpful">
                      <i
                        className="fa-regular fa-thumbs-up"
                        aria-hidden="true"
                      ></i>
                      {review.helpful}
                    </p>
                  </article>
                ))}
              </div>

              <button
                className="reviews-spotlight-arrow reviews-spotlight-arrow-next"
                type="button"
                aria-label="Next review"
              >
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>

            <div
              className="reviews-spotlight-dots"
              role="tablist"
              aria-label="Review slides"
            >
              {safeReviews.map((_, index) => (
                <button
                  key={index}
                  className={`reviews-spotlight-dot ${index === 0 ? "is-active" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={index === 0 ? "true" : "false"}
                  aria-label={`Go to review ${index + 1}`}
                  data-go-to={index}
                ></button>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  },

  save({ attributes }) {
    const {
      eyebrow,
      titleStart,
      titleHighlight,
      googleLabel,
      googleScore,
      googleMeta,
      stats,
      reviews,
    } = attributes;

    const safeStats =
      Array.isArray(stats) && stats.length === 4 ? stats : DEFAULT_STATS;
    const safeReviews =
      Array.isArray(reviews) && reviews.length === 3
        ? reviews
        : DEFAULT_REVIEWS;

    const blockProps = useBlockProps.save({
      className: "reviews-spotlight-block fade-in-on-scroll",
    });

    return (
      <section {...blockProps}>
        <div className="reviews-spotlight-inner">
          <header className="reviews-spotlight-header">
            <p className="reviews-spotlight-eyebrow">{eyebrow}</p>
            <h2 className="reviews-spotlight-title">
              {titleStart} <span>{titleHighlight}</span>
            </h2>
          </header>

          <div className="reviews-spotlight-stats">
            {safeStats.map((stat, index) => (
              <div key={index} className="reviews-spotlight-stat">
                <p className="reviews-spotlight-stat-value">{stat.value}</p>
                <p className="reviews-spotlight-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="reviews-spotlight-google-pill">
            <span className="reviews-spotlight-google-icon">G</span>
            <span className="reviews-spotlight-google-label">
              {googleLabel}
            </span>
            <span className="reviews-spotlight-google-score">
              {googleScore}
            </span>
            <span className="reviews-spotlight-google-stars">★★★★★</span>
            <span className="reviews-spotlight-google-meta">{googleMeta}</span>
          </div>

          <div className="reviews-spotlight-carousel" data-current-index="0">
            <button
              className="reviews-spotlight-arrow reviews-spotlight-arrow-prev"
              type="button"
              aria-label="Previous review"
            >
              <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
            </button>

            <div className="reviews-spotlight-track" aria-live="polite">
              {safeReviews.map((review, index) => (
                <article
                  key={index}
                  className={`reviews-spotlight-slide ${index === 0 ? "is-active" : ""}`}
                  data-slide-index={index}
                >
                  <div className="reviews-spotlight-author-row">
                    <span className="reviews-spotlight-avatar">
                      {review.initials}
                    </span>
                    <div className="reviews-spotlight-author-main">
                      <p className="reviews-spotlight-author-name">
                        {review.name}
                      </p>
                      <p className="reviews-spotlight-author-location">
                        @ {review.location}
                      </p>
                    </div>
                    <span className="reviews-spotlight-verified">
                      <i className="fa-solid fa-check" aria-hidden="true"></i>{" "}
                      Verified
                    </span>
                    <span className="reviews-spotlight-age">{review.age}</span>
                  </div>

                  <div className="reviews-spotlight-meta-row">
                    <span className="reviews-spotlight-rating">
                      {renderStars(review.rating)}
                    </span>
                    <span className="reviews-spotlight-tag">{review.tag}</span>
                  </div>

                  <p className="reviews-spotlight-quote">{review.quote}</p>

                  <p className="reviews-spotlight-helpful">
                    <i
                      className="fa-regular fa-thumbs-up"
                      aria-hidden="true"
                    ></i>
                    {review.helpful}
                  </p>
                </article>
              ))}
            </div>

            <button
              className="reviews-spotlight-arrow reviews-spotlight-arrow-next"
              type="button"
              aria-label="Next review"
            >
              <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>

          <div
            className="reviews-spotlight-dots"
            role="tablist"
            aria-label="Review slides"
          >
            {safeReviews.map((_, index) => (
              <button
                key={index}
                className={`reviews-spotlight-dot ${index === 0 ? "is-active" : ""}`}
                type="button"
                role="tab"
                aria-selected={index === 0 ? "true" : "false"}
                aria-label={`Go to review ${index + 1}`}
                data-go-to={index}
              ></button>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
