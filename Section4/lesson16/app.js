const yargs = require("yargs");

yargs
  .command("add", "Adding a note", function () {
    console.log("Adding a note...");
  })
  .help().argv;
yargs
  .command("remove", "Removing a note", function () {
    console.log("Removing a note...");
  })
  .help().argv;
yargs
  .command("read", "Reading a note", function () {
    console.log("Reading a note...");
  })
  .help().argv;
yargs
  .command("list", "Listing notes", function () {
    console.log("Listing notes...");
  })
  .help().argv;
