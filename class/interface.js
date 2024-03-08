"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nico = {
    nickname: "nico",
    healthBar: 10,
    team: "blue",
};
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
class Player {
    constructor(firstName, lastName, health) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.health = health;
    }
    sayHi(name) {
        return `Hello ${name}. My name is ${this.fullName()}`;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
function makeUser(user) {
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
