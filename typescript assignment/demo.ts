//OBJECTS
//first question

interface Item {
  name: string;
  price: number;
  quantity: number;
}

const thingsArray: Item[] = [
  { name: "juice", price: 50, quantity: 3 },
  { name: "cookie", price: 30, quantity: 9 },
  { name: "shirt", price: 880, quantity: 1 },
  { name: "pen", price: 100, quantity: 2 }
];

let totalPriceOfAllItems = 0;

thingsArray.forEach((item) => {
  const totalPriceEachItem = item.price * item.quantity;
  console.log(`Total price of ${item.name}: ${totalPriceEachItem}`);
  totalPriceOfAllItems += totalPriceEachItem;
});

console.log(`Total price of all items: ${totalPriceOfAllItems}`);

  //Second question
  interface User {
    name: string;
    email: string;
    password: string;
    age: number;
    gender: string;
    city: string;
    country: string;
}

const userProperty: User = {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "securepassword123",
    age: 30,
    gender: "male",
    city: "New York",
    country: "USA"
};

function check(obj: Record<string, any>, property: string): boolean {
    return Object.prototype.hasOwnProperty.call(obj, property);
}

console.log("Does 'age' exist in the object?", check(userProperty, "age"));
console.log("Does 'country' exist in the object?", check(userProperty, "country"));
console.log("Does 'firstName' exist in the object?", check(userProperty, "firstName"));
console.log("Does 'lastName' exist in the object?", check(userProperty, "lastName")); 

//third question
class Userexit {
  name: string;
  email: string;
  age: number;
  gender: string;
  city: string;
  country: string;

  constructor(name: string, email: string, age: number, gender: string, city: string, country: string) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.gender = gender;
      this.city = city;
      this.country = country;
  }
}

const userOne = new Userexit("John Doe", "johndoe@example.com", 30, "male", "New York", "USA");
const userTwo = new Userexit("Jane Smith", "janesmith@example.com", 25, "female", "Los Angeles", "USA");
const userThree = new Userexit("Ali Khan", "alikhan@example.com", 35, "male", "Karachi", "Pakistan");

console.log(userOne);
console.log(userTwo);
console.log(userThree);

//Four Question
interface PopulationRecord {
  name: string;
  gender: string;
  address: string;
  education: string;
  profession: string;
}

function saveRecords(): void {
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement).value;
  const address = (document.getElementById('address') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLSelectElement).value;
  const profession = (document.getElementById('profession') as HTMLSelectElement).value;

  const record: PopulationRecord = { name, gender, address, education, profession };

  let records: PopulationRecord[] = JSON.parse(localStorage.getItem('populationRecords') || '[]');
  records.push(record);

  localStorage.setItem('populationRecords', JSON.stringify(records));

  displayRecords();
}

function displayRecord(): void {
  const records: PopulationRecord[] = JSON.parse(localStorage.getItem('populationRecords') || '[]');
  const recordsContainer = document.getElementById('records') as HTMLElement;
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
function numbers(a: number, b: number): number {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}

console.log(numbers(2, 3));
console.log(numbers(5, 2));

//second question
function isLeapYears(years: number): boolean {
  if ((years % 4 === 0 && years % 100 !== 0) || years % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
const years: number = parseInt(prompt("Enter a year: ") || "0", 10);
if (isLeapYears(years)) {
  console.log(`${years} is a leap year.`);
} else {
  console.log(`${years} is not a leap year.`);
}


//third question
function calculateTrianglesArea(A: number, B: number, C: number): number {
  const s: number = (A + B + C) / 2;

  const area: number = Math.sqrt(s * (s - A) * (s - B) * (s - C));
  
  return area;
}

const A: number = 5;
const B: number = 6;
const C: number = 7;
const Area: number = calculateTrianglesArea(A, B, C);
console.log("The area of the triangle is:", Area);

//four question
function calculateAverages(marks: number[]): number {
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  return total / marks.length;
}

function calculatePercentages(marks: number[], totalMarksPerSubject: number): number {
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  return (total / (totalMarksPerSubject * marks.length)) * 100;
}

function mainFunctions(): void {
  const marks: number[] = [85, 90, 78];
  const totalMarksPerSubject: number = 100;

  const average: number = calculateAverages(marks);
  const percentage: number = calculatePercentages(marks, totalMarksPerSubject);

  console.log("Results:");
  console.log(`Average Marks: ${average.toFixed(2)}`);
  console.log(`Percentage: ${percentage.toFixed(2)}%`);
}

mainFunctions();

//five question
function customIndex(str: string, char: string): number {
  for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
          return i;
      }
  }
  return -1; 
}

const stringTest: string = "hello world";
const searchChars: string = "o";

const resultIs: number = customIndex(stringTest, searchChars);
console.log(`The index of '${searchChars}' in "${stringTest}" is: ${resultIs}`);

//six question
function removeVowel(sentence: string): string {
  const vowels = "aeiouAEIOU";
  let result: string = "";

  for (let i = 0; i < sentence.length; i++) {
      if (!vowels.includes(sentence[i])) {
          result += sentence[i];
      }
  }

  return result;
}
const sentences: string = "This is a test sentence.";
const myResult: string = removeVowel(sentences);
console.log(`Original Sentence: "${sentences}"`);
console.log(`Sentence without vowels: "${myResult}"`);

//seven question
function countVowelPairsIs(text: string): number {
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
const sentenceIs = "Pleases read this application and give me gratuity";
const Results = countVowelPairsIs(sentenceIs);
console.log(`Number of vowel pairs: ${Results}`);

//eight question
function convertToMeter(km: number): number {
  return km * 1000;
}

function convertToFeets(km: number): number {
  const meters = convertToMeters(km);
  return meters * 3.28084;
}

function convertToInche(km: number): number {
  const feet = convertToFeet(km);
  return feet * 12;
}

function convertToCentimeter(km: number): number {
  const meters = convertToMeters(km);
  return meters * 100;
}

// Example usage
const distanceInKms: number = 5;
console.log(`${distanceInKms} km in meters: ${convertToMeter(distanceInKms)} m`);
console.log(`${distanceInKms} km in feet: ${convertToFeets(distanceInKms)} ft`);
console.log(`${distanceInKms} km in inches: ${convertToInche(distanceInKms)} in`);
console.log(`${distanceInKms} km in centimeters: ${convertToCentimeter(distanceInKms)} cm`);

//Nine question
function calculateOvertimePayIs(WorkHours: number): number {
  const overtimeRate: number = 12.0;
  const regularHours: number = 40;
  const overtimeHours: number = WorkHours > regularHours ? WorkHours - regularHours : 0;
  const overtimePay: number = overtimeHours * overtimeRate;
  return overtimePay;
}
const WorkHours: number = 45; 
const overtimePayIs: number = calculateOvertimePay();

console.log(`Overtime pay for ${WorkHours} hours worked: Rs. ${overtimePayIs.toFixed(2)}`);

//Ten question 
function calculateDenomination(amount: number): { hundreds: number; fifties: number; tens: number } {
  const denominations = {
      hundred: 100,
      fifty: 50,
      ten: 10,
  };

  // Calculate the number of notes
  let remainingAmount: number = amount;
  const hundreds: number = Math.floor(remainingAmount / denominations.hundred);
  remainingAmount %= denominations.hundred;

  const fifties: number = Math.floor(remainingAmount / denominations.fifty);
  remainingAmount %= denominations.fifty;

  const tens: number = Math.floor(remainingAmount / denominations.ten);

  return {
      hundreds,
      fifties,
      tens,
  };
}

// Prompt user for input
const InputOfUser: string | null = prompt("Enter the amount to withdraw (must be a multiple of 10):");
const Amount: number = parseInt(userInput || "0", 10);

if (isNaN(Amount) || Amount % 10 !== 0) {
  alert("Invalid amount. Please enter a valid amount (multiple of 10).");
} else {
  const result = calculateDenomination(amount);
  alert(
      `You will have ${result.hundreds} hundred notes, ${result.fifties} fifty notes, and ${result.tens} ten notes.`
  );
}
