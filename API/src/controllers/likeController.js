import LikeModel from '../models/LikeModel.js';

const addLike = async (req, res) => {
  try {
    const { userId, photoId, date } = req.body;
    const success = await LikeModel.addLike({ userId, photoId, date });
    if (success) {
      res.status(201).json({ msg: 'Like added' });
    } else {
      res.status(400).json({ msg: 'Failed to add like' });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getLikesByPhoto = async (req, res) => {
  try {
    const { photoId } = req.params;
    const likes = await LikeModel.getLikesByPhoto(photoId);
    res.status(200).json({ photoId, likes });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const removeLike = async (req, res) => {
  try {
    const { userId, photoId } = req.body;
    const success = await LikeModel.removeLike(userId, photoId);
    if (success) {
      res.status(200).json({ msg: 'Like removed' });
    } else {
      res.status(404).json({ msg: 'Like not found' });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getLikesByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const likes = await LikeModel.getLikesByUser(userId);
    res.status(200).json({ userId, likes });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export { addLike, getLikesByPhoto, removeLike, getLikesByUser };
