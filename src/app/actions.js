import {Get} from "../lib/Http";

export const LOADING = 0;
export const ERROR = 1;
export const DATA = 2;
export const REFRESHING = 3;

//load more
export function createLoadingAction(loading) {
    return {
        type: LOADING,
        loading
    }
}

//refresh
export function createRefreshAction(refreshing) {
    return {
        type: REFRESHING,
        refreshing
    }
}

export function createErrorAction(error) {
    return {
        type: ERROR,
        error
    }
}

export function createDataAction(data, increment=false) {
    return {
        type: DATA,
        data,
        increment
    }
}

export const fetchData = (path, increment=false) => {
    if(increment) {
        return (dispatch) => {
            dispatch(createLoadingAction(true));
            Get(path)
                .then(response => {
                    if(!response.ok) {
                        throw Error(response.statusText);
                    }
                    dispatch(createLoadingAction(false));
                    return response;
                })
                .then(response => response.json())
                .then(response => {
                    if(response['msg']) {
                        throw Error(response['msg']);
                    }
                    return response;
                })
                .then(data => {
                    dispatch(createDataAction(data, true))
                })
                .catch(error => {
                    dispatch(createErrorAction(error))
                });
        };
    }

    return (dispatch) => {
        dispatch(createRefreshAction(true));
        Get(path)
            .then(response => {
                if(!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(createRefreshAction(false));
                return response;
            })
            .then(response => response.json())
            .then(response => {
                if(response['msg']) {
                    throw Error(response['msg']);
                }
                return response;
            })
            .then(data => {
                dispatch(createDataAction(data, false))
            })
            .catch(error => {
                dispatch(createErrorAction(error))
            });
    };
};