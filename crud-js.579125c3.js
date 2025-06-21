const students = document.querySelector('.students-list');
const makeStudentsMarkUp = (students)=>{
    return students.map((student)=>{
        return `<tr>
          <th>${student.id}</th>
          <th>${student.name}</th>
          <th>${student.age}</th>
          <th>${student.course}</th>
          <th>${student.skills}</th>
          <th>${student.email}</th>
          <th>${student.isEnrolled}</th>
        </tr>
       `;
    }).join('');
};
// Функція для отримання всіх студентів
impot;
getStudents().then((data)=>{
    students.innerHTML = makeStudentsMarkUp(data);
});
// Функція для відображення студентів у таблиці
function renderStudents(students) {
// твій код
}
// Функція для додавання нового студента
function addStudent(e) {
// твій код
}
// Функція для оновлення студента
function updateStudent(id) {
// твій код
}
// Функція для видалення студента
function deleteStudent(id) {
// твій код
}

//# sourceMappingURL=crud-js.579125c3.js.map
