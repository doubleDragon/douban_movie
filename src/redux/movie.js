import {Get} from '../lib/Http';
import {PAGE_COUNT} from '../config';


export const TYPE_NOW_REQUEST = 'NOW_MOVIES_REQUEST';
export const TYPE_NOW_SUCCESS = 'NOW_MOVIES_SUCCESS';
export const TYPE_NOW_FAILURE = 'NOW_MOVIES_FAILURE';


export const loadNowMovies = (shouldCallAPI, start=0, append=false) => {
    const path = `/movie/in_theaters?count=${PAGE_COUNT}&start=${start}`;
    return {
        types: [TYPE_NOW_REQUEST, TYPE_NOW_SUCCESS, TYPE_NOW_FAILURE],
        shouldCallAPI,
        callAPI: () => Get(path),
        payload: {start, append}
    }
};

export const TYPE_NEXT_REQUEST = 'NEXT_MOVIES_REQUEST';
export const TYPE_NEXT_SUCCESS = 'NEXT_MOVIES_SUCCESS';
export const TYPE_NEXT_FAILURE = 'NEXT_MOVIES_FAILURE';

export const loadNextMovies = (shouldCallAPI, start=0, append=false) => {
    const path = `/movie/coming_soon?count=${PAGE_COUNT}&start=${start}`;
    return {
        types: [TYPE_NEXT_REQUEST, TYPE_NEXT_SUCCESS, TYPE_NEXT_FAILURE],
        shouldCallAPI,
        callAPI: () => Get(path),
        payload: {start, append}
    }
};