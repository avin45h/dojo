"use strict";

var sort = exports = module.exports = {
    selection: function (arr) {
        for (let i = 0; i < arr.length; i++) {
            var min = {elem: arr[i], pos: i};
            for (let j = i; j < arr.length; j++) {
                if (min.elem > arr[j]) {
                    min.elem = arr[j];
                    min.pos = j;
                }
            }
            util.swap(arr, i, min.pos)
        }
        return arr;
    },
    bubble: function(){
        for(let i = 0; i < arr.length; i++ ){

        }
    }
};

var util = require('./util');
util.analyze(function (init, done) {
    console.log(sort.selection([8, 7, 6, 2, 4, 1, 3, 5, 1, 3]));
    done(init);
});