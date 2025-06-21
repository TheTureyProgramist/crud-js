export const makeStudentsMarkUp = (students) => {
    return students.map((student) => {
        return `<tr>
          <th>${student.id}</th>
          <th>${student.name}</th>
          <th>${student.age}</th>
          <th>${student.course}</th>
          <th>${student.skills}</th>
          <th>${student.email}</th>
          <th>${student.isEnrolled}</th>
        </tr>`
    }).join('');
}