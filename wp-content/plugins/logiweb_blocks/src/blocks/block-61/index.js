import { registerBlockType } from "@wordpress/blocks";
import { RichText, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, SelectControl } from "@wordpress/components";
import { useState } from "@wordpress/element";
import metadata from "./block.json";

const DEFAULT_ITEMS = [
  {
    id: 1,
    icon: "shield",
    title: "Licensed & Insured",
    description:
      "Full general liability and workers comp coverage. Every project is protected.",
  },
  {
    id: 2,
    icon: "bookmark",
    title: "Industry Certified",
    description:
      "EPA Lead-Safe, OSHA compliant, and manufacturer-certified for all major brands.",
  },
  {
    id: 3,
    icon: "people",
    title: "In-House Crews",
    description:
      "No subcontractors. Every tradesman is a DNH Group employee, trained to our standards.",
  },
];

registerBlockType("logiweb/custom-block-61", {
  ...metadata,
  attributes: {
    badgeText: {
      type: "string",
      default: "Why You Can Trust Us",
    },
    titleStart: {
      type: "string",
      default: "Peace of",
    },
    titleHighlight: {
      type: "string",
      default: "Mind",
    },
    description: {
      type: "string",
      default:
        "Three pillars that separate us from every other contractor in the Tri-State area.",
    },
    items: {
      type: "array",
      default: DEFAULT_ITEMS,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      description,
      items = DEFAULT_ITEMS,
    } = attributes;

    const [editingCard, setEditingCard] = useState(null);

    const updateItem = (index, field, value) => {
      const newItems = [...items];
      newItems[index] = { ...newItems[index], [field]: value };
      setAttributes({ items: newItems });
    };

    const iconOptions = [
      { label: "Shield", value: "shield" },
      { label: "Bookmark", value: "bookmark" },
      { label: "People", value: "people" },
      { label: "Award", value: "award" },
      { label: "Check Circle", value: "check-circle" },
      { label: "Star", value: "star" },
      { label: "Zap", value: "zap" },
      { label: "Lock", value: "lock" },
      { label: "Briefcase", value: "briefcase" },
    ];

    const getIconClass = (iconName) => {
      const iconMap = {
        shield: "fa-shield-halved",
        bookmark: "fa-bookmark",
        people: "fa-people-group",
        award: "fa-award",
        "check-circle": "fa-circle-check",
        star: "fa-star",
        zap: "fa-bolt",
        lock: "fa-lock",
        briefcase: "fa-briefcase",
      };
      return iconMap[iconName] || "fa-shield-halved";
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Peace of Mind Section">
            <TextControl
              label="Badge Text"
              value={badgeText}
              onChange={(value) => setAttributes({ badgeText: value })}
            />
            <TextControl
              label="Title (First Part)"
              value={titleStart}
              onChange={(value) => setAttributes({ titleStart: value })}
            />
            <TextControl
              label="Title (Highlighted Part)"
              value={titleHighlight}
              onChange={(value) => setAttributes({ titleHighlight: value })}
            />
            <TextControl
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              help="Subtitle text"
            />
          </PanelBody>

          {editingCard !== null && (
            <PanelBody title={`Edit Card ${editingCard + 1}`}>
              <SelectControl
                label="Icon"
                value={items[editingCard]?.icon || "shield"}
                options={iconOptions}
                onChange={(value) => updateItem(editingCard, "icon", value)}
              />
              <TextControl
                label="Card Title"
                value={items[editingCard]?.title || ""}
                onChange={(value) => updateItem(editingCard, "title", value)}
              />
              <TextControl
                label="Card Description"
                value={items[editingCard]?.description || ""}
                onChange={(value) =>
                  updateItem(editingCard, "description", value)
                }
                help="Description text for this pillar"
              />
            </PanelBody>
          )}
        </InspectorControls>

        <section className="peace-of-mind-section">
          <div className="peace-of-mind-header">
            <p className="peace-of-mind-badge">{badgeText}</p>
            <h2 className="peace-of-mind-title">
              {titleStart} <span className="highlight">{titleHighlight}</span>
            </h2>
            <p className="peace-of-mind-description">{description}</p>
          </div>

          <div className="peace-of-mind-grid">
            {items.map((item, index) => (
              <article
                key={item.id}
                className="peace-of-mind-card"
                onClick={() => setEditingCard(index)}
                style={{
                  cursor: "pointer",
                  padding: "16px",
                  border: editingCard === index ? "2px solid #0073aa" : "none",
                  borderRadius: "8px",
                }}
              >
                <div className="peace-of-mind-icon">
                  <i className={`fa-solid ${getIconClass(item.icon)}`}></i>
                </div>
                <h3 className="peace-of-mind-card-title">{item.title}</h3>
                <p className="peace-of-mind-card-description">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </>
    );
  },

  save: ({ attributes }) => {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      description,
      items = DEFAULT_ITEMS,
    } = attributes;

    const getIconClass = (iconName) => {
      const iconMap = {
        shield: "fa-shield-halved",
        bookmark: "fa-bookmark",
        people: "fa-people-group",
        award: "fa-award",
        "check-circle": "fa-circle-check",
        star: "fa-star",
        zap: "fa-bolt",
        lock: "fa-lock",
        briefcase: "fa-briefcase",
      };
      return iconMap[iconName] || "fa-shield-halved";
    };

    return (
      <section className="peace-of-mind-section">
        <div className="peace-of-mind-header">
          <p className="peace-of-mind-badge">{badgeText}</p>
          <h2 className="peace-of-mind-title">
            {titleStart} <span className="highlight">{titleHighlight}</span>
          </h2>
          <p className="peace-of-mind-description">{description}</p>
        </div>

        <div className="peace-of-mind-grid">
          {items.map((item) => (
            <article key={item.id} className="peace-of-mind-card">
              <div className="peace-of-mind-icon">
                <i className={`fa-solid ${getIconClass(item.icon)}`}></i>
              </div>
              <h3 className="peace-of-mind-card-title">{item.title}</h3>
              <p className="peace-of-mind-card-description">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    );
  },
});
