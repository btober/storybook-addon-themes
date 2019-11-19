"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Store = /** @class */ (function () {
    function Store() {
        this.store = new Map();
        this.callbacks = [];
    }
    Store.prototype.get = function (key) {
        return this.store.get(key);
    };
    Store.prototype.has = function (key) {
        return this.store.has(key);
    };
    Store.prototype.set = function (key, value) {
        this.store.set(key, value);
        this.callbacks.forEach(function (callback) { return callback(key, value); });
    };
    Store.prototype.subscribe = function (callback) {
        var _this = this;
        this.callbacks.push(callback);
        return function () { return _this.unsunscribe(callback); };
    };
    Store.prototype.unsunscribe = function (callback) {
        this.callbacks.splice(this.callbacks.indexOf(callback), 1);
    };
    return Store;
}());
exports.Store = Store;
;
