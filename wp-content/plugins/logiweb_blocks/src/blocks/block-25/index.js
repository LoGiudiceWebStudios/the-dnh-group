import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_ITEMS = [
  {
    year: "1980",
    tag: "Foundation Laid",
    title: "The Dream Begins",
    description:
      "Our founder started with one goal: help every family create a home they truly love.",
  },
  {
    year: "1990",
    tag: "Expertise Gained",
    title: "A Decade of Learning",
    description:
      "Ten years of hands-on projects shaped our process and raised our quality standards.",
  },
  {
    year: "2000",
    tag: "Regional Growth",
    title: "Serving More Families",
    description:
      "We expanded across neighborhoods while keeping the same family-first mindset.",
  },
  {
    year: "2020",
    tag: "Legacy of Trust",
    title: "Four Decades Strong",
    description:
      "Today, we continue building lasting relationships through honest work and care.",
  },
];

registerBlockType("logiweb/custom-block-25", {
  title: "Journey Timeline",
  icon: "schedule",
  category: "widgets",
  attributes: {
    subtitle: {
      type: "string",
      default: "OUR JOURNEY",
    },
    titleStart: {
      type: "string",
      default: "Four Decades of",
    },
    titleHighlight: {
      type: "string",
      default: "Excellence",
    },
    description: {
      type: "string",
      default:
        "Scroll to explore our journey from a single dream to a legacy of trust.",
    },
    items: {
      type: "array",
      default: DEFAULT_ITEMS,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { subtitle, titleStart, titleHighlight, description, items } =
      attributes;

    const updateItem = (index, field, value) => {
      const next = [...items];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ items: next });
    };

    const addItem = () => {
      setAttributes({
        items: [
          ...items,
          {
            year: "2030",
            tag: "New Milestone",
            title: "New Chapter",
            description: "Describe this milestone.",
          },
        ],
      });
    };

    const removeItem = (index) => {
      if (items.length <= 1) return;
      setAttributes({ items: items.filter((_, i) => i !== index) });
    };

    return (
      <div className="journey-timeline-editor">
        <InspectorControls>
          <PanelBody title="Header" initialOpen={true}>
            <TextControl
              label="Subtitle"
              value={subtitle}
              onChange={(value) => setAttributes({ subtitle: value })}
            />
            <TextControl
              label="Title Start"
              value={titleStart}
              onChange={(value) => setAttributes({ titleStart: value })}
            />
            <TextControl
              label="Title Highlight"
              value={titleHighlight}
              onChange={(value) => setAttributes({ titleHighlight: value })}
            />
            <TextControl
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
            />
          </PanelBody>

          <PanelBody
            title={`Timeline Items (${items.length})`}
            initialOpen={false}
          >
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "1.2rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <TextControl
                  label={`Item ${index + 1} Year`}
                  value={item.year}
                  onChange={(value) => updateItem(index, "year", value)}
                />
                <TextControl
                  label={`Item ${index + 1} Tag`}
                  value={item.tag}
                  onChange={(value) => updateItem(index, "tag", value)}
                />
                <TextControl
                  label={`Item ${index + 1} Title`}
                  value={item.title}
                  onChange={(value) => updateItem(index, "title", value)}
                />
                <TextControl
                  label={`Item ${index + 1} Description`}
                  value={item.description}
                  onChange={(value) => updateItem(index, "description", value)}
                />
                <Button
                  isDestructive
                  isSmall
                  onClick={() => removeItem(index)}
                  disabled={items.length <= 1}
                >
                  Remove Item
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addItem}>
              + Add Item
            </Button>
          </PanelBody>
        </InspectorControls>

        <section className="journey-timeline">
          <div className="journey-timeline-header">
            <p className="journey-timeline-subtitle">{subtitle}</p>
            <h2 className="journey-timeline-title">
              <RichText
                tagName="span"
                value={titleStart}
                onChange={(value) => setAttributes({ titleStart: value })}
                placeholder="Title start"
              />{" "}
              <span className="journey-timeline-highlight">
                <RichText
                  tagName="span"
                  value={titleHighlight}
                  onChange={(value) => setAttributes({ titleHighlight: value })}
                  placeholder="Title highlight"
                />
              </span>
            </h2>
            <RichText
              tagName="p"
              className="journey-timeline-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Add description"
            />
          </div>

          <div className="journey-timeline-track">
            <div className="journey-line">
              <div className="journey-line-fill"></div>
            </div>
            {items.map((item, index) => (
              <div
                key={index}
                className={`journey-item ${index % 2 ? "is-right" : "is-left"} is-visible`}
              >
                <article className="journey-item-card">
                  <div className="journey-item-content">
                    <span className="journey-item-tag">{item.tag}</span>
                    <h3 className="journey-item-title">{item.title}</h3>
                    <p className="journey-item-description">
                      {item.description}
                    </p>
                  </div>
                </article>
                <div className="journey-item-node">{item.year}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const { subtitle, titleStart, titleHighlight, description, items } =
      attributes;

    return (
      <section
        className="journey-timeline fade-in-on-scroll"
        data-journey-timeline
      >
        <div className="journey-timeline-header">
          <p className="journey-timeline-subtitle">{subtitle}</p>
          <h2 className="journey-timeline-title">
            {titleStart}{" "}
            <span className="journey-timeline-highlight">{titleHighlight}</span>
          </h2>
          <p className="journey-timeline-description">{description}</p>
        </div>

        <div className="journey-timeline-track">
          <div className="journey-line">
            <div className="journey-line-fill" data-journey-fill></div>
          </div>
          {items.map((item, index) => (
            <div
              key={index}
              className={`journey-item ${index % 2 ? "is-right" : "is-left"}`}
              data-journey-item
            >
              <article className="journey-item-card">
                <div className="journey-item-content">
                  <span className="journey-item-tag">{item.tag}</span>
                  <h3 className="journey-item-title">{item.title}</h3>
                  <p className="journey-item-description">{item.description}</p>
                </div>
              </article>
              <div className="journey-item-node">{item.year}</div>
            </div>
          ))}
        </div>
      </section>
    );
  },
});
