import randomSk from "randomskjs";
import calculator from "./UTILS/CALC/index.js";
import Calculator from "./UTILS/SCI_CALC/index.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import sqlite3 from "sqlite3";

const main = () => {
  const utiljs = {
    calculator_default: calculator(),
    randomSk_Js: function (perimeter) {
      return randomSk(perimeter);
    },
    sci_calculator_default: Calculator,
    express_: () => {
      return express;
    },
    cors_: () => {
      return cors;
    },
    dotenv_: () => {
      return dotenv;
    },
    sqlite3_: () => {
      return sqlite3;
    },
  };

  return utiljs;
};

export default main;

const lib = main();










let express2 = lib.express_()
let crs2 = lib.cors_()
const app = express2()
app.use(crs2())
