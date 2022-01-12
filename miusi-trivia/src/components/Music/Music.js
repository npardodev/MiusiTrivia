import React from 'react';
import videoclip from './clips/Nickelback-Rockstar.mp4';
import { makeStyles } from '@material-ui/core';
import { VideoStyles } from './VideoStyles.js'

const useStyle = makeStyles ((theme) => VideoStyles(theme));

export const Video = () => {

    const classes = useStyle();

    return(
            <div className={classes.videoContainer}>  
                <div className={classes.videoclipOverlay}>
                    <video className={classes.videoclip} autoPlay loop muted>
                        <source src={videoclip} type="video/mp4" />
                    </video>
                </div>
            </div>
        );
}

