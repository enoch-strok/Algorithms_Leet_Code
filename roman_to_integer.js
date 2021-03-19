var romanToInt = function(s) {
    romanKey = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
    };
    let intArray = [];
    let sum = 0;

  for (let i = 0; i <= s.length - 1; i++){
    for (const x in romanKey) {
        if (x === s[i]){
          intArray.push(romanKey[x]);
        };
      };
    };
    for (let i = 0; i <= intArray.length - 1; i++){
      if (intArray[i] < intArray[i+1]){
        sum += (intArray[i+1] - intArray[i]);
        i += 1;
      }else{
        sum += intArray[i];
      };
    }
    return sum;
};

romanToInt('III');
romanToInt('IV');
romanToInt('IX');
romanToInt('LVIII');
romanToInt('MCMXCIV');
  
  
// romanKey2 = {
//   'CM': 900,
//   'CD': 400,
//   'XC': 90,
//   'XL': 40,
//   'IX': 9,
//   'IV': 4,
//   'M': 1000,
//   'D': 500,
//   'C': 100,
//   'L': 50,
//   'X': 10,
//   'V': 5,
//   'I': 1
// };



// Input: s = "III"
// Output: 3
// Example 2:

// Input: s = "IV"
// Output: 4
// Example 3:

// Input: s = "IX"
// Output: 9
// Example 4:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.