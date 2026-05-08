import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import { URLInput } from '@wordpress/block-editor';
import '../../global-styles.scss';
import metadata from './block.json';
registerBlockType('logiweb/custom-block-1', {
    title: 'Custom Block 1',
    icon: 'admin-site',
    category: 'widgets',
    attributes: {
        subtitle: { type: 'string' },
        title: { type: 'string'},
        description: { type: 'string' },
        titlleSmall1: { type: 'string' },
        descriptionSmall1: { type: 'string' },
        titlleSmall2: { type: 'string' },
        descriptionSmall2: { type: 'string' },
        titlleSmall3: { type: 'string' },
        descriptionSmall3: { type: 'string' },
        primary_btn_text: {type: 'string', default: 'Learn More',},
        primary_btn_link: {type: 'string',},
        tertiary_btn_text: {type: 'string', default: 'Get Started',},
        tertiary_btn_link: {type: 'string',},
        // Add new attributes to store links
        titlleSmall1_link: { type: 'string' },
        titlleSmall2_link: { type: 'string' },
        titlleSmall3_link: { type: 'string' },
        icon1: { type: 'string', default: 'fa-solid fa-cube' },
        icon2: { type: 'string', default: 'fa-solid fa-cube' },
        icon3: { type: 'string', default: 'fa-solid fa-cube' },
    },
    
    edit: ( { attributes, setAttributes } ) => {
        const { subtitle, title, description, titlleSmall1, descriptionSmall1, titlleSmall2, descriptionSmall2, titlleSmall3, descriptionSmall3, primary_btn_link, primary_btn_text, tertiary_btn_text, tertiary_btn_link, icon1, icon2, icon3 } = attributes;

        return (
            <div className="section-container section-type-1">
                <RichText
                    tagName="div"
                    className="subtitle"
                    value={ subtitle }
                    onChange={ ( value ) => setAttributes( { subtitle: value } ) }
                    placeholder="Add subtitle"
                    
                />
                <RichText
                    tagName="div"
                    className="title"
                    value={ title }
                    onChange={ ( value ) => setAttributes( { title: value } ) }
                    placeholder="Add title"
                />
                <RichText
                    tagName="div"
                    className="description"
                    value={ description }
                    onChange={ ( value ) => setAttributes( { description: value } ) }
                    placeholder="Add description"
                />
                <div className="content">
                    <div className="mini-container">
                        <i className={`icon ${icon1}`}></i>
                        <RichText
                            tagName="div"
                            className="title-small"
                            value={ titlleSmall1 }
                            onChange={ ( value ) => setAttributes( { titlleSmall1: value } ) }
                            placeholder="Title 1"
                            allowedFormats={['core/link']}
                        />
                        <RichText
                            tagName="div"
                            className="description-small"
                            value={ descriptionSmall1 }
                            onChange={ ( value ) => setAttributes( { descriptionSmall1: value } ) }
                            placeholder="Description 1"
                            allowedFormats={['core/link']}
                        />
                    </div>

                    <div className="mini-container">
                        <i className={`icon ${icon2}`}></i>
                        <RichText
                            tagName="div"
                            className="title-small"
                            value={ titlleSmall2 }
                            onChange={ ( value ) => setAttributes( { titlleSmall2: value } ) }
                            placeholder="Title 2"
                            allowedFormats={['core/link']}
                        />
                        <RichText
                            tagName="div"
                            className="description-small"
                            value={ descriptionSmall2 }
                            onChange={ ( value ) => setAttributes( { descriptionSmall2: value } ) }
                            placeholder="Description 2"
                            allowedFormats={['core/link']}
                        />
                    </div>

                    <div className="mini-container">
                        <i className={`icon ${icon3}`}></i>
                        <RichText
                            tagName="div"
                            className="title-small"
                            value={ titlleSmall3 }
                            onChange={ ( value ) => setAttributes( { titlleSmall3: value } ) }
                            placeholder="Title 3"
                            allowedFormats={['core/link']}
                        />
                        <RichText
                            tagName="div"
                            className="description-small"
                            value={ descriptionSmall3 }
                            onChange={ ( value ) => setAttributes( { descriptionSmall3: value } ) }
                            placeholder="Description 3"
                            allowedFormats={['core/link']}
                        />
                    </div>
                </div>
                        


                <InspectorControls>
                    <PanelBody title="Primary Button Settings">
                        <TextControl
                            label="Button Text"
                            value={primary_btn_text}
                            onChange={(value) => setAttributes({ primary_btn_text: value })}
                        />
                        <URLInput
                            label="Button Link"
                            value={primary_btn_link}
                            onChange={(value) => setAttributes({ primary_btn_link: value })}
                        />
                    </PanelBody>
                </InspectorControls>

                <InspectorControls>
                    <PanelBody title="Tertiary Button Settings">
                        <TextControl
                            label="Button Text"
                            value={tertiary_btn_text}
                            onChange={(value) => setAttributes({ tertiary_btn_text: value })}
                        />
                        <URLInput
                            label="Button Link"
                            value={tertiary_btn_link}
                            onChange={(value) => setAttributes({ tertiary_btn_link: value })}
                        />
                    </PanelBody>
                </InspectorControls>
                <InspectorControls>
                    <PanelBody title="Icons">
                        <TextControl
                            label="Icon 1 (Font Awesome class)"
                            value={icon1}
                            onChange={(value) => setAttributes({ icon1: value })}
                            help='e.g. "fa-solid fa-cube"'
                        />
                        <TextControl
                            label="Icon 2 (Font Awesome class)"
                            value={icon2}
                            onChange={(value) => setAttributes({ icon2: value })}
                            help='e.g. "fa-solid fa-cube"'
                        />
                        <TextControl
                            label="Icon 3 (Font Awesome class)"
                            value={icon3}
                            onChange={(value) => setAttributes({ icon3: value })}
                            help='e.g. "fa-solid fa-cube"'
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
                        onChange={(value) => setAttributes({ tertiary_btn_text: value })}
                        placeholder="Button Text"
                        href={tertiary_btn_link}
                    />
                </div>

            </div>
        );
        
    },

    save: ( { attributes } ) => {
        const { subtitle, title, description, titlleSmall1, descriptionSmall1, titlleSmall2, descriptionSmall2, titlleSmall3, descriptionSmall3, primary_btn_link, primary_btn_text, tertiary_btn_text, tertiary_btn_link, icon1, icon2, icon3 } = attributes;

        return (
			<div className="section-container section-type-1">
                <div className="subtitle">{ subtitle }</div>
                <div className="title">{ title }</div>
                <div className="description">{ description }</div>
                <div className="content">
                    <div className="mini-container">
                        <i className={`icon ${icon1}`}></i>
                        <div className="title-small">
                            <RichText.Content value={titlleSmall1} tagName="span" />
                        </div>
                        <div className="description-small">
                            <RichText.Content value={descriptionSmall1} tagName="span" />
                        </div>
                    </div>
                    <div className="mini-container">
                        <i className={`icon ${icon2}`}></i>
                        <div className="title-small">
                            <RichText.Content value={titlleSmall2} tagName="span" />
                        </div>
                        <div className="description-small">
                            <RichText.Content value={descriptionSmall2} tagName="span" />
                        </div>
                    </div>
                    <div className="mini-container">
                        <i className={`icon ${icon3}`}></i>
                        <div className="title-small">
                            <RichText.Content value={titlleSmall3} tagName="span" />
                        </div>
                        <div className="description-small">
                            <RichText.Content value={descriptionSmall3} tagName="span" />
                        </div>
                    </div>
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
    },
});