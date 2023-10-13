let str = prompt("Enter the sentence: ")
let str1 = str.split("").reverse().join("");
let str2 = str1.split(" ").reverse().join(" ");
document.getElementById("container").innerHTML = str2;
console.log(str2);
