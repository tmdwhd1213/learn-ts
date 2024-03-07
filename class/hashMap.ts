type Words = {
  [key: string]: string;
};

class Dictionary {
  private words: Words = {};
  private size: number = 0;

  // 클래스도 타입처럼 쓸 수 있다. 인스턴스에 한해서
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
      this.size++;
      return word;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  // 단어 삭제 메서드
  delete(term: string) {
    if (this.words[term] === undefined) {
      return null;
    } else {
      const removed = { [term]: this.words[term] };
      delete this.words[term];
      this.size--;
      return removed;
    }
  }

  has(term: string): boolean {
    return term in this.words;
  }

  // 단어 업데이트 메서드
  update(term: string, def: string) {
    const updateWord = new Word(term, def);

    if (!this.has(term)) {
      return this.add(updateWord);
    } else {
      this.words[term] = def;
      return updateWord;
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}

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
