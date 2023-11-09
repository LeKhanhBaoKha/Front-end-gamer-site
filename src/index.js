import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import LoadApi from './tab/LoadApi';
import ProductIndex from './Products/ProductIndex';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoadApi />);