import React from 'react';
import {useEffect} from 'react';
import Granim from 'granim';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom'; 
import { makeStyles } from '@material-ui/core';
import { HomeStyles } from './HomeStyles.js'


import {Video} from '../../components/Video/Video.js';
import {SongCard,Player} from '../../components/SongCard/SongCard.js';
import song from './../../components/Music/songs/Massacre-La_Octava_maravilla.mp3'


const useStyle = makeStyles ((theme) => HomeStyles(theme));

export const Home = () => {
    return (
      <div>
        <Fade>
          <h1>Muisi Trivia!</h1>
          <Video/>
          <Zoom>
            <SongCard/>
          </Zoom>

          <Player url={song} />
        </Fade>
      </div>
    );
};



export const HomeReal = () => {

  const classes = useStyle();
  return (
          <Zoom>
            <div className={classes.homeContainer}>
              <h1>Muisi Trivia!</h1>
            </div>
          </Zoom>
  );
};