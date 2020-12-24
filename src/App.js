import React from 'react';
import Header from 'components/Header';
import AuthPage from 'pages/AuthPage';
import ShopPage from 'pages/ShopPage';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data(),
                        },
                    });
                });
            }

            this.setState({ currentUser: userAuth });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/auth" component={AuthPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
