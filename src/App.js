import CheckOutPage from 'components/checkOut';
import Header from 'components/Header';
import AuthPage from 'pages/AuthPage';
import ShopPage from 'pages/ShopPage';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { selectCurrentUser } from 'redux/user/user.selectors';
import { checkUserSession } from 'redux/user/userAction';
import { createStructuredSelector } from 'reselect';
import './App.scss';
import HomePage from './pages/HomePage';

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { checkUserSession } = this.props;
        checkUserSession();
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
                    <Route exact path="/checkout" component={CheckOutPage} />
                    <Route
                        exact
                        path="/auth"
                        render={() =>
                            this.props.currentUser === null ? (
                                <AuthPage />
                            ) : (
                                <Redirect to="/" />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
