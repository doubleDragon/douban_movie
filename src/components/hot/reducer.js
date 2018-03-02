const default_state = {
    isLoading: false,
};

const reducer = (state=default_state, action) => {
    const {type} = action;
    switch(type) {
        case HomeConstants.ACTION_TEST:
            return Object.assign({}, state, {title: "onclick test"});
        case HomeConstants.ACTION_ADD:
            return Object.assign({}, state, {title: "onclick add"});
        case HomeConstants.ACTION_REMOVE:
            return Object.assign({}, state, {title: "onclick remove"});
        default:
            return state;
    }
};

export default reducer;