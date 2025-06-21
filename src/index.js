import { getStudents } from './api/apistudent.js';
import { makeStudentsMarkUp } from './markup/markup.js';
import { addStudent } from './markup/student.js';

const studentsList = document.querySelector('.students-list');
const addStudentForm = document.getElementById('add-student-form');

// Відображення студентів при завантаженні
getStudents().then((data) => {
    studentsList.innerHTML = makeStudentsMarkUp(data)
});
addStudentForm.addEventListener('submit', addStudent);
   
   
   // Функція для оновлення студента
   
   function updateStudent(id) {
   
    // твій код
   
   
   
    }
   
   
   
   // Функція для видалення студента
   
   function deleteStudent(id) {
   
       // твій код
   
   } 