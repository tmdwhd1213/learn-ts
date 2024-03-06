// const superPrint: SuperPrint = (arr) => {
//   arr.forEach((item) => console.log(item));
// };
var superPrint = function (arr) { return arr[0]; };
var a = superPrint([1, 2, 3, 4]);
var b = superPrint([true, false, true, true]);
var c = superPrint(["a", "b", "c"]);
var d = superPrint([1, "a", false, "e"]);
