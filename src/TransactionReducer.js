const TransactionReducer= ((state, action)=>{
    switch(action.type){
        case "ADD" : {
            return [action.payload, ...state]
        }
        dafault:
        return state:
    }
})
export default TransactionReducer;