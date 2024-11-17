//first question

var itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }
];
var totalPriceAllItems = 0;
itemsArray.forEach(function (item) {
    var totalPriceEachItem = item.price * item.quantity;
    console.log("Total price of ".concat(item.name, ": ").concat(totalPriceEachItem));
    totalPriceAllItems += totalPriceEachItem;
});
console.log("Total price of all items: ".concat(totalPriceAllItems));

//second question
const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "securepassword123",
    age: 30,
    gender: "male",
    city: "New York",
    country: "USA"
};

function checkProperty(obj, property) {
    return obj.hasOwnProperty(property);
}

console.log("Does 'age' exist in the object?", checkProperty(user, "age")); 
console.log("Does 'country' exist in the object?", checkProperty(user, "country"));
console.log("Does 'firstName' exist in the object?", checkProperty(user, "firstName"));
console.log("Does 'lastName' exist in the object?", checkProperty(user, "lastName")); 

//third question 
function User(name, email, age, gender, city, country) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.country = country;
}

const user1 = new User("John Doe", "johndoe@example.com", 30, "male", "New York", "USA");
const user2 = new User("Jane Smith", "janesmith@example.com", 25, "female", "Los Angeles", "USA");
const user3 = new User("Ali Khan", "alikhan@example.com", 35, "male", "Karachi", "Pakistan");

console.log(user1);
console.log(user2);
console.log(user3);


//Four Question
function PopulationRecord(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

function saveRecord() {
    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const profession = document.getElementById('profession').value;

    const record = new PopulationRecord(name, gender, address, education, profession);

    let records = JSON.parse(localStorage.getItem('populationRecords')) || [];
    records.push(record);

    localStorage.setItem('populationRecords', JSON.stringify(records));

    displayRecords();
}

function displayRecords() {
    const records = JSON.parse(localStorage.getItem('populationRecords')) || [];
    const recordsContainer = document.getElementById('records');
    recordsContainer.innerHTML = '';

    records.forEach((record, index) => {
        recordsContainer.innerHTML += `
            <p><strong>Record ${index + 1}:</strong></p>
            <p>Name: ${record.name}</p>
            <p>Gender: ${record.gender}</p>
            <p>Address: ${record.address}</p>
            <p>Education: ${record.education}</p>
            <p>Profession: ${record.profession}</p>
            <hr>
        `;
    });
}

document.addEventListener('DOMContentLoaded', displayRecords);

//FUNCTIONS, SWITCHSTATEMENTS, WHILE... DO-WHILE LOOPS
//first question
function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
      result *= a;
    }
    return result;
  }
  
  console.log(power(2, 3));
  console.log(power(5, 2));
  

//second question
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  const year = parseInt(prompt("Enter a year: "), 10);
  if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
  
  //third question
  function calculateTriangleArea(a, b, c) {
    const s = (a + b + c) / 2;

    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
    return area;
  }
  
  const a = 5;
  const b = 6;
  const c = 7;
  const area = calculateTriangleArea(a, b, c);
  console.log("The area of the triangle is:", area);
  
  //four question
function calculateAverage(marks) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}

function calculatePercentage(marks, totalMarksPerSubject) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return (total / (totalMarksPerSubject * marks.length)) * 100;
}

function mainFunction() {
    const marks = [85, 90, 78];
    const totalMarksPerSubject = 100;

    const average = calculateAverage(marks);
    const percentage = calculatePercentage(marks, totalMarksPerSubject);

    console.log("Results:");
    console.log(`Average Marks: ${average.toFixed(2)}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
}

mainFunction();

//five question
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i; 
        }
    }
    return -1;
}

const testString = "hello world";
const searchChar = "o";

const result = customIndexOf(testString, searchChar);
console.log(`The index of '${searchChar}' in "${testString}" is: ${result}`);

//six question
function removeVowels(sentence) {
    const vowels = "aeiouAEIOU";
    let result = "";

    for (let i = 0; i < sentence.length; i++) {
        if (!vowels.includes(sentence[i])) {
            result += sentence[i];
        }
    }

    return result;
}

const isSentence = "This is a test sentence.";
const results = removeVowels(isSentence);
console.log(`Original Sentence: "${isSentence}"`);
console.log(`Sentence without vowels: "${isSentence}"`);

//seven question
function countVowelPairs(text) {
    const vowels = "aeiou";
    let count = 0;
    text = text.toLowerCase();
    for (let i = 0; i < text.length - 1; i++) {
        const char1 = text[i];
        const char2 = text[i + 1];

        switch (true) {
            case vowels.includes(char1) && vowels.includes(char2):
                count++;
                break;
        }
    }
    return count;
}
const sentence = "Pleases read this application and give me gratuity";
const ResultIs= countVowelPairs(sentence);
console.log(`Number of vowel pairs: ${ResultIs}`);

//eight question
function convertToMeters(km) {
    return km * 1000;
}
function convertToFeet(km) {
    const meters = convertToMeters(km);
    return meters * 3.28084;
}
function convertToInches(km) {
    const feet = convertToFeet(km);
    return feet * 12;
}
function convertToCentimeters(km) {
    const meters = convertToMeters(km);
    return meters * 100;
}
const distanceInKm = 5;
console.log(`${distanceInKm} km in meters: ${convertToMeters(distanceInKm)} m`);
console.log(`${distanceInKm} km in feet: ${convertToFeet(distanceInKm)} ft`);
console.log(`${distanceInKm} km in inches: ${convertToInches(distanceInKm)} inches`);
console.log(`${distanceInKm} km in centimeters: ${convertToCentimeters(distanceInKm)} cm`);

//Nine question
function calculateOvertimePay(hoursWorked) {
    const overtimeRate = 12.0; 
    const regularHours = 40; 

    const overtimeHours = hoursWorked > regularHours ? hoursWorked - regularHours : 0;

    const overtimePay = overtimeHours * overtimeRate;

    return overtimePay;
}

const hoursWorked = 45; 
const overtimePay = calculateOvertimePay(hoursWorked);

console.log(`Overtime pay for ${hoursWorked} hours worked: Rs. ${overtimePay.toFixed(2)}`);

//Ten question
function calculateDenominations(amount) {
    const denominations = {
        hundred: 100,
        fifty: 50,
        ten: 10,
    };

    // Calculate the number of notes
    let remainingAmount = amount;
    const hundreds = Math.floor(remainingAmount / denominations.hundred);
    remainingAmount %= denominations.hundred;

    const fifties = Math.floor(remainingAmount / denominations.fifty);
    remainingAmount %= denominations.fifty;

    const tens = Math.floor(remainingAmount / denominations.ten);

    return {
        hundreds,
        fifties,
        tens,
    };
}

// Prompt user for input
const userInput = prompt("Enter the amount to withdraw (must be a multiple of 10):");
const amount = parseInt(userInput, 10);

if (isNaN(amount) || amount % 10 !== 0) {
    alert("Invalid amount. Please enter a valid amount (multiple of 10).");
} else {
    const result = calculateDenominations(amount);
    alert(
        `You will have ${result.hundreds} hundred notes, ${result.fifties} fifty notes, and ${result.tens} ten notes.`
    );
}
