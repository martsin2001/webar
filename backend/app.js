const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./routers/auth');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', authRouter);

app.listen(5000, () => console.log('Server is working!'));
