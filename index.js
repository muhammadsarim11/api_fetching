const Apicalling = async () => {
  const response = await fetch("http://localhost:3000/students");
  if (!response.ok) {
    document.getElementById(
      "students-container"
    ).innerText = `Failed to load students. HTTP error! status: ${response.status}`;
    return;
  }
  const data = await response.json();
  renderStudents(data); // Call the render function
};

function renderStudents(students) {
  const container = document.getElementById("students-container");

  container.innerHTML = students.map(
    (student) => `<h1>${student.name}</h1>
      <h3>${student.id}</h3>
      <p>${student.bio}</p>
  `
  );
  // join to avoid commas in HTML
}

Apicalling();
