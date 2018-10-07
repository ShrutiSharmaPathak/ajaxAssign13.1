
 
 var array=['srting1','srting2','string3','string4','string5']; // array declaration
 var promise1=new Promise(function(resolve,reject){
 setTimeout(resolve,(array.length)*1000); // setting the time out  equal to the number of array elements
 var arr= array.map(function(e){ // converting the array elements to upper case
 return e.toUpperCase();
});
resolve(arr); //resolve is used to resolve the promise with a value or result of another promise.	
});
promise1.then( x=> console.log(x) // executing on success
).catch(function(err){  //handling the error
console.log(err);
});