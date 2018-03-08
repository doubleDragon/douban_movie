import {TYPE_NOW_REQUEST, TYPE_NOW_SUCCESS, TYPE_NOW_FAILURE} from '../../../redux/movie';

const init_state = {
    isFetching: false,
    isLoading: false,
    error: '',
    ids: []
};

const reducer = (state = init_state, action) => {
    const {type, append} = action;
    const key = append ? 'isLoading' : 'isFetching';
    switch (type) {
        case TYPE_NOW_REQUEST:
            return Object.assign({}, state, {[key]: true});
        case TYPE_NOW_SUCCESS:
            //存储subjects的id列表
            const ids = action.response.result.subjects ? action.response.result.subjects : [];
            const {start = 0, total = 0} = action.response.result;
            //是否需要排序?
            return Object.assign({}, state, {[key]: false, ids, start, total});

        case TYPE_NOW_FAILURE:
            return Object.assign({}, state, {[key]: false, error: action.error});
        default:
            return state;
    }
};

export default reducer;