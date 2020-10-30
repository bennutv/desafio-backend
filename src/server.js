const app = require("./app");

console.log("Valid tokens loaded");

app.listen(process.env.PORT || 3000);
console.log(`Server started on PORT ${process.env.PORT || 3000}`);
