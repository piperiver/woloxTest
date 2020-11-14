import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "./../Header/Header";
import Register from "./../Register/Register";
import Landing from "./../Landing/Landing";
import { setAutentication } from "../../redux/authDucks";
import TermsAndConditions from "./../Terms/Terms";
import List from "./../List/List";
import { ScrollingProvider } from "react-scroll-section";

function Routing() {
  const dispatch = useDispatch();
  const infoStore = useSelector((store) => store.auth);

  const token = localStorage.getItem("token");
  const login = token !== null;

  useEffect(() => {
    dispatch(setAutentication());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollingProvider>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route
          path="/Register"
          render={() => (!login ? <Register /> : <Redirect to="/" />)}
        />
        <Route
          path="/TermsAndConditions"
          render={() => (!login ? <TermsAndConditions /> : <Redirect to="/" />)}
        />
        <Route
          path="/List"
          render={() => (login ? <List /> : <Redirect to="/" />)}
        />
      </ScrollingProvider>
    </BrowserRouter>
  );
}

export default Routing;
