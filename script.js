function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "namratha" && pass === "1234") {
        window.location.href = "home.html";
    } else {
        alert("Invalid Username or Password");
    }
}

function calculator() {
    alert("Calculator Coming Soon 😊");
}

function notes() {
    alert("Notes Coming Soon 📝");
}

function about() {
    alert("My First Electron App\nCreated by Namratha ❤️");
}

function logout() {
    window.location.href = "index.html";
}
function add() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "Answer: " + (a + b);
}

function sub() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "Answer: " + (a - b);
}

function mul() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "Answer: " + (a * b);
}

function div() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if (b === 0) {
        document.getElementById("result").innerHTML = "Cannot divide by zero";
    } else {
        document.getElementById("result").innerHTML = "Answer: " + (a / b);
    }
}
// Auto Save Notes
const notes = document.getElementById("notes");

if (notes) {
    // Load saved notes
    notes.value = localStorage.getItem("studentNotes") || "";

    // Save while typing
    notes.addEventListener("input", function () {
        localStorage.setItem("studentNotes", notes.value);
    });
}