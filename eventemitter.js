var events = require('events')

const myEmitter = new events.EventEmitter();

function c1() {   console.log('an event occurred!');}

function c2() {   console.log('yet another event occurred!');}

//AddListener Method to add listeners
myEmitter.addListener('eventOne',c1); 

//myEmitter.on('eventOne', c1); // Register for eventOnemyEmitter.on('eventOne', c2); 

// On method
myEmitter.on('eventOne', c2);

//Removing a Listener
myEmitter.off('eventOne', c1);

//ListenerCount Method to display number of listeners
console.log(myEmitter.listenerCount('eventOne'));

//rawListeners Method to display the Listeners 
console.log(myEmitter.rawListeners('eventOne'));

//Emit Method to execute each of the listeners
myEmitter.emit('eventOne');

//once Method for registering for the event to be fired only one time
myEmitter.once('eventOnce', () => console.log('eventOnce once fired'));  

myEmitter.emit('eventOnce');



