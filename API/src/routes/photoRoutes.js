import express from 'express';
import {
  getAll,
  getById,
  create,
  update,
  remove,
} from '../controllers/photoController.js';

const router = express.Router();

router.get('/', getAll); // Obtiene todas las fotos
router.get('/:id', getById); // Obtiene una foto por ID
router.post('/', create); // Sube una foto
router.put('/:id', update); // Actualiza una foto
router.delete('/:id', remove); // Elimina una foto

export default router;
