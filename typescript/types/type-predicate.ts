type Admin = {
  name: string;
  admin: true;
};

function isAdmin(user: any): user is Admin {
  return user.admin === true;
}

const user = {
  name: "Kalyan",
  admin: true
};

if (isAdmin(user)) {
  console.log(user.name + " is an admin");
}
