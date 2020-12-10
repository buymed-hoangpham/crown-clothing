import ShopPage from 'pages/ShopPage';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </div>
    );
}

export default App;
