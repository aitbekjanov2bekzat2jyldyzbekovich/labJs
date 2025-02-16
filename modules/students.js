export const initStudents = () => {
  const students = [
    { name: "Алексей", age: 28 },
    { name: "Мария", age: 24 },
    { name: "Иван", age: 32 },
    { name: "Ольга", age: 29 },
    { name: "Дмитрий", age: 35 },
    { name: "Екатерина", age: 22 },
    { name: "Сергей", age: 27 },
    { name: "Наталья", age: 30 },
    { name: "Андрей", age: 31 },
    { name: "Юлия", age: 26 },
  ];
  const studentInfo = students.map(
    ({ name, age }) => `Студент: ${name}, Возраст: ${age}`
  );
  console.log(studentInfo);
};
