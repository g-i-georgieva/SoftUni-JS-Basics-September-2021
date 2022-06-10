function hospital(input) {
    index = 0
    let period = Number(input[index])
    index++
    let doctors = 7
    let treatedPatients = 0
    let untreatedPatients = 0

    for (let i = 1; i <= period; i++) {
        let patient = Number(input[index])
        index++

        if (i % 3 == 0 && untreatedPatients > treatedPatients) {
            doctors++
        }

        if (patient <= doctors) {
            treatedPatients += patient
        } else {
            untreatedPatients += patient - doctors
            treatedPatients += doctors
        }

    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}

hospital(["2", "7", "27"])
hospital(["4", "7", "27", "9", "1"])
hospital ([6,25,25,25,25,25,2])
