//Fix the error
function myFunction() {
    let myObject = {
        objProperty: 'some text',
        objMethod: function() {
            return(objProperty);
        }
    };
    return myObject.objMethod();
}
myFunction();



//no touch
module.exports = myFunction;
