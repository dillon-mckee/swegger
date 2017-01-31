import actions from './actions';
import update from 'react-addons-update';
import { combineReducers } from 'redux';

const initialState = {
    hireMeText: '',
    portfolioURL: '',
    isModalOpen: false,
    modalCount: 0

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
            let newModalCount = state.modalCount + 1
            return update(state, {
                isModalOpen: {$set: true},
                modalCount: {$set: newModalCount}
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
