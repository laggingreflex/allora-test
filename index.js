const EventEmitter = require('events');
const allora = require('allora')

const myEventEmitter = new EventEmitter();
const myPromisifiedEventEmitter = allora(myEventEmitter);

// // normal
// myEventEmitter.on('test', (...args) => {
//   console.log(args[0]) // => [Function: t]
// })
// myEventEmitter.emit('test', 'args[0] should be this text')


// with allora
myPromisifiedEventEmitter.on('test').then((...args) => {
  console.log(args) // => [ [Function: t] ]
  console.log(args[0]()) // => undefined
})
myPromisifiedEventEmitter.emit('test', 'args[0] should be this text')
