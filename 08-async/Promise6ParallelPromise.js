function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched user");
      resolve({ id: 1, name: "TD" });
    }, 1000);
  });
}

function getOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched orders");
      resolve(["order1", "order2"]);
    }, 1000);
  });
}

function getWishlist() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched wishlist");
      resolve(["itemA", "itemB"]);
    }, 1000);
  });
}

async function runParallel() {
  const [user, orders, wishlist] = await Promise.all([
    getUser(),
    getOrders(),
    getWishlist(),
  ]);

  console.log(user, orders, wishlist);
}

runParallel();

/*Time taken = 1s + 1s + 1s = 3 seconds
Parallel (all at same time!)
Time taken = 1 second total, not 3.
Because all 3 run together.
*/
