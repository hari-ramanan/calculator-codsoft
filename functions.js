let input="";

function appendnumber(number) {
    input += number;
    document.getElementById("result").value=input;
}

function performoperation(operator) {
    input += " " + operator + " ";
    document.getElementById("result").value = input;
}

function clearinput() {
    input = "";
    document.getElementById("result").value = input;
}

function calculateresult() {
    try {
        input = eval(input);
        document.getElementById("result").value = input;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
