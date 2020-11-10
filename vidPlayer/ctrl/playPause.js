
    import {vid} from "./vidPlayer.js";
    import {vidView} from "../js/vidView.js";
    import {intrvl} from "../js/interval.js";
    
    var playPause = document.getElementById("playpause");
    playPause.onclick = playOrPause;

    function playOrPause() {
        if (!vid.paused) {
            vid.pause();
            vidView.setPlay();
            vidView.setStop();
            intrvl.clearTimeInt();
        } else {
            vid.play();
            intrvl.setTimeInt();
            vidView.setPause();
            vidView.setStop();
        }
        intrvl.clearMoveInt();
        vidView.resetColor();
    };

    export {playPause};