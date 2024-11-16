function calculateStaffing() {
    const workloadInput = document.getElementById('workload');
    const timeStandardInput = document.getElementById('timeStandard');
    const targetOutputInput = document.getElementById('targetOutput');
    const workingHoursInput = document.getElementById('workingHours');
    const workingDaysInput = document.getElementById('workingDays');

    const workload = parseFloat(workloadInput.value);
    const timeStandard = parseFloat(timeStandardInput.value);
    const targetOutput = parseFloat(targetOutputInput.value);
    const workingHours = parseFloat(workingHoursInput.value) || 8; // Default 8 jam/hari
    const workingDays = parseFloat(workingDaysInput.value) || 20; // Default 20 hari/periode

    // Validasi input
    if (isNaN(workload) || workload <= 0) {
        workloadInput.focus();
        alert("Mohon masukkan volume kerja yang valid (angka positif).");
        return;
    }
    if (isNaN(timeStandard) || timeStandard <= 0) {
        timeStandardInput.focus();
        alert("Mohon masukkan norma waktu yang valid (angka positif).");
        return;
    }
    if (isNaN(targetOutput) || targetOutput <= 0) {
        targetOutputInput.focus();
        alert("Mohon masukkan target hasil yang valid (angka positif).");
        return;
    }
    if (workingHours <= 0) {
        workingHoursInput.focus();
        alert("Jam kerja harian harus bernilai positif.");
        return;
    }
    if (workingDays <= 0) {
        workingDaysInput.focus();
        alert("Hari kerja periode harus bernilai positif.");
        return;
    }

    // Kalkulasi kebutuhan pegawai
    const totalWorkingHoursPerPeriod = workingHours * workingDays;
    const staffingRequirement = Math.ceil((workload * timeStandard) / (targetOutput * totalWorkingHoursPerPeriod));

    // Menampilkan hasil kalkulasi
    document.getElementById('displayWorkload').textContent = workload.toLocaleString();
    document.getElementById('displayTimeStandard').textContent = timeStandard.toLocaleString();
    document.getElementById('displayTargetOutput').textContent = targetOutput.toLocaleString();
    document.getElementById('displayWorkingHours').textContent = workingHours.toLocaleString();
    document.getElementById('displayWorkingDays').textContent = workingDays.toLocaleString();
    document.getElementById('staffingRequirement').textContent = staffingRequirement.toLocaleString();

    // Styling hasil proyeksi untuk lebih menonjol
    const resultBox = document.getElementById('projectionResult');
    resultBox.style.border = "2px solid #007acc";
    resultBox.style.backgroundColor = "#e6f7ff";
    resultBox.style.padding = "15px";
    resultBox.style.borderRadius = "8px";

    // Log hasil ke konsol (opsional untuk debugging)
    console.log(`Volume Kerja: ${workload}, Norma Waktu: ${timeStandard}, Target Hasil: ${targetOutput}, Jam Kerja Harian: ${workingHours}, Hari Kerja Periode: ${workingDays}, Kebutuhan Pegawai: ${staffingRequirement}`);
}
