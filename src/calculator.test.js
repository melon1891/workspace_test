const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should add two numbers', () => {
    calculator.inputDigit('2');
    calculator.handleOperator('+');
    calculator.inputDigit('3');
    calculator.calculate();
    expect(calculator.currentValue).toBe('5');
  });

  test('should subtract two numbers', () => {
    calculator.inputDigit('5');
    calculator.handleOperator('-');
    calculator.inputDigit('3');
    calculator.calculate();
    expect(calculator.currentValue).toBe('2');
  });

  test('should multiply two numbers', () => {
    calculator.inputDigit('2');
    calculator.handleOperator('*');
    calculator.inputDigit('3');
    calculator.calculate();
    expect(calculator.currentValue).toBe('6');
  });

  test('should divide two numbers', () => {
    calculator.inputDigit('6');
    calculator.handleOperator('/');
    calculator.inputDigit('3');
    calculator.calculate();
    expect(calculator.currentValue).toBe('2');
  });

  test('should calculate percentage', () => {
    calculator.inputDigit('50');
    calculator.inputPercent();
    expect(calculator.currentValue).toBe('0.5');
  });

  test('should toggle sign', () => {
    calculator.inputDigit('5');
    calculator.toggleSign();
    expect(calculator.currentValue).toBe('-5');
  });

  test('should input decimal', () => {
    calculator.inputDigit('5');
    calculator.inputDecimal();
    calculator.inputDigit('5');
    expect(calculator.currentValue).toBe('5.5');
  });

  test('should clear all', () => {
    calculator.inputDigit('5');
    calculator.clear();
    expect(calculator.currentValue).toBe('0');
  });

  test('should delete one character', () => {
    calculator.inputDigit('5');
    calculator.inputDigit('5');
    calculator.delete();
    expect(calculator.currentValue).toBe('5');
  });
});
