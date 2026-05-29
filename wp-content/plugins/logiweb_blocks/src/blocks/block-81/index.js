import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  Button,
  RangeControl,
} from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  ...metadata,
  attributes: {
    subtitle: { type: "string", default: "Visual Proof" },
    titleStart: { type: "string", default: "See the" },
    titleHighlight: { type: "string", default: "DNH Difference" },
    description: {
      type: "string",
      default:
        "Drag the slider to reveal the dramatic transformation. Dated and faded becomes stunning and modern.",
    },
    beforeLabel: { type: "string", default: "Before" },
    afterLabel: { type: "string", default: "After" },
    beforeLegend: {
      type: "string",
      default: "Before - Faded, peeling, outdated",
    },
    afterLegend: { type: "string", default: "After - Premium charcoal finish" },
    beforeImageUrl: { type: "string", default: "" },
    afterImageUrl: { type: "string", default: "" },
    sliderPosition: { type: "number", default: 50 },
  },

  edit({ attributes, setAttributes }) {
    const {
      subtitle,
      titleStart,
      titleHighlight,
      description,
      beforeLabel,
      afterLabel,
      beforeLegend,
      afterLegend,
      beforeImageUrl,
      afterImageUrl,
      sliderPosition,
    } = attributes;

    const clamp = (value) => Math.max(0, Math.min(100, value));

    const blockProps = useBlockProps({ className: "ba-compare-block" });

    return (
      <>
        <InspectorControls>
          <PanelBody title="Images" initialOpen={true}>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) =>
                  setAttributes({ beforeImageUrl: media.url })
                }
                allowedTypes={["image"]}
                render={({ open }) => (
                  <div style={{ marginBottom: 12 }}>
                    {beforeImageUrl ? (
                      <img
                        src={beforeImageUrl}
                        alt=""
                        style={{
                          width: "100%",
                          borderRadius: 8,
                          marginBottom: 8,
                        }}
                      />
                    ) : null}
                    <Button isSecondary onClick={open}>
                      {beforeImageUrl
                        ? "Change before image"
                        : "Select before image"}
                    </Button>
                  </div>
                )}
              />
            </MediaUploadCheck>

            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) =>
                  setAttributes({ afterImageUrl: media.url })
                }
                allowedTypes={["image"]}
                render={({ open }) => (
                  <div>
                    {afterImageUrl ? (
                      <img
                        src={afterImageUrl}
                        alt=""
                        style={{
                          width: "100%",
                          borderRadius: 8,
                          marginBottom: 8,
                        }}
                      />
                    ) : null}
                    <Button isSecondary onClick={open}>
                      {afterImageUrl
                        ? "Change after image"
                        : "Select after image"}
                    </Button>
                  </div>
                )}
              />
            </MediaUploadCheck>

            <RangeControl
              label="Slider position"
              min={0}
              max={100}
              value={sliderPosition}
              onChange={(value) =>
                setAttributes({ sliderPosition: clamp(value || 0) })
              }
            />
          </PanelBody>

          <PanelBody title="Labels" initialOpen={false}>
            <TextControl
              label="Before tag"
              value={beforeLabel}
              onChange={(value) => setAttributes({ beforeLabel: value })}
            />
            <TextControl
              label="After tag"
              value={afterLabel}
              onChange={(value) => setAttributes({ afterLabel: value })}
            />
            <TextControl
              label="Before legend"
              value={beforeLegend}
              onChange={(value) => setAttributes({ beforeLegend: value })}
            />
            <TextControl
              label="After legend"
              value={afterLegend}
              onChange={(value) => setAttributes({ afterLegend: value })}
            />
          </PanelBody>
        </InspectorControls>

        <section {...blockProps}>
          <div className="ba-compare-inner">
            <RichText
              tagName="p"
              className="ba-compare-subtitle"
              value={subtitle}
              onChange={(value) => setAttributes({ subtitle: value })}
              placeholder="Subtitle"
            />

            <h2 className="ba-compare-title">
              <RichText
                tagName="span"
                value={titleStart}
                onChange={(value) => setAttributes({ titleStart: value })}
                placeholder="Title start"
              />{" "}
              <RichText
                tagName="span"
                className="ba-compare-title-highlight"
                value={titleHighlight}
                onChange={(value) => setAttributes({ titleHighlight: value })}
                placeholder="Title highlight"
              />
            </h2>

            <RichText
              tagName="p"
              className="ba-compare-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Description"
            />

            <div className="ba-compare-frame">
              <div className="ba-compare-track">
                {afterImageUrl ? (
                  <img
                    className="ba-compare-image ba-compare-image-after"
                    src={afterImageUrl}
                    alt="After"
                  />
                ) : (
                  <div className="ba-compare-placeholder">
                    Upload after image
                  </div>
                )}

                <div
                  className="ba-compare-before-clip"
                  style={{ width: `${sliderPosition}%` }}
                >
                  {beforeImageUrl ? (
                    <img
                      className="ba-compare-image ba-compare-image-before"
                      src={beforeImageUrl}
                      alt="Before"
                    />
                  ) : (
                    <div className="ba-compare-placeholder">
                      Upload before image
                    </div>
                  )}
                </div>

                <input
                  type="range"
                  className="ba-compare-range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(event) =>
                    setAttributes({
                      sliderPosition: clamp(Number(event.target.value)),
                    })
                  }
                  aria-label="Comparison slider"
                />

                <div
                  className="ba-compare-divider"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="ba-compare-handle">
                    <span>||</span>
                  </div>
                </div>

                <div className="ba-compare-tag ba-compare-tag-before">
                  {beforeLabel}
                </div>
                <div className="ba-compare-tag ba-compare-tag-after">
                  {afterLabel}
                </div>
              </div>
            </div>

            <div className="ba-compare-legend">
              <p>{beforeLegend}</p>
              <p>{afterLegend}</p>
            </div>
          </div>
        </section>
      </>
    );
  },

  save() {
    return null;
  },
});
