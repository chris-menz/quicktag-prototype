const { Pool } = require("pg");

export const pool = new Pool({
    password: "root",
    user: "root",
    host: "host.docker.internal",
  });