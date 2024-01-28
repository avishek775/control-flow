// //if
const temperature = 41;
if(temperature<50){
    //console.log("less then 50")
}

else{
    // console.log("temperature is greater the 50"); 
}
//  console.log("execute");


// +++++++++++++++  scope  ++++++++++

const score=200;
if(score>100){
    let power="fly";
    //console.log(`user power: ${power}`)
}
//console.log(`user power: ${power}`)





// +++++++++++= short hand notation +++++++++++++

//const balance =1000;
//if(balance>500) console.log("test")




// +++++++++++=  nesting ++++++++

const balance =1000;
if(balance<500){
   // console.log("less than 500")
} else if(balance<750){
   // console.log("less then 750")
}else if(balance<900){
    //console.log("less than 750")
}else{
   // console.log("less than 1200")
}




//  &&       ||

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail =true;
if(userLoggedIn && debitCard ){
   // console.log("Allow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail ){
    //console.log("user logged in")
}



// ++++++  truthy and falsy values

const userEmail =[]
if(userEmail){
    //console.log("get user email");
}else{
    //console.log("don't have user email");
}

// truthy                 falsy
// "0"                        0
// "false"                    -0
// " "                       ""
// []                        null
// {}                         undefined
// function(){}               nan




//  how to check array

if (userEmail.length === 0){
//console.log("array is empty");
}







//how to check object

const emptyObj ={}
if (Object.keys(emptyObj).length === 0){
    // console.log("Object is empty")
}




   //Nullish Coalescing Operator (??):  Null undefined

   let val1;
   //val1 =5 ??10;
  // val1 = null ?? 10
  //val1=undefined ?? 15
  val1= null ?? 10 ?? 20
   //console.log(val1)


   //  Terniary operator

   //condition ? true : false

   const iceTeaPrice =100;
   iceTeaPrice<= 80 ? console.log("less than 80"):console.log("more than 80")