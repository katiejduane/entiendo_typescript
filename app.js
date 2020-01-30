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
// - you can add a "exlude" to the tsconfig to leave out particular files from being compiled
