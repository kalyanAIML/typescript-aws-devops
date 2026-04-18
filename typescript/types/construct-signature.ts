interface User {
  name: string;
}

interface UserConstructor {
  new (name: string): User;
}

class Person implements User {
  constructor(public name: string) {}
}

const user: User = new Person("Kalyan");

console.log(user);
