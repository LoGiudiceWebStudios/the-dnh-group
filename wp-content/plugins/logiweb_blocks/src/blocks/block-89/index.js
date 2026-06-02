import { registerBlockType } from "@wordpress/blocks";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import "../../global-styles.scss";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  ...metadata,
  attributes: {
    subtitle: {
      type: "string",
      default: "UNMATCHED SCALE. LOCAL PRESENCE.",
    },
    title: {
      type: "string",
      default:
        "With strategically stationed mobile crews and a fully-equipped service fleet, The DNH Group brings enterprise-level capabilities directly to your neighborhood, anywhere in Indiana.",
    },
    description: {
      type: "string",
      default:
        "From emergency storm repairs in Fort Wayne to luxury renovations in Carmel, our crews are never more than a phone call away. We have built a logistics network that ensures fast response times without compromising the quality craftsmanship that defines every DNH project.",
    },
  },

  edit({ attributes, setAttributes }) {
    const { subtitle, title, description } = attributes;

    const blockProps = useBlockProps({
      className: "indiana-local-presence-block",
    });

    return (
      <section {...blockProps}>
        <div className="indiana-local-presence-inner">
          <RichText
            tagName="p"
            className="indiana-local-presence-subtitle"
            value={subtitle}
            onChange={(value) => setAttributes({ subtitle: value })}
            placeholder="Subtitle"
          />

          <RichText
            tagName="h2"
            className="indiana-local-presence-title"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
            placeholder="Headline"
          />

          <RichText
            tagName="p"
            className="indiana-local-presence-description"
            value={description}
            onChange={(value) => setAttributes({ description: value })}
            placeholder="Description"
          />
        </div>
      </section>
    );
  },

  save({ attributes }) {
    const { subtitle, title, description } = attributes;

    return (
      <section className="indiana-local-presence-block">
        <div className="indiana-local-presence-inner">
          <p className="indiana-local-presence-subtitle">
            <RichText.Content value={subtitle} />
          </p>

          <h2 className="indiana-local-presence-title">
            <RichText.Content value={title} />
          </h2>

          <p className="indiana-local-presence-description">
            <RichText.Content value={description} />
          </p>
        </div>
      </section>
    );
  },
});
