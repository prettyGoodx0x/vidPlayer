    
    import { currentTimeUpdate } from "../ctrl/currentTime.js";

    var intrvl = {};
    
    intrvl.fwdPhase = null;
    intrvl.revPhase = null;
    intrvl.rwdPhase = null;
    intrvl.ffdPhase = null;

    intrvl.clearMoveInt = function() {
        if (intrvl.fwdPhase) {
            clearInterval(intrvl.fwdPhase);
            intrvl.fwdPhase = null;
        }
        if (intrvl.revPhase) {
            clearInterval(intrvl.revPhase);
            intrvl.revPhase = null;
        }
        if (intrvl.rwdPhase) {
            clearInterval(intrvl.rwdPhase);
            intrvl.rwdPhase = null;
        }
        if (intrvl.ffdPhase) {
            clearInterval(intrvl.ffdPhase);
            intrvl.ffdPhase = null;
        }
    };

    intrvl.timePeriod = null;
    intrvl.setTimeInt = function() {
        if (!intrvl.timePeriod) {
            intrvl.timePeriod = setInterval(currentTimeUpdate, 100);
        }
    };
    intrvl.clearTimeInt = function() {
        if (intrvl.timePeriod) {
            clearInterval(intrvl.timePeriod);
            intrvl.timePeriod = undefined;
        }
    };

    export { intrvl };