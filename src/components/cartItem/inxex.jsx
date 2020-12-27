import React from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';

CartItem.propTypes = {};

function CartItem({ item: { imageUrl, price, name, quantity } }) {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} X ${price}
                </span>
            </div>
        </div>
    );
}

export default CartItem;
