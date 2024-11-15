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

                        <!-- Usia dengan Slider dan Number Input -->
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

                        <!-- Pendidikan dengan pilihan jurusan -->
                        <label for="education">Pendidikan:</label>
                        <select id="education" onchange="toggleMajorField()" required>
                            <option value="">Pilih pendidikan</option>
                            <option value="SD">SD</option>
                            <option value="SMP">SMP</option>
                            <option value="SMA">SMA</option>
                            <option value="D3">D3</option>
                            <option value="S1">S1</option>
                            <option value="S2">S2</option>
                            <option value="S3">S3</option>
                        </select>

            <div id="majorField" style="display: none;">
                <label for="major">Jurusan:</label>
                <input type="text" id="major" placeholder="Masukkan jurusan pendidikan">
            </div>

                        <label for="experience">Pengalaman (tahun):</label>
                        <input type="number" id="experience" placeholder="Masukkan pengalaman kerja dalam tahun" required>

                        <label for="training">Pelatihan Terbaru:</label>
                        <input type="text" id="training" placeholder="Masukkan pelatihan terakhir" required>

                        <button type="button" onclick="addEmployee()">Tambah Pegawai</button>
                    </form>
                `;
                break;
            case 2:
                detailTitle.textContent = "Perencanaan Kebutuhan Pegawai Berdasarkan Beban Kerja";
                detailContent.innerHTML = `
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
                        <label for="duration">Durasi (bulan):</label>
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
                        <label for="productivity">Produktivitas (%):</label>
                        <input type="number" id="productivity" placeholder="Masukkan produktivitas" required>
                        <button type="button" onclick="evaluatePerformance()">Evaluasi Kinerja</button>
                    </form>
                `;
                break;
            case 6:
                detailTitle.textContent = "Penyusunan Laporan dan Dokumen RTK Mikro";
                detailContent.innerHTML = `
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

    // Fungsi sinkronisasi slider dan input number untuk usia
    window.updateAgeValue = function(value) {
        document.getElementById('ageNumber').value = value;
    };

    window.updateAgeSlider = function(value) {
        if (value >= 15 && value <= 65) {
            document.getElementById('ageSlider').value = value;
        }
    };

    // Placeholder function implementations
    window.addEmployee = function () { alert("Pegawai ditambahkan."); };
    window.calculateStaffNeeds = function () { alert("Kebutuhan pegawai dihitung."); };
    window.analyzeInventory = function () { alert("Analisis persediaan pegawai selesai."); };
    window.addProgram = function () { alert("Program kepegawaian ditambahkan."); };
    window.evaluatePerformance = function () { alert("Kinerja pegawai dievaluasi."); };
    window.generateReport = function () { alert("Laporan RTK Mikro dibuat."); };

    // Event listener untuk menyesuaikan posisi konten detail ketika layar diubah
    window.addEventListener('resize', () => {
        const activeComponent = document.querySelector('.card-container .card.active');
        if (activeComponent) {
            showDetail(parseInt(activeComponent.getAttribute('data-component')));
        }
    });
});
