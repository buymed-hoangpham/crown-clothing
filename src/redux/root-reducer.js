import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cartReducer';
import userReducer from './user/userReducer';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
