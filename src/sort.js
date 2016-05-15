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
            var j = i - 1;
            for (; j >= 0 && arr[j] > element; j--) {
                arr[j + 1] = arr[j];
            }
            arr[j + 1] = element;
        }
        return {
            tag: "insertion",
            arr: arr,
            swaps: swapCounter
        };
    },
    mergeSort: function mergeSort(items) {
        if (items.length < 2) {
            return items;
        }


        function merge(left, right) {
            var result = [],
                il = 0,
                ir = 0;

            while (il < left.length && ir < right.length) {
                if (left[il] < right[ir]) {
                    result.push(left[il++]);
                } else {
                    result.push(right[ir++]);
                }
            }

            return result.concat(left.slice(il)).concat(right.slice(ir));
        }

        var middle = Math.floor(items.length / 2);
        var left = items.slice(0, middle);
        var right = items.slice(middle);
        var params = merge(mergeSort(left), mergeSort(right));

        // Add the arguments to replace everything between 0 and last item in the array
        params.unshift(0, items.length);
        items.splice.apply(items, params);
        return items;
    },
    mergeSort2: function (arr) {
        var merge = function (arr, l, m, r) {
            // Find sizes of two subarrays to be merged
            var n1 = (m - l + 1);
            var n2 = (r - m);

            /* Create temp arrays */
            var L = [];
            var R = [];
            var i, j;

            /*Copy data to temp arrays*/
            for (i = 0; i < n1; ++i)
                L[i] = arr[l + i];
            for (j = 0; j < n2; ++j)
                R[j] = arr[m + 1 + j];


            /* Merge the temp arrays */

            // Initial indexes of first and second subarrays
            i = 0;
            j = 0;

            // Initial index of merged subarry array
            var k = l;
            while (i < n1 && j < n2) {
                if (L[i] <= R[j]) {
                    arr[k] = L[i];
                    i++;
                }
                else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            }

            /* Copy remaining elements of L[] if any */
            while (i < n1) {
                arr[k] = L[i];
                i++;
                k++;
            }

            /* Copy remaining elements of L[] if any */
            while (j < n2) {
                arr[k] = R[j];
                j++;
                k++;
            }
        };

        var sort = function (arr, l, r) {
            if (l < r) {
                // Find the middle point
                var m = parseInt((l + r) / 2);

                // Sort first and second halves
                sort(arr, l, m);
                sort(arr, m + 1, r);

                // Merge the sorted halves
                merge(arr, l, m, r);
            }
        };
        sort(arr, 0, arr.length-1);
        return arr;
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

 util.analyze(function (init, done) {
 console.log(sort.mergeSort([8, 7, 6, 2, 4, 1, 3, 5, 1, 3]));
 done(init);
 });

util.analyze(function (init, done) {
    console.log(sort.mergeSort2([8, 7, 6, 2, 4, 1, 3, 5, 1, 3]));
    done(init);
});