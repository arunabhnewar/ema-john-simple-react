import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.15;
    const grandTotal = total + shipping + tax;


    return (
        <div className="cart-body">
            <h3 className="summary">Order Summary</h3>
            <h4 className="ordered">Items Ordered: {totalQuantity}</h4>
            <hr />
            <p className="cart-text">Total: <span className="cart-total">${total.toFixed(2)}</span></p>
            <p className="cart-text">Shipping: <span className="cart-shipping">${shipping}</span></p>
            <p className="cart-text">Tax: <span className="cart-tax">${tax.toFixed(2)}</span></p>
            <p className="total-text">Grand Total: <span className="grand-total">${grandTotal.toFixed(2)}</span></p>
            {props.children}
        </div>
    );
};

export default Cart;