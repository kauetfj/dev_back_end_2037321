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

    // linha d **
    average:function(array){
        var average = 0;
        for (let i = 0; i < array.length; i++){
            average += array[i]
            var avg = average / array[i].length
        }
        return average
    },

    // linha e
    indexOf:function(array, value){
        for (let i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return i;
            }
        }
        return -1;
    },

    // linha f **
    subArray:function(array, startIndex, endIndex){
        var array1 = [];
        for (let i = startIndex; i <= endIndex; i++) {
            array1.push(array[i]);
        }   
        return array1;
    },

    // linha g
    isSameLength:function(a1,a2){
        return a1.length == a2.length;
    },

    // linha h **
    reverse:function(array){
        var r = [];
        for (let i = array.length - 1; i >= 0; i--) {
            r.push(array[i]);
        }
        return r;
    },

    //linha i 
    swap:function(array, index1, index2){
        var aux = array[index1];
        array[index1]=array[index2];
        array[index2]=aux;
        return array
    },

    // linha j
    contains:function(array, value){    
    }
}   

module.exports = utils;


