'use strict';
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    const sagar = 1;
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const sagar = 2;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
    console.log(millenial);
  }
  printAge();
}
const firstName = 'Jonas';
calcAge(1991);
