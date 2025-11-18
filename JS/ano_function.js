//  Call back function without using annonymous function.
function a(func) {
    console.log(func)
}

var c = function b() {
    console.log("This is a call back function");
    return true;
}
a(c());


//  Call back function with annonymous function.
function d(func) {
    console.log(func);
}

d(function () {
    console.log("Annonymous function");
    return true;
})
