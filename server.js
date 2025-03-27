/** DEPENDENCIES */
require("module-alias/register"); /** LOAD ALIAS FOR CUSTOM MODULES */

const express = require("express");
const next = require("next");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

if (process.env.NODE_ENV === "development") {
  const dotenv = require("dotenv"); /** UNCOMMENT WHEN SERVER IS IN LOCALHOST */
  dotenv.config(); /** UNCOMMENT WHEN SERVER IS IN LOCALHOST */
}

/** NODE ENVIRONMENT VARIABLES */
const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const dev = NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express()

  server.use(cors());
  server.use(morgan('dev'));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: false}));
  server.use(cookieParser());

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  let httpServer = require('http').createServer(server);

  httpServer.keepAliveTimeout = 0;

  httpServer.listen(PORT, (err) => {
    if (err)
      throw err
    console.log(`Local Website is running...`)
  });
});