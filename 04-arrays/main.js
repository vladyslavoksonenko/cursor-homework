
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
  const pairs = [];
  const studentsGirl = [];
  const studentsBoy = [];
  
  for (let i = 0; i < students.length; i++) {;
    if (students[i].endsWith("а")) {
      studentsGirl.push(students[i]);
    } else {
      studentsBoy.push(students[i]);
    }
  }
  for (let i = 0; i < studentsGirl.length; i++) {
    pairs.push([studentsGirl[i], studentsBoy[i]]);
  }
  return pairs;
  
}

function getTaskAndPair(pairs, themes) {
  const tasksAndPairs = []; // внешний массив
  let stringPair = '';
  for (let i = 0; i < themes.length; i++) {
    stringPair = pairs[i].join(" і ");
    tasksAndPairs.push([stringPair, themes[i]]);  
  } 
  return tasksAndPairs;
} 

function getMarks(students, marks) {
  const studentsAndMarks = [];
  for (let i = 0; i < students.length; i++) {
    studentsAndMarks.push([students[i], marks[i]]);
  }
  return studentsAndMarks;
}

function getPairAndRandomMark(taskAndPair) {
  const taskAndPairMark = [];
  for (let i = 0; i < taskAndPair.length; i++) {
    const randomMark = Math.round((Math.random() * 4) + 1);
    taskAndPairMark.push(taskAndPair[i].slice());
    taskAndPairMark[i].push(randomMark);
  }
  return taskAndPairMark;
}




const pairs = getPairs(students);
const taskAndPair = getTaskAndPair(pairs, themes);
const marksAndStudents = getMarks(students, marks);
const randomMark = getPairAndRandomMark(taskAndPair);

console.log(pairs)
console.log(taskAndPair);
console.log(marksAndStudents);
console.log(randomMark);


