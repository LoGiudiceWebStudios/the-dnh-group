import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_ITEMS = [
  {
    icon: "fa-solid fa-shield-halved",
    title: "Verified Reviews",
    description: "Every review is from a real customer",
  },
  {
    icon: "fa-solid fa-circle-check",
    title: "Quality Guaranteed",
    description: "5-year workmanship warranty",
  },
  {
    icon: "fa-solid fa-clock",
    title: "On-Time Delivery",
    description: "98% of projects finish on schedule",
  },
  {
    icon: "fa-solid fa-comment-dots",
    title: "Open Communication",
    description: "Dedicated project manager",
  },
];

registerBlockType(metadata.name, {
  ...metadata,
  attributes: {
    items: { type: "array", default: DEFAULT_ITEMS },
  },

  edit({ attributes, setAttributes }) {
    const { items } = attributes;

    const safeItems =
      Array.isArray(items) && items.length ? items : DEFAULT_ITEMS;

    const updateItem = (index, key, value) => {
      const next = safeItems.map((item, i) =>
        i === index ? { ...item, [key]: value } : item,
      );
      setAttributes({ items: next });
    };

    const blockProps = useBlockProps({
      className: "trust-signals-strip-block",
    });

    return (
      <>
        <InspectorControls>
          {safeItems.map((item, index) => (
            <PanelBody
              key={index}
              title={`Item ${index + 1}`}
              initialOpen={index === 0}
            >
              <TextControl
                label="Icon class (Font Awesome)"
                value={item.icon || ""}
                onChange={(value) => updateItem(index, "icon", value)}
              />
              <TextControl
                label="Title"
                value={item.title || ""}
                onChange={(value) => updateItem(index, "title", value)}
              />
              <TextControl
                label="Description"
                value={item.description || ""}
                onChange={(value) => updateItem(index, "description", value)}
              />
            </PanelBody>
          ))}
        </InspectorControls>

        <section {...blockProps}>
          <div className="trust-signals-strip-inner">
            {safeItems.map((item, index) => (
              <article key={index} className="trust-signals-strip-item">
                <span className="trust-signals-strip-icon" aria-hidden="true">
                  <i className={item.icon || "fa-solid fa-circle-check"} />
                </span>

                <RichText
                  tagName="h3"
                  className="trust-signals-strip-title"
                  value={item.title}
                  onChange={(value) => updateItem(index, "title", value)}
                  placeholder="Title"
                />

                <RichText
                  tagName="p"
                  className="trust-signals-strip-description"
                  value={item.description}
                  onChange={(value) => updateItem(index, "description", value)}
                  placeholder="Description"
                />
              </article>
            ))}
          </div>
        </section>
      </>
    );
  },

  save({ attributes }) {
    const { items } = attributes;

    const safeItems =
      Array.isArray(items) && items.length ? items : DEFAULT_ITEMS;

    return (
      <section className="trust-signals-strip-block">
        <div className="trust-signals-strip-inner">
          {safeItems.map((item, index) => (
            <article key={index} className="trust-signals-strip-item">
              <span className="trust-signals-strip-icon" aria-hidden="true">
                <i className={item.icon || "fa-solid fa-circle-check"} />
              </span>

              <h3 className="trust-signals-strip-title">
                <RichText.Content value={item.title} />
              </h3>

              <p className="trust-signals-strip-description">
                <RichText.Content value={item.description} />
              </p>
            </article>
          ))}
        </div>
      </section>
    );
  },
});
