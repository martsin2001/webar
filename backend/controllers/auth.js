const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createNewUser = data => {
  return new Promise(async (resolve, reject) => {
    const bcryptedPassword = bcrypt.hashSync(data.password, 10);
    const newUser = new User({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: bcryptedPassword
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
  const foundUser = await User.findOne({ email: req.body.email });
  if (foundUser) {
    const compare = bcrypt.compareSync(req.body.password, foundUser.password);
    if (compare) {
      const { firstName, lastName, email } = foundUser;
      const token = jwt.sign({ firstName, email }, 'secret_word');
      res.status(200).send({ firstName, lastName, email, token });
    } else {
      res.status(400).send('Incorrect password!');
    }
  } else {
    res.status(404).send('User not found!');
  }
};

const signUp = async (req, res) => {
  const foundUser = await User.findOne({ email: req.body.email });
  if (!foundUser) {
    createNewUser(req.body)
      .then(newUser => {
        const { firstName, lastName, email } = newUser;
        const token = jwt.sign({ firstName, email }, 'secret_word');
        res.status(201).send({ firstName, lastName, email, token });
      })
      .catch(err => res.status(500).send('Server error!'));
  } else {
    res.status(409).send('Such user already exists!');
  }
};

module.exports = { signIn, signUp };
