function withdraw(balance: number, amount: number): number {
  if (amount > balance) {
    throw new Error("Insufficient balance");
  }

  return balance - amount;
}

try {
  const remaining = withdraw(5000, 7000);
  console.log("Remaining Balance:", remaining);
} catch (error) {
  if (error instanceof Error) {
    console.log("Transaction Failed:", error.message);
  }
}
