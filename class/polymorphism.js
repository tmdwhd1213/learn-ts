var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
        this.storage = {};
    }
    LocalStorage.prototype.set = function (key, value) {
        this.storage[key] = value;
    };
    LocalStorage.prototype.remove = function (key) {
        delete this.storage[key];
    };
    LocalStorage.prototype.get = function (key) {
        return this.storage[key];
    };
    LocalStorage.prototype.clear = function () {
        this.storage = {};
    };
    return LocalStorage;
}());
// 제네릭(타입변수)을 이렇게 보낼 수 있음. -> 클래스 -> 인터페이스
var stringsStorage = new LocalStorage();
stringsStorage.set("ket", "kit");
console.log(stringsStorage.get("ket"));
var booleansStorage = new LocalStorage();
booleansStorage.set("xxx", false);
console.log(booleansStorage.get("xxx"));
