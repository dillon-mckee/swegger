import React from 'react';
import { Provider } from 'react-redux';
import SweggerWindow from './containers/SweggerWindow';
import store from './redux/store';

const App = (
	<Provider store={store}>
		<SweggerWindow/>
		</Provider>
		);



export default App;
