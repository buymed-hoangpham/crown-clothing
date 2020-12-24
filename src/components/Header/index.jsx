// import PropTypes from 'prop-types';
import { ReactComponent as Logo } from 'assets/Crown.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { auth } from '../../firebase/firebase.utils';

Header.propTypes = {};

function Header({ currentUser }) {
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
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className="option" to="/auth">
                        SIGN IN
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Header;
