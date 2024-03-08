"use strict";
class LocalStorage {
    constructor() {
        this.storage = {};
    }
    set(key, value) {
        this.storage[key] = value;
    }
    remove(key) {
        delete this.storage[key];
    }
    get(key) {
        return this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}
// 제네릭(타입변수)을 이렇게 보낼 수 있음. -> 클래스 -> 인터페이스
const stringsStorage = new LocalStorage();
stringsStorage.set("ket", "kit");
console.log(stringsStorage.get("ket"));
const booleansStorage = new LocalStorage();
booleansStorage.set("xxx", false);
console.log(booleansStorage.get("xxx"));
