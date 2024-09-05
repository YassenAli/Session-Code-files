

// object example

let person = {
  firstName: "Bassant",
  lastName: "Mahmoud",
  age: 30,
  isEmployed: true,
  
  // Method to get full name
  getFullName() {
      return "full Name:" + person.firstName + " " + person.lastName;
  }
}
// console.log(person.getFullName())




  /*
  String Methods
  - Access With Index[]
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - concat("   ")
  - Chain Methods
  
*/
 


let thename = new String(" Bassant") ;



console.log(thename.concat(" Mahmoud"))

console.log(thename.trim().charAt(5).toUpperCase())  //chain method , output: N

