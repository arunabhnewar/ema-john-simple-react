import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, [])

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = []
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // dave to local storage now
        addToDb(product.key);
    }

    const handleSearch = e => {
        const searchText = e.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }
    return (
        <>
            <div className="search-container">
                <input onChange={handleSearch} type="text" placeholder="search" />
                <div className="icon">
                    <FontAwesomeIcon icon={faShoppingCart} /> {cart?.quantity}
                </div>
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>

                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="regular-btn">Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;