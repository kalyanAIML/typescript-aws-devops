function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String:", value.toUpperCase());
  } else {
    console.log("Number:", value.toFixed(2));
  }
}

printValue("hello");
printValue(123.456);
