exports = module.exports = {
    analyze: function (cb) {
        var init = process.hrtime();
        var done = function (init) {
            console.log("Time taken : ", process.hrtime(init));
        };
        cb(init, done);
    },
    swap: function (arr, x, y) {
        var temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
        return arr;
    }
};