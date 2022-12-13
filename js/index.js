/*created by ZEUS*/
/*created by ZEUS*/
/*created by ZEUS*/
function add(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=a+b;
     d='no operation here ';
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function sub(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=a-b;
     d=b-a;
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function mul(){
    var a,b,c;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=a*b;
     d='no operation here ';
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function div(){
    var a,b,c;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=a/b;
     d=b/a;
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function inc(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=++a;
     d=++b;
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function dec(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=--a;
     d=--b;
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function pow(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=a**b;
     d=b**a
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function equ(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=(b);
     d=(a);
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function plusequ(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=(a+=b);
     d=(b+=a);
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function subequ(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=(a-=b);
     d=(b-=a);
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function mulequ(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=(a*=b);
     d=(b*=a);
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}
function divequ(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=(a/=b);
     d=(b/=a);
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function floorequ(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=(a%=b);
     d=(b%=a);
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function powequ(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=(a**=b);
     d=(b**=a);
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function smallequ(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=(a<<b);
     d=(b<<a);
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function greatequ(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=(a>>b);
     d=(b>>a);
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function and(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=(a&=b);
     d=(b&=a);
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function xor(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=(a^=b);
     d=(b^=a);
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function or(){
    var a,b,c;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=(a|=b);
     d=(b|=a);
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function logand(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=(a&&=b);
     d=(b&&=a);
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function lognull(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=(a??=b);
     d=(b??=a);
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

function logor(){
    var a,b,c,d;
     a=parseInt(document.getElementById("screen1").value);
     b=parseInt(document.getElementById("screen2").value);
     c=(a||=b);
     d=(b||=a);
     document.getElementById("output").value =c;
     document.getElementById("output1").value =d;
}

/*created by ZEUS*//*created by ZEUS*//*created by ZEUS*//*created by ZEUS*/
/**function load() {

    var btns = document.querySelectorAll('#calculator span');
    var operators = ['+', '-', 'x', '÷'];
    var inputScreen = document.querySelector('#screen');
    var btnValue;
    var input;

    for(var i=0; i< btns.length; i++) {

        var decimalAdded = false; // Flag used to avoid two decimal

        btns[i].addEventListener('click', function () {

            btnValue = this.innerHTML;
            input = inputScreen.innerHTML;

            switch (btnValue) {
                case 'C':
                    inputScreen.innerHTML = '';
                    decimalAdded = false;
                    break;
                case '=':

                    // Last char of string
                    var lastChar = input[input.length - 1];

                    // Replace x to *, + to / which could be calculated in eval
                    input = input.replace(/x/g, '*').replace(/÷/g, '/');

                    // Checking the last character of the input.
                    // If it's an operator or a decimal, remove it
                    // /.$/ means last char in regex
                    if(operators.indexOf(lastChar) > -1 || lastChar == '.')
                        input = input.replace(/.$/, '');

                    if(input) {
                        // If the argument is an expression, eval() evaluates the expression.
                        // If the argument is one or more JavaScript statements, eval() executes the statements.
                        inputScreen.innerHTML = eval(input);
                    }
                    decimalAdded = false;
                    break;
                case '.':
                    if(!decimalAdded) {
                        inputScreen.innerHTML += btnValue;
                        decimalAdded = true;
                    }
                    break;
                case '+':
                case '-':
                case 'x':
                case '÷':
                    // Last char of string
                    var lastChar = input[input.length - 1];

                    // Only add operator if input is not empty and there is no operator at the last
                    if(input != '' && operators.indexOf(lastChar) == -1)
                        inputScreen.innerHTML += btnValue;

                    // Allows minus if the string is empty. The first number could be under zero
                    else if(input == '' && btnValue == '-')
                        inputScreen.innerHTML += btnValue;

                    // Allows to represent the last operation
                    if(operators.indexOf(lastChar) > -1 && input.length > 1) {
                        inputScreen.innerHTML = input.replace(/.$/, btnValue);
                    }
                    decimalAdded = false;
                    break;
                default:
                    inputScreen.innerHTML += btnValue;
                    decimalAdded = false;
                    break;
            }
        });
    }
}*/