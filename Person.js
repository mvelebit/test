class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {

 	console.log(this.firstName)
    return 'Dog';
  }

}

console.log(new Person('Pera', 'Peric').getFullName());
