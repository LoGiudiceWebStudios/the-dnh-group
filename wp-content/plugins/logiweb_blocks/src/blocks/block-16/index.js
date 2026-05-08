import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, IconButton } from '@wordpress/components';
import '../../global-styles.scss';

// Helper function to chunk array into rows of 3
const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

registerBlockType('logiweb/custom-block-16', {
    title: 'Testimonials',
    icon: 'admin-site',
    category: 'widgets',
    attributes: {
        title: { type: 'string', default: 'TESTIMONIALS' },
        description: { type: 'string', default: 'Hear from our satisfied customers who have experienced the logiweb Solutions difference.' },
        testimonials: {
            type: 'array',
            default: [
                {
                    image: '',
                    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"',
                    name: 'Eveline Smith'
                },
                {
                    image: '',
                    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"',
                    name: 'Eveline Smith'
                },
                {
                    image: '',
                    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"',
                    name: 'Eveline Smith'
                }
            ]
        }
    },

    edit: ({ attributes, setAttributes }) => {
        const { title, description, testimonials } = attributes;

        const updateTestimonial = (idx, field, value) => {
            const newTestimonials = [...testimonials];
            newTestimonials[idx][field] = value;
            setAttributes({ testimonials: newTestimonials });
        };

        const addTestimonial = () => {
            setAttributes({
                testimonials: [
                    ...testimonials,
                    { image: '', description: '', name: '' }
                ]
            });
        };

        const removeTestimonial = (idx) => {
            const newTestimonials = testimonials.filter((_, i) => i !== idx);
            setAttributes({ testimonials: newTestimonials });
        };

        return (
            <div className="section-container testimonials">
                <RichText
                    tagName="div"
                    className="title"
                    value={title}
                    onChange={value => setAttributes({ title: value })}
                    placeholder="Title"
                />
                <RichText
                    tagName="div"
                    className="description"
                    value={description}
                    onChange={value => setAttributes({ description: value })}
                    placeholder="Description"
                />
                <div className="content">
                    {chunkArray(testimonials, 3).map((row, rowIdx) => (
                        <div className="testimonial-row" key={rowIdx} style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                            {row.map((testimonial, idx) => {
                                const globalIdx = rowIdx * 3 + idx;
                                return (
                                    <div className="list-item" key={globalIdx} style={{ flex: '1 1 0', minWidth: 0, maxWidth: '33.33%' }}>
                                        <MediaUpload
                                            onSelect={media => updateTestimonial(globalIdx, 'image', media.url)}
                                            allowedTypes={['image']}
                                            value={testimonial.image}
                                            render={({ open }) => (
                                                <div>
                                                    <img
                                                        src={testimonial.image || `${window.logiwebThemeUrl || ''}/assets/images/test-image.jpg`}
                                                        alt="Profile"
                                                        className="profile-circle"
                                                        style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%', marginBottom: '1rem' }}
                                                        onClick={open}
                                                    />
                                                    <Button onClick={open} isSecondary style={{ marginBottom: '1rem' }}>
                                                        {testimonial.image ? 'Change Image' : 'Select Image'}
                                                    </Button>
                                                </div>
                                            )}
                                        />
                                        <RichText
                                            tagName="div"
                                            className="description"
                                            value={testimonial.description}
                                            onChange={value => updateTestimonial(globalIdx, 'description', value)}
                                            placeholder="Testimonial text"
                                        />
                                        <RichText
                                            tagName="div"
                                            className="title-small"
                                            value={testimonial.name}
                                            onChange={value => updateTestimonial(globalIdx, 'name', value)}
                                            placeholder="Name"
                                        />
                                        <IconButton
                                            icon="no-alt"
                                            label="Remove"
                                            onClick={() => removeTestimonial(globalIdx)}
                                            style={{ marginTop: '0.5rem', color: 'red' }}
                                            disabled={testimonials.length <= 1}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                    <Button isSecondary onClick={addTestimonial} style={{ marginTop: '1rem' }}>
                        + Add Testimonial
                    </Button>
                </div>
                <InspectorControls>
                    <PanelBody title="Block Settings">
                        <TextControl
                            label="Title"
                            value={title}
                            onChange={value => setAttributes({ title: value })}
                        />
                        <TextControl
                            label="Description"
                            value={description}
                            onChange={value => setAttributes({ description: value })}
                        />
                    </PanelBody>
                </InspectorControls>
            </div>
        );
    },

    save: ({ attributes }) => {
        const { title, description, testimonials } = attributes;
        // Chunk testimonials into rows of 3 for frontend as well
        const chunkArray = (arr, size) => {
            const result = [];
            for (let i = 0; i < arr.length; i += size) {
                result.push(arr.slice(i, i + size));
            }
            return result;
        };
        return (
            <div className="section-container testimonials">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                <div className="content">
                    {chunkArray(testimonials, 3).map((row, rowIdx) => (
                        <div className="testimonial-row" key={rowIdx} style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                            {row.map((testimonial, idx) => (
                                <div className="list-item" key={idx} style={{ flex: '1 1 0', minWidth: 0, maxWidth: '33.33%' }}>
                                    <img
                                        src={testimonial.image || `${window.logiwebThemeUrl || ''}/assets/images/test-image.jpg`}
                                        alt="Profile"
                                        className="profile-circle"
                                        style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%', marginBottom: '1rem' }}
                                    />
                                    <div className="description">
                                        <RichText.Content value={testimonial.description} tagName="span" />
                                    </div>
                                    <div className="title-small">
                                        <RichText.Content value={testimonial.name} tagName="span" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    },
});