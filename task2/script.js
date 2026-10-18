
function showMemberCard(name, age, email, number, type) {
    const librarySections = [
        "Humanaties",
        "Science",
        "Business",
        "Law"
    ];

   
    const category = age < 13 ? "Junior" : "Regular";

    
    const fee = type === "Basic" ? 500
              : type === "Silver" ? 1000
              : 1500;

    
    document.getElementById("output").innerHTML =
        "<h2>Member Information</h2>" +
        "Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
        "Email: " + email + "<br>" +
        "Number: " + number + "<br>" +
        "Type: " + type + "<br>" +
        "Category: " + category + "<br>" +
        "Membership Fee: Tk " + fee + "<br><br>" +
        "<h3>Library Sections</h3>" +
        librarySections.join("<br>");
    
 
    for (let i = 0; i < librarySections.length; i++) {
        console.log(librarySections[i]);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let age = Number(document.getElementById("age").value);
        let email = document.getElementById("email").value;
        let number = document.getElementById("number").value;

        let selectedType = document.querySelector(
            'input[name="type"]:checked'
        );

      

        let type = selectedType.value;

        showMemberCard(name, age, email, number, type);
    });
});
