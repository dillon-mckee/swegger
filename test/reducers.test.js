import test from 'ava';
import { sweggerReducer } from '../client/redux/reducers';
import { openModal, closeModal, fetchDataSuccess} from '../client/redux/actions'

test('reducer open modal', t => {
  t.deepEqual(sweggerReducer(
      {
      hireMeText: '',
      portfolioURL: '',
      isModalOpen: false,
      modalCount: 0
  }, openModal()),
      {
      hireMeText: '',
      portfolioURL: '',
      isModalOpen: true,
      modalCount: 1
  });
});

test('reducer close modal', t => {
  t.deepEqual(sweggerReducer(
      {
      hireMeText: '',
      portfolioURL: '',
      isModalOpen: true,
  }, closeModal()),
      {
      hireMeText: '',
      portfolioURL: '',
      isModalOpen: false,
  });
});

test('reducer FETCH_DATA_SUCCESS', t => {
    const data = {text: "Hire Me!",
                 portfolioURL: 'www.dillonpmckee.com'}
  t.deepEqual(sweggerReducer(
      {
      hireMeText: '',
      portfolioURL: '',
      isModalOpen: false,
      modalCount: 0
  }, fetchDataSuccess(data)),
      {
      hireMeText: 'Hire Me!',
      portfolioURL: 'www.dillonpmckee.com',
      isModalOpen: false,
      modalCount: 0
  });
});
