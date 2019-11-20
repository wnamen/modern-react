import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import app from './app';

export default (history: any) => {
  const historyRouter = connectRouter(history);
  return (state, action) => {
    return combineReducers({
      router: historyRouter,

      // custom reducers
      app,
    })(action.type === 'RESET_APP' ? undefined : state, action);
  };
};
