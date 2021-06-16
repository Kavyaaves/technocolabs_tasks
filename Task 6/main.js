// temperature in kelvin is assigned below. Since it is a constant, use const keyword
const kelvin = 293;

// temperature in celsius is 273 degrees less than kelvin
const celsius = kelvin - 273;

// Result of celsius is then converted to fahrenheit with the below formula
var fahrenheit = celsius * (9 / 5) + 32;

// Fahrenheit variable is rounded off using built-in floor() function
fahrenheit = Math.floor(fahrenheit);

// logging the result
console.log('The temperature is ', fahrenheit, ' degrees Fahrenheit');
