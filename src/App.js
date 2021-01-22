import ErrorBoundary from 'components/error-boundary/error-boundary.component';
import Header from 'components/Header';
import Spinner from 'components/Spinner/spinner.component';
import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { selectCurrentUser } from 'redux/user/user.selectors';
import { checkUserSession } from 'redux/user/userAction';
import { createStructuredSelector } from 'reselect';
import './App.scss';

const HomePage = lazy(() => import('./pages/HomePage'));
const ShopPage = lazy(() => import('pages/ShopPage'));
const CheckOutPage = lazy(() => import('components/checkOut'));
const AuthPage = lazy(() => import('pages/AuthPage'));

const App = ({ checkUserSession, currentUser }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div className="App">
            <Header />
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/shop" component={ShopPage} />
                        <Route
                            exact
                            path="/checkout"
                            component={CheckOutPage}
                        />
                        <Route
                            exact
                            path="/auth"
                            render={() =>
                                currentUser === null ? (
                                    <AuthPage />
                                ) : (
                                    <Redirect to="/" />
                                )
                            }
                        />
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
