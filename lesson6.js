var people = [ 
        { name: "John", age: 55 }, 
        { name: "Roger", age: 44 },
        { name: "Betty", age: 37 }
    ];

//Desired result Print out all names 
for ( var i = 0; i < people.length; i++  ){
    let names = people[i].name;
    console.log("My Name is " + names );
}
