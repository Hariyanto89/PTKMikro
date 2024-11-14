function generateReport() {
    const reportYear = document.getElementById('reportYear').value;

    if (!reportYear) {
        alert("Mohon pilih tahun laporan.");
        return;
    }

    // Mengisi data laporan
    document.getElementById('displayYear').textContent = reportYear;
    document.getElementById('currentEmployeeCount').textContent = getEmployeeCount();
    document.getElementById('totalTrainingPrograms').textContent = getTotalTrainingPrograms();
    document.getElementById('careerPlansCount').textContent = getCareerPlansCount();
    document.getElementById('performanceEvaluationsCount').textContent = getPerformanceEvaluationsCount();
    document.getElementById('averageProductivity').textContent = getAverageProductivity().toFixed(2);
}

// Dummy functions untuk mendapatkan data laporan
function getEmployeeCount() {
    return 100; // Gantilah dengan logika untuk menghitung jumlah pegawai aktual
}

function getTotalTrainingPrograms() {
    return 5; // Gantilah dengan logika untuk menghitung program pelatihan aktual
}

function getCareerPlansCount() {
    return 3; // Gantilah dengan logika untuk menghitung rencana karier aktual
}

function getPerformanceEvaluationsCount() {
    return 10; // Gantilah dengan logika untuk menghitung evaluasi kinerja aktual
}

function getAverageProductivity() {
    return 85.5; // Gantilah dengan logika untuk menghitung produktivitas rata-rata
}

// Fungsi Ekspor ke PDF
function exportReportToPDF() {
    alert("Fungsi ekspor ke PDF sedang dalam pengembangan.");
}

// Fungsi Ekspor ke Excel
function exportReportToExcel() {
    alert("Fungsi ekspor ke Excel sedang dalam pengembangan.");
}

