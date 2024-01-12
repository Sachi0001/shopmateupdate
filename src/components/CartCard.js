import { useCart } from '../context/CartContext';
import './cartcard.css'

export const CartCard = ({ product }) => {
 

  const { name, price, image } = product;
  const {removeCartList} = useCart();
  return (
   
    <div className="card">

      <img src={image} alt={name} />
      <p>{name}</p>
      <div className="action">
        <p>${price}</p>
        <button onClick={()=>removeCartList(product)}>remove</button>
      </div>
    </div>
  
  )
}
