"use strict";

var search = exports = module.exports = {
    linear: function (arr, elem) {
        var index;
        for (index = 0; index < arr.length; index++) {
            if (arr[index] == elem) {
                return index;
            }
        }
        return -1;
    },
    binary: function (arr, elem, x, y) {
        if (typeof x === "undefined") {
            x = 0;
        }
        if (typeof y === "undefined") {
            y = arr.length;
        }
        let mid = parseInt((x + (y - 1)) / 2);

        if (arr[mid] == elem) {
            return mid;
        }

        if (y > 0) {
            if (arr[mid] > elem) {
                return search.binary(arr, elem, x, mid - 1)
            }
            return search.binary(arr, elem, mid + 1, y);
        }
        return -1;
    }
};

var util = require('./util');
util.analyze(function (init, done) {
    console.log(search.linear([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));
    done(init);
});

util.analyze(function (init, done) {
    console.log(search.binary([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));
    done(init);
});