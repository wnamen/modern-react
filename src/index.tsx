import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import * as serviceWorker from './serviceWorker';
import configureStore, { history, persistor } from './store';

import Root from './routes/Root';

const store = configureStore({});

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor()}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
