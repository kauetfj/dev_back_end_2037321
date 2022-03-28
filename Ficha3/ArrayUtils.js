var utils = {   
    // linha a
    isEmpty:function(array) {
        if (array.length == 0) { 
            return true;
        }
        else {
            return false;
        }
    },
    // linha b
    min: function (array) {
        var min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    },
    // linha c
    max: function (array) {
        var max = array[0];
        for (let i = 0; i > array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    },
    average:function(array){

    }
}

module.exports = utils;


