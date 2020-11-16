import React, { useEffect, useState, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { setAutentication } from "../../redux/authDucks";
import { ScrollingProvider } from "react-scroll-section";
import Loading from "./../Loading/Loading";
const Header = React.lazy(() => import('./../Header/Header'));
const Landing = React.lazy(() => import('./../Landing/Landing'));
const Register = React.lazy(() => import('./../Register/Register'));
const TermsAndConditions = React.lazy(() => import('./../Terms/Terms'));
const List = React.lazy(() => import('./../List/List'));

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
        <Suspense fallback={(<Loading/>)}>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            {/* <Route exact path="/" component={Loading} /> */}
            <Route
              path="/Register"
              render={() => (!login ? <Register /> : <Redirect to="/" />)}
            />
            <Route
              path="/TermsAndConditions"
              render={() =>
                !login ? <TermsAndConditions /> : <Redirect to="/" />
              }
            />
            <Route
              path="/List"
              render={() => (login ? <List /> : <Redirect to="/" />)}
            />
          </Switch>
        </Suspense>
      </ScrollingProvider>
    </BrowserRouter>
  );
}

export default Routing;
