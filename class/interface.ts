// type 키워드: 객체뿐만 아니라 string, number, array 등 다양하게 쓸 수 있음. 상속처럼 쓰려면 & 연산자 써야함.
// interface 키워드: 오로지 객체의 모양을 특정하기 위해 사용함. 상속 받을 수도 있음. (객체를 쓸 때 더 편함 클래스처럼 쓸 수 있어서), 얘는 여러번 써도 중첩됨.
interface Test extends IPlayer {
  readonly nickname: Nickname;
  healthBar: HealthBar;
}

interface Test {
  asd: number;
}
export type IPlayer = {
  nickname: Nickname;
  healthBar: HealthBar;
  readonly team?: Team;
};

export type BestPlayer = IPlayer & {
  score: number;
};

// 아래의 형태를 type alias라고 부른다.
type Team = "red" | "blue" | "yellow";
type HealthBar = 1 | 5 | 10;

type Nickname = string;
type Friends = Array<string>;

const nico: IPlayer = {
  nickname: "nico",
  healthBar: 10,
  team: "blue",
};

type Food = string;

// TS에서 추상 클래스를 만들면 JS에서는 그냥 클래스로 바뀜. -> class User { constructor(firstName, lastName){this.firstName = firstName, ...}}
// 추상 메서드는 아예 없어짐
// 표준화된 청사진(설계도)을 만들기 위해 추상클래스를 사용함.
// 추상클래스를 쓸 경우, class가 실제로 만들어짐. 따라서 이러한 경우 interface로 변환
// abstract class User {
//   constructor(protected firstName: string, protected lastName: string) {}
//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// }
interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

// interface 상속의 경우 extends 대신 implement 키워드로
// class Player extends User {
//   fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   sayHi(name: string): string {
//     return `Hello ${name}. My name is ${this.fullName()}`;
//   }
// }

// 이렇게 하면 컴파일 이후 코드량은 줄어들지만, (추상 클래스는 JS에 남는데, interface는 안 남으니까) Args를 public으로 밖에 못쓴다는 단점이 있다.
class Player implements User, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

function makeUser(user: Player) {
  console.log(user);
}
const user = new Player("SJ", "Oh", 27);
makeUser(user);
makeUser({
  firstName: "nico",
  lastName: "las",
  health: 27,
  fullName: () => "xx",
  sayHi: (name) => "string",
});
