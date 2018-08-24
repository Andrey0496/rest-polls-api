import User from '../user/user.model';
import { parseErrors } from '../../util/errors';

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && user.isValidPassword(password)) {
      res.json(user);
    } else {
      res.status(400).json({ errors: { global: 'Invalid Credentials' } })
    }
  } catch (err) {
    console.log(err);
  }
};

export const signin = async (req, res) => {
  if (req.body) {
    const { email, password, firstName, lastName, username } = req.body;
    const user = new User({ email, firstName, lastName, username })
    user.setPassword(password);
    try {
      const doc = await user.save();
      res.status(201).json(doc)
    } catch (err) {
      if (err.name === 'ValidationError') {
        res.status(400).json({ errors: parseErrors(err.errors) })
      }
    }
  } else {
    res.status(400).json({});
  }
};
