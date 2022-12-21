var str=["h","e","l","l","o"];
var key=str.length-1;
var arr= [key];
// var str2="";
var i=0;

for (let index = str.length-1; index >=0; index--) {

arr[i]=str[index];
++i;


}
console.log(str);
console.log(arr);