document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');

    // Fungsi untuk menampilkan detail di bawah kartu pada layar kecil
    window.showDetail = function(componentNumber) {
        const detailTitle = document.getElementById('detailTitle');
        const detailContent = document.getElementById('detailContent');
        const detailContainer = document.querySelector('.detail-container');

        // Cek apakah sedang dalam tampilan mobile
        const isMobile = window.innerWidth < 768;

        // Update konten detail berdasarkan nomor komponen
        switch (componentNumber) {
            case 1:
                detailTitle.textContent = "Pengumpulan dan Pengolahan Data Pegawai";
                detailContent.innerHTML = `
                    <p>Mengumpulkan data pegawai, termasuk data pribadi, jabatan, dan kualifikasi pegawai.</p>
                    <form id="employeeForm">
                        <label for="name">Nama Pegawai:</label>
                        <input type="text" id="name" placeholder="Masukkan nama pegawai" required>
                        <label for="position">Jabatan:</label>
                        <input type="text" id="position" placeholder="Masukkan jabatan pegawai" required>
                        <label for="age">Usia:</label>
                        <input type="number" id="age" placeholder="Masukkan usia pegawai" required>
                        <label for="gender">Jenis Kelamin:</label>
                        <select id="gender" required>
                            <option value="">Pilih jenis kelamin</option>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                        <label for="education">Pendidikan:</label>
                        <input type="text" id="education" placeholder="Masukkan tingkat pendidikan" required>
                        <label for="experience">Pengalaman (tahun):</label>
                        <input type="number" id="experience" placeholder="Masukkan pengalaman kerja dalam tahun" required>
                        <button type="button" onclick="addEmployee()">Tambah Pegawai</button>
                    </form>
                `;
                break;
            case 2:
                detailTitle.textContent = "Perencanaan Kebutuhan Pegawai Berdasarkan Beban Kerja";
                detailContent.innerHTML = `
                    <p>Perencanaan kebutuhan pegawai berdasarkan beban kerja.</p>
                    <form id="workloadForm">
                        <label for="workload">Beban Kerja:</label>
                        <input type="number" id="workload" placeholder="Masukkan beban kerja" required>
                        <label for="normTime">Norma Waktu:</label>
                        <input type="number" id="normTime" placeholder="Masukkan norma waktu" required>
                        <button type="button" onclick="calculateStaffNeeds()">Hitung Kebutuhan Pegawai</button>
                    </form>
                `;
                break;
            case 3:
                detailTitle.textContent = "Analisis Persediaan Pegawai dan Neraca Pegawai";
                detailContent.innerHTML = `
                    <p>Analisis persediaan pegawai dan keseimbangan tenaga kerja.</p>
                    <form id="inventoryForm">
                        <label for="currentStaff">Jumlah Pegawai Saat Ini:</label>
                        <input type="number" id="currentStaff" placeholder="Masukkan jumlah pegawai saat ini" required>
                        <label for="requiredStaff">Jumlah Pegawai Diperlukan:</label>
                        <input type="number" id="requiredStaff" placeholder="Masukkan jumlah pegawai yang dibutuhkan" required>
                        <button type="button" onclick="analyzeInventory()">Analisis Neraca Pegawai</button>
                    </form>
                `;
                break;
            case 4:
                detailTitle.textContent = "Penyusunan Program Kepegawaian";
                detailContent.innerHTML = `
                    <p>Menyusun program pelatihan dan pengembangan karier pegawai.</p>
                    <form id="programForm">
                        <label for="programName">Nama Program:</label>
                        <input type="text" id="programName" placeholder="Masukkan nama program" required>
                        <label for="duration">Durasi (bulan):</label>
                        <input type="number" id="duration" placeholder="Masukkan durasi program" required>
                        <button type="button" onclick="addProgram()">Tambah Program</button>
                    </form>
                `;
                break;
            case 5:
                detailTitle.textContent = "Pengendalian dan Evaluasi Kinerja Pegawai";
                detailContent.innerHTML = `
                    <p>Evaluasi kinerja pegawai untuk menilai produktivitas.</p>
                    <form id="evaluationForm">
                        <label for="employeeName">Nama Pegawai:</label>
                        <input type="text" id="employeeName" placeholder="Masukkan nama pegawai" required>
                        <label for="productivity">Produktivitas (%):</label>
                        <input type="number" id="productivity" placeholder="Masukkan produktivitas" required>
                        <button type="button" onclick="evaluatePerformance()">Evaluasi Kinerja</button>
                    </form>
                `;
                break;
            case 6:
                detailTitle.textContent = "Penyusunan Laporan dan Dokumen RTK Mikro";
                detailContent.innerHTML = `
                    <p>Penyusunan laporan tahunan dan dokumen RTK Mikro.</p>
                    <form id="reportForm">
                        <label for="year">Tahun Laporan:</label>
                        <select id="year" required>
                            <option value="">Pilih tahun</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                        </select>
                        <button type="button" onclick="generateReport()">Buat Laporan</button>
                    </form>
                `;
                break;
            default:
                detailTitle.textContent = "Detail Komponen";
                detailContent.innerHTML = "<p>Klik pada kartu untuk melihat detail lebih lanjut.</p>";
                break;
        }
        // Jika dalam mode mobile, pindahkan detail container tepat di bawah kartu yang diklik
        if (isMobile) {
            const clickedCard = document.querySelector(`.card-container .card:nth-child(${componentNumber})`);
            if (clickedCard) {
                clickedCard.insertAdjacentElement('afterend', detailContainer);
            }
            detailContainer.classList.add('show-below');
        } else {
            // Dalam mode desktop, kembalikan detail container ke tempat semula
            mainContent.appendChild(detailContainer);
            detailContainer.classList.remove('show-below');
        }
    };

    // Placeholder function implementations for each component
    window.addEmployee = function() { alert("Pegawai ditambahkan."); };
    window.calculateStaffNeeds = function() { alert("Kebutuhan pegawai dihitung."); };
    window.analyzeInventory = function() { alert("Analisis persediaan pegawai selesai."); };
    window.addProgram = function() { alert("Program kepegawaian ditambahkan."); };
    window.evaluatePerformance = function() { alert("Kinerja pegawai dievaluasi."); };
    window.generateReport = function() { alert("Laporan RTK Mikro dibuat."); };

    // Event listener untuk resize, menyesuaikan posisi konten detail
    window.addEventListener('resize', () => {
        const activeComponent = document.querySelector('.card-container .card.active');
        if (activeComponent) {
            showDetail(parseInt(activeComponent.getAttribute('data-component')));
        }
    });
});
