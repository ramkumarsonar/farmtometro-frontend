import { useNavigate } from "react-router-dom";
import "./public.css";

const products = [
  {
    name: "Organic Apples",
    category: "Fruits",
    price: "₹120/kg",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&auto=format&fit=crop",
  },
  {
    name: "Bananas",
    category: "Fruits",
    price: "₹50/dozen",
    image:
      "https://images.unsplash.com/photo-1601001435828-419e309a2f53",
  },
  {
    name: "Tomatoes",
    category: "Vegetables",
    price: "₹35/kg",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&auto=format&fit=crop",
  },
  {
    name: "Potatoes",
    category: "Vegetables",
    price: "₹30/kg",
    image:
      "https://images.unsplash.com/photo-1582515073490-dc3a75c8cfa3?w=600&auto=format&fit=crop",
  },
  {
    name: "Spinach",
    category: "Vegetables",
    price: "₹40/kg",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&auto=format&fit=crop",
  },
  {
    name: "Basmati Rice",
    category: "Grains",
    price: "₹95/kg",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop",
  },
  {
    name: "Whole Wheat",
    category: "Grains",
    price: "₹55/kg",
    image:
      "https://images.unsplash.com/photo-1603046891744-1f76eb10aec3?w=600&auto=format&fit=crop",
  },
  {
    name: "Moong Dal",
    category: "Pulses",
    price: "₹105/kg",
    image:
      "https://images.unsplash.com/photo-1617196039897-5e5f3f4b6b6e?w=600&auto=format&fit=crop",
  },
  {
    name: "Chickpeas",
    category: "Pulses",
    price: "₹90/kg",
    image:
      "https://images.unsplash.com/photo-1590080877777-9b1c6aefc13d?w=600&auto=format&fit=crop",
  },
  {
    name: "Fresh Milk",
    category: "Dairy",
    price: "₹60/litre",
    image:
      "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=600&auto=format&fit=crop",
  },
  {
    name: "Desi Ghee",
    category: "Dairy",
    price: "₹650/kg",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&auto=format&fit=crop",
  },
  {
    name: "Carrots",
    category: "Vegetables",
    price: "₹45/kg",
    image:
      "https://images.unsplash.com/photo-1447175008436-170170756b9e?w=600&auto=format&fit=crop",
  },
  {
    name: "Onions",
    category: "Vegetables",
    price: "₹28/kg",
    image:
      "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=600&auto=format&fit=crop",
  },
  {
    name: "Papaya",
    category: "Fruits",
    price: "₹60/kg",
    image:
      "https://images.unsplash.com/photo-1517260739337-6799d239ce83?w=600&auto=format&fit=crop",
  },
  {
    name: "Mangoes",
    category: "Fruits",
    price: "₹180/kg",
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&auto=format&fit=crop",
  },
];

const Shop = () => {
  const navigate = useNavigate();
  
  return (
    <div className="page">
      <h1 className="shop-title">Shop Organic Products 🛒</h1>

      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="image-wrapper">
              <img src={product.image} alt={product.name} />
              <span className="category-badge">{product.category}</span>
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <button className="btn-primary" onClick={() => navigate("/checkout", { state: { product } })}>Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;