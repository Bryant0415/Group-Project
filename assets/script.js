// Login Page

var loginBtn = document.getElementById("loginBtn");
var pin = ['1355', '2896', '8927', '4098', '3309'];

function login() {
    
    // Set input value
    var input = document.getElementById("enterPin").value;
    console.log(input);

    document.getElementById("enterPin").value = "";

    // If statement to determine if user inputs anything in the input box
    if (input === "") {
        displayMessage("Please enter your PIN.");
        return;
    }

    // If it is the one of the correct pin numbers, the user will be logged in
    if (pin.includes(input)) {
        window.location.assign('timeCard.html');
    
        
    // If the user inputs an incorrect pin, a message saying "invalid pin number. Please try again" will appear  
    } else {
        displayMessage("Invalid PIN. Please try again.")
    }
    
    
    
    
    function displayMessage(message) {
        var errorMsg = document.getElementById("errorMsg");
        errorMsg.textContent = message;
        errorMsg.style.display = "inline-block";
    }
}

loginBtn.addEventListener("click", login);