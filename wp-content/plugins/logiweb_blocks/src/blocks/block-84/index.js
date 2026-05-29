import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import {
  Button,
  PanelBody,
  PanelRow,
  TextControl,
  TextareaControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_ITEMS = [
  {
    question: "How do you protect my home during interior painting?",
    answer:
      "We use heavy-duty drop cloths, plastic sheeting, and professional painter's tape to completely isolate the workspace. Your floors, furniture, and valuables are entirely protected. Our crews work clean — we vacuum and wipe down surfaces daily, and never leave a mess behind.",
  },
  {
    question: "How long does a standard exterior paint job last?",
    answer:
      "A high-quality exterior system typically lasts 7 to 10 years, depending on substrate condition, sun exposure, and climate cycles. Proper prep and premium coatings are the biggest factors in long-term durability.",
  },
  {
    question: "What brands of paint do you use?",
    answer:
      "We primarily work with premium product lines from Sherwin-Williams and Benjamin Moore. We select specific products based on surface type, finish expectations, and longevity goals.",
  },
  {
    question: "Can you match an existing color?",
    answer:
      "Yes. We use precision color-matching workflows and on-site sample checks in your actual lighting conditions to ensure the final color is accurate before full application.",
  },
];

registerBlockType(metadata.name, {
  ...metadata,
  attributes: {
    badge: { type: "string", default: "Common Questions" },
    titleStart: { type: "string", default: "Painting" },
    titleHighlight: { type: "string", default: "FAQ" },
    items: { type: "array", default: DEFAULT_ITEMS },
  },

  edit({ attributes, setAttributes }) {
    const { badge, titleStart, titleHighlight, items } = attributes;
    const safeItems =
      Array.isArray(items) && items.length ? items : DEFAULT_ITEMS;
    const [openIndex, setOpenIndex] = useState(0);

    const blockProps = useBlockProps({
      className: "painting-faq-compact-block",
    });

    const updateItem = (index, key, value) => {
      const next = safeItems.map((item, i) =>
        i === index ? { ...item, [key]: value } : item,
      );
      setAttributes({ items: next });
    };

    const addItem = () => {
      setAttributes({
        items: [
          ...safeItems,
          {
            question: "New question",
            answer: "New answer",
          },
        ],
      });
    };

    const removeItem = (index) => {
      if (safeItems.length <= 1) {
        return;
      }
      setAttributes({ items: safeItems.filter((_, i) => i !== index) });
      if (openIndex >= safeItems.length - 1) {
        setOpenIndex(safeItems.length - 2);
      }
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Header" initialOpen={true}>
            <TextControl
              label="Badge"
              value={badge}
              onChange={(value) => setAttributes({ badge: value })}
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
          </PanelBody>

          {safeItems.map((item, index) => (
            <PanelBody
              key={index}
              title={`FAQ ${index + 1}`}
              initialOpen={index === 0}
            >
              <TextControl
                label="Question"
                value={item.question || ""}
                onChange={(value) => updateItem(index, "question", value)}
              />
              <TextareaControl
                label="Answer"
                value={item.answer || ""}
                onChange={(value) => updateItem(index, "answer", value)}
              />
              <PanelRow>
                <Button
                  isDestructive
                  isSmall
                  onClick={() => removeItem(index)}
                  disabled={safeItems.length <= 1}
                >
                  Remove FAQ
                </Button>
              </PanelRow>
            </PanelBody>
          ))}

          <PanelBody title="Actions" initialOpen={false}>
            <Button isPrimary isSmall onClick={addItem}>
              + Add FAQ
            </Button>
          </PanelBody>
        </InspectorControls>

        <section {...blockProps}>
          <div className="painting-faq-compact-inner">
            <p className="painting-faq-compact-badge">
              <span
                className="painting-faq-compact-badge-icon"
                aria-hidden="true"
              >
                <i className="fa-regular fa-circle-question" />
              </span>
              <span>{badge}</span>
            </p>

            <h2 className="painting-faq-compact-title">
              {titleStart} <span>{titleHighlight}</span>
            </h2>

            <div className="painting-faq-compact-list">
              {safeItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <article
                    key={index}
                    className={`painting-faq-compact-item ${isOpen ? "is-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="painting-faq-compact-question"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="painting-faq-compact-number">
                        {index + 1}
                      </span>
                      <RichText
                        tagName="span"
                        className="painting-faq-compact-question-text"
                        value={item.question}
                        onChange={(value) =>
                          updateItem(index, "question", value)
                        }
                        placeholder="Question"
                      />
                    </button>

                    {isOpen ? (
                      <div className="painting-faq-compact-answer">
                        <RichText
                          tagName="p"
                          value={item.answer}
                          onChange={(value) =>
                            updateItem(index, "answer", value)
                          }
                          placeholder="Answer"
                        />
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  },

  save({ attributes }) {
    const { badge, titleStart, titleHighlight, items } = attributes;
    const safeItems =
      Array.isArray(items) && items.length ? items : DEFAULT_ITEMS;

    return (
      <section className="painting-faq-compact-block" data-painting-faq>
        <div className="painting-faq-compact-inner">
          <p className="painting-faq-compact-badge">
            <span
              className="painting-faq-compact-badge-icon"
              aria-hidden="true"
            >
              <i className="fa-regular fa-circle-question" />
            </span>
            <span>{badge}</span>
          </p>

          <h2 className="painting-faq-compact-title">
            {titleStart} <span>{titleHighlight}</span>
          </h2>

          <div className="painting-faq-compact-list">
            {safeItems.map((item, index) => {
              const isInitiallyOpen = index === 0;
              return (
                <article
                  key={index}
                  className={`painting-faq-compact-item ${isInitiallyOpen ? "is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="painting-faq-compact-question"
                    data-faq-toggle
                    aria-expanded={isInitiallyOpen ? "true" : "false"}
                  >
                    <span className="painting-faq-compact-number">
                      {index + 1}
                    </span>
                    <span className="painting-faq-compact-question-text">
                      <RichText.Content value={item.question} />
                    </span>
                  </button>

                  <div
                    className="painting-faq-compact-answer"
                    hidden={!isInitiallyOpen}
                  >
                    <RichText.Content tagName="p" value={item.answer} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  },
});
