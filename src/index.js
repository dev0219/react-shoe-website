import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import Product from './components/product';
import rootReducer from './reducers';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import ItemsList from './components/ItemsList';
import './index.css';
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/product" element={<Product />} />
            </Routes>            
        </Router>
    </Provider>, 
    document.getElementById('root')
);