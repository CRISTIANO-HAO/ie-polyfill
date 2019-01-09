import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// Reducers
import main from "./MainReducer";

const reducer = combineReducers({
    router: routerReducer,
    main,
});

export default reducer;
