import express from 'express';
import userRoutes from './userRoutes.js';
import photoRoutes from './photoRoutes.js';
import categoryRoutes from './categoryRoutes.js';
import likeRoutes from './likeRoutes.js';
import commentRoutes from './commentRoutes.js';

const router = express.Router();

router.use('/users', userRoutes); // Rutas para usuarios
router.use('/photos', photoRoutes); // Rutas para fotos
router.use('/categories', categoryRoutes); // Rutas para categorías
router.use('/likes', likeRoutes); // Rutas para likes
router.use('/comments', commentRoutes); // Rutas para comentarios

export default router;
