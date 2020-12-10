import Header from 'components/Header';
import AuthPage from 'pages/AuthPage';
import ShopPage from 'pages/ShopPage';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';

function App() {
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

export default App;
