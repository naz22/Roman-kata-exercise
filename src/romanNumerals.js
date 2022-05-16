const romanMap = {
  MV: 4000,
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

export function romanNumeralToNumber(romanNumb){

  // outside for loop for time complexity and allow for different word e.g. nil
  if(romanNumb === 'nulla'){
    return 0;
  }

  let result = 0;

  for (let i=0; i < romanNumb.length; i++){
      const cur = romanMap[romanNumb[i]];
      const next = romanMap[romanNumb[i+1]];

      if (cur < next){
          result += next - cur
          i++
      } else {
          result += cur
      }
  }

  return result; 
}

export function numberToRomanNumeral(number) {
  // outside for loop for time complexity and allow for different word e.g. nil
  if(number === 0){
    return 'nulla';
  }

  let result = '';
  
  for (let key in romanMap) {  
    const repeatCounter = Math.floor(number / romanMap[key]);
    
    if (repeatCounter !== 0) {
      result += key.repeat(repeatCounter);
    }
    
    number %= romanMap[key];
    
    if (number === 0) return result;
  }
  
  return result;
  }


