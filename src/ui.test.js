const CalculatorUI = require('./ui');
const Calculator = require('./calculator');

describe('CalculatorUI', () => {
  let calculatorUI;
  let display;
  let buttons;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="calculator">
        <input type="text" class="calculator-display" readonly>
        <div class="calculator-buttons">
          <button class="calculator-button" value="1">1</button>
          <button class="calculator-button" value="2">2</button>
          <button class="calculator-button" value="3">3</button>
          <button class="calculator-button" value="+">+</button>
          <button class="calculator-button" value="4">4</button>
          <button class="calculator-button" value="5">5</button>
          <button class="calculator-button" value="6">6</button>
          <button class="calculator-button" value="-">-</button>
          <button class="calculator-button" value="7">7</button>
          <button class="calculator-button" value="8">8</button>
          <button class="calculator-button" value="9">9</button>
          <button class="calculator-button" value="*">*</button>
          <button class="calculator-button" value="0">0</button>
          <button class="calculator-button" value=".">.</button>
          <button class="calculator-button" value="=">=</button>
          <button class="calculator-button" value="/">/</button>
          <button class="calculator-button" value="C">C</button>
          <button class="calculator-button" value="DEL">DEL</button>
          <button class="calculator-button" value="+/-">+/-</button>
          <button class="calculator-button" value="%">%</button>
        </div>
      </div>
    `;

    calculatorUI = new CalculatorUI();
    display = document.querySelector('.calculator-display');
    buttons = document.querySelectorAll('.calculator-button');
  });

  test('should display input digits', () => {
    buttons[0].click(); // Click '1'
    buttons[1].click(); // Click '2'
    buttons[2].click(); // Click '3'
    expect(display.value).toBe('123');
  });

  test('should perform addition', () => {
    buttons[0].click(); // Click '1'
    buttons[3].click(); // Click '+'
    buttons[1].click(); // Click '2'
    buttons[14].click(); // Click '='
    expect(display.value).toBe('3');
  });

  test('should perform subtraction', () => {
    buttons[4].click(); // Click '4'
    buttons[7].click(); // Click '-'
    buttons[1].click(); // Click '2'
    buttons[14].click(); // Click '='
    expect(display.value).toBe('2');
  });

  test('should perform multiplication', () => {
    buttons[0].click(); // Click '1'
    buttons[11].click(); // Click '*'
    buttons[1].click(); // Click '2'
    buttons[14].click(); // Click '='
    expect(display.value).toBe('2');
  });

  test('should perform division', () => {
    buttons[4].click(); // Click '4'
    buttons[15].click(); // Click '/'
    buttons[1].click(); // Click '2'
    buttons[14].click(); // Click '='
    expect(display.value).toBe('2');
  });

  test('should calculate percentage', () => {
    buttons[4].click(); // Click '4'
    buttons[19].click(); // Click '%'
    expect(display.value).toBe('0.04');
  });

  test('should toggle sign', () => {
    buttons[4].click(); // Click '4'
    buttons[18].click(); // Click '+/-'
    expect(display.value).toBe('-4');
  });

  test('should input decimal', () => {
    buttons[4].click(); // Click '4'
    buttons[13].click(); // Click '.'
    buttons[0].click(); // Click '1'
    expect(display.value).toBe('4.1');
  });

  test('should clear display', () => {
    buttons[4].click(); // Click '4'
    buttons[16].click(); // Click 'C'
    expect(display.value).toBe('0');
  });

  test('should delete one character', () => {
    buttons[4].click(); // Click '4'
    buttons[0].click(); // Click '1'
    buttons[17].click(); // Click 'DEL'
    expect(display.value).toBe('4');
  });
});
