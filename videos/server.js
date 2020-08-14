const app = require("./src/app");
const { DB_URI } = require("./src/config");
const mongoose = require("mongoose");
mongoose.connect(DB_URI);

app.listen(3003, () => {
  console.log("running on port 3003");
  console.log("--------------------------");
});
