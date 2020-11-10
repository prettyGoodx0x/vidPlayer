
    import { vid } from "./vidPlayer.js";

    var fullScreen = document.getElementById("fulls");

    fullScreen.onclick = openFullScreen;

    window.onkeypress = toggleEnter;

    function toggleEnter(event) {
        if (event.keyCode === 13) {
            closeFullScreen() || openFullScreen();
        }
    };

    function openFullScreen(event) {
        if (vid.requestFullscreen) {
            vid.requestFullscreen();
        } else if (vid.webkitRequestFullscreen) {
            vid.webkitRequestFullscreen();
        }
    };

    function closeFullScreen(event) {
        if (vid.exitFullscreen) {
            vid.exitFullscreen();
        } else if (vid.webkitExitFullscreen) {
            vid.webkitExitFullscreen();
        }
    };

    export {fullScreen};