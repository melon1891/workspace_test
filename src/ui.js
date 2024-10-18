const Calculator = require('./calculator');

class CalculatorUI {
  constructor() {
    this.calculator = new Calculator();
    this.display = document.querySelector('.calculator-display');
    this.buttons = document.querySelectorAll('.calculator-button');

    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.handleButtonClick(button.value);
      });
    });
  }

  handleButtonClick(value) {
    if (value >= '0' && value <= '9') {
      this.calculator.inputDigit(value);
    } else if (value === '.') {
      this.calculator.inputDecimal();
    } else if (value === 'C') {
      this.calculator.clear();
    } else if (value === 'DEL') {
      this.calculator.delete();
    } else if (value === '+/-') {
      this.calculator.toggleSign();
    } else if (value === '%') {
      this.calculator.inputPercent();
    } else if (value === '=') {
      this.calculator.calculate();
    } else {
      this.calculator.handleOperator(value);
    }

    this.updateDisplay();
  }

  updateDisplay() {
    this.display.value = this.calculator.currentValue;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new CalculatorUI();
});
