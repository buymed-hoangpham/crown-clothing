import React from 'react';
import { connect } from 'react-redux';
import { addItem, decreaseItem, removeItem } from 'redux/cart/cartActions';
// import PropTypes from 'prop-types';
import './styles.scss';

CheckOutItem.propTypes = {};

function CheckOutItem({ cartItem, removeItem, addItem, decreaseItem }) {
    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => decreaseItem(cartItem)}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => removeItem(cartItem)}>
                &#10005;
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    removeItem: (item) => dispatch(removeItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    decreaseItem: (item) => dispatch(decreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
