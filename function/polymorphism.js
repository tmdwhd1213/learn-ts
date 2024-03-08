"use strict";
// polymorphism : 인자들과 반환값에 대하여 형태(타입)에 따라 그에 상응하는 형태(타입)를 갖을 수 있다.
// any와의 차이점은 해당 타입에 대한 정보를 잃지 않는다.
// any는 any로서 밖에 알 수 없지만 generics는 타입 정보를 알 수 있다.
// const superPrint: SuperPrint = (arr) => {
//   arr.forEach((item) => console.log(item));
// };
const superPrint = (arr, b) => {
    if (b)
        return b;
    return arr[0];
};
// 위의 normal function 버전
function sPrint(a) {
    return a[0];
}
const a = superPrint([1, 2, 3, 4], "x"); // 굳이 제네릭 안 써도됨. TS한테 맡기자
const b = superPrint([true, false, true, true], 1);
const c = superPrint(["a", "b", "c"], false);
const d = superPrint([1, "a", false, "e"], []);
const nico = {
    name: "nico",
    extraInfo: {
        favFood: "kimchi",
    },
};
const SJ = {
    name: "SJ",
    extraInfo: {
        favFood: "Goolbi",
    },
};
const lynn = {
    name: "lynn",
    extraInfo: null,
};
