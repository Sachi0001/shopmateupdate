import { CartCard } from "../components/CartCard";
import { useHooks } from "../hooks/useHooks";
import { useCart } from '../context/CartContext';
import './cart.css';


export const Cart = () => {
  const {total, cartlist}= useCart()
  useHooks("Cart")
  
  //  const products= [{"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
  //   {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"}]
  return (
    <div>
      <h1>{cartlist.length}/ {total}`</h1>
      {cartlist.map((product)=>(
        <CartCard key={product.id} product={product} />
      ))}
      </div>
  )
}
