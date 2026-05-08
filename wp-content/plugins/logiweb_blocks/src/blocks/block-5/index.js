import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import { URLInput } from '@wordpress/block-editor';
import '../../global-styles.scss';
import metadata from './block.json';
registerBlockType('logiweb/custom-block-5', {
    title: 'Call To Action',
    icon: 'admin-site',
    category: 'widgets',
    attributes: {
        title: { type: 'string'},
        description: { type: 'string' },
        primary_btn_text: {type: 'string', default: 'Learn More',},
        primary_btn_link: {type: 'string',},
        secondary_btn_text: {type: 'string', default: 'Get Started',},
        secondary_btn_link: {type: 'string',},
    },
    
    edit: ( { attributes, setAttributes } ) => {
        const {title, description,  primary_btn_link, primary_btn_text, secondary_btn_text,  secondary_btn_link} = attributes;

        return (
            <div className="section-container section-type-5">
                <div className="container-left">
                    <RichText
                        tagName="div"
                        className="title-medium"
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
                    <PanelBody title="Secondary Button Settings">
                        <TextControl
                            label="Button Text"
                            value={secondary_btn_text}
                            onChange={(value) => setAttributes({ secondary_btn_text: value })}
                        />
                        <URLInput
                            label="Button Link"
                            value={secondary_btn_link}
                            onChange={(value) => setAttributes({ secondary_btn_link: value })}
                        />
                    </PanelBody>
                </InspectorControls>
                <div className="container-right">
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
                            className="btn-secondary"
                            value={secondary_btn_text}
                            onChange={(value) => setAttributes({ secondary_btn_text: value })}
                            placeholder="Button Text"
                            href={secondary_btn_link}
                        />
                    </div>
                </div>

            </div>
        );
        
    },

    save: ( { attributes } ) => {
        const {title, description,  primary_btn_link, primary_btn_text, secondary_btn_text,  secondary_btn_link} = attributes;

        return (
			<div className="section-container section-type-5">
                <div className='container-left'>
                    <div className="title-medium">{ title }</div>
                    <div className="description">
                        <RichText.Content value={description} tagName="div" />
                    </div>
                </div>
                <div className="container-right">
                    <div className="buttons">
                                
                                <a className="btn-primary" href={primary_btn_link}>
                                    {primary_btn_text}
                                </a>
                                <a className="btn-secondary" href={secondary_btn_link}>
                                    {secondary_btn_text}                                
                                </a>
                    </div>
                </div>
		    </div>
        );
    },
});