const express = require('express');
const fs = require('fs-extra');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Lokasi file JSON
const DATA_FILE = './data/employees.json';

// Fungsi untuk membaca data dari file JSON
async function readEmployees() {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Fungsi untuk menulis data ke file JSON
async function writeEmployees(data) {
    try {
        await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Gagal menyimpan data:', error);
        return false;
    }
}

// Endpoint untuk mengambil data pegawai
app.get('/api/employees', async (req, res) => {
    const employees = await readEmployees();
    res.json(employees);
});

// Endpoint untuk menambah data pegawai
app.post('/api/employees', async (req, res) => {
    const newEmployee = req.body;
    const employees = await readEmployees();
    employees.push(newEmployee);

    const success = await writeEmployees(employees);
    if (success) {
        res.status(201).json({ message: 'Pegawai berhasil ditambahkan' });
    } else {
        res.status(500).json({ message: 'Gagal menyimpan data pegawai' });
    }
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
