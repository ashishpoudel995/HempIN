const CartReducer=(state=[],action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            return [
                ...state,action.payload
            ]
        case 'REMOVE_ITEM':
            return state.filter(state=>state.id!=action.payload);
        default:
            return state;
    }
}

export default CartReducer;