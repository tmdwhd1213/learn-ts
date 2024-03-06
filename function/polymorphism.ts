// polymorphism : 인자들과 반환값에 대하여 형태(타입)에 따라 그에 상응하는 형태(타입)를 갖을 수 있다.
// any와의 차이점은 해당 타입에 대한 정보를 잃지 않는다.
// any는 any로서 밖에 알 수 없지만 generics는 타입 정보를 알 수 있다.

/**
 * (구체적인 타입을 지정하지 않고 다양한 인수와 리턴 값에 대한 타입을 처리할 수 있다.)
타입스크립트에서 제네릭을 통해 인터페이스, 함수 등의 재사용성을 높일 수 있습니다.
 */
type SuperPrint = {
  <TypePlaceholder, M>(arr: TypePlaceholder[], b: M): TypePlaceholder | M;
};

// const superPrint: SuperPrint = (arr) => {
//   arr.forEach((item) => console.log(item));
// };

const superPrint: SuperPrint = (arr, b) => {
  if (b) return b;
  return arr[0];
};

const a = superPrint([1, 2, 3, 4], "x");
const b = superPrint([true, false, true, true], 1);
const c = superPrint(["a", "b", "c"], false);
const d = superPrint([1, "a", false, "e"], []);
