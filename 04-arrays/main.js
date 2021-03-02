
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(arr) {
    const pairs = [];
    let studentsGirl = [];
    let studentsBoy = [];
    
    for (let i = 0; i < arr.length; i++) {
      const numberLastChar = arr[i].length - 1;
      if (arr[i][numberLastChar] === "а") {
        studentsGirl.push(arr[i]);
      } else {
        studentsBoy.push(arr[i]);
      }
    }
    for (let i = 0; i < studentsGirl.length; i++) {
      pairs.push([studentsGirl[i], studentsBoy[i]]);
    }
    return pairs;
    
}

function getTaskAndPair(pairs, themes) {
  let tasksAndPairs = []; // внешний массив
  let stringPair = '';

  for (const i in themes) {
    let taskAndPair = [];
    stringPair = pairs[i].join(" і ");
    taskAndPair.push(stringPair, themes[i]);   
    tasksAndPairs.push(taskAndPair);  
  } 
  return tasksAndPairs;
} 

function getMarks(students, marks) {
  const studentsAndMarks = [];

  for (const i in students) {
    studentsAndMarks.push(students[i], marks[i]);
  }
  return studentsAndMarks;
}

function getRandomMark(taskAndPair) {
  for (const i in taskAndPair) {
    let randomMark = Math.round((Math.random() * 4) + 1);
    taskAndPair[i].push(randomMark);
  }
  return taskAndPair;
}




const pairs = getPairs(students);
const taskAndPair = getTaskAndPair(pairs, themes);
const marksAndStudents = getMarks(students, marks);
const randomMark = getRandomMark(taskAndPair);

console.log(pairs)
console.log(taskAndPair);
console.log(marksAndStudents);
console.log(randomMark);
