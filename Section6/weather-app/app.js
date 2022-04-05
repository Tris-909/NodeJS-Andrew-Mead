console.log("Starting");

setTimeout(() => {
  console.log("Time out 2");
}, 1000);

setTimeout(() => {
  console.log("Time out");
}, 0);

console.log("Stopping");
