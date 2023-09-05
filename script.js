const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

const checkStudent = () => {
  const checkName = prompt(
    "enter the name of the student you want to check"
  ).toLowerCase();
  let numberOfStudents = 0;
  if (!students.includes(checkName)) {
    alert("couldnt find any students by that name");
  } else {
    for (let i in students) {
      if (students[i] === checkName) {
        numberOfStudents++;
      }
    }
    alert(`There are ${numberOfStudents} students by the name of ${checkName}`);
  }
};

checkStudent();
