interface User {
  id: number;
  name: string;
  email: string;
}

function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const user = {
  id: 1,
  name: "Kalyan",
  email: "kalyan@gmail.com"
};

const updatedUser = updateUser(user, {
  email: "kalyan.new@gmail.com"
});

console.log(updatedUser);
