import { registerBlockType } from '@wordpress/blocks';
import { RichText, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, IconButton } from '@wordpress/components';
import { useState } from '@wordpress/element';
import '../../global-styles.scss';

registerBlockType('logiweb/custom-block-14', {
    title: 'FAQ Block',
    icon: 'editor-help',
    category: 'widgets',
    attributes: {
        faqs: {
            type: 'array',
            default: [
                {
                    question: 'Sample question?',
                    answer: 'Sample answer.',
                    iconUrl: '',
                    iconId: null,
                    open: false
                }
            ]
        }
    },

    edit: ({ attributes, setAttributes }) => {
        const { faqs } = attributes;
        const [openIndex, setOpenIndex] = useState(null);

        const updateFaq = (index, field, value) => {
            const newFaqs = [...faqs];
            newFaqs[index][field] = value;
            setAttributes({ faqs: newFaqs });
        };

        const addFaq = () => {
            setAttributes({
                faqs: [
                    ...faqs,
                    { question: '', answer: '', iconUrl: '', iconId: null, open: false }
                ]
            });
        };

        const removeFaq = (index) => {
            const newFaqs = faqs.filter((_, i) => i !== index);
            setAttributes({ faqs: newFaqs });
        };

        const toggleFaq = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        };

        return (
            <div className="faq-accordion-block">
                {faqs.map((faq, idx) => (
                    <div className={`faq-item${openIndex === idx ? ' open' : ''}`} key={idx} style={{
                        border: '1px solid #e0e0e0',
                        borderRadius: '10px',
                        marginBottom: '1rem',
                        background: '#fff',
                        overflow: 'hidden'
                    }}>
                        <div
                            className="faq-question-row"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer',
                                padding: '1.2rem 1.5rem',
                                borderBottom: openIndex === idx ? '1px solid #e0e0e0' : 'none',
                                background: openIndex === idx ? '#f8fafd' : '#fff'
                            }}
                            onClick={() => toggleFaq(idx)}
                        >
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={media => updateFaq(idx, 'iconUrl', media.url)}
                                    allowedTypes={['image', 'svg']}
                                    value={faq.iconId}
                                    render={({ open }) => (
                                        <Button onClick={open} isSecondary style={{ marginRight: '1rem', padding: 0, minWidth: 0 }}>
                                            {faq.iconUrl ? (
                                                <img src={faq.iconUrl} alt="" style={{ width: 22, height: 22, objectFit: 'contain' }} />
                                            ) : (
                                                <span style={{ fontSize: 22, color: '#888' }}>🛈</span>
                                            )}
                                        </Button>
                                    )}
                                />
                            </MediaUploadCheck>
                            <RichText
                                tagName="span"
                                className="faq-question"
                                value={faq.question}
                                onChange={val => updateFaq(idx, 'question', val)}
                                placeholder={`FAQ question #${idx + 1}`}
                                style={{
                                    fontWeight: 600,
                                    fontSize: '1.05rem',
                                    flex: 1,
                                    letterSpacing: '0.5px'
                                }}
                            />
                            <span
                                className="faq-arrow"
                                style={{
                                    marginLeft: '1rem',
                                    fontSize: '1.5rem',
                                    color: '#1565a5',
                                    transition: 'transform 0.2s',
                                    transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)'
                                }}
                            >&#9660;</span>
                            <IconButton
                                icon="no-alt"
                                label="Remove"
                                onClick={e => { e.stopPropagation(); removeFaq(idx); }}
                                style={{ marginLeft: '1rem', color: 'red' }}
                                disabled={faqs.length <= 1}
                            />
                        </div>
                        {openIndex === idx && (
                            <div className="faq-answer-row" style={{
                                padding: '1.2rem 2.5rem 1.5rem 4rem',
                                background: '#f8fafd',
                                fontSize: '1rem',
                                color: '#222'
                            }}>
                                <RichText
                                    tagName="div"
                                    className="faq-answer"
                                    value={faq.answer}
                                    onChange={val => updateFaq(idx, 'answer', val)}
                                    placeholder="FAQ answer"
                                />
                            </div>
                        )}
                    </div>
                ))}
                <Button
                    isSecondary
                    onClick={addFaq}
                    style={{ marginTop: '1rem' }}
                >
                    + Add FAQ
                </Button>
            </div>
        );
    },

    save: ({ attributes }) => {
        const { faqs } = attributes;
        return (
            <div className="faq-accordion-block">
                {faqs.map((faq, idx) => (
                    <div className="faq-item" key={idx}>
                        <div className="faq-question-row" tabIndex={0}>
                            {faq.iconUrl ? (
                                <img src={faq.iconUrl} alt="" style={{ width: 22, height: 22, objectFit: 'contain', marginRight: '1rem' }} />
                            ) : (
                                <span style={{ fontSize: 22, color: '#888', marginRight: '1rem' }}>🛈</span>
                            )}
                            <span className="faq-question">
                                <RichText.Content value={faq.question} />
                            </span>
                            <span className="faq-arrow" style={{
                                marginLeft: '1rem',
                                fontSize: '1.5rem',
                                color: '#1565a5',
                                transition: 'transform 0.2s'
                            }}>&#9660;</span>
                        </div>
                        <div className="faq-answer-row" style={{ display: 'none' }}>
                            <RichText.Content tagName="div" className="faq-answer" value={faq.answer} />
                        </div>
                    </div>
                ))}
                <script>
                {`
                document.addEventListener('DOMContentLoaded', function() {
                    document.querySelectorAll('.faq-accordion-block .faq-item').forEach(function(item) {
                        const questionRow = item.querySelector('.faq-question-row');
                        const answerRow = item.querySelector('.faq-answer-row');
                        const arrow = item.querySelector('.faq-arrow');
                        questionRow.addEventListener('click', function() {
                            const isOpen = answerRow.style.display === 'block';
                            document.querySelectorAll('.faq-accordion-block .faq-answer-row').forEach(function(a) {
                                a.style.display = 'none';
                            });
                            document.querySelectorAll('.faq-accordion-block .faq-arrow').forEach(function(ar) {
                                ar.style.transform = 'rotate(0deg)';
                            });
                            if (!isOpen) {
                                answerRow.style.display = 'block';
                                arrow.style.transform = 'rotate(180deg)';
                            }
                        });
                    });
                });
                `}
                </script>
            </div>
        );
    }
});