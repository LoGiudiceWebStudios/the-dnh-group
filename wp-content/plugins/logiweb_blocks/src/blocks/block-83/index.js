import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,
} from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_STEPS = [
  {
    number: "01",
    title: "Precision Setup",
    description:
      "We map out the space, move furniture, and fully mask off every single square inch of non-painted surfaces. Protection is paramount.",
    iconClass: "fa-regular fa-shield",
  },
  {
    number: "02",
    title: "Surface Correction",
    description:
      "We don't just paint over flaws. We fix every dent, scratch, and texture imperfection first - ensuring a flawless foundation.",
    iconClass: "fa-solid fa-wand-magic-sparkles",
  },
  {
    number: "03",
    title: "Flawless Application",
    description:
      "Utilizing elite spray and roll techniques to achieve a perfectly uniform, rich depth of color with razor-sharp edges and zero streaks.",
    iconClass: "fa-solid fa-palette",
  },
  {
    number: "04",
    title: "White-Glove Inspection",
    description:
      "A complete walkthrough with your project manager to ensure every edge is razor-sharp and every surface is perfect before we leave.",
    iconClass: "fa-solid fa-arrow-right",
  },
];

const Process4StepsMarkup = ({
  badge,
  titleStart,
  titleHighlight,
  description,
  steps,
}) => (
  <section className="process-4step-block">
    <div className="process-4step-header">
      <p className="process-4step-badge">
        <span className="process-4step-badge-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M4 12h12.2l-3.6-3.6L14 7l6 6-6 6-1.4-1.4 3.6-3.6H4v-2z" />
          </svg>
        </span>
        <span>{badge}</span>
      </p>

      <h2 className="process-4step-title">
        {titleStart} <span>{titleHighlight}</span>
      </h2>

      <p className="process-4step-description">{description}</p>
    </div>

    <div className="process-4step-grid">
      {steps.map((step, index) => (
        <article key={index} className="process-4step-item">
          <div className="process-4step-number">{step.number}</div>
          <div className="process-4step-icon">
            <i
              className={step.iconClass || "fa-solid fa-circle"}
              aria-hidden="true"
            />
          </div>
          <h3 className="process-4step-item-title">{step.title}</h3>
          <p className="process-4step-item-description">{step.description}</p>
        </article>
      ))}
    </div>
  </section>
);

registerBlockType(metadata.name, {
  ...metadata,
  attributes: {
    badge: { type: "string", default: "Our Process" },
    titleStart: { type: "string", default: "The 4-Step" },
    titleHighlight: { type: "string", default: "Painting Standard" },
    description: {
      type: "string",
      default:
        "A proven process that ensures every project is executed with military precision and white-glove care.",
    },
    steps: { type: "array", default: DEFAULT_STEPS },
  },

  edit({ attributes, setAttributes }) {
    const { badge, titleStart, titleHighlight, description, steps } =
      attributes;
    const safeSteps =
      Array.isArray(steps) && steps.length ? steps : DEFAULT_STEPS;

    const blockProps = useBlockProps();

    const updateStep = (index, key, value) => {
      const next = safeSteps.map((step, i) =>
        i === index ? { ...step, [key]: value } : step,
      );
      setAttributes({ steps: next });
    };

    const addStep = () => {
      const nextNumber = String(safeSteps.length + 1).padStart(2, "0");
      setAttributes({
        steps: [
          ...safeSteps,
          {
            number: nextNumber,
            iconClass: "fa-solid fa-star",
            title: "New Step",
            description: "Step description",
          },
        ],
      });
    };

    const removeStep = (index) => {
      if (safeSteps.length <= 1) return;
      setAttributes({ steps: safeSteps.filter((_, i) => i !== index) });
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
            <TextareaControl
              label="Description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
            />
          </PanelBody>

          {safeSteps.map((step, index) => (
            <PanelBody
              key={index}
              title={`Step ${index + 1}`}
              initialOpen={index === 0}
            >
              <TextControl
                label="Number"
                value={step.number || ""}
                onChange={(value) => updateStep(index, "number", value)}
              />
              <TextControl
                label="Icon class"
                value={step.iconClass || ""}
                onChange={(value) => updateStep(index, "iconClass", value)}
              />
              <TextControl
                label="Title"
                value={step.title || ""}
                onChange={(value) => updateStep(index, "title", value)}
              />
              <TextareaControl
                label="Description"
                value={step.description || ""}
                onChange={(value) => updateStep(index, "description", value)}
              />
              <Button
                isDestructive
                isSmall
                onClick={() => removeStep(index)}
                disabled={safeSteps.length <= 1}
              >
                Remove step
              </Button>
            </PanelBody>
          ))}

          <PanelBody title="Actions" initialOpen={false}>
            <Button isPrimary isSmall onClick={addStep}>
              + Add step
            </Button>
          </PanelBody>
        </InspectorControls>

        <div {...blockProps}>
          <Process4StepsMarkup
            badge={badge}
            titleStart={titleStart}
            titleHighlight={titleHighlight}
            description={description}
            steps={safeSteps}
          />
        </div>
      </>
    );
  },

  save({ attributes }) {
    const { badge, titleStart, titleHighlight, description, steps } =
      attributes;
    const safeSteps =
      Array.isArray(steps) && steps.length ? steps : DEFAULT_STEPS;
    return (
      <Process4StepsMarkup
        badge={badge}
        titleStart={titleStart}
        titleHighlight={titleHighlight}
        description={description}
        steps={safeSteps}
      />
    );
  },
});
