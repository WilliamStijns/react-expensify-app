//
//  OBJECT destructuring !!!!!!!
//

// console.log('destructing');

// const person = {
//   name : 'William',
//   age : 57,
//   location: {
//     city : "Kortenhoef",
//     temp : 21
//   }
// };

// const {name,age} = person;

// console.log(`${person.name} is ${person.age} years old.`)

// console.log(`${name} is ${age} years old!`)

// const {city, temp:temperature} = person.location;

// console.log(`It's ${temperature} in ${city}".`)

// const book = {
//   title : 'Ego is the Enemy',
//   author : 'Ryan Holiday',
//   publisher : {
    
//   }
// }

// const {name:publisherName = "Ananoymous"} = book.publisher;

// console.log(publisherName);

//
//  ARRAY destructuring !!!!!!!
//
const item = ["Coffee (hot)", "$2.00", "$2.50","$2.75"];

console.log(`the price of a medium coffee is $2.5`); 
 const [coffee,,mprice] = item;

console.log(`the price of a medium ${coffee} is ${mprice}`); 