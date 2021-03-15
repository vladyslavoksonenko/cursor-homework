
class Student {
  constructor (fullName, university, course) {
    this.fullName = fullName;
    this.university = university;
    this.course = course;
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

const studentMark = new Student(
  "Оксьоненко Владимслав Віталійович", 
  "Київський національний універститет технологій та дизайну", 
  "3"
);

studentMark.setMarks = 5;
studentMark.setMarks = 4;
studentMark.setMarks = 4;
studentMark.setMarks = 5;
studentMark.setMarks = 5;


console.log(studentMark);

class BudgetStudent extends Student {
  constructor(getScholarship) {
    super();
    this.getScholarship = function() {
      setInterval(() => {
        console.log("Ви отримали 1400 стипендії");
      }, 30000);
    }
  } 
}

const studentsVasya = new BudgetStudent(
  "Vasya",
  "Київ",
  "2"
)

console.log(studentsVasya);
