const employees = [];

function addEmployee() {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const training = document.getElementById('training').value;

    if (!name || !position || !age || !gender || !education || !experience || !training) {
        alert("Mohon lengkapi semua data pegawai.");
        return;
    }

    const employee = { name, position, age, gender, education, experience, training };
    employees.push(employee);

    displayEmployees();
    clearForm();
}

function displayEmployees() {
    const tableBody = document.querySelector('#employeeTable tbody');
    tableBody.innerHTML = '';

    employees.forEach((employee, index) => {
        const row = tableBody.insertRow(index);
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            <td>${employee.age}</td>
            <td>${employee.gender}</td>
            <td>${employee.education}</td>
            <td>${employee.experience}</td>
            <td>${employee.training}</td>
        `;
    });
}

function clearForm() {
    document.getElementById('employeeForm').reset();
}

