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
  
  listSubjects.map((element, index) => {
    listSubjects[index] = element[0].toUpperCase() + element.slice(1).replaceAll(/_/g, " ");
  });
  return listSubjects;
};

console.log(getSubjects(students[0]));

// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 
// – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. 
// Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)


function getAverageMark(student) {
  let arrRating = [];
  let sumRating = 0;
  
    // for (key in student.subjects) {
    //   arrRating.push(student.subjects[key]);
    // }

    arrRating = Object.values(students.subjects);
    console.log(arrRating);
    arrRating = arrRating.flat(Infinity);
    arrRating.map((element) => sumRating += element)
    const result = (sumRating / arrRating.length).toFixed(2);
   return result;
}

console.log(getAverageMark(students[0]));

// 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} 
// – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). 
// Повинна бути виведена інформація: курс, ім'я, середня оцінка.

//console.log(getAverageMark(students[0]));

function getStudentInfo(student) {
  const result = {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student)
  }
  return result;
}

 console.log(getStudentInfo(students[0]));

 // 4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

function getStudentsNames(students) {

  let arrNameStudents = [];

  for (const key in students) {
    arrNameStudents.push(students[key].name);
  }

  return arrNameStudents.sort();
}

console.log(getStudentsNames(students));

// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students) {
  let bestStudent = "";
  let bestMark = 0;
  for (const key in students) {
    if (getAverageMark(students[key]) > bestMark) {
      bestStudent = students[key].name;
    } 
  }
  return bestStudent;
}

console.log(getBestStudent(students));


// 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } 
// – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

function calculateWordLetters(string) {
  const obj = {};
  const arrString = string.split("");
  return arrString.reduce((prev, current) => {
    prev[current] = (prev[current] || 0) + 1;
    return prev;
  }, obj);
}

console.log(calculateWordLetters("тест"));