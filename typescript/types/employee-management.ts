class Employee {
  constructor(
    public id: number,
    public name: string,
    public department: string,
    private salary: number
  ) {}

  getDetails(): string {
    return `${this.id} - ${this.name} works in ${this.department}`;
  }

  getSalary(): number {
    return this.salary;
  }
}

const emp1 = new Employee(101, "Kalyan", "IT", 50000);

console.log(emp1.getDetails());
console.log("Salary:", emp1.getSalary());
