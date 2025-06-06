import React, { useContext } from 'react'
import './FoodItem.css'
import { appAssets } from '../../assets/app_assets';
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,price,description,image}) => {

    
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
            {!cartItems[id]
                 ?<img className='add' onClick={()=>addToCart(id)} src={appAssets.add_icon} alt="" />
                 :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={appAssets.minus_icon} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={appAssets.add_icon_green} alt="" />
                 </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={appAssets.rating_starts} alt ="" />
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
