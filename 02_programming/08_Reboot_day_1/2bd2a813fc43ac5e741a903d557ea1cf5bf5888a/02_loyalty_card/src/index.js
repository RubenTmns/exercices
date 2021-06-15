import readline from "readline";
import customer from "./customer.js";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

customer(reader);

import * as uuid from "uuid";

const id = uuid.v4();