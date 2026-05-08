import { registerBlockType } from '@wordpress/blocks';
import { RichText, InspectorControls, URLInput } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import '../../global-styles.scss';

registerBlockType('logiweb/custom-block-15', {
    title: 'Social Media Links',
    icon: 'admin-site',
    category: 'widgets',
    attributes: {
        title: { type: 'string', default: 'Follow Us On' },
        instagram_link: { type: 'string', default: '' },
        facebook_link: { type: 'string', default: '' },
        linkedin_link: { type: 'string', default: '' },
    },

    edit: ({ attributes, setAttributes }) => {
        const { title, instagram_link, facebook_link, linkedin_link } = attributes;

        return (
            <div className="social-follow-block">
                <RichText
                    tagName="h2"
                    className="social-follow-title"
                    value={title}
                    onChange={value => setAttributes({ title: value })}
                    placeholder="Follow Us On"
                    style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2.2rem', marginBottom: '2.5rem' }}
                />
                <div className="social-follow-buttons">
                    <a
                        className="social-btn instagram"
                        href={instagram_link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-instagram"></i>
                        <span>Instagram</span>
                    </a>
                    <a
                        className="social-btn facebook"
                        href={facebook_link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-facebook"></i>
                        <span>Facebook</span>
                    </a>
                    <a
                        className="social-btn linkedin"
                        href={linkedin_link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                        <span>Linkedin</span>
                    </a>
                </div>
                <InspectorControls>
                    <PanelBody title="Social Links">
                        <TextControl
                            label="Instagram Link"
                            value={instagram_link}
                            onChange={value => setAttributes({ instagram_link: value })}
                        />
                        <TextControl
                            label="Facebook Link"
                            value={facebook_link}
                            onChange={value => setAttributes({ facebook_link: value })}
                        />
                        <TextControl
                            label="Linkedin Link"
                            value={linkedin_link}
                            onChange={value => setAttributes({ linkedin_link: value })}
                        />
                    </PanelBody>
                </InspectorControls>
            </div>
        );
    },

    save: ({ attributes }) => {
        const { title, instagram_link, facebook_link, linkedin_link } = attributes;
        return (
            <div className="social-follow-block">
                <h2 className="social-follow-title">{title}</h2>
                <div className="social-follow-buttons">
                    <a
                        className="social-btn instagram"
                        href={instagram_link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-instagram"></i>
                        <span>Instagram</span>
                    </a>
                    <a
                        className="social-btn facebook"
                        href={facebook_link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-facebook"></i>
                        <span>Facebook</span>
                    </a>
                    <a
                        className="social-btn linkedin"
                        href={linkedin_link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                        <span>Linkedin</span>
                    </a>
                </div>
            </div>
        );
    },
});