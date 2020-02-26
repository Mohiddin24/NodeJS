var num=0;
var iterations = 0;
function getRandomInt(num1,num2) {
  //for (var i = 0; i < 50; i++) {
  var add1 = Math.floor(Math.random() * Math.floor(num1));
  var add2 = Math.floor(Math.random() * Math.floor(num2));
  var sum = add1 + add2
  console.log("result of %d and %d is %d\n",add1,add2,sum);
  iterations++;
   if (iterations >= 10)
        clearInterval(interval);
//}
}


//Without parameters sending a function as parameter to setInterval Method

//var interval = setInterval(getRandomInt,1000);

//To send parameters to the calling function using setInterval method 

var interval = setInterval( function() { getRandomInt(10,100); }, 1000);