import React from 'react';
import {Provider} from 'react-redux'
import generateStore from './redux/store'
import Header from './components/Header/Header';
import HomeSection from './components/HomeSection/HomeSection';
import './App.scss';

//import logo from './logo.svg';

function App() {
  
  const store = generateStore()

  return (
    <Provider store={store}>
      <div className='bgHome'>
        <Header />
        <HomeSection />
      </div>
    </Provider>
  );
}

export default App;
