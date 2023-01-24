function proc() {
    let a = document.getElementById("stat").textContent;
    document.getElementById("stat").innerHTML = ++a;
}

function cl1() {
    document.getElementById("men1").disabled = true;
    let timerId = setInterval(proc, 500);
    let timer2 = setInterval(() => {
        let a = document.getElementById("1").textContent;
        a--;
        document.getElementById("1").innerHTML = a;
    }, 1000);
    setTimeout(() => {
        clearInterval(timerId);
        clearInterval(timer2);
        document.getElementById("1").innerHTML = 30;
        document.getElementById("men1").disabled = false;
        }, 30000);
}

function cl5() {
    document.getElementById("men5").disabled = true;
    let timerId = setInterval(proc, 10);
    let timer2 = setInterval(() => {
        let a = document.getElementById("5").textContent;
        a--;
        document.getElementById("5").innerHTML = a;
    }, 1000);
    setTimeout(() => {
        clearInterval(timerId);
        clearInterval(timer2);
        document.getElementById("5").innerHTML = 30;
        document.getElementById("men5").disabled = false;
    }, 30000);
}

function cl2() {
    document.getElementById("men2").disabled = true;
    let timerId = setInterval(proc, 250);
    let timer2 = setInterval(() => {
        let a = document.getElementById("2").textContent;
        a--;
        document.getElementById("2").innerHTML = a;
    }, 1000);
    setTimeout(() => {
        clearInterval(timerId);
        clearInterval(timer2);
        document.getElementById("2").innerHTML = 30;
        document.getElementById("men2").disabled = false;
    }, 30000);
}

function cl3() {
    document.getElementById("men3").disabled = true;
    let timerId = setInterval(proc, 100);
    let timer2 = setInterval(() => {
        let a = document.getElementById("3").textContent;
        a--;
        document.getElementById("3").innerHTML = a;
    }, 1000);
    setTimeout(() => {
        clearInterval(timerId);
        clearInterval(timer2);
        document.getElementById("3").innerHTML = 30;
        document.getElementById("men3").disabled = false;
    }, 30000);
}

function cl4() {
    document.getElementById("men4").disabled = true;
    let timerId = setInterval(proc, 50);
    let timer2 = setInterval(() => {
        let a = document.getElementById("4").textContent;
        a--;
        document.getElementById("4").innerHTML = a;
    }, 1000);
    setTimeout(() => {
        clearInterval(timerId);
        clearInterval(timer2);
        document.getElementById("4").innerHTML = 30;
        document.getElementById("men4").disabled = false;
    }, 30000);
}

function dob1() {
    let a = document.getElementById("stat").textContent;
    if (Number(a) >= 100) {
        a -= 100;
        document.getElementById("stat").innerHTML = a;
        document.getElementById("men1").innerHTML = "Кликер за 100";
        document.getElementById("men1").setAttribute('onclick', 'cl1()');
    }
}

function dob2() {
    let a = document.getElementById("stat").textContent;
    if (Number(a) >= 500) {
        a -= 500;
        document.getElementById("stat").innerHTML = a;
        document.getElementById("men2").innerHTML = "Кликер за 500";
        document.getElementById("men2").setAttribute('onclick', 'cl2()');
    }
}

function dob3() {
    let a = document.getElementById("stat").textContent;
    if (Number(a) >= 1000) {
        a -= 1000;
        document.getElementById("stat").innerHTML = a;
        document.getElementById("men3").innerHTML = "Кликер за 1000";
        document.getElementById("men3").setAttribute('onclick', 'cl3()');
    }
}

function dob4() {
    let a = document.getElementById("stat").textContent;
    if (Number(a) >= 5000) {
        a -= 5000;
        document.getElementById("stat").innerHTML = a;
        document.getElementById("men4").innerHTML = "Кликер за 50000";
        document.getElementById("men4").setAttribute('onclick', 'cl4()');
    }
}

function dob5() {
    let a = document.getElementById("stat").textContent;
    if (Number(a) >= 15000) {
        a -= 15000;
        document.getElementById("stat").innerHTML = a;
        document.getElementById("men5").innerHTML = "Кликер за 15000";
        document.getElementById("men5").setAttribute('onclick', 'cl5()');
    }
}