"use strict";
var userName = 'katie';
console.log('Time to get started,', userName, '!, You silly girl!');
// compilation notes:
// normally you'd do tsc app.ts ...but this can get cumbersome, to have to MANUALLY type everytime
// you cant to compile TS to JS. you can also enter watch mode, but typing tsc app.ts -w ...this
// means the compiler runs in the background and "watches" the file for changes, recompiling any
// time you save a change. this can STILL be cumbersome for large projects with many files. so...
// tsc --init
// you only need to run this command once, it tells typsecript that this will be a TS project, and 
// that everything in the folder (so you must be IN the right folder) is now managed by typescript.
// the init command creates a tsconfig.json. NOW, we can run just `tsc` in the command line without
// pointing at a specific file, and it will compile all TS files into JS that it finds in the 
// project folder. AND... anything in a subfolder...
// configuration notes:
// - you can add a "exlude" to the tsconfig to leave out particular files from being compiled.
//      - you add a path to the file, and can also use wildcards ,like "*.dev.ts", or "**/*.dev.ts"
// - you can also add an "include", and any file or folder NOT in the "include" array WILL NOT
//      be compiled --> "include": ["app.ts"]
// - you can also add a "files":[] to compile, tho this setting isn't commonly used.
// some basic config options
var lilButton = document.querySelector('button');
// the exlamation point above tells TS not to worry, that button DOES/WILL exist!
lilButton.addEventListener('click', function () {
    console.log('i was clicked!');
});
// if "lib":[] is not set/on in tsconfig, some defaults are assumed, and these typically are the defaults
// that let JS run in the browser, like DOM api's and whatnot... if lib[] is ON, you'll get an error
// letting you know you have to include some common libraries explicitly (like the document, dom, or even console)
// sourceMap setting: if set to true, js.map files are created at TSC, allowing you to see and debug the
// TS files in the browser/console
// rootDir & outDir
// src folder is often the 'root' or input, and dist folder is odten output (in this case, the compiled JS)
