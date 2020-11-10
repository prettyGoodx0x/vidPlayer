
    import { Action } from "../js/action.js";
    // import { stopVid } from "../ctrl/stop.js";
    
    var slowFwd = new Action("fwd", 3);
        slowFwd.init();

    var fastFwd = new Action("fastfwd", 7.5);
        fastFwd.init();

    var fastRwd = new Action("fastrwd", -7.5);
        fastRwd.init();

    var rev = new Action("rev", -3);
        rev.init();

    export { fastFwd, fastRwd, slowFwd, rev };  //exports to app.js
