let{age,get} =require('./stud');
let{add,sub} = require('./math');

console.log("hello");

if(age>=18){
    console.log("You can vote");
}
else{
    console.log("You cannot vote");
}





// math
let result=add(5,6);
console.log('addition = '+ result);

let rsult= sub(46,32);
console.log("sub = "+ rsult);

// stud
let name= "Ram"; rollno=9; marks= 89
get(name, rollno, marks)
