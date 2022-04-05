console.log(process.argv);

const command = process.argv[2];

if (command === "add") {
  console.log("Add");
} else if (command === "remove") {
  console.log("Remove");
}
