var mongoose = require("mongoose");

var firstSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  Name: {
    type: String,
  },
  Password: {
    type: String,
  },
});

var Todo = mongoose.model("TeenPattiGoldLuckyClubCollection", firstSchema);
module.exports = Todo;
