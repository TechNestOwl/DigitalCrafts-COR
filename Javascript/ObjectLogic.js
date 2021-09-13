function calculate(num1, num2, action) {
    const actions = {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => a / b,
    };
  
    return actions[action]?.(num1, num2) ?? "Calculation is not recognised";
  }
  calculate(2,2,)