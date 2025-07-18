 export async function getStudents() {
  try {
    const response = await fetch('http://localhost:3000/students');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка при отриманні студентів:', error);
    return [];
  }
}
export async function updateStudent(id, updatedStudent) {
  try {
const response = await fetch(`http://localhost:3000/students/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedStudent)
    });
    return await response.json();
  } catch (error) {
    console.error('Помилка при оновленні студента:', error);
    return null;
  }
}
export async function deleteStudent(id) {
  try {
    const response = await fetch(`http://localhost:3000/students/${id}`, {
      method: "DELETE"
    });
    return await response.json();
  } catch (error) {
    console.error('Помилка при видаленні студента:', error);
    return null;
  }
}