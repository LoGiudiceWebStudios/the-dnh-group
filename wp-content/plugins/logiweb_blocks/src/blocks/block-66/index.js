import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  RangeControl,
  ToggleControl,
  TextControl,
} from "@wordpress/components";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-66", {
  ...metadata,

  edit({ attributes, setAttributes }) {
    const { postsPerPage, showExcerpt, showAuthor, showReadTime, filterLabel } =
      attributes;

    const demoTabs = [
      { label: "All", count: 8, active: false },
      { label: "Case Studies", count: 2, active: true },
      { label: "Design Trends", count: 2, active: false },
      { label: "Painting & Prep", count: 2, active: false },
      { label: "Remodeling Guides", count: 2, active: false },
    ];
    const demoCards = [
      {
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
        tag: "Case Studies",
        title: "Kitchen Remodel: From Outdated to Outstanding",
        excerpt:
          "A complete kitchen renovation in Indian Hill — custom cabinets, quartz countertops, and a layout that finall…",
        author: "David Chen",
        readTime: "10 min read",
      },
    ];

    return (
      <>
        <InspectorControls>
          <PanelBody title="Block Settings" initialOpen={true}>
            <RangeControl
              label="Posts per page"
              value={postsPerPage}
              onChange={(val) => setAttributes({ postsPerPage: val })}
              min={1}
              max={24}
            />
            <TextControl
              label='"All" tab label'
              value={filterLabel}
              onChange={(val) => setAttributes({ filterLabel: val })}
            />
            <ToggleControl
              label="Show excerpt"
              checked={showExcerpt}
              onChange={(val) => setAttributes({ showExcerpt: val })}
            />
            <ToggleControl
              label="Show author"
              checked={showAuthor}
              onChange={(val) => setAttributes({ showAuthor: val })}
            />
            <ToggleControl
              label="Show read time"
              checked={showReadTime}
              onChange={(val) => setAttributes({ showReadTime: val })}
            />
          </PanelBody>
        </InspectorControls>

        <section className="blog-filter-block">
          <div className="blog-filter-tabs">
            {demoTabs.map((tab, i) => (
              <button
                key={i}
                className={`blog-filter-tab ${tab.active ? "blog-filter-tab--active" : ""}`}
              >
                {tab.label}{" "}
                <span className="blog-filter-tab-count">{tab.count}</span>
              </button>
            ))}
          </div>

          {demoCards.map((card, i) => {
            const groupLabel =
              demoTabs.find((t) => t.active)?.label || filterLabel;
            return (
              <div key={i}>
                <div className="blog-filter-group-header">
                  <h2 className="blog-filter-group-title">{groupLabel}</h2>
                  <span className="blog-filter-group-count">
                    {demoTabs.find((t) => t.active)?.count || 0} articles
                  </span>
                </div>
                <div className="blog-filter-grid">
                  <article className="blog-filter-card">
                    <div
                      className="blog-filter-card-image"
                      style={{ backgroundImage: `url(${card.image})` }}
                    >
                      <span className="blog-filter-card-badge">{card.tag}</span>
                    </div>
                    <div className="blog-filter-card-body">
                      <h3 className="blog-filter-card-title">{card.title}</h3>
                      {showExcerpt && (
                        <p className="blog-filter-card-excerpt">
                          {card.excerpt}
                        </p>
                      )}
                      <div className="blog-filter-card-meta">
                        {showAuthor && (
                          <span className="blog-filter-card-author">
                            <i className="fa fa-user"></i> {card.author}
                          </span>
                        )}
                        {showReadTime && (
                          <span className="blog-filter-card-readtime">
                            <i className="fa fa-clock-o"></i> {card.readTime}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            );
          })}

          <p className="blog-filter-editor-note">
            ⚙ Posts are fetched dynamically from WordPress. Use the inspector to
            configure display options.
          </p>
        </section>
      </>
    );
  },

  save() {
    return null;
  },
});
