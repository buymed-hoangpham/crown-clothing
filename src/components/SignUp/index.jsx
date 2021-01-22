// import PropTypes from 'prop-types';
import CustomButton from 'components/form-control/CustomButton';
import InputField from 'components/form-control/InputField';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpStart } from 'redux/user/userAction';
import './styles.scss';

SignUp.propTypes = {};

function SignUp(props) {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = values;
        if (password !== confirmPassword) {
            alert("Passwords don't match!!!");
            return;
        }
        dispatch(signUpStart({ email, password, displayName }));
    };

    const onHandleChange = (e) => {
        e.persist();
        const { name, value } = e.target;
        setValues((values) => ({ ...values, [name]: value }));
    };

    return (
        <div className="sign-up">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>

            <form action="" onSubmit={onHandleSubmit}>
                <InputField
                    type="text"
                    name="displayName"
                    value={values.displayName}
                    onChange={onHandleChange}
                    label={'Display Name'}
                    required
                />
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
                <div className="buttons">
                    <CustomButton type="submit">Log in</CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
