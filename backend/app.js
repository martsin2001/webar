const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRouter = require('./routers/auth');
const keys = require('./middleware/keys');

const app = express();

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB conected!'))
  .catch(() => console.log('Connection fail!'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', authRouter);

app.listen(5000, () => console.log('Server is working!'));
