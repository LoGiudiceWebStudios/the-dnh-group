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
  TextareaControl,
  Button,
} from "@wordpress/components";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_REGIONS = [
  {
    title: "Louisville Metro Area",
    description:
      "The largest metro in Kentucky - from downtown Louisville to the eastern suburbs and across the Ohio River.",
    cities: ["Louisville", "Jeffersontown", "St. Matthews", "Prospect"],
    imageUrl:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Bluegrass Region",
    description:
      "The heart of horse country - rolling bluegrass hills, historic estates, and thriving communities.",
    cities: ["Lexington", "Georgetown", "Richmond", "Frankfort"],
    imageUrl:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Northern Kentucky",
    description:
      "The riverfront gateway - vibrant communities along the Ohio River with stunning Cincinnati skyline views.",
    cities: ["Covington", "Newport", "Florence", "Fort Thomas"],
    imageUrl:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Southern & Western Region",
    description:
      "From the caves of Bowling Green to the banks of the Ohio - we cover every corner of western and southern Kentucky.",
    cities: ["Bowling Green", "Owensboro", "Paducah", "Elizabethtown"],
    imageUrl:
      "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=1400&q=80",
  },
];

registerBlockType("logiweb/custom-block-74", {
  ...metadata,
  attributes: {
    badgeText: { type: "string", default: "Where We Work" },
    titleStart: { type: "string", default: "Service Coverage" },
    titleHighlight: { type: "string", default: "Across Kentucky" },
    description: {
      type: "string",
      default:
        "Four strategic regions. One standard of excellence. From the Ohio River to the Tennessee border.",
    },
    regions: { type: "array", default: DEFAULT_REGIONS },
  },

  edit({ attributes, setAttributes }) {
    const { badgeText, titleStart, titleHighlight, description, regions } =
      attributes;
    const safeRegions =
      Array.isArray(regions) && regions.length ? regions : DEFAULT_REGIONS;
    const blockProps = useBlockProps({
      className: "kentucky-coverage-grid-block",
    });

    const updateRegion = (index, patch) => {
      const next = safeRegions.map((region, regionIndex) =>
        regionIndex === index ? { ...region, ...patch } : region,
      );
      setAttributes({ regions: next });
    };

    const renderCards = () =>
      safeRegions.map((region, index) => (
        <article className="kentucky-coverage-grid-card" key={index}>
          <div
            className="kentucky-coverage-grid-card-media"
            style={
              region.imageUrl
                ? { backgroundImage: `url(${region.imageUrl})` }
                : {}
            }
          >
            <h3>{region.title}</h3>
          </div>
          <div className="kentucky-coverage-grid-card-body">
            <p>{region.description}</p>
            <div className="kentucky-coverage-grid-tags">
              {(region.cities || []).map((city, cityIndex) => (
                <span key={`${city}-${cityIndex}`}>{city}</span>
              ))}
            </div>
          </div>
        </article>
      ));

    return (
      <>
        <InspectorControls>
          <PanelBody title="Section Header" initialOpen={true}>
            <TextControl
              label="Badge"
              value={badgeText}
              onChange={(value) => setAttributes({ badgeText: value })}
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

          {safeRegions.map((region, index) => (
            <PanelBody
              key={index}
              title={`Region ${index + 1}`}
              initialOpen={false}
            >
              <TextControl
                label="Region title"
                value={region.title || ""}
                onChange={(value) => updateRegion(index, { title: value })}
              />
              <TextareaControl
                label="Region description"
                value={region.description || ""}
                onChange={(value) =>
                  updateRegion(index, { description: value })
                }
              />
              <TextControl
                label="Cities (comma separated)"
                value={(region.cities || []).join(", ")}
                onChange={(value) =>
                  updateRegion(index, {
                    cities: value
                      .split(",")
                      .map((item) => item.trim())
                      .filter(Boolean),
                  })
                }
              />
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) =>
                    updateRegion(index, { imageUrl: media.url || "" })
                  }
                  allowedTypes={["image"]}
                  render={({ open }) => (
                    <Button isSecondary onClick={open}>
                      {region.imageUrl ? "Change image" : "Select image"}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
            </PanelBody>
          ))}
        </InspectorControls>

        <section {...blockProps}>
          <div className="kentucky-coverage-grid-inner">
            <div className="kentucky-coverage-grid-header">
              <p className="kentucky-coverage-grid-badge">
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                <span>{badgeText}</span>
              </p>
              <h2 className="kentucky-coverage-grid-title">
                {titleStart} <span>{titleHighlight}</span>
              </h2>
              <RichText
                tagName="p"
                className="kentucky-coverage-grid-description"
                value={description}
                onChange={(value) => setAttributes({ description: value })}
                placeholder="Section description"
              />
            </div>
            <div className="kentucky-coverage-grid-cards">{renderCards()}</div>
          </div>
        </section>
      </>
    );
  },

  save({ attributes }) {
    const { badgeText, titleStart, titleHighlight, description, regions } =
      attributes;
    const safeRegions =
      Array.isArray(regions) && regions.length ? regions : DEFAULT_REGIONS;
    const blockProps = useBlockProps.save({
      className: "kentucky-coverage-grid-block",
    });

    return (
      <section {...blockProps}>
        <div className="kentucky-coverage-grid-inner">
          <div className="kentucky-coverage-grid-header">
            <p className="kentucky-coverage-grid-badge">
              <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
              <span>{badgeText}</span>
            </p>
            <h2 className="kentucky-coverage-grid-title">
              {titleStart} <span>{titleHighlight}</span>
            </h2>
            <p className="kentucky-coverage-grid-description">{description}</p>
          </div>
          <div className="kentucky-coverage-grid-cards">
            {safeRegions.map((region, index) => (
              <article className="kentucky-coverage-grid-card" key={index}>
                <div
                  className="kentucky-coverage-grid-card-media"
                  style={
                    region.imageUrl
                      ? { backgroundImage: `url(${region.imageUrl})` }
                      : {}
                  }
                >
                  <h3>{region.title}</h3>
                </div>
                <div className="kentucky-coverage-grid-card-body">
                  <p>{region.description}</p>
                  <div className="kentucky-coverage-grid-tags">
                    {(region.cities || []).map((city, cityIndex) => (
                      <span key={`${city}-${cityIndex}`}>{city}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
