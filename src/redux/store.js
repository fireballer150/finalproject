import { createStore, applyMiddleware,compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import persistedReducer from './reducers/rootReducer';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';

const logger = createLogger(); 

// const store = createStore(rootReducer, applyMiddleware(thunk));

const store = createStore(
    persistedReducer,
    compose(applyMiddleware(promiseMiddleware, logger, thunk))
    );
  
    
export default store;
