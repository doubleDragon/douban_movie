import './actions';
import {LOADING, ERROR, DATA, REFRESHING} from "./actions";

const default_state = {
    refreshing: false,
    loading: false
};

const reducer = (state=default_state, action) => {
    const {type, loading, refreshing, error, data, increment} = action;
    switch(type) {
        case LOADING:
            return Object.assign({}, state, {loading});
        case REFRESHING:
            return Object.assign({}, state, {refreshing});
        case ERROR:
            return Object.assign({}, state, {error});
        case DATA:
            //因为可能有上拉加载更多，需要拼接数据，但是又不不知道具体要拼接哪个字段，所以传递新旧数据，并告知是否增量
            return {
                prev: state.current,
                current: data,
                refreshing: state.refreshing,
                loading: state.loading,
                error: state.error,
                increment
            };
        default:
            return state;
    }
};

export default reducer;