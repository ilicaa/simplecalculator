let display = document.getElementById('display');
let displayValue = '';

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = '';
    }
    displayValue += value;
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    display.innerText = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        display.innerText = displayValue;
    } catch (error) {
        display.innerText = 'Error!';
    }
}

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case '0':
            document.querySelector('.zero').click();
            break;
        case '1':
            document.querySelector('button[onclick*="1"]').click();
            break;
        case '2':
            document.querySelector('button[onclick*="2"]').click();
            break;
        case '3':
            document.querySelector('button[onclick*="3"]').click();
            break;
        case '4':
            document.querySelector('button[onclick*="4"]').click();
            break;
        case '5':
            document.querySelector('button[onclick*="5"]').click();
            break;
        case '6':
            document.querySelector('button[onclick*="6"]').click();
            break;
        case '7':
            document.querySelector('button[onclick*="7"]').click();
            break;
        case '8':
            document.querySelector('button[onclick*="8"]').click();
            break;
        case '9':
            document.querySelector('button[onclick*="9"]').click();
            break;
        case '+':
            document.querySelector('.add').click();
            break;
        case '-':
            document.querySelector('button[onclick*="-"]').click();
            break;
        case '*':
            document.querySelector('button[onclick*="*"]').click();
            break;
        case '/':
            document.querySelector('button[onclick*="/"]').click();
            break;
        case '=':
        case 'Enter':
            document.querySelector('.equals').click();
            break;
        case '.':
            document.querySelector('button[onclick*="."]').click();
            break;
        case 'c':
        case 'C':
            document.querySelector('.side').click();
            break;
        default:
            break;
    }
    event.preventDefault();
});
