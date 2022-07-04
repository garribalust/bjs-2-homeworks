//Задача №1

class PrintEditionItem {
   constructor(name, releaseDate, pagesCount){
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null
   }

   fix() {
      this.state *= 1.5;
   }

   set state(newState){
         if(newState < 0){
            this._state = 0;
         } else if(newState > 100) {
         this._state = 100;
         } else {
            this._state = newState;
         }
   }

   get state(){
      return this._state;
   }
}

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount){
      super(name, releaseDate, pagesCount);
      this.type = 'magazine';
   }
}

class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount){
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = 'book';
   }
}

class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount){
      super(author, name, releaseDate, pagesCount);
      this.type = 'novel';
   }
}

class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount){
      super(author, name, releaseDate, pagesCount);
      this.type = 'fantastic';
   }
}

class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount){
      super(author, name, releaseDate, pagesCount);
      this.type = 'detective';
   }
}

//Задача №2

class Library {
   constructor(name) {
      this.name = name;
      this.books = [];
   }

   addBook(book) {
      if(book.state > 30) {
         this.books.push(book);
      }
   }

   findBookBy(type, value) {
      let key = this.books.filter((book) => book[type] === value);
      if(key.length !== 0 ) {
            return key[0];
         } else {
            return null;
         }
   }

   giveBookByName(bookName) {
      let findBook = this.books.find(book => book.name === bookName); 
      let giveBook = this.books.indexOf(findBook);
      if(giveBook !== -1){
         return this.books.splice(giveBook, 1, [0]);
      } else {
         return null;
      }
   }
}