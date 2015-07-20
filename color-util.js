module.exports = {
    luminosity: function(r, g, b) {
        return 0.2126*r + 0.7152*g + 0.0722*b;
    },
    isLight: function(r, g, b) {
        if(this.luminosity(r, g, b) > 155) {
            return 'Light';
        } else if (this.luminosity(r, g, b) < 155) {
            return 'Dark';
        }
    },
    darken: function(r, g, b) {
        // Loop through each argument and assign a new value
        for (var i = 0; i < arguments.length; i++) {
            var twenty = arguments[i] * 0.2;
            arguments[i] = arguments[i] - twenty;
        }
        return r + ' ' + g + ' ' + b;
    }
}