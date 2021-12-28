import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

export default function Cart() {
    const { cart } = useSelector(state => state.CartReducer);
    const totalPrice = cart.reduce((total, item) => { return total += item.amount * item.price }, 0).toLocaleString(2);
    // console.log(cart)
    const renderCartItem = () => {
        if (cart.length === 0) {
            return <p className="cart__empty__text">Your cart is empty.</p>
        }
        return null
    }
    return (
        <div className="card mx-auto md:mb-5 md:mx-0">
            <div className="card__top flex justify-between items-baseline">
                <div>
                    <img src="./assets/images/nike.png" alt="..." />
                    <h3>Your cart</h3>
                </div>
                <span>${totalPrice}</span>
            </div>
            <div className="card__body">
                {renderCartItem()}
                {cart.map((item, index) => <CartItem key={index} item={item} />)}
            </div>
        </div>
    )
}
