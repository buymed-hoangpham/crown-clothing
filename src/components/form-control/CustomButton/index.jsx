import React from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';

CustomButton.propTypes = {};

function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
    return (
        <button
            className={` ${inverted ? 'inverted' : ''} ${
                isGoogleSignIn ? 'google-sign-in' : ''
            } custom-button`}
            {...otherProps}
        >
            {children}
        </button>
    );
}

export default CustomButton;
