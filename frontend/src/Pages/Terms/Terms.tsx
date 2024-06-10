import React from 'react';
import './terms.css';

const TermsConditions = () => {
    return (
        <div className="terms-container">
            <div className="terms-wrapper">
                <h1 className="terms-header">Terms & Conditions</h1>
                <p className="terms-date">Last updated: June 10, 2024</p>
                
                <section className="terms-section">
                    <h2 className="terms-subheader">1. Introduction</h2>
                    <p className="terms-text">
                        Welcome to Profit Ocean. These Terms & Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with and be bound by these terms.
                    </p>
                </section>

                <section className="terms-section">
                    <h2 className="terms-subheader">2. Use of the Website</h2>
                    <p className="terms-text">
                        You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.
                    </p>
                </section>

                <section className="terms-section">
                    <h2 className="terms-subheader">3. Intellectual Property</h2>
                    <p className="terms-text">
                        All content on this website, including text, graphics, logos, and images, is the property of Profit Ocean and protected by copyright laws. You may not reproduce, distribute, or create derivative works from any content on this site without prior written permission.
                    </p>
                </section>

                <section className="terms-section">
                    <h2 className="terms-subheader">4. Limitation of Liability</h2>
                    <p className="terms-text">
                        Profit Ocean shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our website or services.
                    </p>
                </section>

                <section className="terms-section">
                    <h2 className="terms-subheader">5. Changes to the Terms</h2>
                    <p className="terms-text">
                        We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the website following any changes signifies your acceptance of the new terms.
                    </p>
                </section>

                <section className="terms-section">
                    <h2 className="terms-subheader">6. Contact Us</h2>
                    <p className="terms-text">
                        If you have any questions about these Terms & Conditions, please contact us at support@profitocean.com.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsConditions;
