/*  Задание № 1.  */
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }
}
const sherlock = new PrintEditionItem(
 "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
 2019,
 1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}
const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

/*  Задание № 2.  */
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        let book = this.books[i];
        this.books.splice(i, 1);
        return book;
      }
    }
    return null;
  }
}
const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

/*  Задание № 3.  */
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }
  addMark(mark, subject) {
      if (this.marks?.[subject] === undefined && mark >= 2 && mark <= 5) {
      this.marks[subject] = [];
      this.marks[subject].push(mark);
    } else if (this.marks.hasOwnProperty(subject) && mark >= 2 && mark <= 5) {
      this.marks[subject].push(mark);
    }
  }
  getAverageBySubject(subject) {
    if (this.marks.hasOwnProperty(subject) === false) {
      return 0;
    }
    const gradePointAverage = this.marks[subject].reduce((acc, mark, index, arr) => {
      acc += mark;
      if (index === arr.length - 1) {
        return acc / arr.length;
      }
      return acc;
    }, 0);
    return gradePointAverage;
  }
  getAverage() {
    if (Object.keys(this.marks).length === 0) {
      return 0;
    }
    let allSubject = Object.keys(this.marks);
    for (let subject of allSubject) {
      allSubject[allSubject.indexOf(subject)] = this.getAverageBySubject(subject);
    }
    const gradePointAverage = allSubject.reduce((acc, mark, index, arr) => {
      acc += mark;
      if (index === arr.length - 1) {
          return acc / arr.length;
      }
      return acc;
      }, 0);
      return gradePointAverage;
  }
}
