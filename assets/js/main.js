document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const mainContent = document.querySelector('main');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            loadPage(link.getAttribute('href'));
        });
    });

    async function loadPage(url) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const content = await response.text();
                mainContent.innerHTML = content;
                updateNavigationState(url);
            } else {
                mainContent.innerHTML = "<p>Halaman tidak ditemukan.</p>";
            }
        } catch (error) {
            mainContent.innerHTML = "<p>Gagal memuat halaman. Silakan coba lagi nanti.</p>";
        }
    }

    function updateNavigationState(url) {
        links.forEach(link => {
            if (link.getAttribute('href') === url) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            saveThemePreference();
        });
        applySavedTheme();
    }

    function saveThemePreference() {
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    showNotification("Selamat datang di aplikasi PTK Mikro!");

    window.showDetail = function(componentNumber) {
        const detailTitle = document.getElementById('detailTitle');
        const detailContent = document.getElementById('detailContent');

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
                        <input type="number" id="year" placeholder="Masukkan tahun laporan" required>
                        <button type="button" onclick="generateReport()">Buat Laporan</button>
                    </form>
                `;
                break;
            default:
                detailTitle.textContent = "Detail Komponen";
                detailContent.innerHTML = "<p>Klik pada kartu untuk melihat detail lebih lanjut.</p>";
                break;
        }
    };

    window.addEmployee = function() { /* Implementasi Fungsi */ };
    window.calculateStaffNeeds = function() { /* Implementasi Fungsi */ };
    window.analyzeInventory = function() { /* Implementasi Fungsi */ };
    window.addProgram = function() { /* Implementasi Fungsi */ };
    window.evaluatePerformance = function() { /* Implementasi Fungsi */ };
    window.generateReport = function() { /* Implementasi Fungsi */ };
});
