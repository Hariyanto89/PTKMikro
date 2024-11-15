const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware untuk mengakses JSON dan file statis
app.use(express.json());
app.use(express.static(path.join(__dirname, 'assets')));

// Endpoint untuk mendapatkan data pegawai
app.get('/api/employees', (req, res) => {
    const dataPath = path.join(__dirname, 'data', 'employees.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error membaca data pegawai');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Endpoint untuk menambahkan pegawai baru ke file JSON
app.post('/api/employees', (req, res) => {
    const dataPath = path.join(__dirname, 'data', 'employees.json');
    const newEmployee = req.body;

    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error membaca data pegawai');
        } else {
            const employees = JSON.parse(data);
            employees.push(newEmployee);

            fs.writeFile(dataPath, JSON.stringify(employees, null, 2), (err) => {
                if (err) {
                    res.status(500).send('Error menambahkan pegawai');
                } else {
                    res.status(201).send('Pegawai berhasil ditambahkan');
                }
            });
        }
    });
});

// Rute untuk mengembalikan komponen HTML dari folder components
app.get('/components/:component', (req, res) => {
    const componentPath = path.join(__dirname, 'components', `${req.params.component}.html`);
    res.sendFile(componentPath);
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
