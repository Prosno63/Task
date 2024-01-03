
let registrationIdCounter = 1;

function submitRegistration() {
    var fullName = document.getElementById("fullName").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var monthlyIncome = document.getElementById("monthlyIncome").value;

    if (fullName && age && gender && address && phoneNumber && monthlyIncome) {
        addRegistrationRow(registrationIdCounter, fullName, age, gender, address, phoneNumber, monthlyIncome);
        clearForm("fullName", "age", "gender", "address", "phoneNumber", "monthlyIncome");
        registrationIdCounter++;
    } else {
        alert("Please fill in all fields.");
    }
}

function addRegistrationRow(regId, fullName, age, gender, address, phoneNumber, monthlyIncome) {
    var tableBody = document.getElementById("registrationTableBody");
    var newRow = tableBody.insertRow();

    var cellValues = [regId, fullName, age, gender, address, phoneNumber, monthlyIncome];

    for (var i = 0; i < cellValues.length; i++) {
        var cell = newRow.insertCell(i);
        cell.textContent = cellValues[i];
    }
}

function clearForm(...inputIds) {
    inputIds.forEach(id => {
        document.getElementById(id).value = "";
    });
}