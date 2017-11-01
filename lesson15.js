/*Invoke the function that is an argument of nameFilter function in the code above.
        Expected  output in console:
        this ran
        ['John', 'Roger']
*/
var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]


var nameFilter = function(filteredName, anonymousFunction) {
    var results = []
    for (var i = 0; i < people.length; i++) {
        let currentName = people[i].name
        if (currentName != filteredName) {
            results.push(currentName)
        }
    }

    return results
}

var filteredNames = nameFilter("Betty", function(name) {
    console.log("This Ran")
})
console.log(filteredNames)
