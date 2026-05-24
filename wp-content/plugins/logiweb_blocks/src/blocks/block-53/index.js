import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,
  SelectControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_REVIEWS = [
  {
    initials: "MR",
    name: "Michael Richardson",
    location: "New York, NY",
    category: "Exterior Painting",
    categoryColor: "lavender",
    rating: "5",
    quote:
      '"The DNH Group transformed our entire home exterior. From the initial consultation to the final walkthrough, everything was professional. Highly recommend!"',
    timeAgo: "2 weeks ago",
    helpfulText: "24 helpful",
  },
  {
    initials: "ST",
    name: "Sarah Thompson",
    location: "Cincinnati, OH",
    category: "Kitchen Remodel",
    categoryColor: "mint",
    rating: "5",
    quote:
      '"We hired DNH Group for our kitchen renovation and they delivered beyond our wildest dreams. The project was completed on time and within budget."',
    timeAgo: "1 month ago",
    helpfulText: "18 helpful",
  },
  {
    initials: "DK",
    name: "David Kim",
    location: "Louisville, KY",
    category: "Interior Painting",
    categoryColor: "blue",
    rating: "5",
    quote:
      '"Outstanding work! The crew was punctual, clean, and the attention to detail was incredible. Our home looks brand new."',
    timeAgo: "3 weeks ago",
    helpfulText: "31 helpful",
  },
  {
    initials: "JW",
    name: "Jennifer Walsh",
    location: "Indianapolis, IN",
    category: "Roof Replacement",
    categoryColor: "amber",
    rating: "5",
    quote:
      '"DNH Group replaced our roof after storm damage. They worked directly with our insurance and made the process seamless. Great company!"',
    timeAgo: "2 months ago",
    helpfulText: "15 helpful",
  },
  {
    initials: "RC",
    name: "Robert Chen",
    location: "Columbus, OH",
    category: "Deck Restoration",
    categoryColor: "teal",
    rating: "5",
    quote:
      '"Our deck looks amazing! The pressure washing and staining work was top-notch. Already planning our next project with them."',
    timeAgo: "1 month ago",
    helpfulText: "12 helpful",
  },
  {
    initials: "AF",
    name: "Amanda Foster",
    location: "Dayton, OH",
    category: "Bathroom Remodel",
    categoryColor: "lime",
    rating: "5",
    quote:
      '"The bathroom renovation exceeded all expectations. Quality materials, expert installation, and beautiful finishes. Thank you DNH Group!"',
    timeAgo: "3 weeks ago",
    helpfulText: "20 helpful",
  },
];

const COLOR_OPTIONS = [
  { label: "Blue", value: "blue" },
  { label: "Lavender", value: "lavender" },
  { label: "Mint", value: "mint" },
  { label: "Amber", value: "amber" },
  { label: "Teal", value: "teal" },
  { label: "Lime", value: "lime" },
];

const getFilters = (reviews = []) => [
  "All Reviews",
  ...Array.from(
    new Set(reviews.map((review) => review.category).filter(Boolean)),
  ),
];

const renderStars = (rating = "5") =>
  Array.from({ length: Number(rating) || 5 }, (_, index) => (
    <span key={index} className="reviews-grid-star" aria-hidden="true">
      ★
    </span>
  ));

registerBlockType("logiweb/custom-block-53", {
  ...metadata,
  attributes: {
    reviews: {
      type: "array",
      default: DEFAULT_REVIEWS,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { reviews = [] } = attributes;
    const [activeFilter, setActiveFilter] = useState("All Reviews");
    const filters = getFilters(reviews);

    const updateReview = (index, key, value) => {
      const next = [...reviews];
      next[index] = { ...next[index], [key]: value };
      setAttributes({ reviews: next });
    };

    const addReview = () => {
      setAttributes({
        reviews: [
          ...reviews,
          {
            initials: "NR",
            name: "New Reviewer",
            location: "City, State",
            category: "Interior Painting",
            categoryColor: "blue",
            rating: "5",
            quote:
              '"Great work and smooth communication from start to finish."',
            timeAgo: "1 week ago",
            helpfulText: "10 helpful",
          },
        ],
      });
    };

    const removeReview = (index) => {
      if (reviews.length <= 1) {
        return;
      }
      setAttributes({ reviews: reviews.filter((_, i) => i !== index) });
    };

    const visibleReviews =
      activeFilter === "All Reviews"
        ? reviews
        : reviews.filter((review) => review.category === activeFilter);

    return (
      <section className="reviews-grid-block fade-in-on-scroll">
        <InspectorControls>
          <PanelBody title={`Reviews (${reviews.length})`} initialOpen={true}>
            {reviews.map((review, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "16px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid #e3e9f2",
                }}
              >
                <p style={{ margin: "0 0 8px", fontWeight: 600 }}>
                  Review {index + 1}
                </p>
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
                  label="Category"
                  value={review.category || ""}
                  onChange={(value) => updateReview(index, "category", value)}
                />
                <SelectControl
                  label="Category Pill Color"
                  value={review.categoryColor || "blue"}
                  options={COLOR_OPTIONS}
                  onChange={(value) =>
                    updateReview(index, "categoryColor", value)
                  }
                />
                <TextControl
                  label="Rating (1-5)"
                  value={review.rating || "5"}
                  onChange={(value) => updateReview(index, "rating", value)}
                />
                <TextareaControl
                  label="Quote"
                  value={review.quote || ""}
                  onChange={(value) => updateReview(index, "quote", value)}
                />
                <TextControl
                  label="Time Ago"
                  value={review.timeAgo || ""}
                  onChange={(value) => updateReview(index, "timeAgo", value)}
                />
                <TextControl
                  label="Helpful Text"
                  value={review.helpfulText || ""}
                  onChange={(value) =>
                    updateReview(index, "helpfulText", value)
                  }
                />
                <Button
                  isSecondary
                  isDestructive
                  isSmall
                  disabled={reviews.length <= 1}
                  onClick={() => removeReview(index)}
                >
                  Remove review
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addReview}>
              Add review
            </Button>
          </PanelBody>
        </InspectorControls>

        <div className="reviews-grid-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`reviews-grid-filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="reviews-grid-inner">
          {visibleReviews.map((review, index) => (
            <article key={index} className="reviews-grid-card">
              <div className="reviews-grid-card-head">
                <span className="reviews-grid-avatar">
                  {review.initials || "RV"}
                </span>
                <div className="reviews-grid-author">
                  <RichText
                    tagName="h3"
                    className="reviews-grid-name"
                    value={review.name}
                    onChange={(value) => updateReview(index, "name", value)}
                    placeholder="Reviewer name"
                  />
                  <RichText
                    tagName="p"
                    className="reviews-grid-location"
                    value={review.location}
                    onChange={(value) => updateReview(index, "location", value)}
                    placeholder="Location"
                  />
                </div>
              </div>

              <div className="reviews-grid-stars-row">
                <div className="reviews-grid-stars">
                  {renderStars(review.rating)}
                </div>
                <RichText
                  tagName="span"
                  className={`reviews-grid-pill is-${review.categoryColor || "blue"}`}
                  value={review.category}
                  onChange={(value) => updateReview(index, "category", value)}
                  placeholder="Service"
                />
              </div>

              <RichText
                tagName="p"
                className="reviews-grid-quote"
                value={review.quote}
                onChange={(value) => updateReview(index, "quote", value)}
                placeholder="Review quote"
              />

              <div className="reviews-grid-meta">
                <RichText
                  tagName="span"
                  className="reviews-grid-time"
                  value={review.timeAgo}
                  onChange={(value) => updateReview(index, "timeAgo", value)}
                  placeholder="2 weeks ago"
                />
                <RichText
                  tagName="span"
                  className="reviews-grid-helpful"
                  value={`👍 ${review.helpfulText || "0 helpful"}`}
                  onChange={(value) =>
                    updateReview(
                      index,
                      "helpfulText",
                      String(value || "").replace(/^👍\s*/, ""),
                    )
                  }
                  placeholder="24 helpful"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  },

  save: ({ attributes }) => {
    const { reviews = [] } = attributes;
    const filters = getFilters(reviews);

    return (
      <section
        className="reviews-grid-block fade-in-on-scroll"
        data-block="reviews-grid"
      >
        <div className="reviews-grid-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`reviews-grid-filter-btn ${
                filter === "All Reviews" ? "active" : ""
              }`}
              data-review-filter={filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="reviews-grid-inner">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="reviews-grid-card"
              data-review-category={review.category}
            >
              <div className="reviews-grid-card-head">
                <span className="reviews-grid-avatar">
                  {review.initials || "RV"}
                </span>
                <div className="reviews-grid-author">
                  <h3 className="reviews-grid-name">{review.name}</h3>
                  <p className="reviews-grid-location">{review.location}</p>
                </div>
              </div>

              <div className="reviews-grid-stars-row">
                <div className="reviews-grid-stars">
                  {renderStars(review.rating)}
                </div>
                <span
                  className={`reviews-grid-pill is-${review.categoryColor || "blue"}`}
                >
                  {review.category}
                </span>
              </div>

              <p className="reviews-grid-quote">{review.quote}</p>

              <div className="reviews-grid-meta">
                <span className="reviews-grid-time">{review.timeAgo}</span>
                <span className="reviews-grid-helpful">
                  👍 {review.helpfulText}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  },
});
