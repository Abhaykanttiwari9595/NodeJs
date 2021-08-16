const add = (a , b) => {
    return a+b;
};
const sub = (a , b) => {
    return a+b;
};
const names = "Abhay kant tiwari";
// jab ek export karna hai tb yese karnge
module.exports=add;
// jab ek se jada module export karna ho to hum Object bana ke export karenge
// module.exports.add= add;
// module.exports.names = names;
// shortcut of all module
module.exports= {add,sub};