
 var array=['srting1','srting2','string3','string4','string5'];
 var promise1=new Promise(function(resolve,reject){
 setTimeout(resolve,(array.length)*1000);
 var arr= array.map(function(e){
 return e.toUpperCase();
});
resolve(arr);
});
promise1.then( x=> console.log(x)
).catch(function(err){
console.log(err);
});