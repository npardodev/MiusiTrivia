import React from 'react';
import {useEffect} from 'react';
import Granim from 'granim';
import { makeStyles } from '@material-ui/core';
import { GradientStyles } from './GradientStyles.js'

const useStyle = makeStyles ((theme) => GradientStyles(theme));

export const GradientContainer = () => {
  
  const classes = useStyle();

  useEffect(()=>{

    new Granim({
      element: "#logo-canvas",
      direction: "left-right",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ["#020024", "#090979"],
            ["#020024", "#090989"],
            ["#020024", "#02021c"],
            ["#020024", "#00d4ff"],
            ["#020024", "#0498b6"],
            ["#020024", "#00d4ff"],
          ],
          transitionSpeed: 2000,
        },
      },
    });
  }, []);


  return (<div  className={classes.blocLogo}>
      <canvas id="logo-canvas" className={classes.logoCanvas}/>
    <div className={classes.logoMask}>
      <h1>Muisi Trivia!</h1>

    </div>
  </div>);

}