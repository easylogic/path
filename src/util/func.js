export function isUndefined (value) {
    return typeof value == 'undefined' || value === null;
}

export function isNotUndefined (value) {
    return isUndefined(value) === false;
}

export function isArray (value) {
    return Array.isArray(value);
}

export function isBoolean (value) {
    return typeof value == 'boolean'
}

export function isString (value) {
    return typeof value == 'string'
}

export function isNotString (value) {
    return isString(value) === false;
}

export function isObject (value) {
    return typeof value == 'object' && !isArray(value) && !isNumber(value) && !isString(value)  && value !== null; 
}

export function isFunction (value) {
    return typeof value == 'function'
}

export function isNumber (value) {
    return typeof value == 'number';
}

export function isZero (num) {
    return num === 0;
}

export function isNotZero (num) {
    return !isZero(num);
}

export function clone (obj) {
    if (isUndefined(obj)) return undefined;
    return JSON.parse(JSON.stringify(obj));
}
