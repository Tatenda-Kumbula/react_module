//src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch

var nameVar = 'Tatenda';
var nameVar = 'Mike'
console.log('nameVar', nameVar);


//You can not redifine Let
//You can reasign a LET variable
let nameLet = 'Jen';
nameLet='Julie';
console.log('nameLet',nameLet);


//You can not redifine Const 
//const nameConst = 'Frank';
//nameConst = 'Tom'
//console.log('nameConst',nameConst);

//function getPetName(){
    //const petName = 'Hal';
    //return petName
//}

//const petName = getPetName();
//console.log(petName)

//Block Scoping

var fullName = 'Tatenda Kumbula'

if (fullName){
    const firstName = fullName.split('')[0];
    console.log(firstName);

}

console.log(firstName);