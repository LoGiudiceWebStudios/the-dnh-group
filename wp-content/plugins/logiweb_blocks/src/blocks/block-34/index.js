import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import metadata from "./block.json";
import "../../global-styles.scss";

registerBlockType("logiweb/custom-block-34", {
  ...metadata,
  attributes: {
    badge: { type: "string", default: "FLEXIBLE PAYMENT OPTIONS" },
    badgeIcon: { type: "string", default: "fa-regular fa-circle-check" },
    titleStart: { type: "string", default: "Financing Made" },
    titleHighlight: { type: "string", default: "Simple" },
    description: {
      type: "string",
      default:
        "Transform your home without the stress. Our flexible financing options make it easy to get the improvements you need with payments that fit your budget.",
    },
    primaryText: { type: "string", default: "Apply Now" },
    primaryUrl: { type: "string", default: "#" },
    secondaryText: { type: "string", default: "Check Eligibility" },
    secondaryUrl: { type: "string", default: "#" },
  },

  edit: ({ attributes, setAttributes }) => {
    const {
      badge,
      badgeIcon,
      titleStart,
      titleHighlight,
      description,
      primaryText,
      primaryUrl,
      secondaryText,
      secondaryUrl,
    } = attributes;

    const hasPrimaryText = Boolean((primaryText || "").trim());
    const hasSecondaryText = Boolean((secondaryText || "").trim());
    const blockProps = useBlockProps({ className: "financing-hero-editor" });

    return (
      <div {...blockProps}>
        <InspectorControls>
          <PanelBody title="Banner Content" initialOpen={true}>
            <TextControl
              label="Badge Icon Class"
              value={badgeIcon}
              onChange={(value) => setAttributes({ badgeIcon: value })}
            />
            <TextControl
              label="Primary Button URL"
              value={primaryUrl}
              onChange={(value) => setAttributes({ primaryUrl: value })}
            />
            <TextControl
              label="Secondary Button URL"
              value={secondaryUrl}
              onChange={(value) => setAttributes({ secondaryUrl: value })}
            />
          </PanelBody>
        </InspectorControls>

        <section className="financing-hero-block">
          <div className="financing-hero-inner">
            <p className="financing-hero-badge">
              <i className={badgeIcon}></i>
              <RichText
                tagName="span"
                value={badge}
                onChange={(value) => setAttributes({ badge: value })}
                placeholder="Badge"
              />
            </p>

            <h2 className="financing-hero-title">
              <RichText
                tagName="span"
                value={titleStart}
                onChange={(value) => setAttributes({ titleStart: value })}
                placeholder="Financing Made"
              />{" "}
              <span className="financing-hero-highlight">
                <RichText
                  tagName="span"
                  value={titleHighlight}
                  onChange={(value) => setAttributes({ titleHighlight: value })}
                  placeholder="Simple"
                />
              </span>
            </h2>

            <RichText
              tagName="p"
              className="financing-hero-description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder="Add financing description"
            />

            {(hasPrimaryText || hasSecondaryText) && (
              <div className="financing-hero-actions">
                {hasPrimaryText && (
                  <span className="financing-hero-btn primary" role="button">
                    <RichText
                      tagName="span"
                      value={primaryText}
                      onChange={(value) =>
                        setAttributes({ primaryText: value })
                      }
                      placeholder="Primary button text"
                    />
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                )}
                {hasSecondaryText && (
                  <span className="financing-hero-btn secondary" role="button">
                    <RichText
                      tagName="span"
                      value={secondaryText}
                      onChange={(value) =>
                        setAttributes({ secondaryText: value })
                      }
                      placeholder="Secondary button text"
                    />
                  </span>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const {
      badge,
      badgeIcon,
      titleStart,
      titleHighlight,
      description,
      primaryText,
      primaryUrl,
      secondaryText,
      secondaryUrl,
    } = attributes;

    const hasPrimaryText = Boolean((primaryText || "").trim());
    const hasSecondaryText = Boolean((secondaryText || "").trim());

    return (
      <section className="financing-hero-block">
        <div className="financing-hero-inner">
          <p className="financing-hero-badge">
            <i className={badgeIcon}></i>
            {badge}
          </p>

          <h2 className="financing-hero-title">
            <RichText.Content value={titleStart} />{" "}
            <span className="financing-hero-highlight">
              <RichText.Content value={titleHighlight} />
            </span>
          </h2>

          <RichText.Content
            tagName="p"
            className="financing-hero-description"
            value={description}
          />

          {(hasPrimaryText || hasSecondaryText) && (
            <div className="financing-hero-actions">
              {hasPrimaryText && (
                <a
                  className="financing-hero-btn primary"
                  href={primaryUrl || "#"}
                >
                  <span>{primaryText}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}
              {hasSecondaryText && (
                <a
                  className="financing-hero-btn secondary"
                  href={secondaryUrl || "#"}
                >
                  {secondaryText}
                </a>
              )}
            </div>
          )}
        </div>
      </section>
    );
  },
});
