const User = require('../models/user');
const jwt = require('jsonwebtoken');

const createNewUser = data => {
  return new Promise(async (resolve, reject) => {
    const newUser = new User({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    });
    try {
      await newUser.save();
      resolve(newUser);
    } catch (err) {
      reject(err);
    }
  });
};

const signIn = async (req, res) => {
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    const { firstName, lastName, email } = existingUser;
    const token = jwt.sign({ firstName, email }, 'secret_word');
    res.status(201).send({ firstName, lastName, email, token });
  } else {
    res.status(404).send('User not found!');
  }
};

const signUp = async (req, res) => {
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    createNewUser(req.body)
      .then(newUser => {
        const { firstName, lastName, email } = newUser;
        const token = jwt.sign({ firstName, email }, 'secret_word');
        res.status(201).send({ firstName, lastName, email, token });
      })
      .catch(err => res.status(500).send('Server error!'));
  } else {
    res.status(409).send('Such user already exist!');
  }
};

module.exports = { signIn, signUp };
