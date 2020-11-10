import { currentTimeUpdate } from "./currentTime.js";

    var seekBar = document.getElementById("seekbar");
        seekBar.innerHTML = vid.seeked;

    vid.addEventListener("durationchange", setSeekBar);

    var seekStatus = {};
        seekStatus.value = false;

        seekStatus.setVal = function(val) {
            this.value = val;
        };

        seekStatus.getVal = function() {
            return this.value;
        };


    function setSeekBar() {
        seekBar.max = vid.duration;
    };

    function seekRelease() {
        seekStatus.setVal(false);
    };

    function seekVid() {
        seekStatus.setVal(true);
        currentTimeUpdate();
    };

    seekBar.onmousedown = seekVid;
    seekBar.onmouseup = seekRelease;


    export {seekStatus, seekBar};