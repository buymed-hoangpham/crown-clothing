import React from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';

CustomButton.propTypes = {};

function CustomButton({ children, ...otherProps }) {
    return (
        <button className="custom-button" {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButton;
