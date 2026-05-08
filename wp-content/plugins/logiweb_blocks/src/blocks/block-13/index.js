import { registerBlockType } from '@wordpress/blocks';
import { RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, IconButton } from '@wordpress/components';
import '../../global-styles.scss';
import metadata from './block.json';

// Helper to chunk array into rows of 3
const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

registerBlockType('logiweb/custom-block-13', {
    title: 'Multiple Containers with Buttons',
    icon: 'admin-site',
    category: 'widgets',
    description: 'A block with 3 or more columns that can be customized with icons, titles, and descriptions. Perfect for showcasing features or services.',
    attributes: {
        subtitle: { type: 'string' },
        title: { type: 'string' },
        description: { type: 'string' },
        miniContainers: {
            type: 'array',
            default: [
                { title: '', description: '', icon: 'fa-solid fa-cube' },
                { title: '', description: '', icon: 'fa-solid fa-cube' },
                { title: '', description: '', icon: 'fa-solid fa-cube' }
            ]
        },
        primary_btn_text: { type: 'string', default: 'Learn More' },
        primary_btn_link: { type: 'string' },
        tertiary_btn_text: { type: 'string', default: 'Get Started' },
        tertiary_btn_link: { type: 'string' }
    },

    edit: ({ attributes, setAttributes }) => {
        const { subtitle, title, description, miniContainers, primary_btn_link, primary_btn_text, tertiary_btn_text, tertiary_btn_link } = attributes;

        const updateMiniContainer = (index, field, value) => {
            const newContainers = [...miniContainers];
            newContainers[index][field] = value;
            setAttributes({ miniContainers: newContainers });
        };

        const addMiniContainer = () => {
            setAttributes({
                miniContainers: [
                    ...miniContainers,
                    { title: '', description: '', icon: 'fa-solid fa-cube' }
                ]
            });
        };

        const removeMiniContainer = (index) => {
            const newContainers = miniContainers.filter((_, i) => i !== index);
            setAttributes({ miniContainers: newContainers });
        };

        return (
            <div className="section-container section-type-1 section-type-block-13">
                <RichText
                    tagName="div"
                    className="subtitle"
                    value={subtitle}
                    onChange={(value) => setAttributes({ subtitle: value })}
                    placeholder="Add subtitle"
                />
                <RichText
                    tagName="div"
                    className="title"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder="Add title"
                />
                <RichText
                    tagName="div"
                    className="description"
                    value={description}
                    onChange={(value) => setAttributes({ description: value })}
                    placeholder="Add description"
                />
                <div className="content">
                    {chunkArray(miniContainers, 3).map((row, rowIdx) => (
                        <div className="mini-row" key={rowIdx} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                            {row.map((container, idx) => {
                                const globalIdx = rowIdx * 3 + idx;
                                return (
                                    <div className="mini-container" key={globalIdx} style={{ flex: 1 }}>
                                        <i className={`icon ${container.icon || 'fa-solid fa-cube'}`} style={{ fontSize: 32, marginBottom: 10 }}></i>
                                        <TextControl
                                            label="Classe FontAwesome"
                                            value={container.icon || ''}
                                            onChange={value => updateMiniContainer(globalIdx, 'icon', value)}
                                            placeholder="fa-solid fa-scale-unbalanced-flip"
                                            help="Inserisci la classe FontAwesome (es: fa-solid fa-star)"
                                        />
                                        <RichText
                                            tagName="div"
                                            className="title-small"
                                            value={container.title}
                                            onChange={(value) => updateMiniContainer(globalIdx, 'title', value)}
                                            placeholder={`Title ${globalIdx + 1}`}
                                        />
                                        <RichText
                                            tagName="div"
                                            className="description-small"
                                            value={container.description}
                                            onChange={(value) => updateMiniContainer(globalIdx, 'description', value)}
                                            placeholder={`Description ${globalIdx + 1}`}
                                        />
                                        <IconButton
                                            icon="no-alt"
                                            label="Remove"
                                            onClick={() => removeMiniContainer(globalIdx)}
                                            style={{ marginTop: '0.5rem', color: 'red' }}
                                            disabled={miniContainers.length <= 1}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                    <Button
                        isSecondary
                        onClick={addMiniContainer}
                        style={{ marginTop: '1rem' }}
                    >
                        + Add Mini Container
                    </Button>
                </div>

                <InspectorControls>
                    <PanelBody title="Primary Button Settings">
                        <TextControl
                            label="Button Text"
                            value={primary_btn_text}
                            onChange={(value) => setAttributes({ primary_btn_text: value })}
                        />
                        <TextControl
                            label="Button Link"
                            value={primary_btn_link}
                            onChange={(value) => setAttributes({ primary_btn_link: value })}
                        />
                    </PanelBody>
                    <PanelBody title="Tertiary Button Settings">
                        <TextControl
                            label="Button Text"
                            value={tertiary_btn_text}
                            onChange={(value) => setAttributes({ tertiary_btn_text: value })}
                        />
                        <TextControl
                            label="Button Link"
                            value={tertiary_btn_link}
                            onChange={(value) => setAttributes({ tertiary_btn_link: value })}
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

    save: ({ attributes }) => {
        const { subtitle, title, description, miniContainers, primary_btn_link, primary_btn_text, tertiary_btn_text, tertiary_btn_link } = attributes;

        return (
            <div className="section-container section-type-1 section-type-block-13">
                <div className="subtitle">{subtitle}</div>
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                <div className="content">
                    {chunkArray(miniContainers, 3).map((row, rowIdx) => (
                        <div className="mini-row" key={rowIdx} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                            {row.map((container, idx) => (
                                <div className="mini-container" key={idx} style={{ flex: 1 }}>
                                    <i className={`icon ${container.icon || 'fa-solid fa-cube'}`}></i>
                                    <div className="title-small">
                                        <RichText.Content value={container.title} tagName="span" />
                                    </div>
                                    <div className="description-small">
                                        <RichText.Content value={container.description} tagName="span" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
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