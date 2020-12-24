import React from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';

CustomButton.propTypes = {};

function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
    return (
        <button
            className={` ${
                isGoogleSignIn ? 'google-sign-in' : ''
            } custom-button`}
            {...otherProps}
        >
            {children}
        </button>
    );
}

export default CustomButton;
