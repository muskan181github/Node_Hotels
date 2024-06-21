// const notes=require('./notes');


// console.log('server is running')
// console.log('hey')

// const add = function (a, b, callback) {
//   console.log(a+b);
//   callback()
// }
// add(5,6,()=>{console.log('callback i work now')});
// const notes=require('./notes');
// console.log(notes.age);
// console.log(notes.name);
// console.log(notes.addNumber(6,8))
// var _=require('lodash');
// var data=[1,3,4,5,"person","person","abc","bcd",'abc',"bcd"];
// var filter=_.uniq(data);
// console.log(filter);
// var stringOne=_.isString('person');
// console.log(stringOne);
const jsonObject='{"name":"abc", "age":25,"class":"MCA", "hobbies":["reading","dancing","playing"]}'
// // convert json to object 
const Object=JSON.parse(jsonObject);
console.log(Object.name);


const jsonObject1={
  name:"alice",
  age:45
}
const objectToConvert=JSON.stringify(jsonObject1);
console.log(objectToConvert);
