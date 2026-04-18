function printId<T extends { id: number }>(obj: T): void {
  console.log(obj.id);
}

printId({ id: 101, name: "Kalyan" });
