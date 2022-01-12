export const VideoStyles = theme => {

    return ({

        videoContainer: {
            position: "absolute",
            width: "100%",
            height: "100vh",
            top: "0",
            left: "0",
            zIndex: "2",
            minWidth: "100%",
            minHeight: "100%",
            backgroundColor: "#252224",
            overflow: "hidden",
            objetFit: "fill",

        },
        videoclip: {
            position: "absoulte",
            width: "100%",
            height: "100%",
            zIndex: "-1",
            backgroundColor: "#000000",
            /* or whatever you want */

            //transform: "translate(50%, 50%)",
            opacity: "1",
        },
        videoclipOverlay: {
            position: "absoulte",
            width: "100%",
            height: "100%",
            objetFit: "cover",
            opacity: "0.06",
            margin: "0",
            padding: "0",
        }

    })
};