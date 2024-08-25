const fs = require("fs");

fs.writeFile("Message.text", "Hello Node", (er) => {
  if (er) throw er;
    console.log("File Created");
});

fs.readFile("Message.text", "utf-8", (er, data) => {
  if (er) throw er;
  console.log(data);
})
