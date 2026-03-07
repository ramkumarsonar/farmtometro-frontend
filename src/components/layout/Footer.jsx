import "./layout.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h3>🌱 FarmFresh</h3>
        <p>Connecting Farmers Directly to Consumers</p>
      </div>

      <div>
        <p>© {new Date().getFullYear()} FarmFresh</p>
      </div>
    </footer>
  );
};

export default Footer;