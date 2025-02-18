// Iteration 1: Names and Input
let hacker1 = "loic";

console.log(`The driver's name is ${hacker1}.`)

let hacker2 = "Marianne"

console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters.`)   
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let driverCapital = "";
let driverReverse = ""

for (let i = 0; i < hacker1.length; i++) {
driverCapital += hacker1[i].toUpperCase();
}
console.log(driverCapital.split("").join(' '));

for (let j = hacker1.length - 1; j >= 0 ; j--) {
    driverReverse += hacker1[j];
    }
console.log(driverReverse);

if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
    console.log(`${hacker1}'s name goes first.`);
} else if (hacker2.toLowerCase() < hacker1.toLowerCase()) {
  console.log(`Yo, ${hacker2} goes first definitely.`);
} else {
  console.log("What?! You both have the same name?");
}
