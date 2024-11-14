/* Layout Utama untuk Detail Komponen */
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Styling untuk Card Container */
.card-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 80%;
    max-width: 800px;
    margin-bottom: 30px;
}

/* Styling untuk Detail Container */
.detail-container {
    width: 80%;
    max-width: 800px;
    padding: 20px;
    background-color: #e7f5e9; /* Hijau Muda */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Styling Khusus untuk Heading di Detail Container */
.detail-container h1 {
    text-align: center;
    color: #2d7a3e; /* Hijau Tua */
    font-size: 1.8rem;
    border-bottom: 2px solid #2d7a3e;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

/* Styling Form di Detail Container */
.detail-container form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

.detail-container form label {
    font-weight: bold;
    color: #2d7a3e; /* Hijau Tua */
    font-size: 1rem;
}

.detail-container form input, 
.detail-container form select {
    padding: 10px;
    border: 1px solid #a1d9af; /* Hijau Muda */
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    font-size: 1rem;
    transition: border-color 0.3s;
}

.detail-container form input:focus,
.detail-container form select:focus {
    border-color: #2d7a3e; /* Hijau Tua */
    outline: none;
}

/* Tombol untuk Detail */
.detail-container button {
    padding: 12px;
    background-color: #2d7a3e; /* Hijau Tua */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: bold;
    width: 100%;
    margin-top: 15px;
    grid-column: span 2;
    transition: background-color 0.3s, transform 0.2s;
}

.detail-container button:hover {
    background-color: #45a049; /* Hijau Lebih Terang */
    transform: scale(1.05);
}

/* Tabel untuk Menampilkan Data Pegawai */
.detail-container table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    font-size: 0.95rem;
}

.detail-container th, 
.detail-container td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: center;
}

.detail-container th {
    background-color: #2d7a3e; /* Hijau Tua */
    color: white;
    font-weight: bold;
}

.detail-container td {
    background-color: #f1f9f4; /* Hijau Muda */
    color: #333;
    transition: background-color 0.2s;
}

.detail-container tr:nth-child(even) td {
    background-color: #e7f5e9; /* Hijau Muda Lebih Terang */
}

.detail-container td:hover {
    background-color: #d0ebd9; /* Hijau Muda Hover */
}

/* Responsive untuk Layar Kecil */
@media (max-width: 768px) {
    .detail-container form {
        grid-template-columns: 1fr;
    }

    .detail-container form input[type="text"],
    .detail-container form input[type="number"],
    .detail-container form select,
    .detail-container button {
        grid-column: span 1;
    }
}
