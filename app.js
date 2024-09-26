//---------------------   ARRAYS ---------------------------


// 1.

// var studentNames = [];


//  2.

// var student = {
//    names : []
//   };
  

// 3.

// var nameArr = ["realmadrid","barcelona"];


// 4.

// var numberArr = [10,20,30,40,50];


// 5.

// var boolenArr = [true,false];


// 6.

// var mixedArr = [

//     true,false,10,20,30,"realmadrid","barcelona"

// ];

// 7.

// var educationQualifications = [
//     "SSC",      
//     "HSC",      
//     "BCS",     
//     "BS",      
//     "BCOM",    
//     "MS",    
//     "M. Phil.", 
//     "PhD"  

// ];
//  document.write(educationQualifications);

// 8.

// var studentNames = ["Michael", "John", "Tony"];
// var studentScores = [450, 390, 470]; 

// var totalMarks = 500;

// var percentage1 = (studentScores[0] / totalMarks ) * 100;
// var percentage2 = (studentScores[1] / totalMarks ) * 100;
// var percentage3 = (studentScores[2] / totalMarks ) * 100;

// console.log(`${studentNames[0]} scored ${studentScores[0]}  Percentage: ${percentage1}%`);
// console.log(`${studentNames[1]} scored ${studentScores[1]}  Percentage: ${percentage2}%`);
// console.log(`${studentNames[2]} scored ${studentScores[2]}  Percentage: ${percentage3}%`);

// 9.

// var colorNamesarr = [
//     "Red",
//     "Blue",
//     "Green",
//     "Yellow",
// ];
// document.write(colorNamesarr);

// a.

// var colorNamesarr = [
    
//     "Red",
//     "Blue",
//     "Green",
//     "Yellow",

// ];

// var newColor = prompt("What color do you want to add to the beginning of the array?");

// colorNamesarr.unshift(newColor)

// console.log("updated color Array",colorNamesarr);

// b.

// var colorNamesarr = [
    
//     "Red",
//     "Blue",
//     "Green",
//     "Yellow",

// ];

// var newColor = prompt("What color do you want to add to the beginning of the array?");

// colorNamesarr.push(newColor)

// console.log("updated color Array",colorNamesarr);


// c.

// var colorNamesarr = [
    
//     "Red",
//     "Blue",
//     "Green",
//     "Yellow",
//     "silver",

// ];

// var newColor1 = prompt("add one color here?");
// var nameColor2 = prompt("add another color here");


// colorNamesarr.unshift(newColor1,nameColor2);


// console.log("updated color Array",colorNamesarr);


// d.

// var colorNamesarr = [
    
//     "Red",
//     "Blue",
//     "Green",
//     "Yellow",
//     "silver",

// ];



// colorNamesarr.shift();


// console.log("updated color Array",colorNamesarr);


// e.


// var colorNamesarr = [
    
//     "Red",
//     "Blue",
//     "Green",
//     "Yellow",
//     "silver",

// ];



// colorNamesarr.pop();


// console.log("updated color Array",colorNamesarr);


// f.

// var colorArr = [
//     "green",
//     "red",
//     "blue",
// ];

// console.log("original color array",colorArr);

// var newColor = prompt("what color do you want to add?")
// var index = prompt("add which index number do you want to add?")
 
// colorArr.splice(index,0,newColor);
// console.log("uddate color array",colorArr );


// g.

// var colorArr = [
//     "green",
//     "red",
//     "blue",
//     "black",
//     "seagreen",
//     "peach",
// ];

// console.log("original color array",colorArr);

// var newColor = prompt("at which index do you want to delete colors?")
// var deleteIndex = prompt("how many colors do you want to delete?")
 
// colorArr.splice(newColor,deleteIndex)
// console.log("update color array",colorArr );


// 10

// var sortArr = [
//     320,
//     230,
//     120,
//     480,

// ];

// console.log("unsorted array", sortArr);

// var sortedArr = [
//     120,
//     230,
//     320,
//     480,
// ]

// console.log("sorted array", sortedArr);


// // 11

// var citiesArr = ["karachi", "lahore", "multan", "islmabad", "quetta"]


// var selectedCities = []

// selectedCities [3] = citiesArr [3]

// selectedCities [4] = citiesArr [4]

// console.log("original cities array", citiesArr);
// console.log("selected cities array", selectedCities);


// 12

// var arr = ["This ", " is ", " my" , " cat"];
// console.log("array",arr);

// var combine = ("this is my cat ");
// console.log("string",combine)


// 13.

// var devicesnamesarr = ["keyboard", "mouse", "printer", "monitor <br><br>"];
// document.write("<h2>Devices:</h2>",devicesnamesarr)


// var firstArr = ["keyborad <br>"]
// document.write("OUT: <br>",firstArr);

// var secArr = ["mouse <br>"]
// document.write("OUT: <br>",secArr);

// var thirdArr = ["printer <br>"]
// document.write("OUT: <br>",thirdArr);

// var fourthArr = ["monitor <br>"];
// document.write("OUT: <br>",fourthArr);




          // -----------  HOME CHAPTER 14 - 16  ----------------
 
// 1.
// var myArray = [];

// 2.
// var myArray = ["ali","bob","joe"];

// 3.
// var alphabet = ["h","i","j","k"];
// alert(alphabet[2]);

// 4.
// var alphabetArr = ["h","i","j","k","l","m","n","o"];

// console.log("The total length of the array is: " + alphabetArr.length);

// 5.
// var myArray = ["firstElement"];

// myArray[1]="secondElement";

// alert("The new element is: " + myArray[1]);



//          --------------- CHAPTER 16 (ARRAY ||) ---------------------

// 1.
//  var myArr = ["first element"];
//  myArr.push("second element")

//  alert("The last element is:" + " " + myArr[myArr.length -1]);


// 2.
// var alphabet = ["h","i","j","k"];
// alphabet.pop();
// console.log(alphabet);


// 3.
// var alphabet = ["h","i","j","k"];
// alphabet.push(1);
// console.log(alphabet);




//          --------------- CHAPTER 16 (ARRAY |||) ---------------------

// 1.
// var sizes = ["S","M","XL","XXL","XXXL"];
// sizes.shift()
// console.log(sizes);

// 2.
//  var sizes = ["S","M","XL","XXL","XXXL"];
// sizes.unshift(1,2,3)
//  console.log(sizes);

// 3.
// var myArr = ["firstElement"];

// myArr.unshift("newFirstElement");

// alert(myArr[0]);

// 4.
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// sizes.splice(2, 0, "L");

// console.log(sizes);


// // 5.
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
//  var regSizes = sizes.slice(0,3)
//  console.log(regSizes);


// // 6.
// var petsArr = ["dog","cat","ox","duck","frog"];
// petsArr.splice(1, 3);
// petsArr.splice(1,0,"hamster","rabbit")
// console.log(petsArr);

// // 7.
// var petsArr = ["dog","cat","ox","duck","frog"];
// petsArr.splice(1, 2);
// console.log(petsArr);

// 8.
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];

// var reducedPets = pets.slice(3, 5); 

// console.log(reducedPets);


