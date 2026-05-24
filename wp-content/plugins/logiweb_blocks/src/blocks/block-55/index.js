import { registerBlockType } from "@wordpress/blocks";
import { RichText, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_CITIES = [
  "Cincinnati",
  "Columbus",
  "Cleveland",
  "Dayton",
  "Toledo",
  "Akron",
  "Canton",
  "Youngstown",
  "Hamilton",
  "Springfield",
  "Mansfield",
  "Lima",
  "Middletown",
  "Newark",
  "Dublin",
  "Beavercreek",
  "Fairfield",
  "Findlay",
];

registerBlockType("logiweb/custom-block-55", {
  ...metadata,
  attributes: {
    title: {
      type: "string",
      default: "Cities We Serve in Ohio",
    },
    description: {
      type: "string",
      default:
        "DNH Group provides services throughout Ohio. Find your city below.",
    },
    cities: {
      type: "array",
      default: DEFAULT_CITIES,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { title, description, cities = [] } = attributes;

    const updateCity = (index, value) => {
      const next = [...cities];
      next[index] = value;
      setAttributes({ cities: next });
    };

    const addCity = () => {
      setAttributes({ cities: [...cities, "New City"] });
    };

    const removeCity = (index) => {
      if (cities.length <= 1) {
        return;
      }
      setAttributes({ cities: cities.filter((_, i) => i !== index) });
    };

    return (
      <section className="cities-serve-block">
        <InspectorControls>
          <PanelBody title={`Cities (${cities.length})`} initialOpen={true}>
            {cities.map((city, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "10px",
                  borderBottom: "1px solid #e3e9f2",
                  paddingBottom: "10px",
                }}
              >
                <TextControl
                  label={`City ${index + 1}`}
                  value={city}
                  onChange={(value) => updateCity(index, value)}
                />
                <Button
                  isSecondary
                  isDestructive
                  isSmall
                  disabled={cities.length <= 1}
                  onClick={() => removeCity(index)}
                >
                  Remove city
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addCity}>
              Add city
            </Button>
          </PanelBody>
        </InspectorControls>

        <div className="cities-serve-inner">
          <RichText
            tagName="h2"
            className="cities-serve-title"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
            placeholder="Section title"
          />
          <RichText
            tagName="p"
            className="cities-serve-description"
            value={description}
            onChange={(value) => setAttributes({ description: value })}
            placeholder="Section description"
          />

          <div className="cities-serve-grid">
            {cities.map((city, index) => (
              <div className="cities-serve-pill" key={index}>
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },

  save: ({ attributes }) => {
    const { title, description, cities = [] } = attributes;

    return (
      <section
        className="cities-serve-block fade-in-on-scroll"
        data-block="cities-serve"
      >
        <div className="cities-serve-inner">
          <h2 className="cities-serve-title">{title}</h2>
          <p className="cities-serve-description">{description}</p>

          <div className="cities-serve-grid">
            {cities.map((city, index) => (
              <div className="cities-serve-pill" key={index}>
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
