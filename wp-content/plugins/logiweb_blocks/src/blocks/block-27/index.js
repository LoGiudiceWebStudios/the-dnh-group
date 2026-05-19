import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
} from "@wordpress/block-editor";
import { Button, PanelBody, TextControl } from "@wordpress/components";
import { useMemo, useState } from "@wordpress/element";
import "../../global-styles.scss";
import metadata from "./block.json";

const DEFAULT_MEMBERS = [
  {
    name: "David Harrison",
    role: "Founder & CEO",
    department: "Leadership",
    experience: "40+ Years Experience",
    about:
      "David founded DNH Group in 1980 with a vision to provide honest, quality home improvement services.",
    specialties:
      "Strategic Leadership, Business Development, Customer Relations",
    certifications: "Licensed General Contractor, EPA Lead-Safe Certified",
    email: "david@dnhgroup.com",
    phone: "(555) 123-4501",
    photoUrl: "",
    imageUrl: "",
    imageAlt: "David Harrison",
  },
  {
    name: "Michael Harrison",
    role: "President & COO",
    department: "Leadership",
    experience: "24+ Years Experience",
    about:
      "Michael oversees company operations and ensures every project meets DNH Group quality standards.",
    specialties: "Operational Excellence, Team Leadership",
    certifications: "Licensed General Contractor",
    email: "michael@dnhgroup.com",
    phone: "(555) 123-4502",
    photoUrl: "",
    imageUrl: "",
    imageAlt: "Michael Harrison",
  },
  {
    name: "Sarah Harrison-Cohen",
    role: "Vice President of Sales",
    department: "Sales",
    experience: "18+ Years Experience",
    about:
      "Sarah leads the sales strategy and guides homeowners through the renovation planning process.",
    specialties: "Sales Strategy, Client Advisory",
    certifications: "Certified Home Improvement Consultant",
    email: "sarah@dnhgroup.com",
    phone: "(555) 123-4503",
    photoUrl: "",
    imageUrl: "",
    imageAlt: "Sarah Harrison-Cohen",
  },
  {
    name: "James Rodriguez",
    role: "Director of Operations",
    department: "Operations",
    experience: "15+ Years Experience",
    about:
      "James manages field execution, timelines and quality control across projects.",
    specialties: "Project Coordination, Quality Assurance",
    certifications: "OSHA 30, EPA Lead-Safe Certified",
    email: "james@dnhgroup.com",
    phone: "(555) 123-4504",
    photoUrl: "",
    imageUrl: "",
    imageAlt: "James Rodriguez",
  },
];

const DEFAULT_FILTERS = [
  "All",
  "Leadership",
  "Operations",
  "Sales",
  "Project Management",
  "Painting",
  "Remodeling",
  "Roofing",
];

const getMemberImageUrl = (member) =>
  member?.photoUrl || member?.imageUrl || "";

registerBlockType("logiweb/custom-block-27", {
  ...metadata,
  attributes: {
    filters: {
      type: "array",
      default: DEFAULT_FILTERS,
    },
    members: {
      type: "array",
      default: DEFAULT_MEMBERS,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { filters, members } = attributes;
    const [activeFilter, setActiveFilter] = useState(filters[0] || "All");

    const updateFilter = (index, value) => {
      const next = [...filters];
      next[index] = value;
      setAttributes({ filters: next });
      if (index === 0 && activeFilter === "All" && value) {
        setActiveFilter(value);
      }
    };

    const addFilter = () => {
      setAttributes({ filters: [...filters, "New Department"] });
    };

    const removeFilter = (index) => {
      if (filters.length <= 1) {
        return;
      }
      const toRemove = filters[index];
      const next = filters.filter((_, i) => i !== index);
      setAttributes({ filters: next });
      if (activeFilter === toRemove) {
        setActiveFilter(next[0] || "All");
      }
    };

    const updateMember = (index, field, value) => {
      const next = [...members];
      next[index] = {
        ...next[index],
        [field]: value,
      };
      setAttributes({ members: next });
    };

    const updateMemberPhoto = (index, media) => {
      if (!media?.url) {
        return;
      }

      const next = [...members];
      next[index] = {
        ...next[index],
        photoUrl: media.url,
        imageUrl: media.url,
        imageAlt: media.alt || media.title || "Team member",
      };
      setAttributes({ members: next });
    };

    const addMember = () => {
      setAttributes({
        members: [
          ...members,
          {
            name: "New Member",
            role: "Team Role",
            department: "Operations",
            experience: "10+ Years Experience",
            about: "Write a short professional bio.",
            specialties: "Specialty 1, Specialty 2",
            certifications: "Certification 1",
            email: "member@company.com",
            phone: "(555) 123-4567",
            photoUrl: "",
            imageUrl: "",
            imageAlt: "New Member",
          },
        ],
      });
    };

    const removeMember = (index) => {
      if (members.length <= 1) {
        return;
      }
      setAttributes({
        members: members.filter((_, i) => i !== index),
      });
    };

    const visibleMembers = useMemo(() => {
      const normalized = (activeFilter || "").trim().toLowerCase();
      if (!normalized || normalized === "all") {
        return members;
      }
      return members.filter((member) => {
        const dep = (member.department || "").trim().toLowerCase();
        return dep === normalized;
      });
    }, [activeFilter, members]);

    return (
      <div className="team-members-editor">
        <InspectorControls>
          <PanelBody title={`Filters (${filters.length})`} initialOpen={true}>
            {filters.map((filter, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "0.8rem",
                  paddingBottom: "0.8rem",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <TextControl
                  label={`Filter ${index + 1}`}
                  value={filter}
                  onChange={(value) => updateFilter(index, value)}
                />
                <Button
                  isSecondary
                  isDestructive
                  isSmall
                  disabled={filters.length <= 1}
                  onClick={() => removeFilter(index)}
                >
                  Remove filter
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addFilter}>
              Add filter
            </Button>
          </PanelBody>

          <PanelBody title={`Members (${members.length})`} initialOpen={false}>
            {members.map((member, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "1.2rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) => updateMemberPhoto(index, media)}
                    allowedTypes={["image"]}
                    render={({ open }) => (
                      <Button onClick={open} isSecondary>
                        {getMemberImageUrl(member)
                          ? "Change image"
                          : "Add image"}
                      </Button>
                    )}
                  />
                </MediaUploadCheck>
                {getMemberImageUrl(member) ? (
                  <div className="team-member-controls-preview">
                    <img
                      src={getMemberImageUrl(member)}
                      alt={member.imageAlt || member.name}
                      className="team-member-controls-preview-image"
                    />
                  </div>
                ) : null}

                <TextControl
                  label="Name"
                  value={member.name}
                  onChange={(value) => updateMember(index, "name", value)}
                />
                <TextControl
                  label="Role"
                  value={member.role}
                  onChange={(value) => updateMember(index, "role", value)}
                />
                <TextControl
                  label="Department (must match a filter label)"
                  value={member.department}
                  onChange={(value) => updateMember(index, "department", value)}
                />
                <TextControl
                  label="Experience"
                  value={member.experience}
                  onChange={(value) => updateMember(index, "experience", value)}
                />
                <TextControl
                  label="About"
                  value={member.about || ""}
                  onChange={(value) => updateMember(index, "about", value)}
                />
                <TextControl
                  label="Specialties (comma separated)"
                  value={member.specialties || ""}
                  onChange={(value) =>
                    updateMember(index, "specialties", value)
                  }
                />
                <TextControl
                  label="Certifications (comma separated)"
                  value={member.certifications || ""}
                  onChange={(value) =>
                    updateMember(index, "certifications", value)
                  }
                />
                <TextControl
                  label="Email"
                  value={member.email || ""}
                  onChange={(value) => updateMember(index, "email", value)}
                />
                <TextControl
                  label="Phone"
                  value={member.phone || ""}
                  onChange={(value) => updateMember(index, "phone", value)}
                />
                <TextControl
                  label="Image alt"
                  value={member.imageAlt}
                  onChange={(value) => updateMember(index, "imageAlt", value)}
                />
                <Button
                  isSecondary
                  isDestructive
                  isSmall
                  disabled={members.length <= 1}
                  onClick={() => removeMember(index)}
                >
                  Remove member
                </Button>
              </div>
            ))}
            <Button isPrimary isSmall onClick={addMember}>
              Add member
            </Button>
          </PanelBody>
        </InspectorControls>

        <section className="team-members-block">
          <div
            className="team-members-filters"
            role="tablist"
            aria-label="Team filters"
          >
            {filters.map((filter, index) => (
              <button
                key={index}
                type="button"
                className={`team-filter-pill ${
                  (activeFilter || "").toLowerCase() ===
                  (filter || "").toLowerCase()
                    ? "is-active"
                    : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="team-members-grid">
            {visibleMembers.map((member, index) => (
              <article key={index} className="team-member-card">
                <div className="team-member-media">
                  {getMemberImageUrl(member) ? (
                    <img
                      src={getMemberImageUrl(member)}
                      alt={member.imageAlt || member.name}
                      className="team-member-image"
                    />
                  ) : (
                    <div className="team-member-image team-member-image-placeholder">
                      Add image
                    </div>
                  )}
                  <span className="team-member-department">
                    {member.department}
                  </span>
                  <div className="team-member-hover-action">
                    <button
                      type="button"
                      className="team-member-view-profile-btn"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
                <div className="team-member-content">
                  <RichText
                    tagName="h3"
                    className="team-member-name"
                    value={member.name}
                    onChange={(value) => updateMember(index, "name", value)}
                    placeholder="Member name"
                  />
                  <RichText
                    tagName="p"
                    className="team-member-role"
                    value={member.role}
                    onChange={(value) => updateMember(index, "role", value)}
                    placeholder="Member role"
                  />
                  <p className="team-member-experience">
                    <i className="fa-regular fa-user"></i>
                    {member.experience}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    );
  },

  save: ({ attributes }) => {
    const { filters, members } = attributes;

    return (
      <section
        className="team-members-block fade-in-on-scroll"
        data-team-members
      >
        <div
          className="team-members-filters"
          role="tablist"
          aria-label="Team filters"
        >
          {filters.map((filter, index) => (
            <button
              key={index}
              type="button"
              className={`team-filter-pill ${index === 0 ? "is-active" : ""}`}
              data-team-filter={filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="team-members-grid" data-team-grid>
          {members.map((member, index) => (
            <article
              key={index}
              className="team-member-card"
              data-team-member
              data-team-department={member.department || ""}
              data-team-name={member.name || ""}
              data-team-role={member.role || ""}
              data-team-experience={member.experience || ""}
              data-team-about={member.about || ""}
              data-team-specialties={member.specialties || ""}
              data-team-certifications={member.certifications || ""}
              data-team-email={member.email || ""}
              data-team-phone={member.phone || ""}
              data-team-image={getMemberImageUrl(member)}
              data-team-image-alt={
                member.imageAlt || member.name || "Team member"
              }
            >
              <div className="team-member-media">
                {getMemberImageUrl(member) ? (
                  <img
                    src={getMemberImageUrl(member)}
                    alt={member.imageAlt || member.name}
                    className="team-member-image"
                  />
                ) : null}
                <span className="team-member-department">
                  {member.department}
                </span>
                <div className="team-member-hover-action">
                  <button
                    type="button"
                    className="team-member-view-profile-btn"
                    data-team-view-profile
                  >
                    View Profile
                  </button>
                </div>
              </div>
              <div className="team-member-content">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-experience">
                  <i className="fa-regular fa-user"></i>
                  {member.experience}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  },
});
