import {connect} from 'react-redux';
import Home from './Home';
import HomeActions from './HomeActions';

const mapStateToProps = (state) => {
    return {
        value: 'home com'
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch(HomeActions.ADD),
        remove: () => dispatch(HomeActions.REMOVE),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)