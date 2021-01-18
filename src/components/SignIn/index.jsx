// import PropTypes from 'prop-types';
import CustomButton from 'components/form-control/CustomButton';
import InputField from 'components/form-control/InputField';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { emailSignInStart, googleSignInStart } from 'redux/user/userAction';
import './styles.scss';

SignIn.propTypes = {};

function SignIn(props) {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const dispatch = useDispatch();

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = values;
        dispatch(emailSignInStart({ email, password }));
    };

    const onHandleChange = (e) => {
        e.persist();
        const { name, value } = e.target;
        setValues((values) => ({ ...values, [name]: value }));
    };

    return (
        <div className="sign-in">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

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
                <div className="buttons">
                    <CustomButton type="submit">Log in</CustomButton>
                    <CustomButton
                        type="button"
                        onClick={() => dispatch(googleSignInStart())}
                        isGoogleSignIn
                    >
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
