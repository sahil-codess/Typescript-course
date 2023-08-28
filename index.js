console.log("hello TypeScript!😁");
// Implicit types
var helloWord = "hello world";
// Explicit types
var firstName = "Sahilkhan";
var age = 23;
var x = ["sahilkhan", 23];
// Enums
var continents;
(function (continents) {
    continents[continents["North_america"] = 0] = "North_america";
    continents[continents["africa"] = 1] = "africa";
    continents[continents["afghaninstan"] = 2] = "afghaninstan";
    continents[continents["india"] = 3] = "india";
    continents[continents["iran"] = 4] = "iran";
    continents[continents["turkey"] = 5] = "turkey";
})(continents || (continents = {}));
// usage
var region = continents.afghaninstan;
