interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

// 제네릭(타입변수)을 이렇게 보낼 수 있음. -> 클래스 -> 인터페이스
const stringsStorage = new LocalStorage<string>();
stringsStorage.set("ket", "kit");
console.log(stringsStorage.get("ket"));

const booleansStorage = new LocalStorage<boolean>();
booleansStorage.set("xxx", false);
console.log(booleansStorage.get("xxx"));
