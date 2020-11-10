
    import {vid} from "./vidPlayer.js";
    import {seekBar} from "./seekBar.js";


    function setDuration() {
        var dura = document.getElementById("duration");
            dura.innerHTML = showDuration(vid.duration);
    };
    window.onload = setDuration;

    function decPlace(num, digits) {
        var string = num.toString();
        var val = string.padStart(digits, "0");
        return val;
    };

    function showDuration (total) {
            seekBar.max = vid.duration;

        var min = new Date (total * 1000).getMinutes();
        var sec = new Date(total * 1000).getSeconds();
            min = decPlace( min, 2);
            sec = decPlace(sec, 2);

            let timeStamp = min + ":" + sec;
            return timeStamp;
    };

    export { setDuration };