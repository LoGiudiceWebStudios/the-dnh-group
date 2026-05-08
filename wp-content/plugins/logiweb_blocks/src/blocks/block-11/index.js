import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText
} from "@wordpress/block-editor";
import { PanelBody, Button, TextControl } from "@wordpress/components";
import { useState } from "@wordpress/element";
import "../../global-styles.scss";

registerBlockType("logiweb/custom-block-11", {
  title: "Three Boxes With Title",
  icon: "admin-site",
  category: "widgets",
  attributes: {
    mainTitle: { type: "string", default: "The Purelight Power Promise" },
    promises: {
      type: "array",
      default: [
        {
          iconUrl: "",
          iconId: null,
          title: "Transparency",
          description:
            "We never push hidden fees or contract tricks – you’ll be in the loop every step of the process. Purelight Power is dedicated to building a long term, long lasting relationship with you, our customer and neighbor."
        },
        {
          iconUrl: "",
          iconId: null,
          title: "Simplicity",
          description:
            "We strive to make the switch to solar simple and easy. To make the switch simple for homeowners, we manage every aspect of your installation. Solar can be stress-free from start to finish."
        },
        {
          iconUrl: "",
          iconId: null,
          title: "Quality",
          description:
            "We only use industry leading solar panels and technology. Our high-quality solar panels and web-enabled monitoring systems marry simplicity with longevity."
        }
      ]
    }
  },

  edit: ({ attributes, setAttributes }) => {
    const { mainTitle, promises } = attributes;

    const updatePromise = (index, field, value) => {
      const newPromises = [...promises];
      newPromises[index][field] = value;
      setAttributes({ promises: newPromises });
    };

    const onSelectIcon = (index, media) => {
      updatePromise(index, "iconUrl", media.url);
      updatePromise(index, "iconId", media.id);
    };

    return (
      <div className="promise-grid-block" style={{ background: "none", padding: "0" }}>
        <InspectorControls>
          <PanelBody title="Titolo principale">
            <TextControl
              label="Titolo principale"
              value={mainTitle}
              onChange={(val) => setAttributes({ mainTitle: val })}
            />
          </PanelBody>
          <PanelBody title="Box Promesse">
            {promises.map((promise, i) => (
              <div key={i} style={{ marginBottom: "2rem", borderBottom: "1px solid #eee", paddingBottom: "1rem" }}>
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) => onSelectIcon(i, media)}
                    allowedTypes={["image"]}
                    value={promise.iconId}
                    render={({ open }) => (
                      <Button onClick={open} isSecondary>
                        {promise.iconUrl ? "Cambia icona" : "Carica icona"}
                      </Button>
                    )}
                  />
                </MediaUploadCheck>
                <TextControl
                  label="Titolo"
                  value={promise.title}
                  onChange={(val) => updatePromise(i, "title", val)}
                />
                <TextControl
                  label="Descrizione"
                  value={promise.description}
                  onChange={(val) => updatePromise(i, "description", val)}
                />
              </div>
            ))}
          </PanelBody>
        </InspectorControls>

        <div className="promise-grid-content" style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          alignItems: "flex-start",
          justifyContent: "center"
        }}>
          <div className="promise-main-title-col" style={{
            flex: "1 1 320px",
            minWidth: 260,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <RichText
              tagName="h2"
              className="promise-main-title"
              value={mainTitle}
              onChange={(val) => setAttributes({ mainTitle: val })}
              style={{
                fontWeight: "bold",
                fontSize: "3rem",
                lineHeight: "1.1",
                margin: 0,
                textAlign: "left"
              }}
            />
          </div>
          <div className="promise-boxes" style={{
            flex: "2 1 600px",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "flex-start"
          }}>
            {promises.map((promise, i) => (
              <div
                key={i}
                className="promise-box"
                style={{
                  background: "#f4f6f8",
                  borderRadius: "24px",
                  padding: "2rem",
                  minWidth: "320px",
                  maxWidth: "420px",
                  flex: "1 1 320px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  boxShadow: "none"
                }}
              >
                {promise.iconUrl && (
                  <img
                    src={promise.iconUrl}
                    alt=""
                    style={{ width: 48, height: 48, marginBottom: "1rem" }}
                  />
                )}
                <RichText
                  tagName="h3"
                  className="promise-title"
                  value={promise.title}
                  onChange={(val) => updatePromise(i, "title", val)}
                  style={{
                    color: "#6eb1be",
                    fontWeight: "bold",
                    fontSize: "2rem",
                    margin: 0,
                    marginBottom: "0.5rem"
                  }}
                />
                <RichText
                  tagName="div"
                  className="promise-description"
                  value={promise.description}
                  onChange={(val) => updatePromise(i, "description", val)}
                  style={{
                    color: "#222",
                    fontWeight: "400",
                    fontSize: "1rem",
                    margin: 0
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },

  save: ({ attributes }) => {
    const { mainTitle, promises } = attributes;
    return (
      <div className="promise-section">
        <div className="promise-row promise-row--top">
          <div className="promise-title-col">
            <h2 className="promise-title">{mainTitle}</h2>
          </div>
          <div className="promise-box promise-box--top">
            {promises[0]?.iconUrl && (
              <img src={promises[0].iconUrl} alt="" className="promise-icon" />
            )}
            <h3 className="promise-box-title">{promises[0]?.title}</h3>
            <div className="promise-box-desc">{promises[0]?.description}</div>
          </div>
        </div>
        <div className="promise-row promise-row--bottom">
          <div className="promise-box">
            {promises[1]?.iconUrl && (
              <img src={promises[1].iconUrl} alt="" className="promise-icon" />
            )}
            <h3 className="promise-box-title">{promises[1]?.title}</h3>
            <div className="promise-box-desc">{promises[1]?.description}</div>
          </div>
          <div className="promise-box">
            {promises[2]?.iconUrl && (
              <img src={promises[2].iconUrl} alt="" className="promise-icon" />
            )}
            <h3 className="promise-box-title">{promises[2]?.title}</h3>
            <div className="promise-box-desc">{promises[2]?.description}</div>
          </div>
        </div>
      </div>
    );
  }
});
