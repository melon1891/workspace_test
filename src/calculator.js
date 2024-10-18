class Calculator {
  constructor() {
    this.currentValue = '0';
    this.previousValue = null;
    this.operator = null;
  }

  inputDigit(digit) {
    if (this.currentValue === '0') {
      this.currentValue = digit;
    } else {
      this.currentValue += digit;
    }
  }

  inputDecimal() {
    if (!this.currentValue.includes('.')) {
      this.currentValue += '.';
    }
  }

  clear() {
    this.currentValue = '0';
    this.previousValue = null;
    this.operator = null;
  }

  delete() {
    this.currentValue = this.currentValue.slice(0, -1) || '0';
  }

  toggleSign() {
    this.currentValue = (parseFloat(this.currentValue) * -1).toString();
  }

  inputPercent() {
    this.currentValue = (parseFloat(this.currentValue) / 100).toString();
  }

  handleOperator(nextOperator) {
    const inputValue = parseFloat(this.currentValue);

    if (this.operator && this.previousValue !== null) {
      this.calculate();
    } else {
      this.previousValue = inputValue;
    }

    this.operator = nextOperator;
    this.currentValue = '0';
  }

  calculate() {
    let result;
    const prev = this.previousValue;
    const current = parseFloat(this.currentValue);

    if (this.operator === '+') {
      result = prev + current;
    } else if (this.operator === '-') {
      result = prev - current;
    } else if (this.operator === '*') {
      result = prev * current;
    } else if (this.operator === '/') {
      result = prev / current;
    }

    this.currentValue = result.toString();
    this.previousValue = null;
    this.operator = null;
  }
}

module.exports = Calculator;
