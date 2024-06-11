document.addEventListener('DOMContentLoaded', function() {
    // Retrieve persons from localStorage or initialize with default values
    var persons = JSON.parse(localStorage.getItem('persons')) || [];


    var userName = "";

   
    function clearFields() {
        document.getElementById("person").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pass").value = "";
    }

    window.signfunction = function signfunction() {
        
     /*   var nameRegex = /^[A-Za-z]+$/;
        var emailRegex = /^[A-Za-z0-9._%+-]+@(gmail|yahoo)\.com$/i; 
        var passwordRegex = /^(?=.*[A-Z])(?=.*\d{3})(?=.*[%$!#@])[A-Za-z\d%$!#@]{8,}$/;

        // Validate name
        if (!nameRegex.test(nameInput)) {
            document.getElementById("popo").innerHTML = "Name must contain only letters";
            return;
        }

        // Validate email
        if (!emailRegex.test(emailInput)) {
            document.getElementById("popo").innerHTML = "Invalid email format. Use gmail.com or yahoo.com";
            return;
        }

        // Validate password
        if (!passwordRegex.test(passInput)) {
            document.getElementById("popo").innerHTML = "Password must be at least 8 characters long, contain at least 3 digits, include special characters %$!#@, and start with a capital letter";
            return;
        }*/
            var nameInput = document.getElementById("person").value;
            var emailInput = document.getElementById("email").value;
            var passInput = document.getElementById("pass").value;
            
      
        var person = {
            name: nameInput,
            email: emailInput,
            password: passInput
        };

        // Check if email already exists
        var emailExists = persons.some(function(person) {
            return person.email === emailInput;
        });

        if (emailExists) {
            document.getElementById("popo").innerHTML = "Email already exists";
        } else {
            if (emailInput !== "" && nameInput !== "" && passInput !== "") {
                
            
            persons.push(person);
            localStorage.setItem('persons', JSON.stringify(persons));
            document.getElementById("popo").innerHTML = "Sign up successful";
            clearFields();
           
            }else{
                document.getElementById("popo").innerHTML = "please fill all fields";
                
            }

        }
    }

  
    window.login = function login() {
        var loginEmail = document.getElementById("loginemail").value;
        var loginPassword = document.getElementById("loginpassword").value;
        var loginSuccess = false;
        var loginn = false;

        for (var i = 0; i < persons.length; i++) {
            if (loginEmail === persons[i].email && loginPassword === persons[i].password) {
                loginSuccess = true;
                loginn = true;
                userName = persons[i].name;
                break;  
            } else if (loginEmail === persons[i].email && loginPassword !== persons[i].password) {
                loginSuccess = true;
                loginn = false;
                break;  
            } else if (loginEmail !== persons[i].email && loginPassword === persons[i].password) {
                loginSuccess = false;
                loginn = true;
                break;  
            } else {
                loginn = false;
                loginSuccess = false;
            }
        }

        if (loginSuccess && loginn) {
            localStorage.setItem('loggedInUser',userName);  // Store the username in localStorage
             window.location.href='welcome.html'
            document.getElementById("oooo").innerHTML = "Login successful";
            
           
           
             } else if (!loginSuccess && loginn) {
            document.getElementById("oooo").innerHTML = "email wrong";
        } else if ( loginSuccess && !loginn) {
            document.getElementById("oooo").innerHTML = "password wrong";
        } else {
            document.getElementById("oooo").innerHTML = "Invalid email or password. Please try again.";
        }
    }

     window.logout = function logout(){
     window.location.href='login.html';

}





});
