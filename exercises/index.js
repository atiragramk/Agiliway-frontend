// 1 

function sequence(start, step) {
    start = start || 0;
    step = step || 1;
    start -= step;
    return function() {
        return start += step;
    };
};

// 2 

function take(fn, count) {
    var result = [];
    for (var i = 0; i < count; i++){
        result.push(fn());
    }
    return result;
}

// 3 

function map(fn, array) {
    var arr = [];
    for(var i = 0; i < array.length; i++) {
        arr.push(fn(array[i]));
    }
    return arr;
}

// 4 

function fmap(a, gen) {
    return function() {
        var argList = Array.prototype.slice.call(arguments);
        return a(gen.apply(null, argList))
    }
}

// 5 

function partial() {
    var arg = Array.prototype.slice.call(arguments)
    var fn = arg.shift();

    return function() {
        var argList = arg.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, argList);
    }
}

// 6 

function partialAny() {
    var argFirst = Array.prototype.slice.call(arguments);
    var fn = argFirst.shift();

    return function() {
        var args = [];
        var argSecond = Array.prototype.slice.call(arguments);
        for(var i = 0; i < argFirst.length; i++){
            if(argFirst[i] === undefined) {
                args.push(argSecond.shift());
            } else {
                args.push(argFirst[i]); 
            }
        }
        var argList = args.concat(argSecond);
        return fn.apply(null, argList);
    }
}

// 7

function bind(fn, context) {
    return function() {
      return fn.apply(context, Array.prototype.slice.call(arguments));
    }
  }

// 8
function pluck(objects, fieldName) {
    var arr = [];
    for(var i = 0; i < objects.length; i++){
        arr.push(objects[i][fieldName])
    }
    return arr;
}

// 9 
function filter (arr, fn) {
    var res = [];
    for(var i = 0; i < arr.length; i++) {
        if(fn(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}

// 10 
function count (obj) {
    return Object.keys(obj).length;
}
  