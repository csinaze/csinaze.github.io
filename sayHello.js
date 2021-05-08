function sayHello () {
    var name = document.getElementById("name").value;
    var pass = document.getElementById("password").value;
    var message = "Welcome back homie!";
    if (name === "admin" && pass === "admin1") {

        document.getElementById("hello").textContent = message;

    }
}