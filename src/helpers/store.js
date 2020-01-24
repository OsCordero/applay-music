import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';
import { loadState, saveState } from 'helpers/localStorage';

import { composeWithDevTools } from 'redux-devtools-extension';

const composeDev =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk));

const persistedState = loadState();

const store = createStore(reducers, persistedState, composeDev);

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
  });
});
export default store;
