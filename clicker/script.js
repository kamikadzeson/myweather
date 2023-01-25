function proc() {
    let a = document.getElementById("stat").textContent;
    document.getElementById("stat").innerHTML = ++a;
}

function cl1(id, hid) {
    document.getElementById(id).disabled = true;
    let timerId = setInterval(proc, 500);
    let timer2 = setInterval(() => {
        let a = document.getElementById(hid).textContent;
        a--;
        document.getElementById(hid).innerHTML = a;
    }, 1000);
    setTimeout(() => {
        clearInterval(timerId);
        clearInterval(timer2);
        document.getElementById(hid).innerHTML = 30;
        document.getElementById(id).disabled = false;
        }, 30000);
}

function cl2(id, hid) {
    document.getElementById(id).disabled = true;
    let timerId = setInterval(proc, 250);
    let timer2 = setInterval(() => {
        let a = document.getElementById(hid).textContent;
        a--;
        document.getElementById(hid).innerHTML = a;
    }, 1000);
    setTimeout(() => {
        clearInterval(timerId);
        clearInterval(timer2);
        document.getElementById(hid).innerHTML = 30;
        document.getElementById(id).disabled = false;
    }, 30000);
}

function cl3(id, hid) {
    document.getElementById(id).disabled = true;
    let timerId = setInterval(proc, 100);
    let timer2 = setInterval(() => {
        let a = document.getElementById(hid).textContent;
        a--;
        document.getElementById(hid).innerHTML = a;
    }, 1000);
    setTimeout(() => {
        clearInterval(timerId);
        clearInterval(timer2);
        document.getElementById(hid).innerHTML = 30;
        document.getElementById(id).disabled = false;
    }, 30000);
}

function cl4(id, hid) {
    document.getElementById(id).disabled = true;
    let timerId = setInterval(proc, 50);
    let timer2 = setInterval(() => {
        let a = document.getElementById(hid).textContent;
        a--;
        document.getElementById(hid).innerHTML = a;
    }, 1000);
    setTimeout(() => {
        clearInterval(timerId);
        clearInterval(timer2);
        document.getElementById(hid).innerHTML = 30;
        document.getElementById(id).disabled = false;
    }, 30000);
}

function cl5(id, hid) {
    document.getElementById(id).disabled = true;
    let timerId = setInterval(proc, 10);
    let timer2 = setInterval(() => {
        let a = document.getElementById(hid).textContent;
        a--;
        document.getElementById(hid).innerHTML = a;
    }, 1000);
    setTimeout(() => {
        clearInterval(timerId);
        clearInterval(timer2);
        document.getElementById(hid).innerHTML = 30;
        document.getElementById(id).disabled = false;
    }, 30000);
}

function dob1(id, hid) {
    let a = document.getElementById("stat").textContent;
    if (Number(a) >= 100) {
        a -= 100;
        document.getElementById("stat").innerHTML = a;
        document.getElementById(id).innerHTML = "Кликер за 100";
        document.getElementById(id).setAttribute('onclick', "cl1('"+id+"', '"+hid+"')");
    }
}

function dob2(id, hid) {
    let a = document.getElementById("stat").textContent;
    if (Number(a) >= 500) {
        a -= 500;
        document.getElementById("stat").innerHTML = a;
        document.getElementById(id).innerHTML = "Кликер за 500";
        document.getElementById(id).setAttribute('onclick', "cl2('"+id+"', '"+hid+"')");
    }
}

function dob3(id, hid) {
    let a = document.getElementById("stat").textContent;
    if (Number(a) >= 1000) {
        a -= 1000;
        document.getElementById("stat").innerHTML = a;
        document.getElementById(id).innerHTML = "Кликер за 1000";
        document.getElementById(id).setAttribute('onclick', "cl3('"+id+"', '"+hid+"')");
    }
}

function dob4(id, hid) {
    let a = document.getElementById("stat").textContent;
    if (Number(a) >= 5000) {
        a -= 5000;
        document.getElementById("stat").innerHTML = a;
        document.getElementById(id).innerHTML = "Кликер за 5000";
        document.getElementById(id).setAttribute('onclick', "cl4('"+id+"', '"+hid+"')");
    }
}

function dob5(id, hid) {
    let a = document.getElementById("stat").textContent;
    if (Number(a) >= 15000) {
        a -= 15000;
        document.getElementById("stat").innerHTML = a;
        document.getElementById(id).innerHTML = "Кликер за 15000";
        document.getElementById(id).setAttribute('onclick', "cl5('"+id+"', '"+hid+"')");
    }
}