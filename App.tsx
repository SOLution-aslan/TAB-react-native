import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Navigator from './src/components/Navigator';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
