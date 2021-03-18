
class Student {

  constructor (fullName, university, course, marks) {
    this.fullName = fullName;
    this.university = university;
    this.course = course;
    this.marks = [marks];
  }

  getInfo() {
    return `Студент ${this.course}-го курсу, ${this.university}, ${this.fullName}`
  }

  get getMarks() {
    return this.marks;
  }

  set setMarks(mark) {
    this.marks === undefined ? this.marks = [mark] : this.marks.push(mark);
    this.getMarks;
  }

  getAverageMark() {
    let sumRating = this.marks.reduce((prev, current) => (prev || 0) + current);
    return sumRating / this.marks.length;
  }

  dismiss() {
    this.marks = null;
  }

  recover() {
    this.marks = [];
  }

}

class BudgetStudent extends Student {

  constructor(...args) {
    super(...args);
    this.getScholarship();
  } 

  getScholarship() {

    let sumResult = 0;
    
    this.marks.forEach(element =>sumResult =+ element);

    const result = sumResult / this.marks.length

    if (result > 4) {
      console.log("Ви отримали 1400 стипендії");
      setInterval(() => {
        console.log("Ви отримали 1400 стипендії");
      }, 30000);

    } else {
      console.log("Ви не отримали стипендію");
    }
  }

}

const studentVlad = new Student(
  "Оксьоненко Владимслав Віталійович", 
  "Київський національний універститет технологій та дизайну", 
  "3"
)

studentVlad.setMarks = 5;
studentVlad.setMarks = 4;
studentVlad.setMarks = 4;
studentVlad.setMarks = 5;
studentVlad.setMarks = 5;

console.log(studentVlad);


const studentsVasya = new BudgetStudent("Василь Васильович", "Kyiv", "3", 5);

studentsVasya.setMarks = 5;
studentsVasya.setMarks = 5;
studentsVasya.setMarks = 5;

console.log(studentsVasya);
