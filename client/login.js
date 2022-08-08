//sign up function//
function SignupFunction(e){
    event.preventDefault();
    
    //get the username and passowrd values from the form
    var username = document.getElementById('username-rgs').value;
    var password = document.getElementById('password-rgs').value;
    if(username != ""|| password !=""){

    
    //pass the username and password values to the variable user
    var user =
        {
            username: username,
            password: password
        }
    //convert the user to string and store it in variable json then save it to the localStorage
    var json = JSON.stringify(user);
    console.log(json)
    localStorage.setItem(username,json);
    
    //localStorage.setItem(username, json);
    alert('You have successfully registered!');
    }
    else{
        alert("Please enter valid username and password.")
    }
}

//login function//
function LoginFunction(e){
    event.preventDefault();

    var username = document.getElementById('username-login').value;
    var password = document.getElementById('password-login').value;
    //var result = document.getElementById('result').value;

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    //console.log(data);

    if (user == null)
    {
        //console.log("user not found!");
        alert("user not found!");
    }

    else if (username == data.username && password == data.password)
    {
        console.log('You are logged in');
        alert('You are logged in');
        window.location.replace("./index.html");
    }


    else
    {
        console.log('wrong password');
        alert('wrong password');
    }
}
