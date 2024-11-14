function calculateGap() {
    const currentEmployees = parseInt(document.getElementById('currentEmployees').value);
    const requiredEmployees = parseInt(document.getElementById('requiredEmployees').value);

    if (isNaN(currentEmployees) || isNaN(requiredEmployees)) {
        alert("Mohon isi semua data dengan benar.");
        return;
    }

    // Menghitung kesenjangan pegawai
    const employeeGap = requiredEmployees - currentEmployees;

    // Menampilkan hasil perhitungan
    document.getElementById('displayCurrentEmployees').textContent = currentEmployees;
    document.getElementById('displayRequiredEmployees').textContent = requiredEmployees;
    document.getElementById('employeeGap').textContent = Math.abs(employeeGap);

    const gapAnalysisMessage = document.getElementById('gapAnalysisMessage');
    if (employeeGap > 0) {
        gapAnalysisMessage.textContent = "Jumlah pegawai saat ini kurang dari yang dibutuhkan. Perlu penambahan pegawai.";
        gapAnalysisMessage.style.color = "#d9534f";  // warna merah untuk kekurangan
    } else if (employeeGap < 0) {
        gapAnalysisMessage.textContent = "Jumlah pegawai saat ini melebihi kebutuhan. Pertimbangkan pengurangan pegawai.";
        gapAnalysisMessage.style.color = "#5cb85c";  // warna hijau untuk kelebihan
    } else {
        gapAnalysisMessage.textContent = "Jumlah pegawai saat ini sudah mencukupi kebutuhan.";
        gapAnalysisMessage.style.color = "#337ab7";  // warna biru untuk kesesuaian
    }
}

