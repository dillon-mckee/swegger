import actions from './actions';
import { combineReducers } from 'redux';
import update from 'react-addons-update';

const initialState = {
    hireMeText: '',
    portfolioURL: '',
    isModalOpen: false,

};

export const sweggerReducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return update(state, {
              hireMeText: {$set: action.data.text},
              portfolioURL: {$set: action.data.portfolioURL},
    });
        case 'FETCH_DATA_ERROR':
            console.log(action.error);
        return state;
        case 'OPEN_MODAL':
        console.log(state);
            return update(state, {
                isModalOpen: {$set: true}
      });
        case 'CLOSE_MODAL':
            return update(state, {
                isModalOpen: {$set: false}
      });
        default:
            return state;
        };
};

export default combineReducers({ sweggerReducer });
