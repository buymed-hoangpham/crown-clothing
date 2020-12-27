import CartItem from 'components/cartItem/inxex';
import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from 'redux/cart/cart.selectors';
import CustomButton from '../form-control/CustomButton';
import './styles.scss';

const CartDropDown = ({ cartItems }) => {
    console.log(cartItems);
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))}
            </div>
            <CustomButton> GO TO CHECKOUT </CustomButton>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
