function calculateStaffing() {
    const workload = parseFloat(document.getElementById('workload').value);
    const timeStandard = parseFloat(document.getElementById('timeStandard').value);
    const targetOutput = parseFloat(document.getElementById('targetOutput').value);

    if (isNaN(workload) || isNaN(timeStandard) || isNaN(targetOutput)) {
        alert("Mohon isi semua data dengan benar.");
        return;
    }

    // Kalkulasi kebutuhan pegawai
    const staffingRequirement = Math.ceil((workload * timeStandard) / targetOutput);

    // Menampilkan hasil kalkulasi
    document.getElementById('displayWorkload').textContent = workload;
    document.getElementById('displayTimeStandard').textContent = timeStandard;
    document.getElementById('displayTargetOutput').textContent = targetOutput;
    document.getElementById('staffingRequirement').textContent = staffingRequirement;
}

