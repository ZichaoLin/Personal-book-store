import * as actiontypes from './actionTypes';
import isEmpty from 'lodash/isEmpty';

const initState = {
    isAuth: false,
    user: {}
}

export default (state = {}, action) => {
    switch (action.type) {
        case actiontypes.SYNC_STATE_INFO:
            return {
                isAuth: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
};