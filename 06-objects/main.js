const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];


// 1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"]
// - яка повертає список предметів для конкретного студента. Зверніть увагу
// – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

function getSubjects(student) {
  let listSubjects = Object.keys(student.subjects);
  
  listSubjects.forEach((element, index) => {
    listSubjects[index] = element[0].toUpperCase() + element.slice(1).replaceAll(/_/g, " ");
  });
  return listSubjects;
};

console.log(getSubjects(students[0]));

// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 
// – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. 
// Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)


function getAverageMark(student) {
  const arrRating = [];
    for (key in student.subjects) {
      arrRating.push(student.subjects[key]);
    }
    console.log(arrRating.join().split(",").flat(Number()));
}

getAverageMark(students[0]);