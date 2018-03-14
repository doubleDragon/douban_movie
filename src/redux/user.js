

const reducer = (state = {}, action) => {
    if(action.type === 'LOGIN') {
        const {username, pwd} = action.payload;
        return Object.assign({}, state, {username, pwd})
    }
    return state;
};
export default reducer;

export const loginAction = (username, pwd) => {
    return {
        type: 'LOGIN',
        payload: {
            username,
            pwd
        }
    }
};