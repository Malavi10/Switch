function q1() {
    let day;
    switch (new Date().getDay()) {
        case 0:
        case 6:
            day = "Weekend";            
            break;
    
        default:
            day = "Weekday";
    }
    document.getElementById("q1").innerHTML = "Today is a " + day;
}


function q2() {
    let grade = prompt('Enter Grade: A, B, C');
    let remarks;
    switch (grade) {
        case "A":
            remarks = "Excellent";            
            break;
        case "B":
            remarks = "Good";            
            break;
        case "C":
            remarks = "Average";
            break;
    
        default:
            remarks = "Fail";
    }
    document.getElementById("q2").innerHTML = "Your grade is " + remarks;
}


function q3() {
    let month = prompt('Enter Month:');
    let noOfDays;
    switch (month) {
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
            noOfDays = "31";            
            break;

        case "February":
            noOfDays = "28 or 29";            
            break;

        case "April":
        case "June":
        case "September":
        case "November":
            noOfDays = "30";
            break;
    
        default:
            noOfDays = "Error";
    }
    document.getElementById("q3").innerHTML = "The number of days in the given month is " + noOfDays;
}


function q4() {
    var fruits = prompt('Enter a fruit color:');
    var fruit;
    switch (fruits) {
        case "red":
        case "Red":
            fruit = "Apple";            
            break;

        case "orange":
        case "Orange":
            fruit = "Orange";            
            break;

        case "yellow":
        case "Yellow":
            fruit = "Banana";            
            break;
    
        default:
            fruit = "Unknown"
            break;
    }  
    document.getElementById('q4').innerHTML = fruit;  
}


function q5() {
    var months = prompt('Enter a month:');
    var season;
    switch (months) {
        case "Jan":
        case "Dec":
            season = "Winter";
            break;

        case "Feb":
        case "Mar":
            season = "Spring";            
            break;

        case "April":
        case "May":
        case "June":
            season = "Summer";            
            break;

        case "July":
        case "Aug":
        case "Mid-Sep":
            season = "Monsoon";            
            break;

        case "Sep":
        case "Nov":
            season = "Aytumn";            
            break;
    
        default:
            season = "Unknown"
            break;
    }  
    document.getElementById('q5').innerHTML = season;  
}


function q6() {
    var num = prompt('Enter a number from 0 to 5:')
    var numexp;
    switch (num) {
        case "0":
            numexp = "Zero";            
            break;

        case "1":
            numexp = "One";
            break;

        case "2":
            numexp = "Two";
            break;

        case "3":
            numexp = "Three";
            break;

        case "4":
            numexp = "Four";
            break;

        case "5":
            numexp = "Five";
            break;
    
        default:
            numexp = "Error."
            break;
    }
    document.getElementById('q6').innerHTML = numexp;
}


function q7() {
    var ceo = prompt('Enter the name of CEO of a browser:')
    var browser;
    switch (ceo) {
        case "Mitchell Baker":
            browser = "Firefox";            
            break;

        case "Sundar Pichai":
            browser = "Google";
            break;

        case "Sudhir Jatia":
            browser = "Safari";
            break;
  
        default:
            browser = "Error.Type another."
            break;
    }
    document.getElementById('q7').innerHTML = browser;
}


function q8() {
    var value = prompt('Enter:')
    var val;
    switch (typeOf value) {
        case 'string':
            console.log('String');           
            break;

        case "number":
            console.log('Number');
            break;

        case "boolean":
            console.log('Boolean');
            break;

        case "object":
            if(Array.isArray(value)){
                console.log('Array');
            } else {
                console.log('Object');
            }
  
        default:
            val = "Error.Type another."
            break;
    }
    document.getElementById('q8').innerHTML = val;
}


function q9() {
    var amount = prompt('Enter:')
    var discnt;
    switch (true) {
        case (amount >= 100):
            discnt = "10% OFF!";            
            break;

        case (amount >=50):
        case (amount <100):
            discnt = "5% off";
            break;

        default:
            discnt = "Error.Type another."
            break;
    }
    document.getElementById('q9').innerHTML = discnt;
}