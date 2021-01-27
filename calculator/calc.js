var num1;
var num2;

function add(arr) {
    var result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = result + parseInt(arr[i]);
    }
    return result;
}

function sub(num1, num2) {
    var result = 0;
    result = num1 - num2;
    return result;
}

function mul(arr) {
    var result = 1;
    for (var i = 0; i < arr.length; i++) {
        result = result * parseInt(arr[i]);
    }
    return result;
}

function div(num1, num2) {
    var result = 0;
    if (num2 != 0) {
        result = num1 / num2;
        return result;
    }
    else {
        return "Can't divide by 0!";
    }
}


// Square Root function
function squareRoot(num) {
    return Math.sqrt(num);
}

// Min
function min(arr) {
    var result = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (result > arr[i]) result = arr[i];

    }
    return result;
}

// Max
function max(arr) {
    var result = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (result < arr[i]) result = arr[i];

    }
    return result;
}

(() => {
    let arr = new Array();
    let input = prompt('calculator!!\nTo addtion enter 1\nTo multiplication enter 2\n To division enter 3\n To subtraction enter 4 \n To minimum enter 5 \n To maximum enter 6 \n To square root enter 7');

    if (input == "1" || input == "2") {
        var amountOfNum = prompt("numbers you want to operate on: ");
        for (let i = 0; i < parseInt(amountOfNum); i++) {
            arr[i] = prompt("Your Number " + (i + 1));
        }
        if (input == "1") {
            result = add(arr);
            console.log(result);
        }
        else if (input == "2") {
            result = mul(arr);
            console.log(result);
        }
        else {
            console.log("Invalid");
        }
    }
    else if (input == "4" || input == "3") {
        if (input == "4") {

            result = sub(arr);
            console.log(result);
        }
        else if (input == "3") {
            var num1 = parseInt(prompt(" first number "));
            var num2 = parseInt(prompt(" second number "));
            result = div(num1, num2);
            console.log(result);
        }
    }
    else if (input == "5") {

        result = min(arr);
        console.log(result);

    }
    else if (input == "6") {

        result = max(arr);
        console.log(result);

    }

    else if (input == "7") {
        var num = parseInt(prompt(" f.number "));
        result = (num);
        console.log(result);

    }
    else {
        console.log("Invalid")
    }
})();