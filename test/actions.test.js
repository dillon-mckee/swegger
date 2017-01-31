import test from 'ava';
import nock from 'nock';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { openModal, OPEN_MODAL, closeModal, CLOSE_MODAL, fetchData,
        fetchDataSuccess, FETCH_DATA_SUCCESS, fetchDataError, FETCH_DATA_ERROR
        } from '../client/redux/actions';

test('openModal', t => {
  t.deepEqual(openModal(), {
    type: OPEN_MODAL
    });
});

test('closeModal', t => {
  t.deepEqual(closeModal(), {
    type: CLOSE_MODAL
    });
});

test('fetchData success', t => {
  return new Promise((resolve, reject) => {
    const data = { text: 'Hire Me!',
                   portfolioURL: 'www.dillonpmckee.com' }
    const mockStore = configureStore([thunkMiddleware])
    const store = mockStore({ data: {} })
    const expectedActions = [{ type: FETCH_DATA_SUCCESS, data: data }]
    nock('http://localhost:3000')
      .get('/api/data')
      .reply(200, data)
    store.dispatch(fetchData())
      .then(() => {
          let stringifiedStoreActions = JSON.stringify(store.getActions())
          let stringifiedExpectedActions= JSON.stringify(expectedActions)
        t.deepEqual(stringifiedStoreActions, stringifiedExpectedActions)
        resolve()
      })
  })
})
