import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomeView } from '../screens/HomeView/HomeView.js';
import { LoginView } from '../screens/LoginView/LoginView.js';

import { ValidationForm } from '../components/Validation/Validation.js';

import { LoginAuth0 } from '../components/Logauth0/Logauth0.js';


import './../styles/animations.css';


import {TransitionGroup, CSSTransition} from 'react-transition-group'

export const appPaths = {
    HOME_PATH: '/',
    LOGIN_PATH: '/login',
    AUTORIZE_PATH: '/autorize',

    TEST_PATH: '/test',
}

const routes = [
    { path: appPaths.HOME_PATH, name: 'home', Component: HomeView },
    { path: appPaths.LOGIN_PATH, name: 'login', Component: LoginView },
    { path: appPaths.AUTORIZE_PATH, name: 'autorize', Component: LoginAuth0 },
    { path: appPaths.TEST_PATH, name: 'test', Component: ValidationForm },

    

];

export const RouterApp= () => {

    let location = useLocation();

    return (
            <Routes location={location}>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path} element={<Component/> } >
              {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={800}
                    classNames="fade"
                    unmountOnExit
                  >
                   <Component /> {/*No esta funcionadno */}
                  </CSSTransition>
                )}
              </Route>
            ))}   
            {/*<Route component={CustomNotFound}/> */}
            <Route element={<h1>PEPE</h1>}/>

        </Routes>)
};



