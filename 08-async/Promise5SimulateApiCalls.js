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

async function runAPIFlow() {
  const user = await getUser();
  const orders = await getOrders();
  const wishlist = await getWishlist();

  console.log(user, orders, wishlist);
}

runAPIFlow();
