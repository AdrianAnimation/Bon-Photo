import express from 'express';
import {
  create,
  getById,
  getByPhotoId,
  remove,
} from '../controllers/commentController.js';

const router = express.Router();

router.post('/', create); // Crea un comentario
router.get('/:id', getById); // Obtiene un comentario por ID
router.get('/photo/:photoId', getByPhotoId); // Obtiene todos los comentarios de una foto
router.delete('/:id', remove); // Elimina un comentario

export default router;
