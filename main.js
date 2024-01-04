
let registrationIdCounter = 1;

function submitRegistration() {
    
    let fullName = document.getElementById("fullName").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let address = document.getElementById("address").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let monthlyIncome = document.getElementById("monthlyIncome").value;

    if (fullName && age && gender && address && phoneNumber && monthlyIncome) {
        addRegistrationRow(registrationIdCounter, fullName, age, gender, address, phoneNumber, monthlyIncome);
        clearForm("fullName", "age", "gender", "address", "phoneNumber", "monthlyIncome");
        registrationIdCounter++;
    } else {
        alert("Please fill in all fields.");
    }
}

function addRegistrationRow(regId, fullName, age, gender, address, phoneNumber, monthlyIncome) {
    let tableBody = document.getElementById("registrationTableBody");
    let newRow = tableBody.insertRow();

    let cellValues = [regId, fullName, age, gender, address, phoneNumber, monthlyIncome];

    for (let i = 0; i < cellValues.length; i++) {
        let cell = newRow.insertCell(i);
        cell.textContent = cellValues[i];
    }
}

function clearForm(...inputIds) {
    inputIds.forEach(id => {
        document.getElementById(id).value = "";
    });
}
