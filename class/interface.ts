// type 키워드: 객체뿐만 아니라 string, number, array 등 다양하게 쓸 수 있음. 상속처럼 쓰려면 & 연산자 써야함.
// interface 키워드: 오로지 객체의 모양을 특정하기 위해 사용함. 상속 받을 수도 있음. (객체를 쓸 때 더 편함 클래스처럼 쓸 수 있어서), 얘는 여러번 써도 중첩됨.
interface Test extends Player {
  readonly nickname: Nickname;
  healthBar: HealthBar;
}

interface Test {
  asd: number;
}
export type Player = {
  nickname: Nickname;
  healthBar: HealthBar;
  readonly team?: Team;
};

export type BestPlayer = Player & {
  score: number;
};

// 아래의 형태를 type alias라고 부른다.
type Team = "red" | "blue" | "yellow";
type HealthBar = 1 | 5 | 10;

type Nickname = string;
type Friends = Array<string>;

const nico: Player = {
  nickname: "nico",
  healthBar: 10,
  team: "blue",
};

type Food = string;
