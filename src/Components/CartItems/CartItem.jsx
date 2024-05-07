import React, { useContext } from 'react'
import './cartItem.css'
import { ShopContext }  from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItem = () => {
    const {getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>   
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cartitems-promocode'>
                    <p>Apply Your Promocode</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Enter Your Promocode'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>

            {/* <div>
                <div className="cartitems-format">
                    <img src="" alt=""  className='carticon-product-icon'/>
                    <p></p>
                    <p></p>
                    <button className='cartitems-quantity'></button>
                    <p></p>
                    <img src={remove_icon} onClick={()=>{removeFromCart()}} alt="" />
                </div>
                <hr />
            </div> */}
        </div>
    )
}

export default CartItem