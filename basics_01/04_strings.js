const name ="Harshit"
const repoCount = 50

/* console.log(name + repoCount + "Value"); */

console.log(`Hello my name is ${name} and my repoCount is ${repoCount} `);

const gameName = new String('harshit-bhatia-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-13,8)
console.log(anotherString);

/*  
 We can't give negative values in substring but can give negative value in slice and itstarts from behind*/

const newStringOne = "     harshit    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://harshit56.com/harshit40%bhatia"

console.log(url.replace('40%', '56'));

console.log( url.includes('sundar'));

console.log(gameName.split('-'))