import "./public.css";

const Blog = () => {
  return (
    <div className="page">
      <h1>Organic Lifestyle Blog 📰</h1>

      <div className="grid grid-3">
        <div className="card">
          <h3>5 Benefits of Organic Food</h3>
        </div>

        <div className="card">
          <h3>Why Farm-to-Table Matters</h3>
        </div>
      </div>
    </div>
  );
};

export default Blog;