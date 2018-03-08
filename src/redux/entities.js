import merge from 'lodash/merge'
const entities = (state = {}, action) => {
    if (action.response && action.response.entities) {
        //注意这里是合并操作
        return merge({}, state, action.response.entities)
    }

    return state
};

export default entities;