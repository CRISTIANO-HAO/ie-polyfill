import { FETCH_DATA } from "./MainTypes";
import { START, SUCCESS, ERROR } from "../commonActionTypes";

export const startFetchingData = () => ({
    type: FETCH_DATA + START,
});

export const fetchDataSuccess = (payload) => ({
    type: FETCH_DATA + SUCCESS,
    payload,
});

export const fetchDataError = (payload) => ({
    type: FETCH_DATA + ERROR,
    payload,
});

export const fetchData = () => ({
    type: FETCH_DATA,
});
