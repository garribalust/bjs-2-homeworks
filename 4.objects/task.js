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

 Student.prototype.addMarks = function (mark1,mark2,mark3...) {
   this.subject = subjectName;
 }

// ваш код для остальных методов