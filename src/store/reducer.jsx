import { Action } from "history";
import { legacy_createStore as createStore } from "redux";

const intial = {
    users : []
}

const reducer = (state=intial.users,action) =>{
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                users:[...state.users,action.payload]
            }
            default:
                return state;
    }
}
export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )