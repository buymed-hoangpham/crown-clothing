import React from 'react';
import Header from 'components/Header';
import AuthPage from 'pages/AuthPage';
import ShopPage from 'pages/ShopPage';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';
import HomePage from './pages/HomePage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from 'redux/user/userAction';

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    });
                });
            }

            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/auth" component={AuthPage} />
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
