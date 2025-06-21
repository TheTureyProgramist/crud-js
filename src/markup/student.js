import { getStudents } from '../api/apistudent.js';
import { makeStudentsMarkUp } from './markup.js';
export function addStudent(e) {
    e.preventDefault();
    const studentsList = document.querySelector('.students-list');
    const addStudentForm = document.getElementById('add-student-form');
    const name = document.getElementById('name').value.trim();
    const age = Number(document.getElementById('age').value);
    const course = document.getElementById('course').value.trim();
    const skills = document.getElementById('skills').value.split(',').map(s => s.trim());
    const email = document.getElementById('email').value.trim();
    const isEnrolled = document.getElementById('isEnrolled').checked;
    const newStudent = {
        name,
        age,
        course,
        skills,
        email,
        isEnrolled
    };
    fetch('http://localhost:3000/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStudent)
    })
    .then(res => res.json())
    .then(() => getStudents())
    .then((data) => {
        studentsList.innerHTML = makeStudentsMarkUp(data);
        addStudentForm.reset();
    })
    .catch(() => alert('Помилка при додаванні студента'));
}