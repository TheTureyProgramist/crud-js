export const getStudents = () => fetch("http://localhost:3000/students")   
.then((response) => response.json())