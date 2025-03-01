import React from "react";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <div>
      <div className="about-us-container">
        <header className="about-us-header">
          <h1>About Us</h1>
          <p>Your trusted partner in fashion and lifestyle</p>
        </header>

        <section className="about-us-content">
          <div className="about-us-section">
            <h2>Our Story</h2>
            <p>
              Welcome to Profit Ocean, a brand dedicated to bringing you the
              best in fashion and lifestyle products. Profit Ocean was
              established in 2017 with a vision to provide high-quality and
              affordable clothing. Our journey began as a small firm, driven by
              a passion for fashion and a commitment to customer satisfaction.
              In 2021, we underwent a significant transformation. The firm
              evolved into Profit Ocean Multimart Pvt. Ltd., reflecting our
              growth and expansion. This change marked a new chapter in our
              story, as we transitioned all our business operations under the
              new entity. The shift allowed us to enhance our offerings, improve
              our services, and better serve our valued customers. Today, Profit
              Ocean Multimart Pvt. Ltd. stands as a testament to our dedication
              and perseverance. We continue to innovate and strive for
              excellence in everything we do, ensuring that our customers always
              receive the best products and services. Thank you for being a part
              of our journey. We look forward to many more years of success and
              customer satisfaction.
            </p>
          </div>

          <div className="about-us-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower individuals to express themselves
              through style. We believe that fashion is a powerful form of
              self-expression, and we strive to offer a diverse range of
              clothing that caters to all tastes and preferences. We are
              committed to delivering exceptional value, quality, and service to
              our customers.
            </p>
          </div>

          <div className="about-us-section">
            <h2>Our Values</h2>
            <ul>
              <li>
                <strong>Quality:</strong> We prioritize quality in every product
                we offer.
              </li>
              <li>
                <strong>Customer Satisfaction:</strong> Our customers are at the
                heart of everything we do.
              </li>
              <li>
                <strong>Integrity:</strong> We conduct our business with honesty
                and transparency.
              </li>
              <li>
                <strong>Innovation:</strong> We continuously seek to innovate
                and improve our products and services.
              </li>
              <li>
                <strong>Sustainability:</strong> We are committed to sustainable
                and ethical practices in our business operations.
              </li>
            </ul>
          </div>

          <div className="about-us-section">
            <h2>Meet the Team</h2>
            <p>
              Our team is composed of passionate and dedicated individuals who
              are committed to making your shopping experience as enjoyable as
              possible. From our designers to our customer service
              representatives, each team member plays a crucial role in ensuring
              we meet our customers&apos; needs.
            </p>
          </div>
        </section>

        <footer className="about-us-footer">
          <p>
            Thank you for choosing us as your fashion destination. We look
            forward to serving you! :)
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;
