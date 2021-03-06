import { createStore } from 'redux';
import reactReducer from "./reducer/index";

const store = createStore(reactReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;
