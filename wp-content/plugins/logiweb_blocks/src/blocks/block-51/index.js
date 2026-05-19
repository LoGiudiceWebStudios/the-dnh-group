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
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_IMAGE =
  typeof logiweb_blocks !== "undefined" && logiweb_blocks.placeholder_image
    ? logiweb_blocks.placeholder_image
    : "https://via.placeholder.com/500x400?text=Project+Image";

registerBlockType("logiweb/custom-block-51", {
  ...metadata,
  attributes: {
    cards: {
      type: "array",
      default: [],
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { cards = [] } = attributes;

    const updateCard = (index, key, value) => {
      const next = [...cards];
      next[index] = { ...next[index], [key]: value };
      setAttributes({ cards: next });
    };

    const addCard = () => {
      setAttributes({
        cards: [
          ...cards,
          {
            imageUrl: DEFAULT_IMAGE,
            category: "Project Category",
            categoryColor: "#3b82f6",
            title: "Project Title",
            location: "Location, State",
            year: "2025",
          },
        ],
      });
    };

    const removeCard = (index) => {
      setAttributes({ cards: cards.filter((_, i) => i !== index) });
    };

    return (
      <section className="portfolio-cards-block fade-in-on-scroll">
        <InspectorControls>
          <PanelBody
            title={`Portfolio Cards (${cards.length})`}
            initialOpen={true}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "16px",
                  borderBottom: "1px solid #e4e9f3",
                  paddingBottom: "14px",
                }}
              >
                <p style={{ margin: "0 0 8px", fontWeight: 600 }}>
                  Card {index + 1}
                </p>

                <MediaUpload
                  onSelect={(media) => updateCard(index, "imageUrl", media.url)}
                  allowedTypes={["image"]}
                  value={card.imageUrl}
                  render={({ open }) => (
                    <Button isSecondary onClick={open}>
                      {card.imageUrl ? "Change Image" : "Select Image"}
                    </Button>
                  )}
                />

                <TextControl
                  label="Category"
                  value={card.category || ""}
                  onChange={(value) => updateCard(index, "category", value)}
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
                    value={card.categoryColor}
                    onChange={(value) =>
                      updateCard(index, "categoryColor", value)
                    }
                  />
                </div>

                <TextControl
                  label="Title"
                  value={card.title || ""}
                  onChange={(value) => updateCard(index, "title", value)}
                  placeholder="Project title"
                />

                <TextControl
                  label="Location"
                  value={card.location || ""}
                  onChange={(value) => updateCard(index, "location", value)}
                  placeholder="e.g., Cincinnati, OH"
                />

                <TextControl
                  label="Year"
                  value={card.year || ""}
                  onChange={(value) => updateCard(index, "year", value)}
                  placeholder="e.g., 2025"
                />

                <Button isSmall isDestructive onClick={() => removeCard(index)}>
                  Remove card
                </Button>
              </div>
            ))}

            <Button isPrimary isSmall onClick={addCard}>
              + Add card
            </Button>
          </PanelBody>
        </InspectorControls>

        <div className="portfolio-cards-inner">
          {cards.map((card, index) => (
            <article key={index} className="portfolio-card">
              <div className="portfolio-card-media">
                <MediaUpload
                  onSelect={(media) => updateCard(index, "imageUrl", media.url)}
                  allowedTypes={["image"]}
                  value={card.imageUrl}
                  render={({ open }) => (
                    <Button
                      isSecondary
                      isSmall
                      className="portfolio-card-image-button"
                      onClick={open}
                    >
                      {card.imageUrl ? "Change image" : "Add image"}
                    </Button>
                  )}
                />
                <img
                  className="portfolio-card-image"
                  src={card.imageUrl || DEFAULT_IMAGE}
                  alt={card.title || "Project"}
                />
                <RichText
                  tagName="span"
                  className="portfolio-card-badge"
                  style={{ backgroundColor: card.categoryColor || "#3b82f6" }}
                  value={card.category}
                  onChange={(value) => updateCard(index, "category", value)}
                  placeholder="Category"
                />
              </div>

              <div className="portfolio-card-content">
                <RichText
                  tagName="h3"
                  className="portfolio-card-title"
                  value={card.title}
                  onChange={(value) => updateCard(index, "title", value)}
                  placeholder="Project title"
                />
                <div className="portfolio-card-footer">
                  <RichText
                    tagName="span"
                    className="portfolio-card-location"
                    value={card.location}
                    onChange={(value) => updateCard(index, "location", value)}
                    placeholder="Location"
                  />
                  <RichText
                    tagName="span"
                    className="portfolio-card-year"
                    value={card.year}
                    onChange={(value) => updateCard(index, "year", value)}
                    placeholder="Year"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  },

  save: ({ attributes }) => {
    const { cards = [] } = attributes;

    return (
      <section className="portfolio-cards-block fade-in-on-scroll">
        <div className="portfolio-cards-inner">
          {cards.map((card, index) => (
            <article
              key={index}
              className="portfolio-card"
              data-title={card.title}
              data-location={card.location}
              data-year={card.year}
            >
              <div className="portfolio-card-media">
                <img
                  className="portfolio-card-image"
                  src={card.imageUrl || DEFAULT_IMAGE}
                  alt={card.title || "Project"}
                />
                <span
                  className="portfolio-card-badge"
                  style={{ backgroundColor: card.categoryColor || "#3b82f6" }}
                >
                  {card.category}
                </span>
              </div>

              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">{card.title}</h3>
                <div className="portfolio-card-footer">
                  <span className="portfolio-card-location">
                    {card.location}
                  </span>
                  <span className="portfolio-card-year">{card.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  },
});
