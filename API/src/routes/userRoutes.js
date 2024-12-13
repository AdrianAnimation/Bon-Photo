import express from 'express';
import {
  getAll,
  getById,
  create,
  update,
  remove,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAll); // Obtiene todos los usuarios
router.get('/:id', getById); // Obtiene un usuario por ID
router.post('/', create); // Crea un usuario
router.put('/:id', update); // Actualiza un usuario
router.delete('/:id', remove); // Elimina un usuario

export default router;
