const somethingimported = require("./default_export")
console.log(somethingimported)

//Export All Of Objects
const ThisisEntire = require("./named_export")
console.log(ThisisEntire)

//Just Name
const ThisisaPeace = require("./named_export")
console.log(ThisisaPeace.MyName)

// With Coroshe We Take Just Family
//This is Named Import
const {Myfamily} = require("./named_export")
console.log(Myfamily)