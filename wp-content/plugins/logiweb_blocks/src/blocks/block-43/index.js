import { registerBlockType } from "@wordpress/blocks";
import {
  useBlockProps,
  InspectorControls,
  RichText,
} from "@wordpress/block-editor";
import {
  PanelBody,
  Button,
  TextControl,
  TextareaControl,
} from "@wordpress/components";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  edit({ attributes, setAttributes }) {
    const { sectionTitle, sectionSubtitle, faqs } = attributes;
    const blockProps = useBlockProps({ className: "faq-block-editor" });

    const updateFaq = (index, key, value) => {
      const updated = faqs.map((faq, i) =>
        i === index ? { ...faq, [key]: value } : faq,
      );
      setAttributes({ faqs: updated });
    };

    const addFaq = () => {
      setAttributes({
        faqs: [...faqs, { question: "New Question?", answer: "Answer here." }],
      });
    };

    const removeFaq = (index) => {
      setAttributes({ faqs: faqs.filter((_, i) => i !== index) });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="FAQ Items" initialOpen={true}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "16px",
                  borderBottom: "1px solid #e0e0e0",
                  paddingBottom: "12px",
                }}
              >
                <TextControl
                  label={`Q${i + 1} — Question`}
                  value={faq.question}
                  onChange={(v) => updateFaq(i, "question", v)}
                />
                <TextareaControl
                  label="Answer"
                  value={faq.answer}
                  onChange={(v) => updateFaq(i, "answer", v)}
                />
                <Button isDestructive isSmall onClick={() => removeFaq(i)}>
                  Remove
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addFaq}>
              + Add FAQ
            </Button>
          </PanelBody>
        </InspectorControls>

        <div {...blockProps}>
          <div className="faq-block-inner">
            <div className="faq-block-header">
              <RichText
                tagName="h2"
                className="faq-block-title"
                value={sectionTitle}
                onChange={(v) => setAttributes({ sectionTitle: v })}
                placeholder="Section Title"
              />
              <RichText
                tagName="p"
                className="faq-block-subtitle"
                value={sectionSubtitle}
                onChange={(v) => setAttributes({ sectionSubtitle: v })}
                placeholder="Subtitle..."
              />
            </div>

            <div className="faq-block-grid">
              {faqs.map((faq, i) => (
                <div className="faq-block-card" key={i}>
                  <p className="faq-block-question">{faq.question}</p>
                  <p className="faq-block-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  },

  save({ attributes }) {
    const { sectionTitle, sectionSubtitle, faqs } = attributes;
    return (
      <section className="faq-block">
        <div className="faq-block-inner">
          <div className="faq-block-header">
            <h2
              className="faq-block-title"
              dangerouslySetInnerHTML={{ __html: sectionTitle }}
            />
            <p
              className="faq-block-subtitle"
              dangerouslySetInnerHTML={{ __html: sectionSubtitle }}
            />
          </div>
          <div className="faq-block-grid">
            {faqs.map((faq, i) => (
              <div className="faq-block-card" key={i}>
                <p className="faq-block-question">{faq.question}</p>
                <p className="faq-block-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
