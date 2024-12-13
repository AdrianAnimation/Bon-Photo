import PhotoModel from '../models/photoModel.js';

const getAll = async (req, res) => {
  try {
    const response = await PhotoModel.getAllPhotos();
    res.json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const response = await PhotoModel.getPhotoById(req.params.id);
    if (!response) {
      res.status(404).json({ msg: 'Photo not found' });
      return;
    }
    res.json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const create = async (req, res) => {
  try {
    const {
      title,
      description,
      photoUrl,
      alt,
      uploadDate,
      status,
      userId,
      categoryId,
    } = req.body;
    const photoId = await PhotoModel.createPhoto({
      title,
      description,
      photoUrl,
      alt,
      uploadDate,
      status,
      userId,
      categoryId,
    });
    res.status(201).json({ msg: 'Photo created', id: photoId });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const update = async (req, res) => {
  try {
    const {
      title,
      description,
      photoUrl,
      alt,
      uploadDate,
      status,
      categoryId,
    } = req.body;
    const updated = await PhotoModel.updatePhoto(req.params.id, {
      title,
      description,
      photoUrl,
      alt,
      uploadDate,
      status,
      categoryId,
    });
    if (!updated) {
      res.status(404).json({ msg: 'Photo not found' });
      return;
    }
    res.json({ msg: 'Photo updated', id: req.params.id });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const deleted = await PhotoModel.deletePhoto(req.params.id);
    if (!deleted) {
      res.status(404).json({ msg: 'Photo not found' });
      return;
    }
    res.json({ msg: 'Photo deleted', id: req.params.id });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export { getAll, getById, create, update, remove };
