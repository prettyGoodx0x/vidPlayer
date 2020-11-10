
    import { playPause } from "../ctrl/playPause.js";
    import { vidView } from "./vidView.js";
    import { vid } from "../ctrl/vidPlayer.js";
    import { intrvl } from "./interval.js";


    function Action(elemA, speedA){
        this.elemId = elemA;
        this.element = document.getElementById(elemA);
        this.speed = speedA;
    };

    Action.prototype.toggle = function() {
        if (this.itWorks) {
            this.stopAct();
            vid.muted = false;
        } else {
            this.startAct();
            vid.muted = true;
        }
        this.itWorks = !this.itWorks;
    };
    
    Action.prototype.init = function() {
        var callTogg = this.toggle.bind(this);
    
        if (this.element) {
            this.element.onclick = callTogg;
            vid.muted = false;
        }
    };

    Action.prototype.startAct = function() {
        vidView.resetColor();
        if (this.element) {
            intrvl.clearMoveInt();

            var callFwd = this.fwdAct.bind(this);
            var callRev = this.revAct.bind(this);
            switch (this.elemId) {
                case "fwd":
                    intrvl.fwdPhase = setInterval(callFwd, 100);
                    break;
                case "fastfwd":
                    intrvl.ffdPhase = setInterval(callFwd, 100);
                    break;
                case "rev":
                    intrvl.revPhase = setInterval(callRev, 100);
                    break;
                case "fastrwd":
                    intrvl.rwdPhase = setInterval(callRev, 100);
                    break;
            };
        }
    };


Action.prototype.stopAct = function() {
    intrvl.clearMoveIntrvl();
};

Action.prototype.setSpeed = function(rate) {
    this.speed = rate;
};

Action.prototype.pauseAct = function() {
    if (!vid.paused) {
        vid.pause();
        playPause.firstChild.className = "fa fa-play";
    }
};

    Action.prototype.fwdAct = function() {
        if (vid.currentTime >= vid.duration - (this.speed)){
            vid.currentTime = vid.duration;
            intrvl.clearMoveIntrvl();
        } else {
            if (!vid.seeking) {
                vid.currentTime += this.speed;
                this.element.firstChild.style.color = "#0f0";
            }
        }
        currentTimeUpdate();
    };

    Action.prototype.revAct = function() {
        if (vid.currentTime <= (this.speed)){
            vid.currentTime = 0;
            intrvl.clearMoveIntrvl();
        } else {
            if (!vid.seeking) {
                vid.currentTime += this.speed;
                this.element.firstChild.style.color = "#f00";
            }
        }
        currentTimeUpdate();
    };

    export {Action};