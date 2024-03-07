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

// 위의 normal function 버전
function sPrint<T>(a: T[]) {
  return a[0];
}

const a = superPrint<number, string>([1, 2, 3, 4], "x"); // 굳이 제네릭 안 써도됨. TS한테 맡기자
const b = superPrint([true, false, true, true], 1);
const c = superPrint(["a", "b", "c"], false);
const d = superPrint([1, "a", false, "e"], []);

// 제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌
// 다양한 타입을 사용할 수 있도록 하는 기법이다.

type Player<E> = {
  name: string;
  extraInfo: E;
};

const nico: Player<{ favFood: string }> = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi",
  },
};

type SJExtra = {
  favFood: string;
};

type SJPlayer = Player<SJExtra>;

const SJ: SJPlayer = {
  name: "SJ",
  extraInfo: {
    favFood: "Goolbi",
  },
};

const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null,
};
