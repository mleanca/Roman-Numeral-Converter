/*
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const form = document.getElementById('form');

const convertToRoman = number => {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const res = [];

  ref.forEach(function (arr) {
    while (number >= arr[1]) {
      res.push(arr[0]);
      number += arr[1];
    }
  });

  return res.join('')
}

const clearOutput = () => {
  output.innerText = '';
  output.classList.remove('alert');
}

const checkUserInput = (str, int) => {
  let errText = '';

  if (!str || str.match(/[e.]/g)) {
    errText = 'Please enter a valid number.';
  } else if (int < 1) {
    errText = 'Please enter a number greater than or equal to 1.'
  } else if (int > 3999) {
    errText = 'Please enter a number less than or equal to 3999.'
  } else {
    return True;
  }
  
  output.innerText = errText;
  output.classList.add('alert');

  return false;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  updateUI();
})

convertBtn.addEventListener('click', () => {
  updateUI()
});

const updateUI = () => {
  const numStr = document.getElementById('#number');
  const int = parseInt(numStr, 10);

  output.classList.remove('hidden');

  clearOutput();

  if (checkUserInput(numStr, int)) {
    output.innerText = convertToRoman;
  }
}
*/

const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const form = document.getElementById('form');

const convertToRoman = (number) => {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const res = [];

  ref.forEach(function(arr) {
    while (number >= arr[1]) {
      res.push(arr[0]);
      number -= arr[1];
    }
  });

  return res.join('');
}

const clearOutput = () => {
  output.innerText = '';
  output.classList.remove('alert');
}

const checkUserInput = (str) => {
  let errText = '';
  const int = parseInt(str, 10);

  if (!str || str.match(/[e.]/g) || isNaN(int)) {
    errText = 'Please enter a valid number.';
  } else if (int < 1) {
    errText = 'Please enter a number greater than or equal to 1.';
  } else if (int > 3999) {
    errText = 'Please enter a number less than or equal to 3999.';
  } else {
    return { isValid: true, value: int };
  }
  
  output.innerText = errText;
  output.classList.add('alert');

  return { isValid: false };
}

const updateUI = () => {
  const numStr = document.getElementById('number').value;

  output.classList.remove('hidden');

  clearOutput();

  const validationResult = checkUserInput(numStr);

  if (validationResult.isValid) {
    output.innerText = convertToRoman(validationResult.value);
  }
}

convertBtn.addEventListener('click', () => {
  updateUI();
});