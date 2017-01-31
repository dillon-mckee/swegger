import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import test from 'ava';

import GetButton from '../client/components/GetButton';

test('Components GetButton - calls onClick', t => {
  const onClick = sinon.spy()
  const wrapper = shallow(<GetButton onClick={onClick} />);
  wrapper.find('button').simulate('click');
  t.true(onClick.calledOnce);
});
