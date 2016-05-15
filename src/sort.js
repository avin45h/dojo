"use strict";

var sort = exports = module.exports = {
    selection: function (arr) {
        var swapCounter = 0;
        for (let i = 0; i < arr.length; i++) {
            var min = {elem: arr[i], pos: i};
            for (let j = i; j < arr.length; j++) {
                if (min.elem > arr[j]) {
                    min.elem = arr[j];
                    min.pos = j;
                }
            }
            util.swap(arr, i, min.pos);
            swapCounter++;
        }
        return {
            tag: "selection",
            arr: arr,
            swaps: swapCounter
        };
    },
    bubble: function (arr) {
        var swapCounter = 0;
        for (let i = 0; i < arr.length; i++) {
            var swap = false;
            for (let j = 0; j < (arr.length - 1) - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    util.swap(arr, j, j + 1);
                    swapCounter++;
                    swap = true;
                }
            }
            if (!swap) {
                break;
            }
        }
        return {
            tag: "bubble",
            arr: arr,
            swaps: swapCounter
        };
    },
    insertionSort: function (arr) {
        var swapCounter = 0;
        for (let i = 1; i < arr.length; ++i) {
            var element = arr[i];
            var j = i-1;
            for(;j>=0 && arr[j] > element; j--){
                console.log("%d && %d && %d", j, arr[j], element);
                arr[j+1] = arr[j];
            }
            arr[j+1] = element;
            console.log("Moved %d to %d ",element,j+1, arr );
        }
        return {
            tag: "insertion",
            arr: arr,
            swaps: swapCounter
        };
    }
};

var util = require('./util');
util.analyze(function (init, done) {
    console.log(sort.selection([8, 7, 6, 2, 4, 1, 3, 5, 1, 3]));
    done(init);
});
util.analyze(function (init, done) {
    console.log(sort.bubble([8, 7, 6, 2, 4, 1, 3, 5, 1, 3]));
    done(init);
});

util.analyze(function (init, done) {
    console.log(sort.insertionSort([8, 7, 6, 2, 4, 1, 3, 5, 1, 3]));
    done(init);
});