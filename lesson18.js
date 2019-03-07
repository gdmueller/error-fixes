//Fix the error
function myFunction() {
    let myObject = {
        objProperty: 'some text',
        objMethod: function() {
            console.log(this.objProperty);
        }
    };
    myObject.objMethod();
}
myFunction();



