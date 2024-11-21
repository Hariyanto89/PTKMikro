function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
}

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('main-content');

    // Fungsi untuk navigasi
    window.navigate = function (section) {
        switch (section) {
            case 'dashboard':
                content.innerHTML = `
                    <h2>Dashboard</h2>
                    <p>Selamat datang di dashboard PTK Mikro.</p>
                `;
                break;

            case 'employee-data':
                content.innerHTML = `
                    <h2>Data Pegawai</h2>
                    <p>Kelola data pegawai perusahaan Anda di sini.</p>
                `;
                break;

            case 'staffing-analysis':
                content.innerHTML = `
                    <h2>Analisis Kebutuhan</h2>
                    <p>Analisis kebutuhan pegawai berdasarkan beban kerja.</p>
                `;
                break;

            case 'performance':
                content.innerHTML = `
                    <h2>Evaluasi Kinerja</h2>
                    <p>Melihat hasil evaluasi kinerja pegawai.</p>
                `;
                break;

            case 'reporting':
                content.innerHTML = `
                    <h2>Laporan</h2>
                    <p>Buat laporan RTK Mikro.</p>
                `;
                break;

            default:
                content.innerHTML = `<p>Pilih menu di sebelah kiri untuk melihat detail.</p>`;
        }
    };
});
