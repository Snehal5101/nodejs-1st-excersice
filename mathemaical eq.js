 let a=23;
let b=6;

function add (a,b){
return a + b;
}
console.log(add(a,b));


function sub(a,b){
return a-b;
  } console.log(sub(a,b));


module.exports.add = add;
 module.exports.sub = sub;