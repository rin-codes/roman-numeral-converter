// Variable Declarations // 
const arabicNumber = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const romanNumber = document.getElementById('output');

// Event Listeners //
convertButton.addEventListener('click', () => {
  let value = arabicNumber.value;
  if (!value) {
    romanNumber.innerText = 'Please enter a valid number';
  } else if (value < 0) {
    romanNumber.innerText = 'Please enter a number greater than or equal to 1.';
  } else if (value > 3999) {
    romanNumber.innerText = 'Please enter a number less than or equal to 3999.';
  } else {
    convertNumber();
  }
});

arabicNumber.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    let value = arabicNumber.value;
    if (!value) {
      romanNumber.innerText = 'Please enter a valid number';
    } else if (value < 0) {
      romanNumber.innerText = 'Please enter a number greater than or equal to 1.';
    } else if (value > 3999) {
      romanNumber.innerText = 'Please enter a number less than or equal to 3999.';
    } else {
      convertNumber();
    }
  }
});

// Arrays of numbers //
const arabicNums = [
  1000, 900, 500, 400,
  100, 90, 50, 40, 
  10, 9, 5, 4, 1
];

const romanNums = [
  'M', 'CM', 'D', 'CD', 
  'C', 'XC', 'L', 'XL',
  'X', 'IX', 'V', 'IV', 'I'
];

// Converting Function //
const convertNumber = () => {
  let value = arabicNumber.value;
  let result = '';
  for (let i=0; i<arabicNums.length; i++) {
    while (value >= arabicNums[i]) {
      result += romanNums[i];
      value -= arabicNums[i];
    }
    romanNumber.innerText = `Roman number: 
    ${result}`;
  }
}