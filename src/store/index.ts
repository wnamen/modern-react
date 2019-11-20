import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import loggerMiddleware from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage/session'; // defaults to localStorage for web
import thunk from 'redux-thunk';

import ApiManager from './ApiManager';

import rootReducer from '../reducers';

export const history = createBrowserHistory();

let _persistor;
let _store;

export const getStore = () => {
  return _store;
};

export default function configureStore(preloadedState: any) {
  const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
    blacklist: [],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer(history));

  const api = new ApiManager();
  const thunkMiddleware = thunk.withExtraArgument({
    api,
  });

  const middlewares = [
    process.env.NODE_ENV === 'development' && loggerMiddleware,
    routerMiddleware(history),
    thunkMiddleware,
  ].filter(Boolean);

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];

  const composedEnhancers =
    (process.env.NODE_ENV === 'development' &&
      composeWithDevTools(...enhancers)) ||
    compose(...enhancers);

  const store = createStore(
    persistedReducer,
    preloadedState,
    composedEnhancers
  );

  _persistor = persistStore(store);

  api.setStore(store);

  _store = store;
  return store;
}

export const persistor = () => {
  return _persistor;
};
