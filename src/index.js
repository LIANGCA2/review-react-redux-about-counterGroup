import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Counter from './reducer/index'
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(Counter)



ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));



registerServiceWorker();
