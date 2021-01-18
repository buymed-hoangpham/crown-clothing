// import PropTypes from 'prop-types';
import { ReactComponent as Logo } from 'assets/Crown.svg';
import CartDropDown from 'components/cartDropDown';
import CartIcon from 'components/cartIcon';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartHidden } from 'redux/cart/cart.selectors';
import { selectCurrentUser } from 'redux/user/user.selectors';
import { signOutStart } from 'redux/user/userAction';
import { auth } from '../../firebase/firebase.utils';
import './styles.scss';

Header.propTypes = {};

function Header() {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => selectCurrentUser(state));
    const cartHidden = useSelector((state) => selectCartHidden(state));
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/shop" className="option">
                    CONTACT
                </Link>
                {currentUser ? (
                    <div
                        className="option"
                        onClick={() => dispatch(signOutStart())}
                    >
                        SIGN OUT
                    </div>
                ) : (
                    <Link className="option" to="/auth">
                        SIGN IN
                    </Link>
                )}
                <CartIcon />
            </div>
            {cartHidden ? null : <CartDropDown />}
        </div>
    );
}

export default Header;
