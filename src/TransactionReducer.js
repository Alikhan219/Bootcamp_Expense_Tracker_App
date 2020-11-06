const TransactionReducer= ((state, action)=>{
    switch(action.type){
        case "ADD_TRANSACTION" : {
            return [  action.payload, ...state]
        }
        dafault:
        return state;
    }
})
export default TransactionReducer;