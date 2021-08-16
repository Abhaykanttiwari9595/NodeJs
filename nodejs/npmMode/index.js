const chalk=require("chalk");
console.log(chalk.red.underline("Abhay kant tiwari"));;
// ------------------or------------------------------
// const a=require("chalk");
// console.log(a.blue("Abhay kant tiwari"));

//------------------we use validator --------------
// const res = require ("validator");
// console.log( res.isEmail("abhaykant@gmail.com"));

//-------------------or---------------------------------

const validator = require("validator");
const res = validator.isEmail("tabhaykant1@gmail.com");
console.log(res?chalk.green(res):chalk.red(res));
