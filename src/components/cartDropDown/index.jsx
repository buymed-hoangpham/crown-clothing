import CartItem from 'components/cartItem';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from 'redux/cart/cart.selectors';
import { toggleCartHidden } from 'redux/cart/cartActions';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../form-control/CustomButton';
import './styles.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => {
    console.log(cartItems);
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <div className="empty-message">Your cart is empty</div>
                )}
            </div>
            <CustomButton
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}
            >
                {' '}
                GO TO CHECKOUT{' '}
            </CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
