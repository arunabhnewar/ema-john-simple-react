import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, price, stock, star } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div className="product-detail">
                <div>
                    <h4 className="product-name">{name}</h4>
                    <h4><small>by: {seller}</small></h4>

                    <p className="product-price">Price: ${price}</p>
                    <p><small>only {stock} left in stock - order soon</small></p>
                </div>
                <div className="btn-container">
                    <Rating
                        initialRating={star}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly
                    ></Rating>
                    <h3>Features</h3>
                    <ul>
                        {
                            props.product.features.map((feature, index) => <li key={index}><span className="feature-desc">{feature.description}</span> :<span className="feature-value">{feature.value}</span> </li>)
                        }
                    </ul>
                    <button
                        onClick={() => props.handleAddToCart(props.product)}
                        className="purchase-btn">
                        <FontAwesomeIcon icon={faShoppingCart} /> add cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;