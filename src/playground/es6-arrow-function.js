 //src/playground/es6-arrow-function.js --out-file=public/scripts/app.js --presets=env,react --watch
//const square = function (x) {
    //return x * x;
//};

//const squareArrow =(x) =>{
    //return x * x;
//};

//const squareArrow = (X) => x * x;

//console.log(squareArrow(9));


const getFirstName = (fullName ) => {
    return fullName.split(' ')[0];
}; 

const getFirstName = (fullName ) => fullName.split(' ')[0];
console.log(getFirstName('Tatenda Kumbula'));