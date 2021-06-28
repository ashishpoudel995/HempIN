import CartReducer from './CartReducer';
import {combineReducers} from 'redux';

const AllReducers=combineReducers(
    {
        CartReducer
    }
)

export default AllReducers;