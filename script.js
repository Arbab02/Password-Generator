let password = document.getElementById('password');

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let symbol = ["!", "@", "$", "", "*", "?", "/", "#", "^"];

function generate() {
  let randomNum1 = numbers[Math.floor(Math.random() * numbers.length)]
  let randomNum2 = numbers[Math.floor(Math.random() * numbers.length)]
  let randomNum3 = numbers[Math.floor(Math.random() * numbers.length)]
  let randomNum4 = numbers[Math.floor(Math.random() * numbers.length)]
  let randomNum5 = numbers[Math.floor(Math.random() * numbers.length)]
  let randomNum6 = numbers[Math.floor(Math.random() * numbers.length)]
  let randomAlph1 = letters[Math.floor(Math.random() * letters.length)];
  let randomSymbol1 = symbol[Math.floor(Math.random() * symbol.length)];
  let randomSymbol2 = symbol[Math.floor(Math.random() * symbol.length)];
  let capital = letters.join('').toUpperCase().split('');
  let randomCapital = capital[Math.floor(Math.random() * capital.length)];

  password.value = randomNum1 + randomAlph1 + randomSymbol1 + randomNum2 + randomNum3 + randomNum4 + randomSymbol2 + randomNum5 + randomCapital + randomNum6;
}

function copy() {
  password.select();
  navigator.clipboard.writeText(password.value)

}



