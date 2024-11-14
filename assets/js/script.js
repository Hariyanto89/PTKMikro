let workers = [];

function addWorker() {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const hours = parseInt(document.getElementById('hours').value);
    const productivity = parseInt(document.getElementById('productivity').value);
    const plannedOutput = parseInt(document.getElementById('plannedOutput').value);
    const actualOutput = parseInt(document.getElementById('actualOutput').value);

    if (name && position && hours && productivity && plannedOutput && actualOutput) {
        // Hitung produktivitas (%) berdasarkan Output Nyata dan Output yang Direncanakan
        const productivityPercentage = ((actualOutput / plannedOutput) * 100).toFixed(2);

        // Simpan data pekerja beserta produktivitas
        workers.push({ name, position, hours, productivity, plannedOutput, actualOutput, productivityPercentage });
        
        // Tampilkan data pekerja dalam tabel
        displayWorkers();
        
        // Bersihkan form input
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
        row.insertCell(4).textContent = worker.plannedOutput;
        row.insertCell(5).textContent = worker.actualOutput;
        row.insertCell(6).textContent = worker.productivityPercentage + '%';
    });
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('position').value = '';
    document.getElementById('hours').value = '';
    document.getElementById('productivity').value = '';
    document.getElementById('plannedOutput').value = '';
    document.getElementById('actualOutput').value = '';
}

function generateReport() {
    let totalHours = 0;
    let totalProductivity = 0;

    workers.forEach(worker => {
        totalHours += worker.hours;
        totalProductivity += (worker.hours * worker.productivityPercentage) / 100;
    });

    const efficiency = ((totalProductivity / totalHours) * 100).toFixed(2);
    document.getElementById('report').textContent = 
        `Total Jam Kerja: ${totalHours} jam. Efisiensi Rata-rata: ${efficiency}%`;
}
