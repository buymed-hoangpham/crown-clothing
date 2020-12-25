import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import React from 'react';
import './styles.scss';
import { toggleCartHidden } from 'redux/cart/cartActions';
import { connect } from 'react-redux';

const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
