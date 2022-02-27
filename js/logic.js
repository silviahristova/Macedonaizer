// Global variables
const minNameLength = 2;

// Reference to elements
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const submissionButton = document.getElementById("btn-submit");
const resultField = document.getElementById("result");
const navButtonMacedonized = document.getElementById("Macedonized");

// Attach the events to the elements
document.getElementById("submission-form")
    .addEventListener("change", onSubmissionFormChange);

// Functions
function onSubmissionFormChange(e) {

    if (firstNameInput.value.length >= minNameLength && lastNameInput.value.length >= minNameLength) {
        // Enable button
        submissionButton.classList.remove("disabled");
        navButtonMacedonized.classList.remove("disabled")
        macedonize();
    } else {
        // Disable the button
        submissionButton.classList.add("disabled");
        navButtonMacedonized.classList.add("disabled");
        resultField.innerHTML = "";
    }

}

function macedonize() {
    var gender = document.querySelector('input[name="gender"]:checked').value;

    var macedoniaName = "Your name cannot be macedonaized";
    //console.log(gender);
    switch (gender) {
        case "1":
            macedoniaName = firstNameInput.value + "che " + lastNameInput.value + "ska";
            console.log(macedoniaName);
            break;
        case "2":
            macedoniaName = firstNameInput.value + "che " + lastNameInput.value + "ski";
            console.log(macedoniaName);

            break;
        default:
            break;
    }

    resultField.innerHTML = macedoniaName;

    
}
