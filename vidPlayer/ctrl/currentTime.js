
    import {vid} from "./vidPlayer.js";
    import {seekStatus, seekBar} from "./seekBar.js";
        
    var time = document.getElementById("current");

    window.onload = currentTimeUpdate;

    function currentTimeUpdate() {
            time.innerHTML = getTimeStamp(vid.currentTime);
        
        if(!seekStatus.getVal()){
            seekBar.value = vid.currentTime;
        } else {
            vid.currentTime = seekBar.value;
        }
    };

    function getTimeStamp(currentSec) {
        var min = new Date(currentSec * 1000).getMinutes();
        var sec = new Date(currentSec * 1000).getSeconds();
        var ms = new Date(currentSec * 1000).getMilliseconds();

            min = decPlace(min,2);
            sec = decPlace(sec, 2);
            ms = (ms).toString().substr(0,1);

            let timeStamp = min + ":" + sec + ":" + ms;
            return timeStamp;
    };

    function decPlace (num, digits) {
        var str = num.toString();
        var val = str.padStart(digits, "0");
        return val;
    };

    export {currentTimeUpdate};