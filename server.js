const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const router = require('./routes');

function startServer(server) {
  const { PORT } = process.env;

  server.listen(PORT || 3001, () => {
    console.log(`We live on ${PORT || 3001}`); // eslint-disable-line
  });
}

async function init() {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());

  app.use(express.static('views'));

  router(app);
  startServer(app);
}

init();