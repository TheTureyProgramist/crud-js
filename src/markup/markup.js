export const makeStudentsMarkUp = (students) => {
    return students.map((student) => {
        return `<tr>
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.age}</td>
          <td>${student.course}</td>
          <td>${Array.isArray(student.skills) ? student.skills.join(', ') : student.skills}</td>
          <td>${student.email}</td>
          <td>${student.isEnrolled ? "Тrue" : "False"}</td>
          <td>
            <button onclick="editStudent('${student.id}')">Редагувати</button>
            <button onclick="deleteStudent('${student.id}')">Видалити</button>
          </td>
        </tr>`
    }).join('');
}