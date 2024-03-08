"use strict";
class Dictionary {
    constructor() {
        this.words = {};
        this.size = 0;
    }
    // 클래스도 타입처럼 쓸 수 있다. 인스턴스에 한해서
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
            this.size++;
            return word;
        }
    }
    def(term) {
        return this.words[term];
    }
    // 단어 삭제 메서드
    delete(term) {
        if (this.words[term] === undefined) {
            return null;
        }
        else {
            const removed = { [term]: this.words[term] };
            delete this.words[term];
            this.size--;
            return removed;
        }
    }
    has(term) {
        return term in this.words;
    }
    // 단어 업데이트 메서드
    update(term, def) {
        const updateWord = new Word(term, def);
        if (!this.has(term)) {
            return this.add(updateWord);
        }
        else {
            this.words[term] = def;
            return updateWord;
        }
    }
    static test() {
        console.log("static test");
    }
}
// 외부에서 kimchi.def = 'xxxxx' 이렇게 바꾸지 못하게 하려면 readonly 키워드 이용
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
    print() {
        console.log(`term: ${this.term} & definition: ${this.def}`);
    }
}
const kimchi = new Word("kimchi", "한국의 음식");
// console.log(kimchi);
// kimchi.print();
const dic = new Dictionary();
dic.add(kimchi);
// console.log(dic);
// console.log(dic.def("kimchi"));
console.log(dic.update("asd", "asdas"));
console.log(dic.update("asd", "아사다"));
console.log(dic.delete("kimchi"));
console.log(dic);
Dictionary.test();
