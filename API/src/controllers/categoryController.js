import CategoryModel from '../models/CategoryModel.js';

const getAll = async (req, res) => {
  try {
    const response = await CategoryModel.getAllCategories();
    res.json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const response = await CategoryModel.getCategoryById(req.params.id);
    if (!response) {
      res.status(404).json({ msg: 'Category not found' });
      return;
    }
    res.json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getByName = async (req, res) => {
  try {
    const response = await CategoryModel.getCategoryByName(req.params.name);
    if (!response) {
      res.status(404).json({ msg: 'Category not found' });
      return;
    }
    res.json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const categoryId = await CategoryModel.createCategory(name);
    res.status(201).json({ msg: 'Category created', id: categoryId });
  } catch (err) {
    if (err.message.includes('already exists')) {
      res.status(400).json({ msg: err.message });
    } else {
      res.status(500).json({ msg: err.message });
    }
  }
};

const update = async (req, res) => {
  try {
    const { name } = req.body;
    const updated = await CategoryModel.updateCategory(req.params.id, name);
    if (!updated) {
      res.status(404).json({ msg: 'Category not found' });
      return;
    }
    res.json({ msg: 'Category updated', id: req.params.id });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const deleted = await CategoryModel.deleteCategory(req.params.id);
    if (!deleted) {
      res.status(404).json({ msg: 'Category not found' });
      return;
    }
    res.json({ msg: 'Category deleted', id: req.params.id });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export { getAll, getById, getByName, create, update, remove };
