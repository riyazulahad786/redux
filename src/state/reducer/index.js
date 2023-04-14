import react from 'react';
import amountReducer from './amountReducer';
import combineReducer from 'redux'

const  reducer = combineReducer({
    amount:amountReducer
})

export default reducer;