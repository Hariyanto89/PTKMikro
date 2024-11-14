const trainings = [];
const careerPlans = [];

// Fungsi Menambah Program Pelatihan
function addTraining() {
    const trainingName = document.getElementById('trainingName').value;
    const trainingDate = document.getElementById('trainingDate').value;
    const targetPosition = document.getElementById('targetPosition').value;

    if (!trainingName || !trainingDate || !targetPosition) {
        alert("Mohon lengkapi semua data pelatihan.");
        return;
    }

    const training = { trainingName, trainingDate, targetPosition };
    trainings.push(training);

    displayTrainings();
    clearTrainingForm();
}

// Fungsi Menampilkan Program Pelatihan
function displayTrainings() {
    const tableBody = document.querySelector('#trainingTable tbody');
    tableBody.innerHTML = '';

    trainings.forEach((training, index) => {
        const row = tableBody.insertRow(index);
        row.innerHTML = `
            <td>${training.trainingName}</td>
            <td>${training.trainingDate}</td>
            <td>${training.targetPosition}</td>
        `;
    });
}

// Fungsi Mengosongkan Formulir Program Pelatihan
function clearTrainingForm() {
    document.getElementById('trainingForm').reset();
}

// Fungsi Menambah Rencana Karier
function addCareerPlan() {
    const employeeName = document.getElementById('employeeName').value;
    const currentPosition = document.getElementById('currentPosition').value;
    const desiredPosition = document.getElementById('desiredPosition').value;

    if (!employeeName || !currentPosition || !desiredPosition) {
        alert("Mohon lengkapi semua data rencana karier.");
        return;
    }

    const careerPlan = { employeeName, currentPosition, desiredPosition };
    careerPlans.push(careerPlan);

    displayCareerPlans();
    clearCareerPlanForm();
}

// Fungsi Menampilkan Rencana Karier
function displayCareerPlans() {
    const tableBody = document.querySelector('#careerPlanTable tbody');
    tableBody.innerHTML = '';

    careerPlans.forEach((plan, index) => {
        const row = tableBody.insertRow(index);
        row.innerHTML = `
            <td>${plan.employeeName}</td>
            <td>${plan.currentPosition}</td>
            <td>${plan.desiredPosition}</td>
        `;
    });
}

// Fungsi Mengosongkan Formulir Rencana Karier
function clearCareerPlanForm() {
    document.getElementById('careerPlanForm').reset();
}

