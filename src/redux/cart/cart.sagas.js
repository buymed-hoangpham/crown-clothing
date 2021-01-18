import { all, call, put, takeLatest } from 'redux-saga/effects';
import CartActionTypes from './cart.types';
import { clearCart } from './cartActions';

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(CartActionTypes.CLEAR_CART, clearCartOnSignOut);
}

export function* cartSaga() {
    yield all([call(onSignOutSuccess)]);
}
