console.log("hello TypeScript!😁")

// Implicit types
let helloWord = "hello world";

// Explicit types
let firstName: string = "Sahilkhan";
let age: number = 23;

// Tuple
type stringAndNumber = [string, number];
let x: stringAndNumber = ["sahilkhan", 23];

// Enums
enum continents {
    North_america,
    africa,
    afghaninstan,
    india,
    iran,
    turkey
}

// usage
var region = continents.afghaninstan;

// Interfaces
 interface User {
    name: string;
    id: number;
 }

 const user: User = {
    name: 'sahilkhan',
    id: 23,
 }