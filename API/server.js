/* eslint-disable no-unused-vars */
import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routes/index.routes.js';
import morgan from 'morgan';
import cors from 'cors';

// Configuración de variables de entorno
dotenv.config();

const app = express();

// Middleware básico
app.use(express.json()); // Parsear JSON en las solicitudes
app.use(express.urlencoded({ extended: true })); // Parsear datos en formato URL

app.use(cors());
app.use(morgan('dev'));

app.use('/api', routes); // Todas las rutas estarán bajo el prefijo /api

// Manejo de errores genéricos
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Something went wrong', error: err.message });
});

// Servidor en escucha en puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
