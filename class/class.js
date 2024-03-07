"use strict";
/**
 * Typescript에서는 constructor 작성할 때 this.name = name; 이런거 안 해도 파라미터에 넣으면 자동으로 해줌.
 * private 키워드 사용 가능
 * private -> 상속받은 클래스에서도 못 씀.
 * protected -> 상속받은 클래스에서만 쓸 수 있음.
 * public -> 인스턴스에서도 쓸 수 있음.
 */
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
// 추상 클래스는 상속해주는 것만 되고 인스턴스를 받을 수 없음. -> new User(); 하면 Cannot create an instance of an abstract class.ts(2511) 이렇게 경고
var User = /** @class */ (function () {
  function User(firstName, lastName, nickname) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickname = nickname;
  }
  User.prototype.getFullName = function () {
    return "".concat(this.firstName, " ").concat(this.lastName);
  };
  return User;
})();
// 추상 메서드를 구현하면 상속받은 클래스에서 추상 메서드를 구현해야됨
var Player = /** @class */ (function (_super) {
  __extends(Player, _super);
  function Player() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Player.prototype.getNickName = function () {
    return this.nickname;
  };
  return Player;
})(User);
exports.Player = Player;
var nico = new Player("nico", "las", "니꼬");
console.log(nico.getFullName());
console.log(nico.getNickName());
