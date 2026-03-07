import "./public.css";

const About = () => {
  return (
    <div className="about-page">
      <h1>About Farm To Metro 🌱</h1>
      <p>
        Farm To Metro is an Indian agri-based digital platform that connects farmers directly with metro city customers across India.
        Our platform helps farmers sell their agricultural products directly to urban consumers without unnecessary middlemen. 
        This helps farmers get fair prices and customers get fresh products.
        Farm To Metro works with farmers from different parts of India and delivers farm products to metro and urban areas.
        We use modern technology to simplify the process of buying farm products online.
      </p>

      <div className="mission-vision">

        <h3>Our Mission 🎯</h3>
        <p>
          Our mission is to support Indian farmers and make farm-fresh products easily available to metro city customers.
          We aim to create a transparent and reliable system where farmers and customers both benefit.
          We want to improve the income of farmers and provide quality products to customers.
        </p>

        <h3>Our Vision 👁</h3>
        <p>
          Our vision is to become a trusted farm-to-customer platform in India.
          We want to build a strong network that connects farmers and metro users across the country.
          We aim to make Farm To Metro a reliable name in the agricultural e-commerce sector.
        </p>

        <h3>What We Do 🌾</h3>
        <p className="what-we-do-para">Farm To Metro provides an online platform where:</p>
          <ul> 
            <li>Farmers can list their products</li>
            <li>Customers can place orders</li>
            <li>Products are delivered to customers</li>
            <li>We provide a simple and secure system for buying farm products online.</li>
          </ul> 
      </div>

      <div className="page" style={{maxWidth: '100%', textAlign: 'center'}}>
        <div className="section">
          <h2>Our Services</h2>
          <div className="grid grid-3">
            <div className="card">🍎 Fresh Fruits</div>
            <div className="card">🥦 Fresh Vegetables</div>
            <div className="card">🌾 Grains and Pulses</div>
            <div className="card">🌱 Plantation Soil</div>
            <div className="card">🌿 Organic Products</div>            
          </div>
        </div>
      </div>

      <div className="mission-vision-down">
        <h3>Service Area 🔄</h3>
        <p>
          Farm To Metro provides services across India.
          Customers from metro cities and urban areas can order products online.
        </p>     

        <h3>Our Commitment 🤝</h3>
        <p>
          Farm To Metro is committed to:

            ✔ Supporting farmers
            ✔ Providing fresh products
            ✔ Fair business practices
            ✔ Customer satisfaction
        </p>
        
        <h3>Our Goal 🎯</h3>
        <p>
          Our goal is to create a strong connection between farmers and metro customers.
          We want to make farm-fresh products accessible to everyone.
        </p>                           
      </div>      

      <div className="section">
        <h2 className="section-title">Why Choose Farm To Metro ⭐</h2>

        <div className="timeline">
          <div className="timeline-step">
            <div className="circle">1</div>
            <h3>Direct From Farmers</h3>
            <p>Products are sourced directly from farmers.</p>
          </div>

          <div className="timeline-step">
            <div className="circle">2</div>
            <h3>Fresh Products</h3>
            <p>We deliver fresh and natural products.</p>
          </div>

          <div className="timeline-step">
            <div className="circle">3</div>
            <h3>Fair Prices</h3>
            <p>Best prices for farmers and customers.</p>
          </div>

          <div className="timeline-step">
            <div className="circle">4</div>
            <h3>Secure Payments</h3>
            <p>100% secure online payments.</p>
          </div>

          <div className="timeline-step">
            <div className="circle">5</div>
            <h3>Trusted Platform</h3>
            <p>Reliable and transparent services.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Our Process 🔄</h2>

        <div className="timeline">
          <div className="timeline-step">
            <h3>Step 1</h3>
            <p>Farmers register on Farm To Metro.</p>
          </div>

          <div className="timeline-step">
            <h3>Step 2</h3>
            <p>Farmers list their products.</p>
          </div>

          <div className="timeline-step">
            <h3>Step 3</h3>
            <p>Customers place orders online.</p>
          </div>

          <div className="timeline-step">
            <h3>Step 4</h3>
            <p>Orders are processed.</p>
          </div>

          <div className="timeline-step">
            <h3>Step 5</h3>
            <p>Products are delivered to customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
