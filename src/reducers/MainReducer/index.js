
import { START, SUCCESS, ERROR } from "../../actions/commonActionTypes";
import { FETCH_DATA } from "../../actions/MainActions/MainTypes";

const initialState = {
    isLoading: false,
    data: [],
    error: "",
};

const startFetching = (state) => ({
    ...state,
    isLoading: true,
});

const fetchSuccess = (state, payload) => ({
    ...state,
    isLoading: false,
    data: payload,
});

const fetchError = (state, payload) => ({
    ...state,
    isLoading: false,
    data: payload,
});

const reducerHandler = {
    [FETCH_DATA + START]: startFetching,
    [FETCH_DATA + SUCCESS]: fetchSuccess,
    [FETCH_DATA + ERROR]: fetchError,
};

export default (state = initialState, action) => {
    const reducer = reducerHandler[action.type];

    return reducer ? reducer(state, action.payload) : state;
};
