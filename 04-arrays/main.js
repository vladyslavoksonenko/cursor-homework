
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(arr) {
    const pairs = [];
    let studentsGirl
    let numberLastChar = 0;
    for (let i = 0; i < arr.length; i++) {
      numberLastChar = arr[i].length - 1;
      if (arr[i][numberLastChar] === "а") {
        console.log(arr[i]);
      } else {
        
      }
      
    }
    return true
    
}





const pairs = getPairs(students);
console.log(pairs);
