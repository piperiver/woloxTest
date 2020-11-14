import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './../Header/Header';
import Register from './../Register/Register';
import Landing from './../Landing/Landing';
import {setAutentication} from '../../redux/authDucks';
import TermsAndConditions from './../Terms/Terms';
import List from './../List/List';
import {ScrollingProvider} from 'react-scroll-section';

function Routing() {
    const dispatch = useDispatch();
    const infoStore = useSelector(store => store.auth)

	useEffect(() => {
        dispatch(setAutentication());
	}, [dispatch]);

  return (
      <BrowserRouter>
        <ScrollingProvider>
          <Header />
          <Route exact path='/' component={Landing} />
          <Route path='/Register' component={Register} />
          <Route path='/TermsAndConditions' component={TermsAndConditions} />
          <Route path='/List' component={List} />
        </ScrollingProvider>
      </BrowserRouter>
  );
}

export default Routing;
