import CartActionTypes from './cart.types';
import {
    addItemToCart,
    decreaseItemFromCart,
    removeItemFromCard,
} from './cart.utils';

const initialState = {
    hidden: true,
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN: {
            return {
                ...state,
                hidden: !state.hidden,
            };
        }
        case CartActionTypes.ADD_ITEM: {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        }
        case CartActionTypes.DECREASE_ITEM_FROM_CART: {
            return {
                ...state,
                cartItems: decreaseItemFromCart(
                    state.cartItems,
                    action.payload
                ),
            };
        }
        case CartActionTypes.REMOVE_ITEM: {
            return {
                ...state,
                cartItems: removeItemFromCard(state.cartItems, action.payload),
            };
        }
        default:
            return state;
    }
};

export default cartReducer;
