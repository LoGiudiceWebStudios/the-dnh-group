import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_ITEMS = [
  {
    iconClass: "fa-solid fa-wrench",
    title: "Our Services",
    description:
      "Explore the full range of home improvement services we offer.",
    url: "#",
  },
  {
    iconClass: "fa-regular fa-shield",
    title: "About DNH Group",
    description:
      "Learn about our history, values, and commitment to excellence.",
    url: "#",
  },
  {
    iconClass: "fa-regular fa-comment-dots",
    title: "Meet Our Team",
    description: "Get to know the dedicated professionals behind DNH Group.",
    url: "#",
  },
];

registerBlockType("logiweb/custom-block-33", {
  ...metadata,
  attributes: {
    items: { type: "array", default: DEFAULT_ITEMS },
  },

  edit: ({ attributes, setAttributes }) => {
    const { items = [] } = attributes;

    const updateItem = (index, field, value) => {
      const next = [...items];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ items: next });
    };

    return (
      <div className="info-cards-editor">
        <InspectorControls>
          <PanelBody title={`Cards (${items.length})`} initialOpen={true}>
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <TextControl
                  label={`Card ${index + 1} Icon Class`}
                  value={item.iconClass}
                  onChange={(value) => updateItem(index, "iconClass", value)}
                />
                <TextControl
                  label="URL"
                  value={item.url}
                  onChange={(value) => updateItem(index, "url", value)}
                />
              </div>
            ))}
          </PanelBody>
        </InspectorControls>

        <section className="info-cards-section">
          <div className="info-cards-grid">
            {items.map((item, index) => (
              <article className="info-card" key={index}>
                <span className="info-card-icon-wrap">
                  <i className={item.iconClass}></i>
                </span>
                <RichText
                  tagName="h3"
                  className="info-card-title"
                  value={item.title}
                  onChange={(value) => updateItem(index, "title", value)}
                  placeholder="Card title"
                />
                <RichText
                  tagName="p"
                  className="info-card-description"
                  value={item.description}
                  onChange={(value) => updateItem(index, "description", value)}
                  placeholder="Card description"
                />
              </article>
            ))}
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const { items = [] } = attributes;

    return (
      <section className="info-cards-section">
        <div className="info-cards-grid">
          {items.map((item, index) => {
            const content = (
              <>
                <span className="info-card-icon-wrap">
                  <i className={item.iconClass}></i>
                </span>
                <h3 className="info-card-title">
                  <RichText.Content value={item.title} />
                </h3>
                <RichText.Content
                  tagName="p"
                  className="info-card-description"
                  value={item.description}
                />
              </>
            );

            return item.url ? (
              <a className="info-card" key={index} href={item.url}>
                {content}
              </a>
            ) : (
              <article className="info-card" key={index}>
                {content}
              </article>
            );
          })}
        </div>
      </section>
    );
  },
});
