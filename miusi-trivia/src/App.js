import React from 'react';
import { GradientContainer } from './components/Gradient/Gradient.js';
import { HomeReal } from './components/Home/Home.js';
import { Home } from './components/Home/Home.js';
import "./index.css";
//import {NavBar} from './components/NavBar/NavBar'; 
import {RouterApp} from './router/RouterApp.js';
import { BrowserRouter} from 'react-router-dom';

const App = props => {
    

    return (<>
    <BrowserRouter>
        {/*<NavBar/>*/}
        <RouterApp/>
    </BrowserRouter>
    </>);
}

export default App;

