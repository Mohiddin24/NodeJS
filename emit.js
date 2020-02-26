var events = require('events')

const myEmitter = new events.EventEmitter();

var num1 =5
var num2 =6
var add1 =0
function addn() {
     add1 = num1 + num2;
     console.log('Addition event Occured!');
     }

var div = 0
function Divn() {
    div = add1/2
     console.log('Division event Occured!');
     }

function Avg(){
  avg = div
  console.log('Average event occured and result is: %d',avg);
}

function sub(){
  subt = num1 - num2;
  console.log('subtraction event occured and result is :%d',sub);
}

myEmitter.addListener('Addition',addn)

myEmitter.on('Addition',Divn)

myEmitter.on('Addition',Avg)


myEmitter.on('subtraction',function(a,b){
  subt = a-b
  console.log('subtraction event occured and result is :%d',subt);
});

myEmitter.emit('Addition')


setTimeout(function(){
  myEmitter.emit('subtraction',10,5)
},2000);
