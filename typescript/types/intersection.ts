type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staff: Staff = {
  name: "Kalyan",
  employeeId: 1001
};

console.log(staff);
