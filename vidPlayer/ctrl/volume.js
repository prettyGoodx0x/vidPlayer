
    var vol = document.getElementById("vol");
        vol.innerHTML = vid.volume;
    vol.title = "volume";

    vol.addEventListener("mousemove", function() {
        vid.onvolumechange = function() {
            vol.value = vid.volume;
        };
        if(vid.muted) {
            vol.value = 0;
        } else {
            vid.volume = vol.value;
        };
    });

    var mute = document.getElementById("mute");
    
    mute.innerHTML = vid.muted;
    mute.onclick = function() {
        if (!vid.muted) {
            mute.style = "color:lime; background: #333";
        } else {
            mute.style = "color:red; background: #222";
        };
        vid.muted = !vid.muted;
    };
    
    export {vol, mute};