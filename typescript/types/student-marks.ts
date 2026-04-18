interface Student {
  name: string;
  marks: number[];
}

const students: Student[] = [
  { name: "Kalyan", marks: [80, 90, 85] },
  { name: "Ravi", marks: [70, 75, 68] },
  { name: "Anil", marks: [95, 92, 96] }
];

students.forEach(student => {
  const total = student.marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / student.marks.length;

  console.log(`${student.name} Average: ${average}`);
});
