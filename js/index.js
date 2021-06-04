// alert("hello")
//console.log("hello world")

// javaScript Variable 
// To Store Variable 
var number =34;
var number1=56;
//console.log(number+number1);
// String 
var name='Manish here';

//object 
var marks={
    ravi:34,
    shubham:60
}
//console.log(marks)
//boolean
var a=true;
var b=false;
// console.log(a,b);
//undefined
var d;
// console.log(d);
//null
var e=null;
// console.log(e);

// two type of data types in js
//1- primitive data types  undefined bool sting number symbol
//2- Reference data type arrays, object

var arr=[1,2,3,4,5,"Manish"];
// console.log(arr)




// Operator in java Scripts

// + ,- * / are arthimetic operator
// aasignment operator =
// comparison operator == , != ,>= ,<= ,< ,> (returns true or false)


//logical operator 
//(true && true ) , (false && true) (true || true ) , (false || true)
// logical not ! invert value 



//Function 
function avg(a,b){
    return (a+b)/2;

}
console.log(avg(2,4))

//Conditional in JS
var age=34;
if(age>34){
    console.log('you are not a child')
}
else{
    console.log('You are child')
}


// is else Ladder 
if(age<2){
    console.log('You are kid');

}
else if(age<8){
    console.log('You are kid below 8');

}
else{
   
        console.log('You are Not a  kid');
    
   
}



console.clear();
var arr=[1,2,3,4,5,6,"end of arr"];
for(var i=0;i<arr.length;i++){
   // console.log(arr[i])
}
console.clear();
arr.forEach(function(e){
    //console.log(e)

})

let j=0;

//while loop
while(j<arr.length){
 //   console.log(arr[j]);
    j++;
}


// break and continue statement 
for(var i=0;i<arr.length;i++){
    if(i==1) continue;
    if(i==5)break;
    //console.log(arr[i])

 }

 let myarr=["fan","camera",34,null,true];

 //arr methods
// myarr.length() length of arr
//myarr.pop(); delete element form last
//myarr.push() push one elemetn at the last of arr
//my arr.shift removefirst element form left
//myarr.unshift 
//myarr.tostring conver to string 
//myarr.sort() sort to arrr


//Strign method in Js

let mystring ='Manish is good boy';
//.length length of string 
// .indexof return first occurance of letter 
// .slice(a,b) slice string from a to b
// .replace('s1', 's2')  first occur of  s1 can be replaced by s2

mydate=new Date();
console.log(mydate)
// date method are get day get time ,get day etc

//Dom (documetn object model) manipulation




