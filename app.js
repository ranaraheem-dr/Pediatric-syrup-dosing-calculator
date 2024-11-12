// Initialize data variables
let medicationsData = [];
let filteredMedications = [];

// Load medications on DOM content load
document.addEventListener('DOMContentLoaded', async () => {
    await loadMedications();
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js').catch(console.error);
    }
});

// Load medication data from JSON file
async function loadMedications() {
    const response = await fetch('data/medications.json');
    medicationsData = await response.json();
    filteredMedications = medicationsData;
    populateMedicationDropdown();
}

// Populate dropdown with medication options
function populateMedicationDropdown() {
    const medicationSelect = document.getElementById("medication");
    medicationSelect.innerHTML = '<option value="">-- Select Medication --</option>';
    filteredMedications.forEach(medication => {
        const option = document.createElement("option");
        option.value = medication.name;
        option.textContent = medication.name;
        medicationSelect.appendChild(option);
    });
}

// Populate medication details and concentration options
function populateMedicationDetails() {
    const selectedMedicationName = document.getElementById("medication").value;
    const medication = medicationsData.find(med => med.name === selectedMedicationName);
    const concentrationSelect = document.getElementById("concentration");
    concentrationSelect.innerHTML = '';
    document.getElementById("dosageInstructions").innerText = "";

    if (medication) {
        medication.formulations.forEach(formulation => {
            const option = document.createElement("option");
            option.value = parseFloat(formulation.concentration);
            option.textContent = `${formulation.concentration}`;
            concentrationSelect.appendChild(option);
        });
        document.getElementById("dosageInstructions").innerText = `Dosage: ${medication.dosage}`;
    }
}

// Search and filter medications
function searchMedications() {
    const query = document.getElementById('search').value.toLowerCase();
    filteredMedications = medicationsData.filter(med => 
        med.name.toLowerCase().includes(query) || 
        med.indications.some(indication => indication.toLowerCase().includes(query))
    );
    populateMedicationDropdown();
}

// Calculate dose based on weight, frequency, and selected concentration
function calculateDose() {
    const weight = parseFloat(document.getElementById("weight").value);
    const frequency = parseInt(document.getElementById("frequency").value);
    const concentration = parseFloat(document.getElementById("concentration").value);
    const selectedMedicationName = document.getElementById("medication").value;
    const resultDiv = document.getElementById("doseDetails");

    if (isNaN(weight) || isNaN(frequency) || isNaN(concentration) || !selectedMedicationName) {
        resultDiv.innerHTML = "<p style='color:red;'>Please provide all inputs correctly.</p>";
        return;
    }

    const medication = medicationsData.find(med => med.name === selectedMedicationName);
    const dosePerKgMatch = medication.dosage.match(/(\d+)-?(\d+)?\s*mg\/kg/);
    let dosePerKg = dosePerKgMatch ? parseFloat(dosePerKgMatch[1]) : null;
    if (!dosePerKg) {
        resultDiv.innerHTML = "<p style='color:red;'>Dose per kg not specified in dosage instructions.</p>";
        return;
    }

    // Calculate per-dose in ml and total daily dose in ml
    const dosePerDose = (dosePerKg * weight) / (concentration / 5); 
    const totalDailyDose = dosePerDose * frequency;

    // Display results
    resultDiv.innerHTML = `
        <p><strong>Medication:</strong> ${medication.name}</p>
        <p><strong>Indications:</strong> ${medication.indications.join(", ")}</p>
        <p><strong>Dose per administration:</strong> ${dosePerDose.toFixed(2)} ml</p>
        <p><strong>Total daily dose:</strong> ${totalDailyDose.toFixed(2)} ml</p>
    `;
}
