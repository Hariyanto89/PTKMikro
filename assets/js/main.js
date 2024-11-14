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
});

function showDetail(componentNumber) {
    const detailTitle = document.getElementById('detailTitle');
    const detailContent = document.getElementById('detailContent');

    switch(componentNumber) {
        case 1:
            detailTitle.textContent = "Pengumpulan dan Pengolahan Data Pegawai";
            detailContent.textContent = "Detail mengenai pengumpulan dan pengolahan data pegawai, termasuk data pribadi, jabatan, dan kualifikasi pegawai.";
            break;
        case 2:
            detailTitle.textContent = "Perencanaan Kebutuhan Pegawai Berdasarkan Beban Kerja";
            detailContent.textContent = "Detail tentang perencanaan kebutuhan pegawai berdasarkan analisis beban kerja.";
            break;
        case 3:
            detailTitle.textContent = "Analisis Persediaan Pegawai dan Neraca Pegawai";
            detailContent.textContent = "Informasi tentang analisis persediaan pegawai dan keseimbangan tenaga kerja dalam organisasi.";
            break;
        case 4:
            detailTitle.textContent = "Penyusunan Program Kepegawaian";
            detailContent.textContent = "Deskripsi tentang penyusunan program pelatihan dan pengembangan karier untuk pegawai.";
            break;
        case 5:
            detailTitle.textContent = "Pengendalian dan Evaluasi Kinerja Pegawai";
            detailContent.textContent = "Detail mengenai evaluasi kinerja pegawai dan penilaian produktivitas.";
            break;
        case 6:
            detailTitle.textContent = "Penyusunan Laporan dan Dokumen RTK Mikro";
            detailContent.textContent = "Informasi tentang penyusunan laporan tahunan dan dokumen RTK Mikro.";
            break;
        default:
            detailTitle.textContent = "Detail Komponen";
            detailContent.textContent = "Klik pada kartu untuk melihat detail lebih lanjut.";
            break;
    }
}
