import "./public.css";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>Fresh From Farm To Your Home</h1>
          <p>Verified Organic Products Directly From Farmers</p>
          <button className="btn-primary">Shop Now</button>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Farm To Metro – Direct From Farmers To Your Home 🌱</h2>
        <p className="section-description">
          At FarmFresh, we connect you directly with verified farmers, ensuring fresh, organic produce delivered straight to your doorstep. Our unique model eliminates middlemen, providing you with farm-fresh products while supporting local farmers. Experience the true taste of nature with FarmFresh – where quality meets convenience.
          <br /><br />
          Farm To Metro is an Indian platform that connects farmers directly with metro city customers.
          <br />

          We help farmers sell their products directly to customers and provide fresh and natural products at affordable prices.

          Our platform ensures quality products, transparent pricing, and reliable delivery services.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">How FarmFresh Works 🌿</h2>

        <div className="timeline">
          <div className="timeline-step">
            <div className="circle">1</div>
            <h3>Farmer Registration</h3>
            <p>Verified farmers create their profile.</p>
          </div>

          <div className="timeline-step">
            <div className="circle">2</div>
            <h3>Farm Inspection</h3>
            <p>Physical or digital verification process.</p>
          </div>

          <div className="timeline-step">
            <div className="circle">3</div>
            <h3>KYC Approval</h3>
            <p>Documents reviewed for authenticity.</p>
          </div>

          <div className="timeline-step">
            <div className="circle">4</div>
            <h3>Product Upload</h3>
            <p>Farmers add photos, videos & stock.</p>
          </div>

          <div className="timeline-step">
            <div className="circle">5</div>
            <h3>Admin Verification</h3>
            <p>Quality & authenticity check.</p>
          </div>

          <div className="timeline-step">
            <div className="circle">6</div>
            <h3>Marketplace Live</h3>
            <p>Products go visible to customers.</p>
          </div>

          <div className="timeline-step">
            <div className="circle">7</div>
            <h3>Customer Orders</h3>
            <p>Direct farm-to-home purchase.</p>
          </div>     

          <div className="timeline-step">
            <div className="circle">8</div>
            <h3>Smart Packaging</h3>
            <p>Hygienic packing at source.</p>
          </div>   
          
          <div className="timeline-step">
            <div className="circle">9</div>
            <h3>Fast Dispatch</h3>
            <p>Secure packing & shipment.</p>
          </div>   

          <div className="timeline-step">
            <div className="circle">10</div>
            <h3>Feedback & Ratings</h3>
            <p>Reviews maintain trust & quality.</p>
          </div>                                      
        </div>
      </div>

      <div className="page">
        <div className="section">
          <h2>Featured Categories</h2>
          <div className="grid grid-3">
            <div className="card">🍎 Fruits</div>
            <div className="card">🥦 Vegetables</div>
            <div className="card">🌾 Grains</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;