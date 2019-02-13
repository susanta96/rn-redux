import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

import AppContainer from './AppContainer'

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

