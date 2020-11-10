
    import {intrvl} from "../js/interval.js";
    import {currentTimeUpdate} from "./currentTime.js";
    
    var vid = document.getElementById("vid");
    var vidBox = document.getElementById("vidbox");
        
    $(function() {
        $(vidBox).slideUp(500).slideDown(250);
    });
    
    export {vid};