import {TYPE_NEXT_FAILURE, TYPE_NEXT_REQUEST, TYPE_NEXT_SUCCESS} from "../../../redux/movie";

const init_state = {
    isFetching: false,
    isLoading: false,
    error: '',
    ids: [],

};

const reducer = (state=init_state, action) => {
    const {type, append} = action;
    const key = append ? 'isLoading' : 'isFetching';
    switch (type) {
        case TYPE_NEXT_REQUEST:
            return Object.assign({}, state, {[key]: true});
        case TYPE_NEXT_SUCCESS:
            //存储subjects的id列表
            let {start = 0, total = 0, count = 0} = action.response.result;

            let newIds = action.response.result.subjects ? action.response.result.subjects : [];
            let ids = newIds;
            if(append) {
                ids = [...state.ids, ...newIds];
                count = state.count + newIds.length;
            }

            //是否需要排序?
            return Object.assign({}, state, {[key]: false, ids, start, total, count});

        case TYPE_NEXT_FAILURE:
            return Object.assign({}, state, {[key]: false, error: action.error});
        default:
            return state;
    }
};

export default reducer;