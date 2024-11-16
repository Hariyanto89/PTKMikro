document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');

    // Fungsi untuk menampilkan detail di bawah kartu pada layar kecil
    window.showDetail = function (componentNumber) {
        const detailTitle = document.getElementById('detailTitle');
        const detailContent = document.getElementById('detailContent');
        const detailContainer = document.querySelector('.detail-container');
        const isMobile = window.innerWidth < 768;

        // Update konten detail berdasarkan nomor komponen
        switch (componentNumber) {
            case 1:
                detailTitle.textContent = "Pengumpulan dan Pengolahan Data Pegawai";
                detailContent.innerHTML = `
                    <form id="employeeForm">
                        <label for="name">Nama Pegawai:</label>
                        <input type="text" id="name" placeholder="Masukkan nama pegawai" required>
                        
                        <label for="position">Jabatan:</label>
                        <select id="position" required>
                            <option value="">Pilih jabatan</option>
                            <option value="Manajer">Manajer</option>
                            <option value="Supervisor">Supervisor</option>
                            <option value="Staff">Staff</option>
                            <option value="Operator">Operator</option>
                            <option value="Intern">Intern</option>
                        </select>

                        <label for="age">Usia:</label>
                        <div class="age-input-container">
                            <input type="range" id="ageSlider" min="15" max="65" value="15" oninput="updateAgeValue(this.value)">
                            <input type="number" id="ageNumber" min="15" max="65" value="15" oninput="updateAgeSlider(this.value)">
                        </div>

                        <label for="gender">Jenis Kelamin:</label>
                        <select id="gender" required>
                            <option value="">Pilih jenis kelamin</option>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>

                        <label for="education">Pendidikan Terakhir:</label>
                        <select id="education" onchange="toggleMajorField()" required>
                            <option value="">Pilih pendidikan</option>
                            <option value="SD">SD</option>
                            <option value="SMP">SMP</option>
                            <option value="SMA">SMA</option>
                            <option value="D3">D3</option>
                            <option value="D4">D4</option>
                            <option value="S1">S1</option>
                            <option value="S2">S2</option>
                            <option value="S3">S3</option>
                        </select>

                        <div id="majorField" style="display: none;">
                            <label for="major">Jurusan:</label>
                            <input type="text" id="major" placeholder="Masukkan jurusan pendidikan">
                        </div>

                        <label for="specialization">Spesialisasi (Opsional):</label>
                        <input type="text" id="specialization" placeholder="Masukkan spesialisasi jika ada">

                        <label>Pelatihan yang Pernah Diikuti:</label>
                        <div id="trainingContainer"></div>
                        <button type="button" class="add-training" onclick="addTrainingField()">Tambah Pelatihan</button>

                        <button type="button" class="submit-employee" onclick="addEmployee()">Tambah Pegawai</button>
                    </form>
                `;
                break;

            case 2: // Perencanaan Kebutuhan Pegawai Berdasarkan Beban Kerja
                detailTitle.textContent = "Perencanaan Kebutuhan Pegawai Berdasarkan Beban Kerja";
                detailContent.innerHTML = `
                    <form id="workloadForm">
                        <label for="workload">Volume Kerja:</label>
                        <input type="number" id="workload" placeholder="Masukkan volume kerja" required>

                        <label for="normTime">Norma Waktu:</label>
                        <input type="number" id="normTime" placeholder="Masukkan norma waktu" required>

                        <label for="targetOutput">Target Hasil:</label>
                        <input type="number" id="targetOutput" placeholder="Masukkan target hasil" required>

                        <button type="button" onclick="calculateStaffing()">Hitung Kebutuhan Pegawai</button>
                    </form>
                `;
                break;

            case 3:
                detailTitle.textContent = "Analisis Persediaan Pegawai dan Neraca Pegawai";
                detailContent.innerHTML = `
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
                    <form id="programForm">
                        <label for="programName">Nama Program:</label>
                        <input type="text" id="programName" placeholder="Masukkan nama program" required>
    
                        <label for="programType">Jenis Program:</label>
                        <select id="programType" required>
                            <option value="">Pilih jenis program</option>
                            <option value="Rekrutmen">Rekrutmen</option>
                            <option value="Pelatihan">Pelatihan</option>
                            <option value="Pengembangan Karir">Pengembangan Karir</option>
                            <option value="Pemensiunan">Pemensiunan</option>
                        </select>
    
                        <label for="duration">Durasi Program (bulan):</label>
                        <input type="number" id="duration" placeholder="Masukkan durasi program" required>
    
                        <button type="button" onclick="addProgram()">Tambah Program</button>
                    </form>
                `;
                break;
    
            case 5:
                detailTitle.textContent = "Pengendalian dan Evaluasi Kinerja Pegawai";
                detailContent.innerHTML = `
                    <form id="evaluationForm">
                        <label for="employeeName">Nama Pegawai:</label>
                        <input type="text" id="employeeName" placeholder="Masukkan nama pegawai" required>
    
                        <label for="performanceScore">Skor Kinerja (%):</label>
                        <input type="number" id="performanceScore" placeholder="Masukkan skor kinerja" required>
    
                        <label for="evaluationDate">Tanggal Evaluasi:</label>
                        <input type="date" id="evaluationDate" required>
    
                        <button type="button" onclick="evaluatePerformance()">Evaluasi Kinerja</button>
                    </form>
                `;
                break;
    
            case 6:
                detailTitle.textContent = "Penyusunan Laporan dan Dokumen RTK Mikro";
                detailContent.innerHTML = `
                    <form id="reportForm">
                        <label for="reportYear">Tahun Laporan:</label>
                        <select id="reportYear" required>
                            <option value="">Pilih tahun</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                        </select>
    
                        <label for="reportType">Jenis Laporan:</label>
                        <select id="reportType" required>
                            <option value="">Pilih jenis laporan</option>
                            <option value="Tahunan">Tahunan</option>
                            <option value="Kuartalan">Kuartalan</option>
                        </select>
    
                        <button type="button" onclick="generateReport()">Buat Laporan</button>
                    </form>
                `;
                break;

            default:
                detailTitle.textContent = "Detail Komponen";
                detailContent.innerHTML = "<p>Klik pada kartu di atas untuk melihat detail lebih lanjut.</p>";
                break;
        }

        if (isMobile) {
            const clickedCard = document.querySelector(`.card-container .card:nth-child(${componentNumber})`);
            if (clickedCard) {
                clickedCard.insertAdjacentElement('afterend', detailContainer);
            }
            detailContainer.classList.add('show-below');
        } else {
            mainContent.appendChild(detailContainer);
            detailContainer.classList.remove('show-below');
        }
    };

    // Sinkronisasi slider dan input number untuk usia
    window.updateAgeValue = function (value) {
        document.getElementById('ageNumber').value = value;
    };

    window.updateAgeSlider = function (value) {
        if (value >= 15 && value <= 65) {
            document.getElementById('ageSlider').value = value;
        }
    };

    // Fungsi untuk menampilkan atau menyembunyikan field jurusan
    window.toggleMajorField = function () {
        const educationLevel = document.getElementById('education').value;
        const majorField = document.getElementById('majorField');
        if (['SMA', 'D3', 'D4', 'S1', 'S2', 'S3'].includes(educationLevel)) {
            majorField.style.display = 'block';
        } else {
            majorField.style.display = 'none';
        }
    };

    // Fungsi untuk menambah entri pelatihan
    window.addTrainingField = function () {
        const trainingContainer = document.getElementById('trainingContainer');
        const newField = document.createElement('div');
        newField.classList.add('training-field');
        newField.innerHTML = `
            <div class="training-details">
                <label for="trainingYear">Tahun:</label>
                <input type="number" class="training-year" placeholder="Tahun pelatihan" min="2000" max="2030" required>

                <label for="trainingInstitution">Lembaga Pelatihan:</label>
                <input type="text" class="training-institution" placeholder="Nama lembaga pelatihan" required>

                <label for="trainingField">Bidang Keahlian:</label>
                <input type="text" class="training-field-input" placeholder="Bidang keahlian" required>

                <label for="certificateUpload">Unggah Sertifikat:</label>
                <input type="file" class="training-certificate" accept=".jpg,.jpeg,.png,.pdf">

                <label for="certificateLink">Link Sertifikat:</label>
                <input type="url" class="certificate-link" placeholder="Link sertifikat (opsional)">
            </div>
            <button type="button" class="remove-training" onclick="removeTrainingField(this)">Hapus</button>
        `;
        trainingContainer.appendChild(newField);
    };

    // Fungsi untuk menghapus entri pelatihan
    window.removeTrainingField = function (button) {
        const trainingField = button.parentElement;
        trainingField.remove();
    };

    // Placeholder functions
    window.addEmployee = function () {
        alert("Pegawai berhasil ditambahkan.");
    };

    window.calculateStaffNeeds = function () {
        alert("Kebutuhan pegawai dihitung.");
    };

    window.analyzeInventory = function () {
        alert("Analisis persediaan selesai.");
    };

    window.generateReport = function () {
        alert("Laporan RTK Mikro dibuat.");
    };

    // Listener untuk menyesuaikan detail pada resize layar
    window.addEventListener('resize', () => {
        const activeComponent = document.querySelector('.card-container .card.active');
        if (activeComponent) {
            showDetail(parseInt(activeComponent.getAttribute('data-component')));
        }
    });
});
