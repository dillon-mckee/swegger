import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import test from 'ava';

import { SweggerWindow } from '../client/containers/SweggerWindow'
import GetButton from '../client/components/GetButton';

test('Container Component - SweggerWindow - it should render the GetButton component', t => {

  const onClick = sinon.spy()
  const wrapper = shallow(<SweggerWindow/>);
  t.is(wrapper.find(GetButton).length, 1);
});
