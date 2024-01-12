import { useEffect,useState} from 'react';
import { useCart } from '../context/CartContext'
import './ProductCard.css'

export const ProductCard = ({ product }) => {
  const { name, price, image } = product
  const { addToCart,removeCartList,cartlist } = useCart();
  const[isIt, setIsIt] = useState();

  useEffect(()=>{

   const productIsInCart = cartlist.find((current)=> current.id===product.id)

    if(productIsInCart){
      setIsIt(true)
    }else{
      setIsIt(false)
    }
  },[cartlist,product.id])


return (
  <div className='main'>
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>
          ${price}

          {isIt? (<button className='remove' onClick={() => removeCartList(product)}>remove</button> ):(<button onClick={() => addToCart(product)}>Add to Cart</button>)}
         
        </p>

      </div>
    </div>
  </div>


)
}
