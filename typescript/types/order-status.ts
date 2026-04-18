function getOrderStatus(orderId: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (orderId === 101) {
      resolve("Order Shipped");
    } else {
      reject("Order not found");
    }
  });
}

getOrderStatus(101)
  .then(status => console.log(status))
  .catch(error => console.log(error));
