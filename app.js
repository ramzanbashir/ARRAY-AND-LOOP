
// ______________________ CHAPTER#17-20__________________________

// --------------------------Task-1------------------------------
// var emptyArray = [[]];
// console.log(emptyArray)

// --------------------------Task-2------------------------------
// var multiplearry = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
// ]
// console.log(multiplearry);

// --------------------------Task-3------------------------------
// for(var i=1; i<=10; i++){
// document.write(`${i} <br>`)
// }

// --------------------------Task-4------------------------------
// var tableNo = prompt("Enter Table No");
// var tableLength = prompt("Enter Table Length");
// for(var i=1; i<=tableLength; i++){
//     document.write(`${tableNo} x ${i} = ${tableNo*i} <br>`)
// }

// --------------------------Task-5------------------------------
// var fruits = ["Mango","Orange","Strawbery","Bluebery","Banana","Apple","Graps","Chiko","Falsa"]
// for(var i=0; i<=fruits.length; i++){
//     document.write(`${fruits[i]} <br>`)
// }
// for(var i=0; i<=fruits.length; i++){
//     document.write(`Element at Index ${i} is ${fruits[i]} <br>`)
// }
// document.write("<br>")

// --------------------------Task-6------------------------------
// document.write("<b>A..COUNTING:</b>")
// for(var i=1; i<=15; i++){
//     document.write(i + ",");
// }
// document.write("<br>") 

// document.write("<br><b>B..REVERSE COUNTING:</b>")
// for(var i=15; i>=1; i--){
//     document.write(i + ",");
// }
// document.write("<br>")

// document.write("<br><b>C..EVEN NO:</b>")
// for(var i=0; i<=20; i=i+2){
//     document.write(i + ",");
// }

// document.write("<br>")

// document.write("<br><b>D..ODD NO :</b>")
// for(var i=1; i<=20; i=i+2){
//     document.write(i + ",");
// }

// document.write("<br>")

// document.write("<br><b>E..SERIES:</b>")
// for(var i=1; i<=20; i=i+2){
//     document.write(i + "K,");
// }

// --------------------------Task-7------------------------------
// var products =["cake","apple pie","cookie","chips","patties","heart biskuts"]
// var user = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase()
// var match = false 

// for(i=0; i<=products.length; i++){
// if(user == products[i] ){
// document.write(`${user} is found at index ${i}`);
// match = true
// break
// }
// }
// if(!match){
//     document.write(`we are sorry${user} is <b> not available <>in our bakery`);
// }
// document.write("<br>")

// --------------------------Task-8------------------------------
// var arrayNumber = [24,54,78,91,12]
// var largestNumber = Math.max(...arrayNumber)
// document.write(`<b>Array items:</b> ${arrayNumber}<br><br> <b> The Largest number is :</b> ${largestNumber}<br>`);

// // --------------------------Task-9------------------------------
// var arrayNumber = [24,54,78,91,12]
// var smallestNumber = Math.min(...arrayNumber)
// document.write(`<b>Array items:</b> ${arrayNumber}<br><br> <b> The Largest number is :</b> ${smallestNumber}<br>`);

// --------------------------Task-10------------------------------
// var number = 5;
// for(i=1; i<=20; i++){
//     document.write(`<b> ${number*i} </b>,`)
// }
