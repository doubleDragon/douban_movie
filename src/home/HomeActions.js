import HomeConstants from './HomeConstants';

const createAction = (type) => {
    return {
        type,
        date: {}
    }
};

const actions = {
    TEST: createAction(HomeConstants.ACTION_TEST),
    ADD: createAction(HomeConstants.ACTION_ADD),
    REMOVE: createAction(HomeConstants.ACTION_REMOVE)
};

export default actions;