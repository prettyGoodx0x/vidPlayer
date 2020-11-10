    
    import { vid } from "../ctrl/vidPlayer.js";

    var vidView = {};
    
    vidView.resetColor = function() {
        var slowFwd = document.getElementById("fwd");
            slowFwd.firstChild.style.color = "";

        var fastFwd = document.getElementById("fastfwd");
            fastFwd.firstChild.style.color = "";

        var rev = document.getElementById("rev");
            rev.firstChild.style.color = "";

        var fastRwd = document.getElementById("fastrwd");
            fastRwd.firstChild.style.color = "";
    };

    vidView.setFast = function() {
        var fastFwd = document.getElementById("fastfwd");
        if (fastFwd.firstChild.style.color) {
            fastFwd.firstChild.style.color = "";
        } else {
            fastFwd.firstChild.style.color = "initial";
        }       
    };

    vidView.setPlay = function() {
        var playPause = document.getElementById("playPause");
            playPause.firstChild.style.color = "#0f0";
            playPause.firstChild.className = "fa fa-play";
    };
    
    vidView.setPause = function() {
        var playPause = document.getElementById("playPause");
            playPause.firstChild.style.color = "#0f0";
            playPause.firstChild.className = "fa fa-pause";
    };
    
    vidView.setStop = function() {
        var stop = document.getElementById("stop");
            stop.firstChild.className = "fa fa-stop";
            if (vid.paused) {
                stop.firstChild.style.color = "#a00";
            } else {
                stop.firstChild.style.color = "#aaa";
            }
    };

    export {vidView};