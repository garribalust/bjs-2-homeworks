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
      return this.state * 1.5;
   }

   set out(newState){
      if(newState < 0){
         this.state = 0;
      }else if(newState > 100){
         this.state = 100;
      }else {
         this.state = newState;
      }   
   }

   get out(){
      return this.state;
   }
}

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount){
      super(name, releaseDate, pagesCount);
      this.type = 'magazine';
   }
}

class Book extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount, author){
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = 'book';
   }
}

class NovelBook extends Book {
   constructor(name, releaseDate, pagesCount, author){
      super(name, releaseDate, pagesCount, author);
      this.type = 'novel';
   }
}

class FantasticBook extends Book {
   constructor(name, releaseDate, pagesCount, author){
      super(name, releaseDate, pagesCount, author);
      this.type = 'fantastic';
   }
}

class DetectiveBook extends Book {
   constructor(name, releaseDate, pagesCount, author){
      super(name, releaseDate, pagesCount, author);
      this.type = 'detective';
   }
}

//Задача №2

class Library {
   constructor(name) {
      this.name = name;
      this.books = [];
   }

   addBook({book}) {
      if(this.state > 30) {
         this.books.push({book})
      }
   }

   findBookBy(type, value) {

   }
}