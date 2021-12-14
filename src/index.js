import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Car from './components/Car';
import Cars from './components/Cars';
import NewCar from './components/NewCar';
import IntroCars from './components/IntroCars';
import NotFound from './components/NotFound';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="cars" element={<Cars />}>
        <Route path=":model" element={<Car />} />
        <Route path="new" element={<NewCar />} />
        <Route index element={<IntroCars />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
