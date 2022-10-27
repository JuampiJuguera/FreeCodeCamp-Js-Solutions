/*Ejercicio 1

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.



function palindrome(str) {
  const regex = /[A-Za-z0-9]/g;
  let originalStr = str.match(regex).join("").toLowerCase();
  let reversedStr = originalStr.split("").reverse().join("");
  console.log(originalStr === reversedStr);
  if (originalStr === reversedStr) {
    return true;
  }
  return false;
}

palindrome("never odd or even");
*/

/*Ejercicio 2

Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case.


const romanObject = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
  1000: "M",
  2000: "MM",
  3000: "MMM",
};

function convertToroman(num, romanObject) {
  const digits = String(num).split("");
  let romanNumber = "";
  for (let i = 0; i < digits.length; i++) {
    let objectKey = digits[i] * Math.pow(10, digits.length - i - 1);
        if (romanObject[objectKey]) {
      romanNumber += romanObject[objectKey];
    }
  }
  return romanNumber;
}

console.log(convertToroman(143, romanObject));
*/

/*Ejercicio 3


One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


const root13 = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
  9: "I",
  10: "J",
  11: "K",
  12: "L",
  13: "M",
  14: "N",
  15: "O",
  16: "P",
  17: "Q",
  18: "R",
  19: "S",
  20: "T",
  21: "U",
  22: "V",
  23: "W",
  24: "X",
  25: "Y",
  26: "Z",
  27: "A",
  28: "B",
  29: "C",
  30: "D",
  31: "E",
  32: "F",
  33: "G",
  34: "H",
  35: "I",
  36: "J",
  37: "K",
  38: "L",
  39: "M",
};

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
alphabetArr = alphabet.split("");
console.log(alphabetArr);
let codeStr = "";
function rot13(str, root13, alphabet) {
  strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    let key = alphabetArr.indexOf(strArr[i]);
    if (key === -1) {
      codeStr += strArr[i];
    } else {
      codeStr += root13[key + 14];
    }
  }
  return codeStr;
}

console.log(
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.", root13, alphabetArr)
);
*/

/*Ejercicio 4


Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


function telephoneCheck(str) {
  const regex = /^1?\s?((\(\d{3}\))|(\d{3}))[\s.-]?\d{3}[\s.-]?\d{4}$/;
  if (regex.test(str)) {
    return true;
  } else {
    return false;
  }
}

console.log(telephoneCheck("555-5555"));*/

/* Callbacks with 2d array
    
let cashbackAccount = [
  ["PENNY", 3],
  ["NICKEL", 40],
  ["DIME", 50],
  ["QUARTER", 10],
  ["ONE", 20],
  ["FIVE", 10],
  ["TEN", 5],
  ["TWENTY", 5],
  ["ONE HUNDRED", 1],
];

let cashmap = cashbackAccount.map((a) => a[1]);

let cashcount = 0;
let cashtotal = cashbackAccount.reduce((count, cash) => count + cash[1], 0);

let cashfiltered = cashbackAccount.filter((cash) => cash[1] < 10);
console.log(cashtotal);
console.log(cashmap);
console.log(cashfiltered);
*/

/*Ejercicio 5

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

function checkCashRegister(price, cash, cid) {
  let denomination = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];

  let clientCashback = [
    ["ONE HUNDRED", 0],
    ["TWENTY", 0],
    ["TEN", 0],
    ["FIVE", 0],
    ["ONE", 0],
    ["QUARTER", 0],
    ["DIME", 0],
    ["NICKEL", 0],
    ["PENNY", 0],
  ];

  let totalCash =
    cid.reverse().reduce((count, cash) => count + cash[1], 0) * 100;

  let bigCid = cid.map((cash) => [cash[0], Math.round(cash[1] * 100)]);
  let cashbackDifference = (cash - price) * 100;
  if (totalCash === cashbackDifference) {
    return { status: "CLOSED", change: [...cid.reverse()] };
  }

  for (let i = 0; i < denomination.length; i++) {
    while (
      denomination[i] <= cashbackDifference &&
      bigCid[i][1] - denomination[i] >= 0
    ) {
      bigCid[i][1] -= denomination[i];
      clientCashback[i][1] += denomination[i];
      cashbackDifference -= denomination[i];
      //console.log(`$denomination:  ${denomination[i]}:${i}`);
      //console.log(`${cashbackDifference}`);
    }
  }

  if (cashbackDifference > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  let clientCashbackReturn = clientCashback
    .filter((cash) => cash[1] > 0)
    .map((cash) => [cash[0], cash[1] / 100]);

  return { status: "OPEN", change: [...clientCashbackReturn] };
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);*/
