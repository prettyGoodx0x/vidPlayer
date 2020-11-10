
import { intrvl } from "../js/interval.js";
import { currentTimeUpdate } from "./currentTime.js";
import { vid } from "./vidPlayer.js";

    var stop = document.getElementById("stop");

        stop.onclick = stopVid;
        vid.onended = stopVid;

        function stopVid() {
            if (!vid.paused) {
                vid.pause();
                vidView.setPlay();
                vidView.setStop();
            }
            vid.currentTime = 0;
            vidView.resetColor();
            intrvl.clearMoveInt();
            intrvl.clearTimeInt();
            currentTimeUpdate();
        };

    export {stopVid};
        