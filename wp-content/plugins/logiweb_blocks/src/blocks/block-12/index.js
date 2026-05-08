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

registerBlockType("logiweb/custom-block-12", {
  title: "Three Boxes With Popups",
  icon: "feedback",
  category: "widgets",
  attributes: {
    boxes: {
      type: "array",
      default: [
        {
          title: "Box 1 Title",
          iconUrl: "",
          iconId: null,
          text: "Box 1 short text",
          popupTitle: "Box 1 Popup Title",
          popupText: "Box 1 popup detailed text."
        },
        {
          title: "Box 2 Title",
          iconUrl: "",
          iconId: null,
          text: "Box 2 short text",
          popupTitle: "Box 2 Popup Title",
          popupText: "Box 2 popup detailed text."
        },
        {
          title: "Box 3 Title",
          iconUrl: "",
          iconId: null,
          text: "Box 3 short text",
          popupTitle: "Box 3 Popup Title",
          popupText: "Box 3 popup detailed text."
        }
      ]
    }
  },

  edit: ({ attributes, setAttributes }) => {
    const { boxes } = attributes;
    const [openIndex, setOpenIndex] = useState(null);

    const updateBox = (index, field, value) => {
      const newBoxes = [...boxes];
      newBoxes[index][field] = value;
      setAttributes({ boxes: newBoxes });
    };

    const onSelectIcon = (index, media) => {
      updateBox(index, "iconUrl", media.url);
      updateBox(index, "iconId", media.id);
    };

    return (
      <div className="popup-boxes-row" style={{ display: "flex", gap: "2rem", justifyContent: "center", alignItems: "stretch" }}>
        <InspectorControls>
          <PanelBody title="Box Settings">
            {boxes.map((box, i) => (
              <div key={i} style={{ marginBottom: "2rem", borderBottom: "1px solid #eee", paddingBottom: "1rem" }}>
                <TextControl
                  label={`Box ${i + 1} Title`}
                  value={box.title}
                  onChange={(val) => updateBox(i, "title", val)}
                />
                <TextControl
                  label={`Box ${i + 1} Short Text`}
                  value={box.text}
                  onChange={(val) => updateBox(i, "text", val)}
                />
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) => onSelectIcon(i, media)}
                    allowedTypes={["image"]}
                    value={box.iconId}
                    render={({ open }) => (
                      <Button onClick={open} isSecondary>
                        {box.iconUrl ? "Change Icon" : "Upload Icon"}
                      </Button>
                    )}
                  />
                </MediaUploadCheck>
                <TextControl
                  label={`Box ${i + 1} Popup Title`}
                  value={box.popupTitle}
                  onChange={(val) => updateBox(i, "popupTitle", val)}
                />
                <TextControl
                  label={`Box ${i + 1} Popup Text`}
                  value={box.popupText}
                  onChange={(val) => updateBox(i, "popupText", val)}
                />
              </div>
            ))}
          </PanelBody>
        </InspectorControls>

        {boxes.map((box, i) => (
          <div
            key={i}
            className="popup-box"
            onClick={() => setOpenIndex(i)}
            data-popup-title={box.popupTitle}
            data-popup-text={box.popupText}
            data-popup-index={i}
          >
            {box.iconUrl && (
              <img src={box.iconUrl} alt="" style={{ width: 80, height: 80, margin: "0 auto 1rem auto" }} />
            )}
            <RichText
              tagName="h3"
              value={box.title}
              onChange={(val) => updateBox(i, "title", val)}
              style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0 0 1rem 0" }}
            />
            <RichText
              tagName="div"
              value={box.text}
              onChange={(val) => updateBox(i, "text", val)}
              style={{ fontSize: "1.1rem", color: "#222" }}
            />
            <span
              style={{
                position: "absolute",
                right: "1.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#1565a5",
                borderRadius: "0",
                width: "auto",
                height: "auto",
                background: "none",
                fontSize: "2.5rem",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >&#8250;</span>
            {/* Popup */}
            {openIndex === i && (
              <div
                className="popup-modal"
                style={{
                  position: "fixed",
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: "rgba(0,0,0,0.5)",
                  zIndex: 9999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onClick={() => setOpenIndex(null)}
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "24px",
                    padding: "2rem",
                    minWidth: "320px",
                    maxWidth: "90vw",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                    position: "relative"
                  }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "none",
                      border: "none",
                      fontSize: "2rem",
                      cursor: "pointer",
                      color: "#1565a5"
                    }}
                    onClick={() => setOpenIndex(null)}
                    aria-label="Close"
                  >&times;</button>
                  <h2 style={{ fontSize: "2rem", color: "#1565a5", marginBottom: "1rem" }}>{box.popupTitle}</h2>
                  <div style={{ fontSize: "1.2rem", color: "#222" }}>{box.popupText}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  },

  save: ({ attributes }) => {
    const { boxes } = attributes;
    return (
      <div className="popup-boxes-row">
        {boxes.map((box, i) => (
          <div
            key={i}
            className="popup-box"
            data-popup-title={box.popupTitle}
            data-popup-text={box.popupText}
            data-popup-index={i}
          >
            {box.iconUrl && (
              <img src={box.iconUrl} alt="" style={{ width: 80, height: 80, margin: "0 auto 1rem auto"}} />
            )}
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0 0 1rem 0" }}>{box.title}</h3>
            <div style={{ fontSize: "1.1rem", color: "#222" }}>{box.text}</div>
            <span style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              color: "#1565a5",
              borderRadius: "0 24px 24px 0",
              width: "32px",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem"
            }}>&#8250;</span>
          </div>
        ))}
        {/* Il popup viene gestito via JS nel frontend */}
      </div>
    );
  }
});
