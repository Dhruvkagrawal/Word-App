const { connect } = require("mongoose");

module.exports = () => {
  return connect(
    "mongodb+srv://DhruvKumar:qwer1234@cluster0.g5u4z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};
