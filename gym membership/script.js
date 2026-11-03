
function toggleJoinButton() {
    let fitness = document.getElementById("fitness").checked;

    document.getElementById("joinButton").disabled = !fitness;
}

function showError(fieldId, message) {
    document.getElementById(fieldId + "Error").textContent = message;
}

function isDigit(character) {
    return character >= "0" && character <= "9";
}

function validateForm() {
    let valid = true;

    let form = document.getElementById("membershipForm");
    let finalMessage = document.getElementById("finalMessage");

    let errors = document.getElementsByClassName("error");

    for (let i = 0; i < errors.length; i++) {
        errors[i].textContent = "";
    }

    finalMessage.textContent = "";
    finalMessage.className = "";

    let fullName = document.getElementById("fullName").value.trim();
    let ageValue = document.getElementById("age").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let plan = document.getElementById("plan").value;
    let startDate = document.getElementById("startDate").value;
    let mainTrainer = document.getElementById("mainTrainer").value;
    let backupTrainer = document.getElementById("backupTrainer").value;
    let addonsValue = document.getElementById("familyAddons").value;

    if (fullName === "") {
        showError("fullName", "Your full name is missing.");
        valid = false;
    } else if (fullName.length < 3) {
        showError("fullName", "Full name is too short (minimum 3 letters).");
        valid = false;
    } else {
        for (let i = 0; i < fullName.length; i++) {
            let ch = fullName.charAt(i);

            let isLetter = (ch >= "A" && ch <= "Z") ||
                           (ch >= "a" && ch <= "z");

            if (!isLetter && ch !== " ") {
                showError("fullName", "Digits and symbols are not allowed in the full name.");
                valid = false;
                break;
            }
        }
    }

    let age = Number(ageValue);

    if (ageValue === "" || isNaN(age) || age < 16 || age > 65) {
        showError("age", "Age must be a number from 16 to 65.");
        valid = false;
    }

    let mobileValid = true;

    if (mobile.length !== 11 ||
        mobile.charAt(0) !== "0" ||
        mobile.charAt(1) !== "1" ||
        mobile.charAt(2) < "3") {
        mobileValid = false;
    }

    for (let i = 0; i < mobile.length; i++) {
        if (!isDigit(mobile.charAt(i))) {
            mobileValid = false;
        }
    }

    if (!mobileValid) {
        showError("mobile", "Enter a valid mobile number (11 digits, starting with 013 to 019).");
        valid = false;
    }

    let atPosition = email.indexOf("@");
    let dotPosition = email.indexOf(".", atPosition + 1);

    if (email === "") {
        showError("email", "Email cannot be left empty.");
        valid = false;
    } else if (email.indexOf(" ") !== -1 ||
               atPosition === -1 ||
               atPosition === 0 ||
               dotPosition === -1) {
        showError("email", "This email does not look right.");
        valid = false;
    }

    let hasCapital = false;
    let hasDigit = false;

    for (let i = 0; i < password.length; i++) {
        let ch = password.charAt(i);

        if (ch >= "A" && ch <= "Z") {
            hasCapital = true;
        }

        if (isDigit(ch)) {
            hasDigit = true;
        }
    }

    if (password.length < 8) {
        showError("password", "Use a password of 8 or more characters.");
        valid = false;
    } else if (!hasCapital || !hasDigit) {
        showError("password", "Password needs at least one capital letter and one digit.");
        valid = false;
    }

    if (confirmPassword !== password) {
        showError("confirmPassword", "The two passwords are not the same.");
        valid = false;
    }

    if (plan === "") {
        showError("plan", "Please choose a plan.");
        valid = false;
    }

    if (mainTrainer === "") {
        showError("mainTrainer", "Please choose a main trainer.");
        valid = false;
    }

    if (backupTrainer === "") {
        showError("backupTrainer", "Please choose a backup trainer.");
        valid = false;
    } else if (backupTrainer === mainTrainer) {
        showError("backupTrainer", "Backup trainer must be different from the main trainer.");
        valid = false;
    }

    if (startDate === "") {
        showError("startDate", "Please pick a start date.");
        valid = false;
    }

    let workout = document.querySelector('input[name="workoutTime"]:checked');

    if (workout === null) {
        showError("workoutTime", "Please choose a workout time.");
        valid = false;
    }

    let addons = Number(addonsValue);
    let addonsValid = true;

    if (addonsValue === "" || isNaN(addons) || addons < 0 || addons > 3) {
        addonsValid = false;
    }

    for (let i = 0; i < addonsValue.length; i++) {
        if (!isDigit(addonsValue.charAt(i))) {
            addonsValid = false;
        }
    }

    if (!addonsValid) {
        showError("familyAddons", "Add-ons must be a whole number from 0 to 3.");
        valid = false;
    }

    if (!valid) {
        return false;
    }

    let planFee = 0;

    if (plan === "Monthly") {
        planFee = 1500;
    } else if (plan === "Quarterly") {
        planFee = 4000;
    } else if (plan === "Yearly") {
        planFee = 14000;
    }

    let total = planFee + (addons * 500);

    finalMessage.textContent =
        "Welcome, " + fullName +
        "! Your " + plan +
        " membership starts on " + startDate +
        ". Total payable: " + total + " Taka.";

    finalMessage.className = "success";

    form.reset();

    document.getElementById("joinButton").disabled = true;

    return false;
}
