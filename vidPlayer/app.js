
    import "./js/move.js";
    import "./ctrl/duration.js";
    import { currentTimeUpdate } from "./ctrl/currentTime.js";
    import "./ctrl/stop.js";
    import "./ctrl/playPause.js";
    import "./ctrl/seekBar.js";
    import "./ctrl/volume.js";

    import "./js/vidView.js";
    import "./js/action.js";
    import "./js/interval.js";
    import "./ctrl/fullScreen.js";
    import { vid } from "./ctrl/vidPlayer.js";

    window.addEventListener("load", currentTimeUpdate);
    
    