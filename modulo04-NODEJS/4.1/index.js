const add = (a, b) => {
  return a + b;
};
console.log(add(2, 30));
const fs = require("fs");

const myText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, atque doloremque iste molestiae voluptas illum quis laudantium deserunt, nam blanditiis pariatur, tempore tempora ea sapiente accusantium laboriosam iure commodi id?";

const myObject = {
  originalContent: "Lorem ipsum",
  changedContent: "LOREM IPSUM",
  textLenght: 11,
};

console.log(myObject);

const handleWriteFile = (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("The file has been saved!");
  }
};

fs.writeFile("./output.txt", JSON.stringify(myObject), handleWriteFile);
