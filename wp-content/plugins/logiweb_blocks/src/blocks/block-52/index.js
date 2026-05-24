import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_METRICS = [
  { value: "2,500+", label: "Families Served" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "800+", label: "Google Reviews" },
  { value: "15+", label: "Years of Trust" },
];

registerBlockType("logiweb/custom-block-52", {
  ...metadata,
  attributes: {
    metrics: {
      type: "array",
      default: DEFAULT_METRICS,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { metrics = [] } = attributes;

    const updateMetric = (index, field, value) => {
      const next = [...metrics];
      next[index] = { ...next[index], [field]: value };
      setAttributes({ metrics: next });
    };

    const addMetric = () => {
      setAttributes({
        metrics: [...metrics, { value: "100+", label: "New Metric" }],
      });
    };

    const removeMetric = (index) => {
      if (metrics.length <= 1) {
        return;
      }
      setAttributes({ metrics: metrics.filter((_, i) => i !== index) });
    };

    return (
      <div className="trust-metrics-editor">
        <InspectorControls>
          <PanelBody title={`Metrics (${metrics.length})`} initialOpen={true}>
            {metrics.map((metric, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #e0e6ef",
                }}
              >
                <TextControl
                  label={`Metric ${index + 1} Value`}
                  value={metric.value || ""}
                  onChange={(value) => updateMetric(index, "value", value)}
                />
                <TextControl
                  label={`Metric ${index + 1} Label`}
                  value={metric.label || ""}
                  onChange={(value) => updateMetric(index, "label", value)}
                />
                <Button
                  isSecondary
                  isDestructive
                  isSmall
                  disabled={metrics.length <= 1}
                  onClick={() => removeMetric(index)}
                >
                  Remove metric
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addMetric}>
              Add metric
            </Button>
          </PanelBody>
        </InspectorControls>

        <section className="trust-metrics-strip-block fade-in-on-scroll">
          <div className="trust-metrics-strip-inner">
            {metrics.map((metric, index) => (
              <div className="trust-metrics-item" key={index}>
                <RichText
                  tagName="p"
                  className="trust-metrics-value"
                  value={metric.value}
                  onChange={(value) => updateMetric(index, "value", value)}
                  placeholder="2,500+"
                />
                <RichText
                  tagName="p"
                  className="trust-metrics-label"
                  value={metric.label}
                  onChange={(value) => updateMetric(index, "label", value)}
                  placeholder="Families Served"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const { metrics = [] } = attributes;

    return (
      <section
        className="trust-metrics-strip-block fade-in-on-scroll"
        data-block="trust-metrics-strip"
      >
        <div className="trust-metrics-strip-inner">
          {metrics.map((metric, index) => (
            <div className="trust-metrics-item" key={index}>
              <p className="trust-metrics-value">{metric.value}</p>
              <p className="trust-metrics-label">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  },
});
