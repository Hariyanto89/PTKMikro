document.addEventListener('DOMContentLoaded', () => {
    // Navigasi Antar Halaman dengan AJAX (opsional untuk aplikasi satu halaman)
    const links = document.querySelectorAll('nav ul li a');
    const mainContent = document.querySelector('main');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            loadPage(link.getAttribute('href'));
        });
    });

    // Fungsi Memuat Halaman Komponen Secara Dinamis
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

    // Fungsi Mengatur Status Navigasi yang Aktif
    function updateNavigationState(url) {
        links.forEach(link => {
            if (link.getAttribute('href') === url) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Menyimpan Preferensi Pengguna di Local Storage (Contoh Global Setting)
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            saveThemePreference();
        });

        // Set preferensi tema saat halaman dimuat
        applySavedTheme();
    }

    // Fungsi Menyimpan Preferensi Tema
    function saveThemePreference() {
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Fungsi Menerapkan Tema yang Disimpan
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }

    // Contoh Fungsi Global Lainnya: Notifikasi
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Contoh Panggilan Fungsi Global
    showNotification("Selamat datang di aplikasi PTK Mikro!");

    // Fungsi untuk Menampilkan Detail dan Form
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
                detailContent.innerHTML = "<p>Detail tentang perencanaan kebutuhan pegawai berdasarkan analisis beban kerja.</p>";
                break;
            case 3:
                detailTitle.textContent = "Analisis Persediaan Pegawai dan Neraca Pegawai";
                detailContent.innerHTML = "<p>Informasi tentang analisis persediaan pegawai dan keseimbangan tenaga kerja dalam organisasi.</p>";
                break;
            case 4:
                detailTitle.textContent = "Penyusunan Program Kepegawaian";
                detailContent.innerHTML = "<p>Deskripsi tentang penyusunan program pelatihan dan pengembangan karier untuk pegawai.</p>";
                break;
            case 5:
                detailTitle.textContent = "Pengendalian dan Evaluasi Kinerja Pegawai";
                detailContent.innerHTML = "<p>Detail mengenai evaluasi kinerja pegawai dan penilaian produktivitas.</p>";
                break;
            case 6:
                detailTitle.textContent = "Penyusunan Laporan dan Dokumen RTK Mikro";
                detailContent.innerHTML = "<p>Informasi tentang penyusunan laporan tahunan dan dokumen RTK Mikro.</p>";
                break;
            default:
                detailTitle.textContent = "Detail Komponen";
                detailContent.innerHTML = "<p>Klik pada kartu untuk melihat detail lebih lanjut.</p>";
                break;
        }
    };

    // Fungsi untuk Menambahkan Data Pegawai dari Formulir
    window.addEmployee = function() {
        const name = document.getElementById('name').value;
        const position = document.getElementById('position').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const education = document.getElementById('education').value;
        const experience = document.getElementById('experience').value;

        if (name && position && age && gender && education && experience) {
            alert(`Pegawai ${name} telah ditambahkan!`);
            document.getElementById('employeeForm').reset();  // Reset form setelah pengisian
        } else {
            alert("Mohon lengkapi semua data pegawai.");
        }
    };
});
