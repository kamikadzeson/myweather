function solveEquation() {
    let a = parseFloat(document.querySelector("#a").value);
    let b = parseFloat(document.querySelector("#b").value);
    let c = parseFloat(document.querySelector("#c").value);

    let output = document.querySelector("#output");

    let x1, x2;
    let discriminant = b * b - 4 * a * c;

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        output.innerHTML = "Please enter valid values for a, b, and c.";
    } else if (a === 0) {
        output.innerHTML = "The coefficient 'a' cannot be 0.";
    } else if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        output.innerHTML = `The solutions are x1 = ${x1} and x2 = ${x2}`;
    } else if (discriminant === 0) {
        x1 = -b / (2 * a);
        output.innerHTML = `The solution is x = ${x1}`;
    } else {
        output.innerHTML = "The equation has no real solutions.";
    }
}