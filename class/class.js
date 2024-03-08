"use strict";
/**
 * Typescript에서는 constructor 작성할 때 this.name = name; 이런거 안 해도 파라미터에 넣으면 자동으로 해줌.
 * private 키워드 사용 가능
 * private -> 상속받은 클래스에서도 못 씀.
 * protected -> 상속받은 클래스에서만 쓸 수 있음.
 * public -> 인스턴스에서도 쓸 수 있음.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
// 추상 클래스는 상속해주는 것만 되고 인스턴스를 받을 수 없음. -> new User(); 하면 Cannot create an instance of an abstract class.ts(2511) 이렇게 경고
// 추상 메서드를 쓰는 이유, 무조건 써야하는 메서드를 지정할 수 있다.
class User {
    constructor(firstName, lastName, nickname) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// 추상 메서드를 구현하면 상속받은 클래스에서 추상 메서드를 구현해야됨
class Player extends User {
    getNickName() {
        return this.nickname;
    }
}
exports.Player = Player;
const nico = new Player("nico", "las", "니꼬");
console.log(nico.getFullName());
console.log(nico.getNickName());
