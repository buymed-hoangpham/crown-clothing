import SignIn from 'components/SignIn';
import SignUp from 'components/SignUp';
import React from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';

AuthPage.propTypes = {};

function AuthPage(props) {
    return (
        <div className="auth-page">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default AuthPage;
