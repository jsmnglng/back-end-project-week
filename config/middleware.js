const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const logger = require("morgan");

module.exports = server => {
  server.use(express.json());
  server.use(helmet());
  server.use(cors());
  server.use(logger("dev"));
};
