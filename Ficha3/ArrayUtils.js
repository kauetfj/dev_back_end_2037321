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
    max:function(array) { 
        var maxV = array[0];
        for (let i = 1; i > array.length; i++) {
            if (array[i] > maxV) {
                maxV = array[i];
            } 
        }
    },
    // linha c
    min:function(array){
        var minV = array[0];
        for (var i = 1; i < array.length; i++) {
            if(array[i] < minV){
                minV = array[i];
            }
        }
        return minV;
    },
    average:function(array){

    }
}

module.exports = utils;


