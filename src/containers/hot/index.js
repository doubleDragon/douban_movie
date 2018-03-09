import React from 'react';
import {connect} from 'react-redux';
import HotComponent from './presenter';

import {loadNowMovies, loadNextMovies} from '../../redux/movie';

const mapStateToProps = (state) => {

    const {now: nowState, next: nextState} = state.frontend['hot'];

    const subjects = state.entities['subjects'];
    const casts = state.entities['casts'];
    const directors = state.entities['directors'];

    //make now items
    const nowObjects = nowState.ids ? nowState.ids.map(id => {
        const subject = subjects[id];

        let castNames = subject.casts ? subject.casts.map(id => casts[id].name) : null;
        let castsAsString = castNames ? castNames.join('/') : null;
        let collectCount = subject.collectCount > 10000 ?
            (subject.collectCount / 10000).toFixed(1) + "万" : subject.collectCount.toString();
        let average = subject.rating.average !== 0 ? subject.rating.average.toString() : '暂无评分';

        return {
            title: subject.title,
            image: subject.images.small,
            director: directors[subject.directors[0]].name,
            casts: castsAsString,
            collectCount,
            stars: parseInt(subject.rating['stars']) / 10,
            average
        };
    }) : [];

    const nextObjects = nextState.ids ? nextState.ids.map(id => {
        const subject = subjects[id];

        let castNames = subject.casts ? subject.casts.map(id => casts[id].name) : null;
        let castsAsString = castNames ? castNames.join('/') : null;
        let collectCount = subject.collectCount > 10000 ?
            (subject.collectCount / 10000).toFixed(1) + "万" : subject.collectCount.toString();
        let average = subject.rating.average !== 0 ? subject.rating.average.toString() : '暂无评分';

        return {
            title: subject.title,
            image: subject.images.small,
            director: directors[subject.directors[0]].name,
            casts: castsAsString,
            collectCount,
            stars: parseInt(subject.rating['stars']) / 10,
            average
        };
    }) : [];

    const nowItem = Object.assign({}, {
        isFetching: nowState.isFetching,
        error: nowState.error,
        items: nowObjects});
    const nextItem = Object.assign({}, {
        isFetching: nextState.isFetching,
        error: nextState.error,
        items: nextObjects});

    return {
        nowItem,
        nextItem
    }
};


const shouldCallNowLoad = (state, payload) => {
    const item = state.frontend['hot']['now'];
    if(item.isLoading || item.isFetching) {
        console.log('shouldCallNowLoad intercept, because is loading or fetching');
        return false;
    }
    if(payload.start >= item.total) {
        console.log(`shouldCallNowLoad intercept, because start=${payload.start}: >= total=${item.total}`);
        return false;
    }
    //props.items.length 不太稳定，上次是20,这次可能是17, 这种情况直接return
    if(payload.start <= item.start) {
        console.log(`shouldCallNowLoad intercept, because payload.start=${payload.start}: <= item.start=${item.start}`);
        return false;
    }

    return true;
};


const shouldCallNextLoad = (state, payload) => {
    const item = state.frontend['hot']['next'];
    if(item.isLoading || item.isFetching) {
        console.log('shouldCallNextLoad intercept, because is loading or fetching');
        return false;
    }
    if(payload.start >= item.total) {
        console.log(`shouldCallNextLoad intercept, because start=${payload.start}: >= total=${item.total}`);
        return false;
    }
    //props.items.length 不太稳定，上次是20,这次可能是17, 这种情况直接return
    if(payload.start <= item.start) {
        console.log(`shouldCallNextLoad intercept, because payload.start=${payload.start}: <= item.start=${item.start}`);
        return false;
    }

    return true;
};


const shouldCallNowRefresh = (state) => {
    const item = state.frontend['hot']['now'];
    return !(item.isLoading || item.isFetching);
};

const shouldCallNextRefresh = (state) => {
    const item = state.frontend['hot']['next'];
    return !(item.isLoading || item.isFetching);
};


const handleNowLoadedInternal = () => {
    return (dispatch, getState) => {
        const state = getState();
        const {now: nowState} = state.frontend['hot'];
        dispatch(loadNowMovies(shouldCallNowLoad, nowState.count, true));
    };
};

const handleNextLoadedInternal = () => {
    return (dispatch, getState) => {
        const state = getState();
        const {next: nextState} = state.frontend['hot'];
        dispatch(loadNextMovies(shouldCallNextLoad, nextState.count, true));
    };
};

const mapDispatchToProps = (dispatch) => {
    //fetch data from server
    return {
        handleNowLoaded: () => {
            dispatch(handleNowLoadedInternal());
        },
        handleNowRefresh: () => {
            dispatch(loadNowMovies(shouldCallNowRefresh, 0, false))
        },
        handleNextLoaded: () => {
            dispatch(handleNextLoadedInternal());
        },
        handleNextRefresh: () => {
            dispatch(loadNextMovies(shouldCallNextRefresh, 0, false))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HotComponent);