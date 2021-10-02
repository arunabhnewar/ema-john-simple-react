
const ReviewItem = (props) => {
    const { name, price, quantity, seller, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
            <div>
                <h4 className="product-name">{name}</h4>
                <p className="product-price">Price: {price}</p>
                <p>Sold by: {seller}</p>
                <p>Quantity: {quantity}</p>
                <button
                    onClick={() => handleRemove(key)}
                    className="purchase-btn"
                >Remove</button>
            </div>

        </div>
    );
};

export default ReviewItem;