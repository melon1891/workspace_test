class CalculatorUI {
  constructor() {
    // Use global Calculator class from calculator.js
    this.calculator = new Calculator();
    this.display = document.getElementById('display');
    this.expression = document.getElementById('expression');
    this.buttons = document.querySelectorAll('.calculator-button');

    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.handleButtonClick(button.getAttribute('data-value'));
      });
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => this.handleKeyPress(e));
  }

  handleButtonClick(value) {
    if (value >= '0' && value <= '9') {
      this.calculator.inputDigit(value);
    } else if (value === '.') {
      this.calculator.inputDecimal();
    } else if (value === 'C') {
      this.calculator.clear();
      this.expression.textContent = '';
    } else if (value === 'DEL') {
      this.calculator.delete();
    } else if (value === '+/-') {
      this.calculator.toggleSign();
    } else if (value === '%') {
      this.calculator.inputPercent();
    } else if (value === '=') {
      this.updateExpression();
      this.calculator.calculate();
    } else {
      this.updateExpression();
      this.calculator.handleOperator(value);
    }

    this.updateDisplay();
  }

  handleKeyPress(e) {
    const key = e.key;

    if (key >= '0' && key <= '9') {
      this.handleButtonClick(key);
    } else if (key === '.') {
      this.handleButtonClick('.');
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      this.handleButtonClick(key);
    } else if (key === 'Enter' || key === '=') {
      e.preventDefault();
      this.handleButtonClick('=');
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
      this.handleButtonClick('C');
    } else if (key === 'Backspace') {
      e.preventDefault();
      this.handleButtonClick('DEL');
    } else if (key === '%') {
      this.handleButtonClick('%');
    }
  }

  updateDisplay() {
    this.display.value = this.calculator.currentValue;
  }

  updateExpression() {
    if (this.calculator.previousValue !== null && this.calculator.operator) {
      const operatorSymbol = this.getOperatorSymbol(this.calculator.operator);
      this.expression.textContent = `${this.calculator.previousValue} ${operatorSymbol}`;
    }
  }

  getOperatorSymbol(operator) {
    const symbols = {
      '+': '+',
      '-': '−',
      '*': '×',
      '/': '÷'
    };
    return symbols[operator] || operator;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new CalculatorUI();
});
