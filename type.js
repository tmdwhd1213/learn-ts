"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player = {
    name: "nico",
    age: 19,
};
if (player.age && player.age < 18) {
}
var playerO = {
    name: "Seung",
};
var a = "hello";
a = "bye";
var b = false;
var c = [1, "2", 3];
function playerMaker(name) {
    return {
        name: name,
        age: 2,
    };
}
var arrowPlayer = function (name) { return ({ name: name }); };
var oh = playerMaker("na");
console.log(oh.age);
var se = arrowPlayer("qwe");
console.log(se.name);
//se.name = 'es'; // Cannot assign to 'name' because it is a read-only property.
var e = [1, 2, 3, 4];
//e.push(6);  // Property 'push' does not exist on type 'readonly number[]'.
var boxer = ["nico", 1, true];
//boxer[0] = 1    // Type 'number' is not assignable to type 'string'.
//boxer[0] = 'hi';    // Cannot assign to '0' because it is a read-only property.
var x; // 말 그대로 변수인 것 같음. 조건문으로 typeof ~~이면 이러한 동작을 하게 해주세요.로 작성 가능함.
if (typeof x === "number") {
    var y = x + 1;
}
if (typeof x === "string") {
    var y = x.toUpperCase();
}
// void는 리턴이 없는 함수
function hello() {
    console.log("x");
}
function never(name) {
    if (typeof name === "string") {
        name.toUpperCase();
    }
    else if (typeof name === "number") {
        Math.floor(name);
    }
    else {
        throw new Error("xxx"); // never
    }
    throw new Error(name.toString());
}
// 타입을 만들어보자
function add(a, b) {
    return a + b;
}
var add2 = function (a, b) {
    if (typeof b === "string")
        return a;
    return a + b;
};
var push = function (config) {
    if (typeof config === "string") {
        console.log(config);
    }
    else {
        console.log(config.path, config.state);
    }
};
var diff = function (a, b, c) {
    if (c)
        return a - b - c;
    return a - b;
};
