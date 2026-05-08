import { registerBlockType } from "@wordpress/blocks";
import {
  RichText,
  MediaUpload,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import { URLInput } from "@wordpress/block-editor";
import "../../global-styles.scss";
import metadata from "./block.json";

registerBlockType("logiweb/custom-block-7", {
  title: "Team Members",
  icon: "admin-site",
  category: "widgets",
  attributes: {
    subtitle: {
      type: "string",
      default: "",
    },
    title: {
      type: "string",
      default: "",
    },
    description: {
      type: "string",
      default: "",
    },
    members: {
      type: "array",
      default: [],
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const { subtitle, title, description, members } = attributes;

    const addMember = () => {
      const newMember = {
        photoUrl: "",
        name: "",
        role: "",
        memberdescription: "",
      };
      setAttributes({
        members: [...members, newMember],
      });
    };

    const removeMember = (indexToRemove) => {
      const newMembers = members.filter((_, idx) => idx !== indexToRemove);
      setAttributes({ members: newMembers });
    };

    const updateMemberName = (index, name) => {
      const newMembers = [...members];
      newMembers[index].name = name;
      setAttributes({ members: newMembers });
    };

    const updateMemberRole = (index, role) => {
      const newMembers = [...members];
      newMembers[index].role = role;
      setAttributes({ members: newMembers });
    };

    const updateMemberDescription = (index, memberdescription) => {
      const newMembers = [...members];
      newMembers[index].memberdescription = memberdescription;
      setAttributes({ members: newMembers });
    };

    const updateMemberPhoto = (index, media) => {
      const newMembers = [...members];
      newMembers[index].photoUrl = media?.url || "";
      setAttributes({ members: newMembers });
    };

    return (
      <div className="section-container section-type-7">
        <div className="container">
          <RichText
            className="subtitle"
            tagName="div"
            value={subtitle}
            onChange={(newSubtitle) => setAttributes({ subtitle: newSubtitle })}
            placeholder="Enter subtitle"
          />

          <RichText
            className="title"
            tagName="div"
            value={title}
            onChange={(newTitle) => setAttributes({ title: newTitle })}
            placeholder="Enter title"
          />

          <RichText
            className="description"
            tagName="div"
            value={description}
            onChange={(newDescription) =>
              setAttributes({ description: newDescription })
            }
            placeholder="Enter description"
          />
        </div>

        <div className="members">
          {members.map((member, index) => (
            <div className="member" key={index}>
              <MediaUpload
                onSelect={(media) => updateMemberPhoto(index, media)}
                allowedTypes={["image"]}
                value={member.photoUrl}
                render={({ open }) => (
                  <Button onClick={open}>
                    {member.photoUrl ? "Change Photo" : "Add Photo"}
                  </Button>
                )}
              />
              {member.photoUrl && (
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="member-photo"
                />
              )}
              <div className="member-info">
                <TextControl
                  className="member-name"
                  label="Member Name"
                  value={member.name}
                  onChange={(newName) => updateMemberName(index, newName)}
                  placeholder="Enter name"
                />
                <TextControl
                  className="member-role"
                  label="Member Role"
                  value={member.role}
                  onChange={(newRole) => updateMemberRole(index, newRole)}
                  placeholder="Enter role"
                />
                <TextControl
                  label="Member Description"
                  className="member-description, description-small"
                  value={member.memberdescription}
                  onChange={(newDescription) =>
                    updateMemberDescription(index, newDescription)
                  }
                  placeholder="Enter description"
                />
                <Button
                  isDestructive
                  onClick={() => removeMember(index)}
                  style={{ marginTop: "8px" }}
                >
                  Remove Member
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Button isPrimary onClick={addMember}>
          Add Team Member
        </Button>
      </div>
    );
  },

  save: ({ attributes }) => {
    const { subtitle, title, description, members } = attributes;

    return (
      <div className="section-container section-type-7">
        <div className="container">
          <RichText.Content
            className="subtitle"
            tagName="div"
            value={subtitle}
          />
          <RichText.Content className="title" tagName="div" value={title} />
          <RichText.Content
            className="description"
            tagName="div"
            value={description}
          />
        </div>

        <div className="members">
          {members.map((member, index) => (
            <div className="member" key={index}>
              {member.photoUrl && (
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="member-photo"
                />
              )}
              <div className="member-info">
                <RichText.Content
                  className="member-name"
                  tagName="div"
                  value={member.name}
                />
                <RichText.Content
                  className="member-role"
                  tagName="div"
                  value={member.role}
                />
                <RichText.Content
                  className="member-description, description-small"
                  tagName="div"
                  value={member.memberdescription}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
});