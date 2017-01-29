var dumb = 60; //dumb stands for Days Until My Birthday

if (dumb > 30) {
    console.log(dumb + " days until my birthday. Excitement is building");
}
else{
    while (dumb < 5) {
        if (dumb < 1) {
            console.log("            __");
            console.log("(\,--------'()'--o");
            console.log(" (_    ___    /~'");
            console.log("  (_)_)  (_)_)");
            break;
        } else {
            console.log(dumb + " DAYS UNTIL MY BIRTHDAY!!!");
            break;
        }
    }
}
