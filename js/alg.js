function verify() {
    console.log("X, Y")
    let X = parseFloat(elementX.value);
    let Y = parseFloat(elementY.value);
    console.log(X, Y)

    check = false;
    Z = " ";
    if (X>Y) {
        Z = X*Y;

        check = true;
        console.log(Z);
    }

    else{
        if (X + Y > 0) {
            Z = Math.log(X + Y);

            check = true;
            console.log(Z);
        } 
        else {
        Z = "Ошибка: X + Y ≤ 0";

        check = false;
        console.log("Ошибка: X + Y ≤ 0");
        }
    }

    document.getElementById("Z").value = Z;
}

function send() {
    if (check) {  //check=true
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

let Z;
let check = false;
const elementX=document.getElementById("X")
const elementY=document.getElementById("Y")

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener("click", send)
