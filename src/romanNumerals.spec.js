import {numberToRomanNumeral, romanNumeralToNumber} from './romanNumerals';

describe('romanNumerals', () => {
  describe('numberToRomanNumeral', () => {
    it.each([
      [0, 'nulla'],
      [1, 'I'],
      [2, 'II'],
      [3, 'III'],
      [4, 'IV'],
      [5, 'V'],
      [6, 'VI'],
      [7, 'VII'],
      [8, 'VIII'],
      [9, 'IX'],
      [10, 'X'],
      [11, 'XI'],
      [12, 'XII'],
      [19, 'XIX'],
      [20, 'XX'],
      [39, 'XXXIX'],
      [40, 'XL'],
      [41, 'XLI'],
      [42, 'XLII'],
      [49, 'XLIX'],
      [50, 'L'],
      [51, 'LI'],
      [59, 'LIX'],
      [90, 'XC'],
      [100, 'C'],
      [101, 'CI'],
      [199, 'CXCIX'],
      [200, 'CC'],
      [400, 'CD'],
      [500, 'D'],
      [900, 'CM'],
      [1982, 'MCMLXXXII'],
      [1992, 'MCMXCII'],
      [2002, 'MMII'],
      [3000, 'MMM'],
    ])('converts %i to %s', (decimalNumber, romanNumeral) => {
      expect(numberToRomanNumeral(decimalNumber)).toEqual(romanNumeral);
    });
  });
});


describe('romanNumerals', () => {
  describe('romanNumeralToNumber', () => {
    it.each([
      ['nulla', 0],
      ['I', 1],
      ['II', 2],
      ['III', 3],
      ['IV', 4],
      ['V', 5],
      ['VI', 6],
      ['VII', 7],
      ['VIII', 8 ],
      ['IX', 9],
      ['X', 10],
      ['XI', 11],
      ['XII', 12],
      ['XIX', 19],
      ['XX', 20],
      ['XXXIX', 39],
      ['XL', 40],
      ['XLI', 41],
      ['XLII', 42],
      ['XLIX', 49],
      ['L', 50],
      ['LI', 51],
      ['LIX', 59],
      ['XC', 90],
      ['C', 100],
      ['CI', 101],
      ['CXCIX', 199],
      ['CD', 400],
      ['D', 500],
      ['CM', 900],
      ['MCMLXXXII', 1982],
      ['MCMXCII', 1992],
      ['MMII', 2002],
      ['MMM', 3000],

    ])('converts %s to %i', (romanNumeral, decimalNumber) => {
      expect(romanNumeralToNumber(romanNumeral)).toEqual(decimalNumber);
    });
  });
});