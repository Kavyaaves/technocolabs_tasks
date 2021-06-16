// Human years and dog years

// Assign human age to a constant
const myAge = 19;

// Assign a variable that will change
var earlyYears = 2;

// Reassigning earlyYears variable
earlyYears = earlyYears * 10.5;

// Assigning laterYears variable
var laterYears = myAge - 2;

// Calculate dog years
laterYears = laterYears * 4;

// Add earlyYears and laterYears to get your age in dog years
const myAgeinDogYears = earlyYears + laterYears;

// Assign your name to myName variable
var myName = 'KaVya';

// Convert myName to lowercase using built-in function
myName = myName.toLowerCase();

// Display human name, human age and dog age using string interpolation
console.log(
	'My name is ',
	myName,
	' . I am ',
	myAge,
	' years old in human years which is ',
	myAgeinDogYears,
	' years old in dog years.'
);
