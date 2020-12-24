// import PropTypes from 'prop-types';
import CustomButton from 'components/form-control/CustomButton';
import InputField from 'components/form-control/InputField';
import React, { useState } from 'react';
import './styles.scss';

SignUp.propTypes = {};

function SignUp(props) {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
    };

    const onHandleChange = (e) => {
        e.persist();
        const { name, value } = e.target;
        setValues((values) => ({ ...values, [name]: value }));
    };

    return (
        <div className="sign-in">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>

            <form action="" onSubmit={onHandleSubmit}>
                <InputField
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onHandleChange}
                    label={'Email'}
                    required
                />
                <InputField
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={onHandleChange}
                    label={'Password'}
                    required
                />
                <InputField
                    type="password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={onHandleChange}
                    label={'Confirm Password'}
                    required
                />
                <CustomButton type="submit">Log in</CustomButton>
            </form>
        </div>
    );
}

export default SignUp;
