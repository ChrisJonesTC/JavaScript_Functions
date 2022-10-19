console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (count < 0) {
        for (let i = i; i <= count; i++) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    } else {
        for (let i = 1; i <= count; i++) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    }
}

printOdds(100); 

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    let aboveSixteen = 'Congrats ${userName}, you can drive!';
    let belowSixteen = 'Sorry ${userName}, but you need to wait until youre 16.';
    
    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}

checkAge("Chris", 31)
checkAge("Kael", 14)

//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0) {
        return "Quadrant 4";
    } else if (x == 0 && y != 0) {
        return "X Axis";
    } else if (x != 0 && y == 0) {
        return "Y Axis";
    } else {
        return "Origin";
    }
}

console.log(checkQuadrant(1, -3));
console.log(checkQuadrant(2, 2));
console.log(checkQuadrant(3, -1));
console.log(checkQuadrant(-3, 3));
console.log(checkQuadrant(-2, 1));
console.log(checkQuadrant(-1, 3));


//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return 'Equilateral';
        } else if (a == b || b == c || a == c) {
            return 'Isoscles';
        } else {
            return 'Scalene';
        }
    } else {
        return 'Not a valid triangle.';
    }
}

console.log(checkTriangle(2, 2, 2)); //equilateral
console.log(checkTriangle(2, 3, 4)); //scalene
console.log(checkTriangle(1, 2, 2)); //isosceles
console.log(checkTriangle(1, 1, 2)); //invalid
