import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import { useState } from "@wordpress/element";
import "../../global-styles.scss";

const normalizeCategory = (value) =>
  String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const DEFAULT_CATEGORIES = [
  {
    title: "General Questions",
    iconClass: "fa-regular fa-circle-question",
    faqs: [
      {
        question: "What services does DNH Group offer?",
        answer:
          "We provide roofing, remodeling, painting, windows, siding, and additional home improvement services.",
      },
      {
        question: "How long has DNH Group been in business?",
        answer: "We have served homeowners for more than four decades.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We serve multiple cities in the region. Contact us and we will confirm your exact service area.",
      },
      {
        question: "Are you licensed and insured?",
        answer:
          "Yes, our teams are fully licensed and insured for the services we provide.",
      },
      {
        question: "Do you offer free estimates?",
        answer: "Yes, we offer free estimates for qualifying projects.",
      },
    ],
  },
  {
    title: "Services & Process",
    iconClass: "fa-solid fa-wrench",
    faqs: [
      {
        question: "How does the project process work?",
        answer:
          "We start with a consultation, define scope and budget, then schedule execution with regular updates.",
      },
      {
        question: "How long will my project take?",
        answer:
          "Project duration depends on scope, but you get a clear timeline before work begins.",
      },
      {
        question: "Do I need to be home during the project?",
        answer:
          "Not always. We coordinate access, communication, and checkpoints based on your preference.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    iconClass: "fa-solid fa-dollar-sign",
    faqs: [
      {
        question: "Do you offer financing options?",
        answer:
          "Yes, we offer financing options on many qualifying projects. Ask our team for current programs.",
      },
      {
        question: "When are payments due?",
        answer:
          "Payment schedules depend on the project scope and are clearly outlined before work starts.",
      },
    ],
  },
  {
    title: "Warranty & Guarantees",
    iconClass: "fa-regular fa-shield-check",
    faqs: [
      {
        question: "Do your projects include a warranty?",
        answer:
          "Yes, workmanship and product warranties vary by service, and we explain them before installation.",
      },
      {
        question:
          "What happens if something needs adjustment after completion?",
        answer:
          "Our team will review the issue and schedule any covered follow-up work promptly.",
      },
    ],
  },
  {
    title: "Scheduling & Availability",
    iconClass: "fa-regular fa-clock",
    faqs: [
      {
        question: "How far in advance should I schedule?",
        answer:
          "Availability changes seasonally, so we recommend reaching out early for the widest scheduling options.",
      },
      {
        question: "Can you work around my availability?",
        answer:
          "Yes, we do our best to coordinate inspections, communication, and access around your schedule.",
      },
    ],
  },
];

registerBlockType("logiweb/custom-block-14", {
  title: "FAQ Block",
  icon: "editor-help",
  category: "widgets",
  attributes: {
    categories: {
      type: "array",
      default: DEFAULT_CATEGORIES,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { categories = [] } = attributes;
    const [openKey, setOpenKey] = useState("0-0");
    const [activeFilter, setActiveFilter] = useState("all-questions");

    const visibleCategories =
      activeFilter === "all-questions"
        ? categories
        : categories.filter(
            (category) => normalizeCategory(category.title) === activeFilter,
          );

    const updateCategory = (categoryIndex, field, value) => {
      const next = [...categories];
      next[categoryIndex] = { ...next[categoryIndex], [field]: value };
      setAttributes({ categories: next });
    };

    const addCategory = () => {
      setAttributes({
        categories: [
          ...categories,
          {
            title: "New Category",
            iconClass: "fa-regular fa-circle-question",
            faqs: [{ question: "New question", answer: "New answer" }],
          },
        ],
      });
    };

    const removeCategory = (categoryIndex) => {
      if (categories.length <= 1) {
        return;
      }
      setAttributes({
        categories: categories.filter((_, index) => index !== categoryIndex),
      });
    };

    const updateFaq = (categoryIndex, faqIndex, field, value) => {
      const next = [...categories];
      next[categoryIndex] = {
        ...next[categoryIndex],
        faqs: next[categoryIndex].faqs.map((faq, index) =>
          index === faqIndex ? { ...faq, [field]: value } : faq,
        ),
      };
      setAttributes({ categories: next });
    };

    const addFaq = (categoryIndex) => {
      const next = [...categories];
      next[categoryIndex] = {
        ...next[categoryIndex],
        faqs: [
          ...(next[categoryIndex].faqs || []),
          { question: "", answer: "" },
        ],
      };
      setAttributes({ categories: next });
    };

    const removeFaq = (categoryIndex, faqIndex) => {
      const next = [...categories];
      if ((next[categoryIndex].faqs || []).length <= 1) {
        return;
      }

      next[categoryIndex] = {
        ...next[categoryIndex],
        faqs: next[categoryIndex].faqs.filter((_, index) => index !== faqIndex),
      };
      setAttributes({ categories: next });
    };

    return (
      <div className="faqv2-block">
        <InspectorControls>
          <PanelBody title="FAQ Categories" initialOpen={true}>
            <p>{categories.length} categories</p>
            <Button isPrimary onClick={addCategory}>
              Add Category
            </Button>
          </PanelBody>
        </InspectorControls>

        <div className="faqv2-filter-bar">
          <button
            type="button"
            className={`faqv2-filter-pill ${activeFilter === "all-questions" ? "is-active" : ""}`}
            onClick={() => setActiveFilter("all-questions")}
          >
            All Questions
          </button>
          {categories.map((category, categoryIndex) => {
            const filterKey = normalizeCategory(category.title);

            return (
              <button
                key={categoryIndex}
                type="button"
                className={`faqv2-filter-pill ${activeFilter === filterKey ? "is-active" : ""}`}
                onClick={() => setActiveFilter(filterKey)}
              >
                <i
                  className={
                    category.iconClass || "fa-regular fa-circle-question"
                  }
                ></i>
                {category.title}
              </button>
            );
          })}
        </div>

        {visibleCategories.map((category) => {
          const categoryIndex = categories.findIndex(
            (item) => item === category,
          );

          return (
            <section className="faqv2-category" key={categoryIndex}>
              <div className="faqv2-category-editor-head">
                <TextControl
                  label={`Category ${categoryIndex + 1} Title`}
                  value={category.title}
                  onChange={(value) =>
                    updateCategory(categoryIndex, "title", value)
                  }
                />
                <TextControl
                  label="Category Icon Class"
                  value={category.iconClass || ""}
                  onChange={(value) =>
                    updateCategory(categoryIndex, "iconClass", value)
                  }
                />
                <Button
                  isSecondary
                  isDestructive
                  onClick={() => removeCategory(categoryIndex)}
                  disabled={categories.length <= 1}
                >
                  Remove Category
                </Button>
              </div>

              <header className="faqv2-category-title-row">
                <span className="faqv2-category-icon-wrap">
                  <i
                    className={
                      category.iconClass || "fa-regular fa-circle-question"
                    }
                  ></i>
                </span>
                <h3 className="faqv2-category-title">{category.title}</h3>
              </header>

              <div className="faqv2-items">
                {(category.faqs || []).map((faq, faqIndex) => {
                  const key = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openKey === key;

                  return (
                    <article
                      className={`faqv2-item ${isOpen ? "is-open" : ""}`}
                      key={key}
                    >
                      <button
                        type="button"
                        className="faqv2-question-row"
                        onClick={() => setOpenKey(isOpen ? "" : key)}
                      >
                        <RichText
                          tagName="span"
                          className="faqv2-question"
                          value={faq.question}
                          onChange={(value) =>
                            updateFaq(
                              categoryIndex,
                              faqIndex,
                              "question",
                              value,
                            )
                          }
                          placeholder={`Question ${faqIndex + 1}`}
                        />
                        <span className="faqv2-arrow">&#9660;</span>
                      </button>

                      {isOpen ? (
                        <div className="faqv2-answer-row">
                          <RichText
                            tagName="div"
                            className="faqv2-answer"
                            value={faq.answer}
                            onChange={(value) =>
                              updateFaq(
                                categoryIndex,
                                faqIndex,
                                "answer",
                                value,
                              )
                            }
                            placeholder="FAQ answer"
                          />
                          <Button
                            isSecondary
                            isDestructive
                            onClick={() => removeFaq(categoryIndex, faqIndex)}
                            disabled={(category.faqs || []).length <= 1}
                          >
                            Remove Question
                          </Button>
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>

              <Button isSecondary onClick={() => addFaq(categoryIndex)}>
                + Add Question
              </Button>
            </section>
          );
        })}
      </div>
    );
  },

  save: ({ attributes }) => {
    const { categories = [] } = attributes;

    return (
      <div className="faqv2-block" data-faqv2>
        <div className="faqv2-filter-bar">
          <button
            type="button"
            className="faqv2-filter-pill is-active"
            data-faqv2-filter="all-questions"
          >
            All Questions
          </button>
          {categories.map((category, categoryIndex) => (
            <button
              key={categoryIndex}
              type="button"
              className="faqv2-filter-pill"
              data-faqv2-filter={normalizeCategory(category.title)}
            >
              <i
                className={
                  category.iconClass || "fa-regular fa-circle-question"
                }
              ></i>
              <RichText.Content value={category.title} />
            </button>
          ))}
        </div>

        {categories.map((category, categoryIndex) => (
          <section
            className="faqv2-category"
            key={categoryIndex}
            data-faqv2-category={normalizeCategory(category.title)}
          >
            <header className="faqv2-category-title-row">
              <span className="faqv2-category-icon-wrap">
                <i
                  className={
                    category.iconClass || "fa-regular fa-circle-question"
                  }
                ></i>
              </span>
              <h3 className="faqv2-category-title">
                <RichText.Content value={category.title} />
              </h3>
            </header>

            <div className="faqv2-items">
              {(category.faqs || []).map((faq, faqIndex) => {
                const isOpen = categoryIndex === 0 && faqIndex === 0;

                return (
                  <article
                    className={`faqv2-item ${isOpen ? "is-open" : ""}`}
                    key={`${categoryIndex}-${faqIndex}`}
                  >
                    <button
                      type="button"
                      className="faqv2-question-row"
                      data-faqv2-toggle
                      aria-expanded={isOpen ? "true" : "false"}
                    >
                      <span className="faqv2-question">
                        <RichText.Content value={faq.question} />
                      </span>
                      <span className="faqv2-arrow">&#9660;</span>
                    </button>
                    <div className="faqv2-answer-row">
                      <RichText.Content
                        tagName="div"
                        className="faqv2-answer"
                        value={faq.answer}
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    );
  },
});
