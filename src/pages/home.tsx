import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {
  };
  return (
    
    <div className="home"> 
      <section>

      </section>
      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
         <ProductCard productId="bnbn" name="Macbook" price={4545} stock={4535}  handler={addToCartHandler} photo="https://iplanet.one/cdn/shop/files/r1587_Space_Grey_PDP_Image_Position-1__en-IN.jpg?v=1691142733"/>
      </main>
    
    
    
    
    </div>
  );
};
  
  export default Home;