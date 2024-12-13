import express from 'express';
import {
  addLike,
  getLikesByPhoto,
  removeLike,
  getLikesByUser,
} from '../controllers/likeController.js';

const router = express.Router();

router.post('/', addLike); // Agrega un "like"
router.get('/photo/:photoId', getLikesByPhoto); // Obtiene todos los "likes" de una foto
router.get('/user/:userId', getLikesByUser); // Obtiene todas las fotos "likeadas" por un usuario
router.delete('/', removeLike); // Elimina un "like"

export default router;
