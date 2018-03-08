import {normalize} from 'normalizr';
import {camelizeKeys} from 'humps';
import {movieSchema} from '../redux/model';

export default function callAPIMiddleware({dispatch, getState}) {
    return next => action => {
        const {
            types,
            callAPI,
            shouldCallAPI = () => true,
            payload = {}
        } = action;

        if (!types) {
            // Normal action: pass it on
            return next(action)
        }

        if (
            !Array.isArray(types) ||
            types.length !== 3 ||
            !types.every(type => typeof type === 'string')
        ) {
            throw new Error('Expected an array of three string types.')
        }

        if (typeof callAPI !== 'function') {
            throw new Error('Expected callAPI to be a function.')
        }

        if (!shouldCallAPI(getState(), payload)) {
            return
        }

        const [requestType, successType, failureType] = types;

        dispatch(Object.assign({}, payload, {
            type: requestType
        }));

        return callAPI()
            .then(raw => raw.json())
            .then(json => camelizeKeys(json))
            .then(json => normalize(json, movieSchema))
            .then(response => {
                dispatch(Object.assign({}, payload, {
                    response,
                    type: successType
                }))
            })
            .catch(error => {
                dispatch(Object.assign({}, payload, {
                    error,
                    type: failureType
                }))
            });

        // return callAPI().then(
        //     response => dispatch(Object.assign({}, payload, {
        //         response,
        //         type: successType
        //     })),
        //     error => dispatch(Object.assign({}, payload, {
        //         error,
        //         type: failureType
        //     }))
        // )
    }
}


// export default store => next => action => {
//     const callAPI = action[CALL_API]
//     if (typeof callAPI === 'undefined') {
//         return next(action)
//     }
//
//     let {endpoint} = callAPI
//     const {schema, types} = callAPI
//
//     if (typeof endpoint === 'function') {
//         endpoint = endpoint(store.getState())
//     }
//
//     if (typeof endpoint !== 'string') {
//         throw new Error('Specify a string endpoint URL.')
//     }
//     if (!schema) {
//         throw new Error('Specify one of the exported Schemas.')
//     }
//     if (!Array.isArray(types) || types.length !== 3) {
//         throw new Error('Expected an array of three action types.')
//     }
//     if (!types.every(type => typeof type === 'string')) {
//         throw new Error('Expected action types to be strings.')
//     }
//
//     const actionWith = data => {
//         const finalAction = Object.assign({}, action, data)
//         delete finalAction[CALL_API]
//         return finalAction
//     }
//
//     const [requestType, successType, failureType] = types
//     next(actionWith({type: requestType}))
//
//     return callApi(endpoint, schema).then(
//         response => next(actionWith({
//             response,
//             type: successType
//         })),
//         error => next(actionWith({
//             type: failureType,
//             error: error.message || 'Something bad happened'
//         }))
//     )
// }
