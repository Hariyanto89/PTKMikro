function calculateStaffing() {
    const workloadInput = document.getElementById('workload');
    const volumeUnitInput = document.getElementById('volumeUnit');
    const timeStandardHoursInput = document.getElementById('timeStandardHours');
    const timeStandardMinutesInput = document.getElementById('timeStandardMinutes');
    const targetOutputInput = document.getElementById('targetOutput');
    const workingHoursInput = document.getElementById('workingHours');
    const workingDaysInput = document.getElementById('workingDays');

    const workload = parseFloat(workloadInput.value);
    const timeStandardHours = parseFloat(timeStandardHoursInput.value) || 0;
    const timeStandardMinutes = parseFloat(timeStandardMinutesInput.value) || 0;
    const targetOutput = parseFloat(targetOutputInput.value);
    const workingHours = parseFloat(workingHoursInput.value) || 8; // Default 8 jam/hari
    const workingDays = parseFloat(workingDaysInput.value) || 20; // Default 20 hari/bulan

    // Konversi satuan waktu dan volume kerja
    const timeStandard = timeStandardHours + (timeStandardMinutes / 60); // Gabungkan jam dan menit
    let adjustedWorkload = workload;
    if (volumeUnitInput.value === 'weekly') {
        adjustedWorkload *= 4; // Asumsikan 4 minggu per bulan
    } else if (volumeUnitInput.value === 'daily') {
        adjustedWorkload *= 20; // Asumsikan 20 hari kerja per bulan
    }

    // Validasi input
    if (isNaN(adjustedWorkload) || adjustedWorkload <= 0) {
        workloadInput.focus();
        alert("Mohon masukkan volume kerja yang valid (angka positif).");
        return;
    }
    if (isNaN(timeStandard) || timeStandard <= 0) {
        timeStandardHoursInput.focus();
        alert("Mohon masukkan norma waktu yang valid (angka positif).");
        return;
    }
    if (isNaN(targetOutput) || targetOutput <= 0) {
        targetOutputInput.focus();
        alert("Mohon masukkan target hasil yang valid (angka positif).");
        return;
    }

    // Kalkulasi kebutuhan pegawai
    const totalWorkingHoursPerPeriod = workingHours * workingDays;
    const staffingRequirement = Math.ceil((adjustedWorkload * timeStandard) / (targetOutput * totalWorkingHoursPerPeriod));

    // Tampilkan hasil kalkulasi
    document.getElementById('displayWorkload').textContent = adjustedWorkload.toLocaleString();
    document.getElementById('displayTimeStandard').textContent = `${timeStandardHours} jam ${timeStandardMinutes} menit`;
    document.getElementById('displayTargetOutput').textContent = targetOutput.toLocaleString();
    document.getElementById('displayWorkingHours').textContent = workingHours.toLocaleString();
    document.getElementById('displayWorkingDays').textContent = workingDays.toLocaleString();
    document.getElementById('staffingRequirement').textContent = staffingRequirement.toLocaleString();

    // Update rangkuman input
    document.getElementById('summaryWorkload').textContent = adjustedWorkload;
    document.getElementById('summaryTimeStandard').textContent = `${timeStandardHours} jam ${timeStandardMinutes} menit`;
    document.getElementById('summaryTargetOutput').textContent = targetOutput;
    document.getElementById('summaryWorkingHours').textContent = workingHours;
    document.getElementById('summaryWorkingDays').textContent = workingDays;
}

// Styling hasil proyeksi untuk lebih menonjol
    const resultBox = document.getElementById('projectionResult');
    resultBox.style.border = "2px solid #007acc";
    resultBox.style.backgroundColor = "#e6f7ff";
    resultBox.style.padding = "15px";
    resultBox.style.borderRadius = "8px";

    // Log hasil ke konsol (opsional untuk debugging)
    console.log(`Volume Kerja: ${workload}, Norma Waktu: ${timeStandard} jam, Target Hasil: ${targetOutput}, Jam Kerja Harian: ${workingHours}, Hari Kerja Periode: ${workingDays}, Kebutuhan Pegawai: ${staffingRequirement}`);
}
