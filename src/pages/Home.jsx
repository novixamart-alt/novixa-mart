import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

function Home() {
  const products = [
    {
      image: "https://via.placeholder.com/220",
      name: "Smart Phone",
      price: "50,000",
    },
    {
      image: "https://via.placeholder.com/220",
      name: "Laptop",
      price: "120,000",
    },
    {
      image: "https://via.placeholder.com/220",
      name: "Smart Watch",
      price: "10,000",
    },
    {
      image: "https://via.placeholder.com/220",
      name: "Headphones",
      price: "8,000",
    },
  ];

  return (
    <>
      <Header />

      <section className="hero">
        <h2>Welcome to Novixa Mart</h2>
        <p>Shop smarter. Connect buyers and sellers.</p>
        <button>Start Shopping</button>
      </section>

      <section className="categories">
        <h2>Categories</h2>

        <div className="category-box">
          <div>📱 Electronics</div>
          <div>👕 Fashion</div>
          <div>🏠 Home</div>
          <div>🚗 Vehicles</div>
        </div>
      </section>

      <section className="products">
        <h2>Featured Products</h2>

        <div className="product-container">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 Novixa Mart. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;