import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
type CartItemprops ={
    cartItem:any;
};

const CartItem = ({cartItem}:CartItemprops) => {
    const {photo, productId,name, price,quantity}=cartItem
    return <div className="cart-item"> 
    <img src={photo} alt={name}/>
    <article>
    <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
    </article>
    <div>
        {/* <button onClick={() => decrementHandler(cartItem)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => incrementHandler(cartItem)}>+</button> */}
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
      <button>
        <FaTrash />
      </button>
    </div>;
    };
  
  export default CartItem;