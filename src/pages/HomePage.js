import React from 'react';
import Slider from 'react-slick';
import '../styles/HomePage.css';
import dummy1 from '../asserts/images/slide2.jpg';
import dummy2 from '../asserts/images/slide2.jpg';
import dummy3 from '../asserts/images/slide2.jpg';

import cert1 from '../asserts/images/REACH.jpg';
import cert2 from '../asserts/images/ROHS.jpg';
import cert3 from '../asserts/images/UL.jpg';

import shrinkLabelImg from '../asserts/images/product1.jpg';
import sleevesImg from '../asserts/images/product2.jpg';
import lithiumImg from '../asserts/images/product3.jpg';
import busbar from '../asserts/images/slide1.jpg';





const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="home-page">
      {/* Carousel Section */}
      <section className="carousel-section">
        <Slider {...settings}>
          <div>
            <img src={dummy1} alt="Product 1" className="carousel-img" />
          </div>
          <div>
            <img src={dummy2} alt="Product 2" className="carousel-img" />
          </div>
          <div>
            <img src={dummy3} alt="Product 3" className="carousel-img" />
          </div>
        </Slider>
      </section>

     





      {/* About Us Section */}
      <section className="about-us">

        <h1>Welcome to PlaTec Industries</h1>
        <p className="intro">
          Platec Industries was established in the year 1983. With over 40 years of experience, our founder, Mr. G.R. Bajaj, an engineering graduate, has been instrumental in shaping the company since the introduction of our products in India.
        </p>
        <p className="mission">
          The Platec team is extensively skilled in all areas of business, from production and manufacturing strategies to marketing, enabling us to stay ahead in the industry. We are committed to providing high-quality solutions tailored to meet the needs of our customers.
        </p>
        <div className="location">
          <p>
            Located in Vasai, District Palghar, just 35 km from Mumbai city, Platec Industries specializes in manufacturing high-tech PVC Heat Shrinkable Lay Flat Tubing, Sleeves, Pouches, Pre-forms, and Multi-Coloured Shrink Labels. Our products cater to a variety of industries and applications.
          </p>
        </div>
      </section>


      {/* Feature Highlights Section */}
      <section className="feature-highlights">
        <h2>Why Choose Platec Industries?</h2>
        <div className="feature-item">
          <h3>High-Quality Products</h3>
          <p>We manufacture top-of-the-line products that meet international standards.</p>
        </div>
        <div className="feature-item">
          <h3>Fast Delivery</h3>
          <p>Timely delivery that ensures your projects are always on schedule.</p>
        </div>
        <div className="feature-item">
          <h3>Innovative Solutions</h3>
          <p>Our engineering team is always innovating to provide the best solutions for your needs.</p>
        </div>
      </section>

      <section className="product-features">
  <h2>Our Products & Services</h2>
  <div className="product-grid-wrapper">
    <div className="product-grid">
      {/* Original Items */}
      <div className="product-item">
        <img src={shrinkLabelImg} alt="Product 1" />
        <h3>Shrink Label</h3>
        <p>Customized shrink labels in multiple colors for different industries.</p>
      </div>
      <div className="product-item">
        <img src={sleevesImg} alt="Product 2" />
        <h3>Sleeves & Capseals</h3>
        <p>To make products tamper-proof and seal-proof.</p>
      </div>
      <div className="product-item">
        <img src={lithiumImg} alt="Product 2" />
        <h3> Lithium Battery Packaging</h3>
        <p>Shrink Sleeves to protect the battery from external damage.</p>
      </div>
      <div className="product-item">
        <img src={busbar} alt="Product 2" />
        <h3>Busbar Sleeves</h3>
        <p>Perfect electrical insulation for aluminium & copper Bus bars.</p>
      </div>
    
      
    </div>
  </div>
</section>

<section className="certifications">
  <h2>Our Certifications</h2>
  <div className="certification-list">
    <div className="cert-item">
      <img src={cert1} alt="REACH" className="cert-img" />
      <p>REACH Compliant</p>
    </div>
    <div className="cert-item">
      <img src={cert2} alt="RoHS" className="cert-img" />
      <p>RoHS Certified</p>
    </div>
    <div className="cert-item">
      <img src={cert3} alt="UL" className="cert-img" />
      <p>UL Listed</p>
    </div>

    {/* ISO Text Certification Block */}
    <div className="cert-item">
      <div className="cert-img">
        <p className="iso-text">ISO 9001:2015 Certified</p>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default HomePage;
