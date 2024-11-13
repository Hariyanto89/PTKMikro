let workers = [];

function addWorker() {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const hours = parseInt(document.getElementById('hours').value);
    const productivity = parseInt(document.getElementById('productivity').value);

    if (name && position && hours && productivity) {
        workers.push({ name, position, hours, productivity });
        displayWorkers();
        clearForm();
    } else {
        alert('Mohon lengkapi semua data.');
    }
}

function displayWorkers() {
    const tableBody = document.getElementById('workerTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    workers.forEach(worker => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = worker.name;
        row.insertCell(1).textContent = worker.position;
        row.insertCell(2).textContent = worker.hours;
        row.insertCell(3).textContent = worker.productivity + '%';
    });
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('position').value = '';
    document.getElementById('hours').value = '';
    document.getElementById('productivity').value = '';
}

function generateReport() {
    let totalHours = 0;
    let totalProductivity = 0;

    workers.forEach(worker => {
        totalHours += worker.hours;
        totalProductivity += (worker.hours * worker.productivity) / 100;
    });

    const efficiency = ((totalProductivity / totalHours) * 100).toFixed(2);
    document.getElementById('report').textContent = 
        `Total Jam Kerja: ${totalHours} jam. Efisiensi Rata-rata: ${efficiency}%`;
}
