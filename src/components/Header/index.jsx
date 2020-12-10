// import PropTypes from 'prop-types';
import { ReactComponent as Logo } from 'assets/Crown.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

Header.propTypes = {};

function Header(props) {
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
            </div>
        </div>
    );
}

export default Header;
