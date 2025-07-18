import { getStudents, deleteStudent, updateStudent } from './api/apistudent.js';
import { makeStudentsMarkUp } from './markup/markup.js';
import { addStudent } from './markup/student.js';

const studentsList = document.querySelector('.students-list');
const addStudentForm = document.getElementById('add-student-form');

function renderStudents() {
  getStudents().then((data) => {
    studentsList.innerHTML = makeStudentsMarkUp(data);
  });
}

window.deleteStudent = function(id) {
  deleteStudent(id).then(() => renderStudents());
}

window.editStudent = function(id) {
  getStudents().then(data => {
    const student = data.find(s => s.id === id);
    if (!student) return;
    const name = prompt("Вкажіть нове ім'я:", student.name);
    const age = prompt("Вкажіть новий вік:", student.age);
    const course = prompt("Вкажіть новий курс:", student.course);
    const skills = prompt("Вкажіть нові навички (через кому):", student.skills.join(', '));
    const email = prompt("Вкажіть новий email:", student.email);
    const isEnrolled = confirm("Записати студента?");
    updateStudent(id, {
      name,
      age: Number(age),
      course,
      skills: skills.split(',').map(s => s.trim()),
      email,
      isEnrolled
    }).then(() => renderStudents());
  });
}

addStudentForm.addEventListener('submit', addStudent);
document.getElementById('get-students-btn').addEventListener('click', renderStudents);

document.getElementById('delete-students-btn').addEventListener('click', async function() {
  const data = await getStudents();
  await Promise.all(data.map(student => deleteStudent(student.id)));
  renderStudents();
});
document.getElementById('update-students-btn').addEventListener('click', renderStudents);
renderStudents();