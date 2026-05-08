import { registerBlockType } from "@wordpress/blocks";
import {
  RichText,
  MediaUpload,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button, SelectControl } from "@wordpress/components";
import { URLInput } from "@wordpress/block-editor";
import "../../global-styles.scss";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-2", {
  title: "Custom Block 2",
  icon: "smiley",
  category: "widgets",
  attributes: {
    subtitle: { type: "string" },
    title: { type: "string" },
    description: { type: "string" },
    backgroundImage: {
      type: "string",
      default:
        window.location.origin +
        "/wp-content/plugins/logiweb_blocks/assets/Placeholder_Image_4.png",
    },
    imagePosition: {
      type: "string",
      default: "right", // "right" or "left"
    },
    primary_btn_text: { type: "string", default: "Learn More" },
    primary_btn_link: { type: "string" },
    tertiary_btn_text: { type: "string", default: "Get Started" },
    tertiary_btn_link: { type: "string" },
  },
  edit: ({ attributes, setAttributes }) => {
    const {
      subtitle,
      title,
      description,
      backgroundImage,
      imagePosition,
      primary_btn_link,
      primary_btn_text,
      tertiary_btn_text,
      tertiary_btn_link,
    } = attributes;

    const onSelectImage = (media) => {
      setAttributes({ backgroundImage: media.url });
    };

    // Costruisci dinamicamente la struttura in base alla posizione selezionata
    const ContainerLeft = (
      <div className="container-left">
        <RichText
          tagName="div"
          className="subtitle"
          value={subtitle}
          onChange={(value) => setAttributes({ subtitle: value })}
          placeholder="Add subtitle"
        />
        <RichText
          tagName="div"
          className="title"
          value={title}
          onChange={(value) => setAttributes({ title: value })}
          placeholder="Add title"
        />
        <RichText
          tagName="div"
          className="description"
          value={description}
          onChange={(value) => setAttributes({ description: value })}
          placeholder="Add description"
        />
        <InspectorControls>
          <PanelBody title="Primary Button Settings">
            <TextControl
              label="Button Text"
              value={primary_btn_text}
              onChange={(value) =>
                setAttributes({ primary_btn_text: value })
              }
            />
            <URLInput
              label="Button Link"
              value={primary_btn_link}
              onChange={(value) =>
                setAttributes({ primary_btn_link: value })
              }
            />
          </PanelBody>
        </InspectorControls>

        <InspectorControls>
          <PanelBody title="Tertiary Button Settings">
            <TextControl
              label="Button Text"
              value={tertiary_btn_text}
              onChange={(value) =>
                setAttributes({ tertiary_btn_text: value })
              }
            />
            <URLInput
              label="Button Link"
              value={tertiary_btn_link}
              onChange={(value) =>
                setAttributes({ tertiary_btn_link: value })
              }
            />
          </PanelBody>
        </InspectorControls>
        <div className="buttons">
          <RichText
            tagName="button"
            className="btn-primary"
            value={primary_btn_text}
            onChange={(value) => setAttributes({ primary_btn_text: value })}
            placeholder="Button Text"
            href={primary_btn_link}
          />

          <RichText
            tagName="button"
            className="btn-tertiary"
            value={tertiary_btn_text}
            onChange={(value) =>
              setAttributes({ tertiary_btn_text: value })
            }
            placeholder="Button Text"
            href={tertiary_btn_link}
          />
        </div>
      </div>
    );

    const ContainerRight = (
      <div
        className="container-right"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <img
          src={backgroundImage}
          alt="Block Image"
        />
      </div>
    );

    return (
      <>
        <InspectorControls>
          <PanelBody title="Image Settings">
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={["image"]}
              value={backgroundImage}
              render={({ open }) => (
                <Button onClick={open}>Select Image</Button>
              )}
            />
            <SelectControl
              label="Image Position (desktop)"
              value={imagePosition}
              options={[
                { label: "Right", value: "right" },
                { label: "Left", value: "left" },
              ]}
              onChange={(value) => setAttributes({ imagePosition: value })}
              help="Scegli la posizione dell'immagine in versione desktop."
            />
          </PanelBody>
        </InspectorControls>
        <div className="section-container section-type-2">
          {imagePosition === "left" ? (
            <>
              {ContainerRight}
              {ContainerLeft}
            </>
          ) : (
            <>
              {ContainerLeft}
              {ContainerRight}
            </>
          )}
        </div>
      </>
    );
  },

  save: ({ attributes }) => {
    const {
      subtitle,
      title,
      description,
      backgroundImage,
      imagePosition,
      primary_btn_link,
      primary_btn_text,
      tertiary_btn_text,
      tertiary_btn_link,
    } = attributes;

    // Costruisci dinamicamente la struttura in base alla posizione selezionata
    const ContainerLeft = (
      <div className="container-left">
        <div className="subtitle">{subtitle}</div>
        <div className="title">{title}</div>
        <div className="description">
          <RichText.Content value={description} tagName="div" />
        </div>
        <div className="buttons">
          {primary_btn_text && (
              <a className="btn-primary" href={primary_btn_link}>
                  {primary_btn_text}
              </a>
          )}
          {tertiary_btn_text && (
              <a className="btn-tertiary" href={tertiary_btn_link}>
                  {tertiary_btn_text} <span className="material-symbols-outlined notranslate">chevron_right</span>
              </a>
          )}
        </div>
      </div>
    );

    const ContainerRight = (
      <div
        className="container-right"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <img
          src={backgroundImage}
          alt="Block Image"
        />
      </div>
    );

    return (
      <div
        className={`section-container section-type-2 image-position-${imagePosition}`}
      >
        {imagePosition === "left" ? (
          <>
            {ContainerRight}
            {ContainerLeft}
          </>
        ) : (
          <>
            {ContainerLeft}
            {ContainerRight}
          </>
        )}
      </div>
    );
  },
});