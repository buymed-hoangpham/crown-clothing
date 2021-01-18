import { all, call } from 'redux-saga/effects';
import { cartSaga } from './cart/cart.sagas';
import { shopSaga } from './shop/shopSagas';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
    yield all([call(shopSaga), call(userSagas), call(cartSaga)]);
}
