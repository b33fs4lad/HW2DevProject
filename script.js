const display = document.getElementById('display');
const history = document.getElementById('history');

function updateDisplay(value) {
    if (display.value === 'Error') {
        display.value = '';
        history.textContent = '';
    }
    display.value += value;
}

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => updateDisplay(button.textContent));
});

document.getElementById('clear').addEventListener('click', () => {
    display.value = '';
    history.textContent = '';
});

document.getElementById('backspace').addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});

document.getElementById('decimal').addEventListener('click', () => {
    if (!display.value.includes('.')) updateDisplay('.');
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        const lastChar = display.value.slice(-1);
        if (display.value && !['+', '-', '*', '/'].includes(lastChar)) {
            updateDisplay(button.dataset.op);
        }
    });
});

document.getElementById('equals').addEventListener('click', () => {
    try {
        display.value = eval(display.value);
        history.textContent = display.value;
    } catch {
        display.value = 'Error';
    }
});

document.getElementById('plus-minus').addEventListener('click', () => {
    if (display.value) {
        display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value;
    }
});
