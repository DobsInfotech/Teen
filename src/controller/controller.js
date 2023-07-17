var Todo = require("../model/schema");
const HTTP = require("../../constant/response.constant");

class class1 {
  static a = async (req, res) => {
    try {
      var addingMensRecords = new Todo({
        id: 1,
        Name: "Admin",
        Password: "Admin",
      });
      await addingMensRecords.save();
      res.render("index");
    } catch (err) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static b = async (req, res) => {
    try {
      var a = await Todo.find({});
      res.send(a);
    } catch (err) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
}

module.exports = { class1 };
