
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
	let studentAndMark = [];
	const studentsAndMarks = [];

	for (const i in students) {
		let studentAndMark = [];
		studentAndMark.push(students[i], marks[i]);
		studentsAndMarks.push(studentAndMark);
	}
	return studentsAndMarks;
}

function getRandomMark(taskAndPair) {
	const taskAndPairMark = taskAndPair.slice();
	for (const i in taskAndPairMark) {
		let randomMark = Math.round((Math.random() * 4) + 1);
		taskAndPairMark[i].push(randomMark);
	}
	return taskAndPairMark;
}




const pairs = getPairs(students);
const taskAndPair = getTaskAndPair(pairs, themes);
const marksAndStudents = getMarks(students, marks);
const randomMark = getRandomMark(taskAndPair);

console.log(pairs)
console.log(taskAndPair);
console.log(marksAndStudents);
console.log(randomMark);

