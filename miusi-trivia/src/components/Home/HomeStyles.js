import img from './../../img/wall.jpeg'

export const HomeStyles = theme => {

    return ({

        homeContainer: {
            margin: "0",
            padding: "0",
            textAlign: "center",
            height: "100vh",
            //position: "absolute",
            top: "50%",
            left: "50%",
            //transform: "translateX(-50%) translateY(-50%)",

            //backgroundImage: `url(${img}), linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)`,
            background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",

            //background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
            backgroundSize: "400% 400% !important",
            animation: `$gradient ease infinite;`,
        }
    })
};