function add() {
    var val = 0, op = 0;
    val = func.textBox.value;
    op = val.charAt(val.length - 1); // get the last character of the string

    if (op == '+' || op == '-' || op == '*' || op == '/') {
        func.textBox.value = val.substring(0, val.length - 1);
        func.textBox.value += '+'; 
    } else {
        func.textBox.value += '+';
    }
}

function sub() {
    var val = 0, op = 0;
    val = func.textBox.value;
    op = val.charAt(val.length - 1);

    if (op == '+' || op == '-' || op == '*' || op == '/') {
        func.textBox.value = val.substring(0, val.length - 1);
        func.textBox.value += '-';
    } else {
        func.textBox.value += '-';
    }
}

function div() {
    var val = 0, op = 0;
    val = func.textBox.value;
    op = val.charAt(val.length - 1);

    if (op == '+' || op == '-' || op == '*' || op == '/') {
        func.textBox.value = val.substring(0, val.length - 1);
        func.textBox.value += '/';
    } else {
        func.textBox.value += '/';
    }
}

function mul() {
    var val = 0, op = 0;
    val = func.textBox.value;
    op = val.charAt(val.length - 1);

    if (op == '+' || op == '-' || op == '*' || op == '/') {
        func.textBox.value = val.substring(0, val.length - 1);
        func.textBox.value += '*';
    } else {
        func.textBox.value += '*';
    }
}