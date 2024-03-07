var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.words = {};
        this.size = 0;
    }
    // 클래스도 타입처럼 쓸 수 있다. 인스턴스에 한해서
    Dictionary.prototype.add = function (word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
            this.size++;
            return word;
        }
    };
    Dictionary.prototype.def = function (term) {
        return this.words[term];
    };
    // 단어 삭제 메서드
    Dictionary.prototype.delete = function (term) {
        var _a;
        if (this.words[term] === undefined) {
            return null;
        }
        else {
            var removed = (_a = {}, _a[term] = this.words[term], _a);
            delete this.words[term];
            this.size--;
            return removed;
        }
    };
    Dictionary.prototype.has = function (term) {
        return term in this.words;
    };
    // 단어 업데이트 메서드
    Dictionary.prototype.update = function (term, def) {
        var updateWord = new Word(term, def);
        if (!this.has(term)) {
            return this.add(updateWord);
        }
        else {
            this.words[term] = def;
            return updateWord;
        }
    };
    return Dictionary;
}());
var Word = /** @class */ (function () {
    function Word(term, def) {
        this.term = term;
        this.def = def;
    }
    // 단어의 정의 추가 메서드
    // 단어의 정의 수정 메서드
    // 단어 출력 메서드
    Word.prototype.print = function () {
        console.log("term: ".concat(this.term, " & definition: ").concat(this.def));
    };
    return Word;
}());
var kimchi = new Word("kimchi", "한국의 음식");
// console.log(kimchi);
// kimchi.print();
var dic = new Dictionary();
dic.add(kimchi);
// console.log(dic);
// console.log(dic.def("kimchi"));
console.log(dic.update("asd", "asdas"));
console.log(dic.update("asd", "아사다"));
console.log(dic.delete("kimchi"));
console.log(dic);
