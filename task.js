let name = prompt ("enter student name: ");
console.log(name);

let age = parseInt(prompt ("enter age: "));
console.log(age);
 let cgpa = parseFloat(prompt ("enter cgpa: "));
console.log(cgpa);
let isStudent = (prompt("Are you a student? (true/false)") === "true");
console.log("Student: " + isStudent);


let grade = prompt("Enter your grade (A/B/C):").charAt(0);

console.log("Grade: " + grade);

let courses = [
    "Web Technology",
    "OOP",
    "Database"
];

console.log("Courses:");

for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
let marks= parseInt(prompt ("enter number: "));
console.log(marks);

if (marks >= 80) {
    console.log("Grade: A+");
}
else if (marks >= 70) {
    console.log("Grade: A");
}
else if (marks >= 60) {
    console.log("Grade: B");
}
else {
    console.log("Grade: F");
}


function showStudent(name, age) {
    console.log("Student Name: " + name);
    console.log("Student Age: " + age);
}

showStudent("Adita", 25);

let students2 = [];

for (let i = 0; i < 3; i++) {
    students2[i] = prompt("Enter student name:");
}

console.log("Students:");

for (let i = 0; i < students2.length; i++) {
    console.log(students2[i]);
}