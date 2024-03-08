// node_modules의 패키지처럼 가져올 때 declaration ts, d.ts 파일을
// import { init, exit } from "myPackage";

// js파일에서 경로설정으로 직접 import를 할 경우 tsconfig.json 속성에 "allowJs" :true
// 그리고 d.ts 파일 지워야 작동함.
import { init, exit } from "./myPackage2";

init({ url: "asd", debug: false });
exit(1);

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let playerDirection: Direction = Direction.Up;
console.log(playerDirection);
