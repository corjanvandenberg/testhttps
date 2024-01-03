// let firstname = "bro";
// let number = 21;
// let student = true;
//console.log("hello", firstname)
//console.log("you are", number,  "years old")
//console.log("student status: ", student)

// paragrafen vervangen met de variables boven
//document.getElementById("p1").innerHTML = "hello" + firstname
//document.getElementById("p2").innerHTML = "you are " + number + " years old"
//document.getElementById("p3").innerHTML = "enrolled" + student

//username variabele zetten. vervolgens click registratie ophalen en functie runnen. functie is waarde van text opaheln en in console printen
// let username;
// document.getElementById("mybutton").onclick = function(){
//     username = document.getElementById("mytext").value;
//     console.log(username)
//     document.getElementById("my label").innerHTML = "hi "+ username
// }

// JavaScript to create a simple X vs Y chart

// Data for the chart
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

// Configuration options
const config = {
    type: 'line',
    data: data,
};

// Create the chart
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
