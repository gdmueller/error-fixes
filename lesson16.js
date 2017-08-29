function myFunction() {
  var myObject = {
     objProperty: "some text",
     objMethod: function() {
		console.log(objProperty);
		}
     };
  myObject.objMethod();
} 
myFunction()