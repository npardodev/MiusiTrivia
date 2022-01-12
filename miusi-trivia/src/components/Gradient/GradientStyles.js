import img from './../../img/logo.png'

export const GradientStyles = theme => {

    return ({
        blocLogo: {
            position: 'relative',
            width: '100%',
            height: '100vh',
        },
        logoCanvas: {
            width: "100%",
            height: "100vh",
        },
        logoMask: {
            position: 'absolute',
            top: "0",
            left: '0',
            width: "100%",
            height: "100%",
            backgroundSize: 'contain',
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100px 100px"
        }
    })
};