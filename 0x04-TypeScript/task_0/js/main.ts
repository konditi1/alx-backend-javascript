interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'James',
    lastName: 'Otieno',
    age: 16,
    location: 'kisumu'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Atieno',
    age: 17,
    location: 'Busia'
};

const studentsList: Student[] = [student1, student2];


// Render the table using Vanilla JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");
  
    // Create table headers
    const headers = ["First Name", "Location"];
    const headerRow = document.createElement("tr");
  
    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
  
    table.appendChild(headerRow);
  
    // Append a new row for each student
    studentsList.forEach((student) => {
      const row = document.createElement("tr");
  
      // Display the first name and location in each row
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = student.firstName;
      row.appendChild(firstNameCell);
  
      const locationCell = document.createElement("td");
      locationCell.textContent = student.location;
      row.appendChild(locationCell);
  
      table.appendChild(row);
    });
  
    // Append the table to the body of the document
    document.body.appendChild(table);
  });
  