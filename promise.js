console.log("person1 shows ticket");
console.log("person2 shows ticket");

const createPost = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Post Created"), 2000);
  });
};

const deletePost = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Post Deleted"), 2000);
  });
};

const preMovie = async () => {
  const person3PromiseToShowTicketWhenWifeArrives = new Promise(
    (resolve, reject) => {
      setTimeout(() => resolve("ticket"), 3000);
    }
  );

  const getButter = new Promise((resolve, reject) => {
    setTimeout(() => resolve("butter"), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  console.log(`got ${ticket}`);

  // Husband gets butter
  let butter = await getButter;
  console.log(`husband got ${butter}`);

  const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => resolve("cold drinks"), 3000);
  });

  // Husband gets cold drinks
  let coldDrinks = await getColdDrinks;
  console.log(`husband got ${coldDrinks}`);

  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve("popcorn"), 3000);
  });

  const getCandy = new Promise((resolve, reject) => {
    setTimeout(() => resolve("candy"), 3000);
  });

  const getCoke = new Promise((resolve, reject) => {
    setTimeout(() => resolve("coke"), 3000);
  });

  let [popcorn, candy, coke] = await Promise.all([
    getPopcorn,
    getCandy,
    getCoke,
  ]);

  console.log(`got ${popcorn}, ${candy}, ${coke}`);

  return ticket;
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log("person4 shows ticket");
