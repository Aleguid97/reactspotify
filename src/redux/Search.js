const initialState={
    searchResult:[]
}

const searchReducer=(state=initialState,action) =>
{switch(action.type){
    case "SEARCH_RESULT":
        return{
            ...state, 
            searchResult:action.payload
        }
        case "CLEAR":
        return{
            ...state, 
            searchResult:[]
        }
        default:return state

}}
export default searchReducer