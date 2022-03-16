require("dotenv").config();

const { connect } = require("mongoose");

module.exports = () => {
  return connect(process.env.dbs);
};
