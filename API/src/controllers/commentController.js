import CommentModel from '../models/CommentModel.js';

const create = async (req, res) => {
  try {
    const { content, date, status, userId, photoId } = req.body;
    const commentId = await CommentModel.createComment({
      content,
      date,
      status,
      userId,
      photoId,
    });
    res.status(201).json({ msg: 'Comment created', id: commentId });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await CommentModel.getCommentById(id);
    if (!response) {
      res.status(404).json({ msg: 'Comment not found' });
      return;
    }
    res.json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getByPhotoId = async (req, res) => {
  try {
    const { photoId } = req.params;
    const response = await CommentModel.getCommentsByPhotoId(photoId);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CommentModel.deleteComment(id);
    if (!deleted) {
      res.status(404).json({ msg: 'Comment not found' });
      return;
    }
    res.json({ msg: 'Comment deleted', id });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export { create, getById, getByPhotoId, remove };
