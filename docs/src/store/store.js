import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import balaReducer from '../reducers/bala';
import brotherReducer from '../reducers/brother';
import rootSaga from '../actions/saga';

const createReducer = (initialState, reducer) => (state = initialState, action) => (
  reducer.hasOwnProperty(action.type) ? reducer[action.type](state, action) : state
);
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const initialBalaState = {
  title: '巴拉巴拉小魔仙~',
  content: '嘿嘿嘿',
  members: []
};

const initialBrotherState = {
  title: '葫芦娃就是要救爷爷',
  content: '你先上',
  color: '#0e0',
  brothers: []
};

const rootReducer = combineReducers({
  bala: createReducer(initialBalaState, balaReducer),
  brother: createReducer(initialBrotherState, brotherReducer)
});

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, sagaMiddleware)
);

const store = configureStore();
sagaMiddleware.run(rootSaga);

export default store;


