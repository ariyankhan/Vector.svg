
var defineProperty = Object.defineProperty;

var defineProperties = Object.defineProperties;

var slice = Array.prototype.slice;

//var window = window || root.window;

//var document = document || root.document;

var max = Math.max;

var min = Math.min;

var create = Object.create;

var isNullOrUndefined = function (value) {
    return value === undefined || value === null;
};

var isObject = function (value) {
    return value !== null && (typeof value === "object" || typeof value === "function");
};

var isCallable = function (value) {
    return typeof value === "function";
};

var isPrimitive = function (value) {
    return !isObject(value);
};

var setPrototypeOf = function (obj, prototype) {
    if (obj === undefined || obj === null)
        throw new TypeError("setPrototypeOf called on null or undefined");
    if ( !(prototype === null || isObject(prototype)) )
        throw new TypeError("Object prototype may only be an Object or null: " + String(prototype));

    var protoDesc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
    // If Object.prototype.__proto__ does not exist or it is
    // not an accessor property then just throw errors
    if (protoDesc === undefined || !isCallable(protoDesc.set))
        throw new TypeError("Object.prototype.__proto__ accessor property does not exist");

    protoDesc.set.call(obj, prototype);
    return obj;
};







