const { EventEmitter } = require('events');

// exaple 1
// 
// class Kettle extends EventEmitter {
//   constructor() {
//     super();
//     setImmediate(() => {
//       this.emit('created', {});
//     })
//   }
//   start = () => {
//     process.nextTick(() => {
//       this.emit('started', {})
//     })
//     setTimeout(() => {
//       this.emit('ready', {})
//     }, 3000)
//   }
// }
// const k = new Kettle();
// k.start();
// k.on('created', () => console.log("Kettle is created"));
// k.on('started', () => console.log("Kettle is terned on"));
// k.on('ready', () => console.log("Kettle is ready"));

// exaple 2 priority adding to event loop)
// 
setImmediate(() => {
  console.log('setImmediate');
});
setTimeout(() => {
  console.log('setTimeout');
});
process.nextTick(() => {
  console.log('process.nextTick1');
});
process.nextTick(() => {
  console.log('process.nextTick2');
});
process.nextTick(() => {
  console.log('process.nextTick3');
});