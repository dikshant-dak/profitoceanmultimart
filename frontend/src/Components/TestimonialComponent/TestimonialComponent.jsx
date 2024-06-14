import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './testimonialcomponent.css';

const TestimonialComponent = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-section">
        <h1 className="testimonial-title">Client Testimonials</h1>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          className="carousel-container"
          arrows={false}
          focusOnSelect
          ssr={true}
          transitionDuration={300} 
        >
          <div className="testimonial-content">
            <p className="testimonial-text">
              I&apos;ve been searching for a trustworthy investment partner for years, and I&apos;m so glad I found Wealth Builders. Their team&apos;s guidance has helped me navigate the complex world of investments with confidence.
            </p>
            <div className="testimonial-author-container">
              <span className="testimonial-quote">“</span>
              <div className="author-details">
                <h3 className="author-name">Sarah K.</h3>
                <span className="author-position">CEO, PRESS MAG</span>
              </div>
            </div>
          </div>

          <div className="testimonial-content">
            <p className="testimonial-text">
              I couldn&apos;t be happier with the results I&apos;ve seen since partnering with Wealth Builders. Their dedication to understanding my financial goals and tailoring a strategy to meet them has exceeded my expectations.
            </p>
            <div className="testimonial-author-container">
              <span className="testimonial-quote">“</span>
              <div className="author-details">
                <h3 className="author-name">Michael R.</h3>
                <span className="author-position">QuantumForex Solutions</span>
              </div>
            </div>
          </div>

          <div className="testimonial-content">
            <p className="testimonial-text">
              Choosing Wealth Builders was one of the best decisions I&apos;ve made for my financial future. Their transparent communication and commitment to delivering results have earned my trust completely.
            </p>
            <div className="testimonial-author-container">
              <span className="testimonial-quote">“</span>
              <div className="author-details">
                <h3 className="author-name">Emily M.</h3>
                <span className="author-position">OmniCapital Advisors</span>
              </div>
            </div>
          </div>

          <div className="testimonial-content">
            <p className="testimonial-text">
              As someone new to investing, I was hesitant to dive in. But the team at Wealth Builders took the time to educate me and develop a plan that aligned perfectly with my risk tolerance and goals. I&apos;m thrilled with the progress we&apos;ve made together.
            </p>
            <div className="testimonial-author-container">
              <span className="testimonial-quote">“</span>
              <div className="author-details">
                <h3 className="author-name">David S.</h3>
                <span className="author-position">NexaMarket Analytics</span>
              </div>
            </div>
          </div>

          <div className="testimonial-content">
            <p className="testimonial-text">
              I&apos;ve been incredibly impressed with the professionalism and expertise of Wealth Builders. Their insights into the Indian market have been invaluable in helping me achieve my investment objectives.
            </p>
            <div className="testimonial-author-container">
              <span className="testimonial-quote">“</span>
              <div className="author-details">
                <h3 className="author-name">Priya Patel</h3>
                <span className="author-position">Apex Financial Group</span>
              </div>
            </div>
          </div>

          <div className="testimonial-content">
            <p className="testimonial-text">
              Since partnering with Wealth Builders, I&apos;ve seen significant growth in my investment portfolio. Their deep understanding of the Indian financial landscape sets them apart, and I couldn&apos;t be more pleased with the results.
            </p>
            <div className="testimonial-author-container">
              <span className="testimonial-quote">“</span>
              <div className="author-details">
                <h3 className="author-name">Rajesh Gupta</h3>
                <span className="author-position">Cypher Trading Co.</span>
              </div>
            </div>
          </div>

          <div className="testimonial-content">
            <p className="testimonial-text">
              Choosing Wealth Builders, for my investment needs was a no-brainer. Their team&apos;s knowledge of Indian stocks and trends has consistently led to solid returns, and I&apos;m grateful for their partnership.
            </p>
            <div className="testimonial-author-container">
              <span className="testimonial-quote">“</span>
              <div className="author-details">
                <h3 className="author-name">Ravi Singh</h3>
                <span className="author-position">Stellar Trade Systems</span>
              </div>
            </div>
          </div>

          <div className="testimonial-content">
            <p className="testimonial-text">
              The team at Wealth Builders, exemplifies professionalism and expertise. Their data-driven approach and attention to detail have provided me with peace of mind knowing that my investments are in capable hands.
            </p>
            <div className="testimonial-author-container">
              <span className="testimonial-quote">“</span>
              <div className="author-details">
                <h3 className="author-name">Dr. Amanda Lee.</h3>
                <span className="author-position">CEO, Lee Enterprises</span>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialComponent;
