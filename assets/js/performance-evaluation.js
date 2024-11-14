const performances = [];

// Fungsi Menambah Data Evaluasi Kinerja Pegawai
function addPerformance() {
    const employeeName = document.getElementById('employeeName').value;
    const position = document.getElementById('position').value;
    const targetOutput = parseFloat(document.getElementById('targetOutput').value);
    const actualOutput = parseFloat(document.getElementById('actualOutput').value);

    if (!employeeName || !position || isNaN(targetOutput) || isNaN(actualOutput)) {
        alert("Mohon lengkapi semua data evaluasi kinerja.");
        return;
    }

    // Menghitung produktivitas
    const productivity = ((actualOutput / targetOutput) * 100).toFixed(2);

    const performance = { employeeName, position, targetOutput, actualOutput, productivity };
    performances.push(performance);

    displayPerformances();
    clearPerformanceForm();
}

// Fungsi Menampilkan Data Evaluasi Kinerja Pegawai
function displayPerformances() {
    const tableBody = document.querySelector('#performanceTable tbody');
    tableBody.innerHTML = '';

    performances.forEach((performance, index) => {
        const row = tableBody.insertRow(index);
        row.innerHTML = `
            <td>${performance.employeeName}</td>
            <td>${performance.position}</td>
            <td>${performance.targetOutput}</td>
            <td>${performance.actualOutput}</td>
            <td>${performance.productivity}%</td>
        `;
    });
}

// Fungsi Mengosongkan Formulir Evaluasi Kinerja
function clearPerformanceForm() {
    document.getElementById('performanceForm').reset();
}

