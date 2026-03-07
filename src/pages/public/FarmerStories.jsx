import "./public.css";

const FarmerStories = () => {
  return (
    <div className="farmer-stories-page">

      {/* Hero Section */}
      <div className="hero-section">
        <div>
          <h1>🌱 Farmer Stories</h1>
          <p>Empowering Farmers Across India</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="section">
        <h2 className="section-title">Connecting Farmers to Metro Cities</h2>
        <p className="section-description">
          Farm To Metro builds a reliable connection between Indian farmers and
          metro city consumers. We provide direct access to urban markets while
          ensuring customers receive fresh, high-quality agricultural products.
        </p>

        <p className="section-description">
          We believe farmers are the foundation of our food system. Their
          dedication feeds millions of families every day.
        </p>
      </div>

      {/* Our Approach */}
      <div className="section">
        <h2 className="section-title">Our Approach to Supporting Farmers</h2>

        <div className="grid grid-3">
          <div className="card">
            <h3>Fair Market Access</h3>
            <p>
              Farmers gain access to metro customers looking for fresh farm
              products, creating better selling opportunities.
            </p>
          </div>

          <div className="card">
            <h3>Transparent Pricing</h3>
            <p>
              We encourage fair pricing so farmers receive competitive value
              for their produce.
            </p>
          </div>

          <div className="card">
            <h3>Sustainable Growth</h3>
            <p>
              We support long-term farmer growth through consistent demand and
              reliable services.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Our Farmers Image Section */}
      <div className="section">
        <h2 className="section-title">Meet Our Farmers 👨‍🌾</h2>

        <div className="grid grid-3">

          <div className="card farmer-card">
            <img 
              src="https://images.unsplash.com/photo-1600423115367-87ea7661688f"
              alt="Ramesh Patel"
            />
            <h3>Ramesh Patel</h3>
            <p className="location">Gujarat</p>
            <p>
              Organic vegetable farmer supplying fresh tomatoes,
              spinach, and seasonal greens directly to metro customers.
            </p>
          </div>

          <div className="card farmer-card">
            <img 
              src="https://images.unsplash.com/photo-1600423115367-87ea7661688f"
              alt="Sita Devi"
            />
            <h3>Sita Devi</h3>
            <p className="location">Himachal Pradesh</p>
            <p>
              Fruit grower known for premium apples and peaches,
              cultivated using traditional farming practices.
            </p>
          </div>

          <div className="card farmer-card">
            <img 
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b"
              alt="Mahesh Yadav"
            />
            <h3>Mahesh Yadav</h3>
            <p className="location">Maharashtra</p>
            <p>
              Specializes in onions and pulses, ensuring consistent
              supply and high-quality produce throughout the year.
            </p>
          </div>

        </div>
      </div>

      {/* From Farm to Metro */}
      <div className="section">
        <h2 className="section-title">From Farm to Metro 🚜</h2>

        <div className="timeline">
          <div className="timeline-step">
            <div className="circle">1</div>
            Harvesting
          </div>

          <div className="timeline-step">
            <div className="circle">2</div>
            Packaging
          </div>

          <div className="timeline-step">
            <div className="circle">3</div>
            Delivery
          </div>
        </div>
      </div>

      {/* Livelihood & Responsibility */}
      <div className="section">
        <h2 className="section-title">Improving Farmer Livelihoods</h2>
        <p className="section-description">
          Direct sales reduce dependence on traditional market systems and give
          farmers better control over their income and growth.
        </p>

        <h2 className="section-title">Commitment to Quality</h2>
        <p className="section-description">
          We work with farmers who focus on producing fresh, natural
          agricultural products while maintaining responsible farming practices.
        </p>

        <h2 className="section-title">Our Responsibility</h2>
        <p className="section-description">
          Built on trust and transparency, Farm To Metro supports farmers and
          delivers dependable service to customers.
        </p>
      </div>

      {/* Closing */}
      <div className="section final-line">
        <h2>Supporting Farmers. Delivering Freshness. Connecting India. 🌱</h2>
      </div>

    </div>
  );
};

export default FarmerStories;