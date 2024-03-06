export type Iplayer = {
  readonly name: string;
  age?: number;
};

const player: Iplayer = {
  name: "nico",
  age: 19,
};

if (player.age && player.age < 18) {
}

const playerO: Iplayer = {
  name: "Seung",
};

let a = "hello";
a = "bye";

let b: boolean = false;

let c = [1, "2", 3];

function playerMaker(name: string): Iplayer {
  return {
    name: name,
    age: 2,
  };
}

const arrowPlayer = (name: string): Iplayer => ({ name });

const oh = playerMaker("na");
console.log(oh.age);

const se = arrowPlayer("qwe");
console.log(se.name);

//se.name = 'es'; // Cannot assign to 'name' because it is a read-only property.

let e: readonly number[] = [1, 2, 3, 4];
//e.push(6);  // Property 'push' does not exist on type 'readonly number[]'.

const boxer: readonly [string, number, boolean] = ["nico", 1, true];
//boxer[0] = 1    // Type 'number' is not assignable to type 'string'.
//boxer[0] = 'hi';    // Cannot assign to '0' because it is a read-only property.

let x: unknown; // 말 그대로 변수인 것 같음. 조건문으로 typeof ~~이면 이러한 동작을 하게 해주세요.로 작성 가능함.
if (typeof x === "number") {
  let y = x + 1;
}
if (typeof x === "string") {
  let y = x.toUpperCase();
}

// void는 리턴이 없는 함수
function hello(): void {
  console.log("x");
}

function never(name: string | number): never {
  if (typeof name === "string") {
    name.toUpperCase();
  } else if (typeof name === "number") {
    Math.floor(name);
  } else {
    throw new Error("xxx"); // never
  }
  throw new Error(name.toString());
}

// 타입을 만들어보자
function add(a: number, b: number) {
  return a + b;
}

const add2: Add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

// 함수의 call signiture를 만들어보자
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

// overloading -> 위의 예제처럼 여러 개의 call signiture가 있는 것
// 대충 Next.js에서 Router에서 하듯 overloading을 해보자
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

type Diff = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const diff: Diff = (a, b, c?: number) => {
  if (c) return a - b - c;
  return a - b;
};
