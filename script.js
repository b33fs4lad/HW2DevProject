const display = document.getElementById('display');
const history = document.getElementById('history');

// Function to update display safely
function updateDisplay(value) {
    if (display.value === 'Error') {
        display.value = '';
        history.textContent = '';
    }
    display.value += value;
}

// Number button event listener
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => updateDisplay(button.textContent));
});

// Clear display
document.getElementById('clear').addEventListener('click', () => {
    display.value = '';
    history.textContent = '';
});

// Backspace function
document.getElementById('backspace').addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});

// Decimal button
document.getElementById('decimal').addEventListener('click', () => {
    if (!display.value.includes('.')) updateDisplay('.');
});

// Operator buttons
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        const lastChar = display.value.slice(-1);
        if (display.value && !['+', '-', '*', '/'].includes(lastChar)) {
            updateDisplay(button.dataset.op);
        }
    });
});

// Equals button functionality
document.getElementById('equals').addEventListener('click', () => {
    try {
        display.value = eval(display.value);
        history.textContent = display.value;
    } catch {
        display.value = 'Error';
    }
});

// Plus-Minus toggle
document.getElementById('plus-minus').addEventListener('click', () => {
    if (display.value) {
        display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value;
    }
});
