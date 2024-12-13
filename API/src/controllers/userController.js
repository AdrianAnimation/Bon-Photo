import UserModel from '../models/userModel.js';

const getAll = async (req, res) => {
  try {
    const response = await UserModel.getAllUsers();
    res.json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const response = await UserModel.getUserById(req.params.id);
    if (!response) {
      res.status(404).json({ msg: 'User not found' });
      return;
    }
    res.json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const create = async (req, res) => {
  try {
    const { username, email, password, roleId } = req.body;
    const userId = await UserModel.createUser(
      username,
      email,
      password,
      roleId
    );
    res.status(201).json({ msg: 'User created', id: userId });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { username, email, roleId } = req.body;
    const updated = await UserModel.updateUser(req.params.id, {
      username,
      email,
      roleId,
    });
    if (!updated) {
      res.status(404).json({ msg: 'User not found' });
      return;
    }
    res.json({ msg: 'User updated', id: req.params.id });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const deleted = await UserModel.deleteUser(req.params.id);
    if (!deleted) {
      res.status(404).json({ msg: 'User not found' });
      return;
    }
    res.json({ msg: 'User deleted', id: req.params.id });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export { getAll, getById, create, update, remove };
