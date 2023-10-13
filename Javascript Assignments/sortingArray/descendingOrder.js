var array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
document.getElementById("container").innerHTML = array;
var array1 = array.sort((a, b) => {
  return b - a;
});
console.log(array1);
document.getElementById("container1").innerHTML = array;
