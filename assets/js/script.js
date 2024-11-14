document.addEventListener('DOMContentLoaded', () => {
    const workerForm = document.getElementById('workerForm');
    const workerTableBody = document.querySelector('#workerTable tbody');
    const reportParagraph = document.getElementById('report');

    // Fungsi untuk menambahkan pekerja ke tabel
    function addWorker() {
        const name = document.getElementById('name').value.trim();
        const position = document.getElementById('position').value;
        const hours = parseFloat(document.getElementById('hours').value);
        const plannedOutput = parseFloat(document.getElementById('plannedOutput').value);
        const actualOutput = parseFloat(document.getElementById('actualOutput').value);

        if (!name || !position || isNaN(hours) || isNaN(plannedOutput) || isNaN(actualOutput)) {
            alert('Mohon isi semua data dengan benar.');
            return;
        }

        const productivity = ((actualOutput / plannedOutput) * 100).toFixed(2);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${position}</td>
            <td>${hours}</td>
            <td>${plannedOutput}</td>
            <td>${actualOutput}</td>
            <td>${productivity}%</td>
        `;
        workerTableBody.appendChild(row);

        // Reset form setelah menambahkan pekerja
        workerForm.reset();
    }

    // Fungsi untuk menghasilkan laporan efisiensi
    function generateReport() {
        const rows = workerTableBody.querySelectorAll('tr');
        if (rows.length === 0) {
            reportParagraph.textContent = 'Tidak ada data tenaga kerja untuk dilaporkan.';
            return;
        }

        let totalHours = 0;
        let totalPlannedOutput = 0;
        let totalActualOutput = 0;

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            totalHours += parseFloat(cells[2].textContent);
            totalPlannedOutput += parseFloat(cells[3].textContent);
            totalActualOutput += parseFloat(cells[4].textContent);
        });

        const overallProductivity = ((totalActualOutput / totalPlannedOutput) * 100).toFixed(2);

        reportParagraph.innerHTML = `
            Total Jam Kerja: ${totalHours} jam<br>
            Total Output yang Direncanakan: ${totalPlannedOutput}<br>
            Total Output Nyata: ${totalActualOutput}<br>
            Produktivitas Keseluruhan: ${overallProductivity}%
        `;
    }

    // Event listener untuk tombol "Tambah Pekerja"
    document.querySelector('button[onclick="addWorker()"]').addEventListener('click', addWorker);

    // Event listener untuk tombol "Buat Laporan"
    document.querySelector('button[onclick="generateReport()"]').addEventListener('click', generateReport);
});
