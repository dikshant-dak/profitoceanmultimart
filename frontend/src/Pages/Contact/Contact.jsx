import React, { useState } from 'react';
import './contact.css';

const ContactForm = () => {
    const [textareaValue, setTextareaValue] = useState('');

    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };

    return (
        <div className="contact-form-container">
            <div className="contact-form-wrapper">
                <h1 className="contact-form-header">Message Us</h1>
                <p className="contact-form-description">We want to hear from you! If you have any questions, feedback, or suggestions, please don&apos;t hesitate to contact us. You can message us as:</p>

                <div className="contact-form-input-group">
                    <div className="contact-form-row">
                        <input
                            className="contact-form-input"
                            name="firstname"
                            type="text"
                            placeholder="First name"
                        />
                        <input
                            className="contact-form-input"
                            name="lastname"
                            type="text"
                            placeholder="Last name"
                        />
                    </div>
                    <div className="contact-form-column">
                        <input
                            className="contact-form-column-input"
                            name="subject"
                            type="text"
                            placeholder="Subject"
                        />
                        <input
                            className="contact-form-column-input"
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                        <textarea
                            className="contact-form-textarea"
                            value={textareaValue}
                            onChange={handleTextareaChange}
                            rows={10}
                            placeholder="Write your message here"
                        />
                    </div>
                    <button className="contact-form-button">Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;
