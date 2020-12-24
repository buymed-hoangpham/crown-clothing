import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
};

function InputField({ label, onChange, ...otherInputProps }) {
    return (
        <div className="group">
            <input
                className="form-input"
                onChange={onChange}
                {...otherInputProps}
            />
            {label ? (
                <label
                    className={`${
                        otherInputProps.value.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
}

export default InputField;
