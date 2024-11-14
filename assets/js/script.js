let workers = [];

function addWorker() {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const hours = parseFloat(document.getElementById('hours').value);
    const plannedOutput = parseFloat(document.getElementById('plannedOutput').value);
    const actualOutput = parseFloat(document.getElementById('actualOutput').value);

    if (!name || !position || isNaN(hours) || isNaN(plannedOutput) || isNaN(actualOutput)) {
        alert("Mohon isi semua data dengan benar.");
        return;
    }

    const productivity = ((actualOutput / plannedOutput) * 100).toFixed(2);

    workers.push({ name, position, hours, plannedOutput, actualOutput, productivity });

    displayWorkers();
    clearForm();
}

function displayWorkers() {
    const tableBody = document.querySelector("#workerTable tbody");
    tableBody.innerHTML = "";

    workers.forEach((worker, index) => {
        const row = tableBody.insertRow(index);
        row.innerHTML = `
            <td>${worker.name}</td>
            <td>${worker.position}</td>
            <td>${worker.hours}</td>
            <td>${worker.plannedOutput}</td>
            <td>${worker.actualOutput}</td>
            <td>${worker.productivity}%</td>
        `;
    });
}

function clearForm() {
    document.getElementById("workerForm").reset();
}

function generateReport() {
    let totalHours = 0;
    let totalPlannedOutput = 0;
    let totalActualOutput = 0;

    workers.forEach(worker => {
        totalHours += worker.hours;
        totalPlannedOutput += worker.plannedOutput;
        totalActualOutput += worker.actualOutput;
    });

    const overallProductivity = ((totalActualOutput / totalPlannedOutput) * 100).toFixed(2);
    document.getElementById("report").innerHTML = `
        Total Jam Kerja: ${totalHours} jam<br>
        Total Target Output: ${totalPlannedOutput}<br>
        Total Output Nyata: ${totalActualOutput}<br>
        Produktivitas Keseluruhan: ${overallProductivity}%
    `;
}
