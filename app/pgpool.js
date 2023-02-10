const { Pool } = require("pg");

const pool = new Pool({
    password: "root",
    user: "root",
    host: "host.docker.internal",
    // host: "http://postgres:5432"
  });

module.exports = pool