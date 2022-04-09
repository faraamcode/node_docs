// import {strict as assert } from 'assert'
const assert = require('assert');

try {
   assert.deepEqual(30, 3);
  
} catch (error) {
   console.log("my error");
}
// if(!check) {
//   assert.throws(check, {name : "deepEqual", message: "this values are not equal"})
// }

const obj1 = {
   name : "ibbrahim",
   age : 45
}

const a = new String('goo')
const b =  Object('goo')
console.log(a, b);

const obj2 = Object.create(obj1)
console.log(obj2);

const tracker = new assert.CallTracker()

function fun(){
   console.log("You called me");
}

const callMe = tracker.calls(fun, 2)

callMe()

process.on('exit',()=>{
   tracker.verify()
} )


