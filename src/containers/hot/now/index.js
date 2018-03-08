// import {connect} from 'react-redux';
//
// import {fetchData} from '../../../app/actions';
// import {PAGE_COUNT} from '../../../lib/Http';
//
// import HotNow from './presenter';
//
// const mapStateToProps = (state) => {
//     let total = 0;
//     let start = 0;
//     let items = [];
//     if (state.common.current) {
//         total = state.common.current.total;
//         start = state.common.current.start;
//
//         if(state.common.increment && state.common.prev) {
//             items.push(...state.common.prev['subjects'], ...state.common.current['subjects']);
//         } else {
//             items.push(...state.common.current['subjects']);
//         }
//     }
//
//     return {
//         items: items,
//         total,
//         start,
//         loading: state.common.loading,
//         refreshing: state.common.refreshing,
//         error: state.common.error
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     let path = `/movie/in_theaters?count=${PAGE_COUNT}`;
//     return {
//         handleRefresh: () => dispatch(fetchData(path)),
//         handleLoad: (start) => dispatch(fetchData(`${path}&start=${start}`, true)),
//     }
// };
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(HotNow)