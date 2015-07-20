// Takes 3 arguments for an RGB color, ex. 255 255 255
// Returns if the color is dark or light

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

var luminosity = function() {
    return 0.2126*r + 0.7152*g + 0.0722*b;
}

var isLight = function() {
    if(luminosity() > 155) {
        return 'Light';
    } else if (luminosity() < 155) {
        return 'Dark';
    }
}

console.log(isLight());