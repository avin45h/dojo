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
    bubble: function (arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < (arr.length - 1) - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    util.swap(arr, j, j + 1);
                }
            }
        }
        return arr;
    }
};

var util = require('./util');
util.anal   yze(function (init, done) {
    console.log(sort.selection([8, 7, 6, 2, 4, 1, 3, 5, 1, 3]));
    done(init);
});
util.analyze(function (init, done) {
    console.log(sort.bubble([8, 7, 6, 2, 4, 1, 3, 5, 1, 3]));
    done(init);
});