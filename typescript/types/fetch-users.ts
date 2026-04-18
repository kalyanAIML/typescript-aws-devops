async function fetchUsers(): Promise<string[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(["Kalyan", "Ravi", "Anil"]);
    }, 2000);
  });
}

async function main() {
  console.log("Loading users...");
  const users = await fetchUsers();
  console.log("Users:", users);
}

main();
