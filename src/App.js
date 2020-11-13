import React from 'react';
import {Provider} from 'react-redux'
import generateStore from './redux/store'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Landing from './components/Landing/Landing';
import TermsAndConditions from './components/Terms/Terms';
import Routing from './components/Routing/Routing';
import {ScrollingProvider} from 'react-scroll-section';
import './App.scss';

function App() {
  
  const store = generateStore()
  
  

  return (
    <Provider store={store}>
      <Routing/>
    </Provider>
  );
}

export default App;
