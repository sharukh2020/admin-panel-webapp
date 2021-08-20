import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createStore,combineReducers} from 'redux'
import { homePageReducer,layoutReducer,postsPageReducer } from './redux_store/store'

const globalStore=createStore(combineReducers({
   home_page_reducer:homePageReducer,
   posts_page_reducer:postsPageReducer,
   layout_reducer:layoutReducer
}))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
       <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
