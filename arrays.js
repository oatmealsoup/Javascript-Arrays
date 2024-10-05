const decimalsTo23 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
console.log(decimalsTo23);
console.log(decimalsTo23[0]);
console.log(decimalsTo23[23]);
console.log("Middle array element using halving followed by the floor function:");
const middleIndex = Math.floor(decimalsTo23.length / 2);
console.log(decimalsTo23[middleIndex]);
console.log("Cardinality of the decimalsTo23 using decimalsTo23.length:");
console.log(decimalsTo23.length);


console.log("Made shifty with 4 elements to shift 3 and pop once, removing 4 elements total, to hopefully add them back");
array shifty = [0,1,2,3];
const removed = shifty.splice(0,3);
console.log("shifty:");
console.log(shifty);
console.log("removed:");
console.log(removed);
const popped = shifty.pop();
console.log("shifty:");
console.log(shifty);
console.log("popped:");
console.log(popped);
const taken = removed.concat(popped);
console.log("taken:");
console.log(taken);
console.log("unshift(2,1,0)");
shifty.unshift(0,1,2);
console.log(shifty);
shifty.splice(23,0,23);
console.log("shifty.splice(23,0,23)");
console.log(shifty);


function isPrime(number) {
if (number <= 1) {
return false;
}

for (let i = 2; i <= Math.sqrt(number); i++) {
if (number % i === 0) {
return false;
}
}

return true;   

}
const primeNumbers = decimalsTo23.filter(isPrime);
console.log("Prime number array:");
console.log(primeNumbers);


const evenNumbers = decimalsTo23.filter(number => number % 2 === 0);
console.log("Even number array:");
console.log(evenNumbers);
const oddNumbers = decimalsTo23.filter(number => number % 2 !== 0);
console.log("Odd number array:");
console.log(oddNumbers);
const MuliplesOf3 = decimalsTo23.filter(Number => Number % 3 === 0);
console.log(MuliplesOf3);
const quadruples = decimalsTo23.filter(Number => Number % 4 === 0);
console.log(quadruples);
const quinTuples = decimalsTo23.filter(Number => Number % 5 === 0);
console.log(quinTuples);
const sexTuples = decimalsTo23.filter(Number => Number % 6 === 0);
console.log(sexTuples);
const hepTuples = decimalsTo23.filter(Number => Number % 7 === 0);
console.log(hepTuples);
const ocTuples = decimalsTo23.filter(Number => Number % 8 === 0);
console.log(ocTuples);


const oneModthree = decimalsTo23.filter(Number => Number % 3 === 1);
console.log("oneModthree");
console.log(oneModthree);
const twoModthree = decimalsTo23.filter(Number => Number % 4 === 2);
console.log("twoModthree");
console.log(twoModthree);
const oneModfour = decimalsTo23.filter(Number => Number % 4 === 1);
console.log("oneModfour");
console.log(oneModfour);
const twoModfour = decimalsTo23.filter(Number => Number % 4 === 2);
console.log("twoModfour");
console.log(twoModfour);
const threeModfour = decimalsTo23.filter(Number => Number % 4 === 3);
console.log("threeModfour");
console.log(threeModfour);
const oneModfive = decimalsTo23.filter(Number => Number % 5 === 1);
console.log("oneModfive");
console.log(oneModfive);
const twoModfive = decimalsTo23.filter(Number => Number % 5 === 2);
console.log("twoModfive");
console.log(twoModfive);
const threeModfive = decimalsTo23.filter(Number => Number % 5 === 3);
console.log("threeModfive");
console.log(threeModfive);
const fourModfive = decimalsTo23.filter(Number => Number % 5 === 4);
console.log("fourModfive");
console.log(fourModfive);
const oneModsix = decimalsTo23.filter(Number => Number % 6 === 1);
console.log("oneModsix");
console.log(oneModsix);
const twoModsix = decimalsTo23.filter(Number => Number % 6 === 2);
console.log("twoModsix");
console.log(twoModsix);
const threeModsix = decimalsTo23.filter(Number => Number % 6 === 3);
console.log("threeModsix");
console.log(threeModsix);
const fourModsix = decimalsTo23.filter(Number => Number % 6 === 4);
console.log("fourModsix");
console.log(fourModsix);
const fiveModsix = decimalsTo23.filter(Number => Number % 6 === 5);
console.log("fiveModsix");
console.log(fiveModsix);
const oneModseven = decimalsTo23.filter(Number => Number % 7 === 1);
console.log("oneModseven");
console.log(oneModseven);
const twoModseven = decimalsTo23.filter(Number => Number % 7 === 2);
console.log("twoModseven");
console.log(twoModseven);
const threeModseven = decimalsTo23.filter(Number => Number % 7 === 3);
console.log("threeModseven");
console.log(threeModseven);
const fourModseven = decimalsTo23.filter(Number => Number % 7 === 4);
console.log("fourModseven");
console.log(fourModseven);
const fiveModseven = decimalsTo23.filter(Number => Number % 7 === 5);
console.log("fiveModseven");
console.log(fiveModseven);
const sixModseven = decimalsTo23.filter(Number => Number % 7 === 6);
console.log("sixModseven");
console.log(sixModseven);
const oneModeight = decimalsTo23.filter(Number => Number % 8 === 1);
console.log("oneModeight");
console.log(oneModeight);
const twoModeight = decimalsTo23.filter(Number => Number % 8 === 2);
console.log("twoModeight");
console.log(twoModeight);
const threeModeight = decimalsTo23.filter(Number => Number % 8 === 3);
console.log("threeModeight");
console.log(threeModeight);
const fourModeight = decimalsTo23.filter(Number => Number % 8 === 4);
console.log("fourModeight");
console.log(fourModeight);
const fiveModeight = decimalsTo23.filter(Number => Number % 8 === 5);
console.log("fiveModeight");
console.log(fiveModeight);
const sixModeight = decimalsTo23.filter(Number => Number % 8 === 6);
console.log("sixModeight");
console.log(sixModeight);
const sevenModeight = decimalsTo23.filter(Number => Number % 8 === 7);
console.log("sevenModeight");
console.log(sevenModeight);
const oneModnine = decimalsTo23.filter(Number => Number % 9 === 1);
console.log("oneModnine");
console.log(oneModnine);
const twoModnine = decimalsTo23.filter(Number => Number % 9 === 2);
console.log("twoModnine");
console.log(twoModnine);
const threeModnine = decimalsTo23.filter(Number => Number % 9 === 3);
console.log("threeModnine");
console.log(threeModnine);
const fourModnine = decimalsTo23.filter(Number => Number % 9 === 4);
console.log("fourModnine");
console.log(fourModnine);
const fiveModnine = decimalsTo23.filter(Number => Number % 9 === 5);
console.log("fiveModnine");
console.log(fiveModnine);
const sixModnine = decimalsTo23.filter(Number => Number % 9 === 6);
console.log("sixModnine");
console.log(sixModnine);
const sevenModnine = decimalsTo23.filter(Number => Number % 9 === 7);
console.log("sevenModnine");
console.log(sevenModnine);
const eightModnine = decimalsTo23.filter(Number => Number % 9 === 8);
console.log("eightModnine");
console.log(eightModnine);
