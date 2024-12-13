import express from 'express';
import {
  getAll,
  getById,
  getByName,
  create,
  update,
  remove,
} from '../controllers/categoryController.js';

const router = express.Router();

router.get('/', getAll); // Obtiene todas las categorías
router.get('/:id', getById); // Obtiene una categoría por ID
router.get('/name/:name', getByName); // Obtiene una categoría por nombre
router.post('/', create); // Crea una categoría
router.put('/:id', update); // Actualiza una categoría
router.delete('/:id', remove); // Elimina una categoría

export default router;
