var colorutil = require('../color-util.js');

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

var resultLum = colorutil.luminosity(r, g, b);
var resultLight = colorutil.isLight(r, g, b);

console.log(resultLum);
console.log(resultLight);