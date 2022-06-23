function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let student1 = new Student('Alex', 'male', 34);
let student2 = new Student('Olga', 'female', 23);
let student3 = new Student('Fedor', 'male', 29);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
   if(this.marks === undefined){ 
      this.marks = [mark]; 
      } else {
        this.marks.push(mark);
      }
 }

 Student.prototype.addMarks = function (...mark1) {
   if(this.marks === undefined) {
      this.marks = mark1;
   } else {
      this.marks.push(...mark1);
   }
 }

 Student.prototype.getAverage = function () {
   return this.marks.reduce((acc, item, index, marks) => {
      acc += item;
      if(index === marks.length - 1) {
         return acc / marks.length;
      }
      return acc;
   }, 0)
 }

 Student.prototype.exclude = function (reason) {
   delete this.subject;
   delete this.marks;
   this.excluded = reason;
 }