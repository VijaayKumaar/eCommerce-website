import { createStore , combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import { getProductReducer } from '../ProductReducer';

const ruducer= combineReducers({
    getProduts:getProductReducer,
    getprodutsDetails:getProductReducer
})
const middleware=[thunk];
const store= createStore(
    ruducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;