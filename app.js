const pediatricDosingData = [
    { name: "Amoxicillin", dosage: "50 mg/kg/day BD/TDS, Max 1g/Day", formulations: [{ concentration: "125 mg/5 ml" }, { concentration: "250 mg/5 ml" }], indications: ["URTI", "Dental Abscess", "Skin/Skin structure infections", "ENT infections (OM)"] },
    { name: "Augmentin (Amoxicillin + Clavulinic Acid)", dosage: "30-50 mg/kg/day BD/TDS", formulations: [{ concentration: "156 mg/5 ml" }, { concentration: "312 mg/5 ml" }, { concentration: "457 mg/5 ml" }, { concentration: "625 mg/5 ml" }], indications: ["1st line URTI", "GABHS", "Skin infections", "ENT infections", "Dental Abscess - 1st Line"] },
    { name: "Azithromycin", dosage: "12-15 mg/kg/day OD, Enteric Dose 20 mg/kg/day", formulations: [{ concentration: "200 mg/5 ml" }], indications: ["2nd line URTI", "Atypical organisms causing LRTI", "Shigella", "Campylobacter", "Severe dysentery", "Enteric fever", "Endocarditis prophylaxis"] },
    { name: "Clarithromycin", dosage: "15 mg/kg/day BD, Max 1g/Day", formulations: [{ concentration: "125 mg/5 ml" }, { concentration: "250 mg/5 ml" }], indications: ["2nd line URTI", "Atypical LRTI", "H. pylori", "Cat scratch fever", "Ear infections (OM)", "2nd line endocarditis"] },
    { name: "Ciprofloxacin", dosage: "15-30 mg/kg/day BD", formulations: [{ concentration: "125 mg/5 ml" }, { concentration: "250 mg/5 ml" }], indications: ["1st line Dysentery", "2nd line UTI", "Severe dysentery", "EPEC", "ETEC", "EIEC", "STDs"] },
    { name: "Metronidazole", dosage: "20-30 mg/kg/day BD/TDS", formulations: [{ concentration: "100 mg/5 ml" }, { concentration: "200 mg/5 ml" }], indications: ["ABx induced diarrhea", "C. Difficile infection", "E. Histolytica", "Giardia", "H. pylori", "Vaginosis"] },
    { name: "TMP-SMX (Septran)", dosage: "50-60 mg/kg/day BD >2 Months", formulations: [{ concentration: "200/40 mg/5 ml" }, { concentration: "400/80 mg/5 ml" }], indications: ["Dysentery", "UTI"] },
    { name: "Nitazoxanide", dosage: "100 mg-BD (1-3 years), 200 mg-BD (3-11 Years)", formulations: [{ concentration: "100 mg/5 ml" }], indications: ["Smelly Diarrhea", "Anti-infective (Covers most organisms causing diarrhea in children including rota)"] },
    { name: "Cefixime", dosage: "10 mg/kg/day, 20 mg/kg/day (enteric dose) BD", formulations: [{ concentration: "100 mg/5 ml" }, { concentration: "200 mg/5 ml" }, { concentration: "400 mg/5 ml" }], indications: ["Otitis Media", "Strep throat", "LRTI", "UTI", "Gonorrhea", "Lyme disease", "Typhoid", "URTI", "E. coli Dysentery"] },
    { name: "Cephradine", dosage: "25-50 mg/kg/day", formulations: [{ concentration: "125 mg/5 ml" }], indications: ["GABHS", "Otitis Media", "Skin/Structure infections"] },
    { name: "Cefaclor", dosage: "20-40 mg/kg/day TDS, Max 2g/24 hours", formulations: [{ concentration: "125 mg/5 ml" }, { concentration: "250 mg/5 ml" }], indications: ["URTI", "LRTI", "UTI", "Skin infections", "Rarely used due to serum sickness-like symptoms in children"] },
    { name: "Clindamycin", dosage: "10-20 mg/kg/6 hourly TDS", formulations: [{ concentration: "75 mg/5 ml" }, { concentration: "150 mg/cap" }], indications: ["Acne vulgaris", "Dental infection", "2nd line for Penicillin allergic patients", "Streptococcus", "Staphylococcus", "Pneumococci"] },
    { name: "Cefuroxime", dosage: "20-30 mg/kg/day BD", formulations: [{ concentration: "125 mg/5 ml" }], indications: ["URTI", "LRTI", "UTI", "AOM", "MDR typhoid", "CAP"] },
    { name: "Cefpodoxime", dosage: "10 mg /kg/day, 6 months - 40 mg x BD, 3-8 Years - 80 mg x BD, >9 Year - 100 mg x BD", formulations: [{ concentration: "40 mg/5 ml" }], indications: ["URTI", "LRTI", "UTI", "AOM", "Sinusitis", "CAP"] },
    { name: "Mebendazole", dosage: "100 mg BD for 3 Days", formulations: [{ concentration: "100 mg/5 ml" }], indications: ["Pica", "Ascariasis", "Pinworm disease", "Hookworm infections", "Guinea worm infections", "Hydatid disease", "Giardia"] },
    { name: "Albendazole", dosage: "200 mg BD, 400 mg OD for 3 days, 40 mg/kg/day", formulations: [{ concentration: "200 mg/5 ml" }], indications: ["Giardiasis", "Trichuriasis", "Filariasis", "Hydatid disease", "Pinworm disease", "Ascariasis"] },
    { name: "Ranitidine", dosage: "4-10 ml/kg/day", formulations: [{ concentration: "75 mg/5 ml" }], indications: ["H. pylori"] },
    { name: "Famotidine", dosage: "0.5-1 mg/kg/day >6 years, Max 20 mg/day", formulations: [{ concentration: "10 mg/5 ml" }], indications: ["H. pylori"] },
    { name: "Lactulose", dosage: "1 Tbsp x BD", indications: ["Constipation"] },
    { name: "Zinc Sulfate", dosage: "<6 months – 2.5 ml OD, >6 months – 5 ml OD for 10-14 Days", indications: ["URTI", "LRTI", "Diarrhea", "Vomiting"] },
    { name: "Paracetamol", dosage: "15 mg/kg/dose (4-6 Hourly)", formulations: [{ concentration: "80 mg/2.5 ml" }, { concentration: "160 mg/5 ml" }, { concentration: "250 mg/5 ml" }], indications: ["Fever", "Mild Pain"] },
    { name: "Ibuprofen", dosage: "10-15 mg/kg/dose (4-6 Hourly)", formulations: [{ concentration: "100 mg/5 ml" }, { concentration: "200 mg/5 ml" }], indications: ["Fever", "Mild Pain"] },
    { name: "Fluconazole", dosage: "12 mg/kg/day, Loading = 25 mg/kg", formulations: [{ concentration: "50 mg/5 ml" }, { concentration: "100 mg" }, { concentration: "200 mg" }], indications: ["Fungal infection"] },
    { name: "Nystatin", dosage: "1 lac units x 8 hourly (5-7 Days)", formulations: [{ concentration: "1 lac IU/ml (20 drops)" }], indications: ["Oral candidiasis"] },
    { name: "Clotrimazole", dosage: "Apply 8 hourly", indications: ["Topical fungal infections"] },
    { name: "Miconazole", dosage: "Apply 8 hourly", indications: ["Topical fungal infections"] },
    { name: "Hydrocortisone + Clotrimazole", dosage: "Apply 8 hourly", indications: ["Topical fungal infections"] },
    { name: "Neomycin + Betamethasone", dosage: "Apply 8 hourly", indications: ["Topical fungal infections"] },
    { name: "Gentamicin", dosage: "Apply 8 hourly", indications: ["Topical infections"] },
    { name: "Lindane + Sulphur", dosage: ">2 Years", indications: ["Scabies"] },
    { name: "Permethrin", dosage: ">2 months", indications: ["Scabies"] },
    { name: "Ivermectin", dosage: "200 mcg/kg Single Dose", indications: ["Scabies"] },
    { name: "Vitamin A", dosage: "Stat Dose - <6 months - 80,000 IU, 6 months – 1 year 1 lac IU, >1 year - 2 lac IU", indications: ["Vitamin A deficiency"] },
    { name: "Vitamin D", dosage: "1 Drop x OD = 6 lac IU x I/M", indications: ["Vitamin D deficiency"] },
    { name: "Vitamin E", dosage: "1 Drop x OD", indications: ["Vitamin E deficiency"] },
    { name: "Calcium", dosage: "1 TSF x OD = 700-1300 mg/day", indications: ["Calcium deficiency"] },
    { name: "Omeprazole + Na Bicarb", dosage: "40 mg/1100 mg OD x 7 Days", indications: ["Gastroesophageal reflux disease (GERD)"] },
    { name: "Dexamethasone", dosage: "0.5-2 mg/kg/day, 6 doses, 8h x IV", indications: ["Inflammatory conditions"] },
    { name: "Adrenaline", dosage: "0.1 mg/kg/dose S/C, I/V Max. 1 mg", indications: ["Anaphylaxis"] },
    { name: "Diazepam", dosage: "0.2 mg/kg/dose Max 10 mg/dose >5 years, Max 5 mg/dose <5 Years", indications: ["Seizures"] },
    { name: "Glucagon", dosage: "0.5 mg/dose", indications: ["Antidote for B-Blockers/CCBs"] },
    { name: "Mannitol", dosage: "0.7 ml/kg/dose, 0.5-1 Stat, 0.25-0.5 kg/dose maintenance", indications: ["Cerebral edema"] },
    { name: "Naloxone", dosage: "0.1 mg/kg, Every 15 minutes Repeated 3-4 times", indications: ["Opioid overdose"] },
    { name: "Amlodipine", dosage: "0.1 mg/kg/dose Max 5 mg", indications: ["Hypertension"] },
    { name: "Streptomycin", dosage: "30 mg/kg/day OD x IM", indications: ["Tuberculosis"] },
    { name: "Sumatriptan", dosage: "25-50 mg/Day", indications: ["Migraine"] },
    { name: "Citralka", dosage: "1 TSF x BD >8 Years", indications: ["UTI"] },
    { name: "Tofranil", dosage: "6-8 Years 25 mg x H/S, 8-12 Years 50 mg", indications: ["Nocturnal Enuresis"] }
];

// Calculate all doses
function calculateAllDoses() {
    const weight = parseFloat(document.getElementById("weight").value);
    const resultsDiv = document.getElementById("doseResults");
    resultsDiv.innerHTML = "";

    if (isNaN(weight)) {
        resultsDiv.innerHTML = "<p style='color:red;'>Please enter a valid weight.</p>";
        return;
    }

    pediatricDosingData.forEach(medication => {
        medication.formulations.forEach(formulation => {
            const concentration = parseFloat(formulation.concentration.split(" ")[0]);
            const dosePerKg = extractDosePerKg(medication.dosage);
            if (dosePerKg) {
                const dosePerDose = (dosePerKg * weight) / (concentration / 5); // Calculate in ml per dose
                const dailyDose = dosePerDose * 2; // Assuming standard twice daily for example
                displayDoseResult(medication, formulation.concentration, dosePerDose, dailyDose);
            }
        });
    });
}

// Extracts the dose per kg from the dosage string
function extractDosePerKg(dosage) {
    const match = dosage.match(/(\d+)-?(\d+)?\s*mg\/kg/);
    return match ? parseFloat(match[1]) : null;
}

// Display the dose calculation results
function displayDoseResult(medication, formulation, dosePerDose, totalDailyDose) {
    const resultsDiv = document.getElementById("doseResults");

    const doseItem = document.createElement("div");
    doseItem.classList.add("dose-item");

    doseItem.innerHTML = `
        <h3>${medication.name}</h3>
        <p class="dose-details">
            <strong>Indications:</strong> ${medication.indications.join(", ")}<br>
            <strong>Dosage Instructions:</strong> ${medication.dosage}<br>
            <strong>Formulation:</strong> ${formulation}<br>
            <strong>Dose per administration:</strong> ${dosePerDose.toFixed(2)} ml<br>
            <strong>Total daily dose:</strong> ${totalDailyDose.toFixed(2)} ml
        </p>
    `;

    resultsDiv.appendChild(doseItem);
}

// Register service worker for offline use
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js").then(() => {
            console.log("Service Worker Registered");
        });
    });
}
