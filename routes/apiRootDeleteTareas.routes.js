import express from 'express';
import { deleteTareasHandler } from '../controller/tareasHandler.js';

const router = express.Router();
// '/tareas'  === '/'
router.delete('/', deleteTareasHandler )

export default router;