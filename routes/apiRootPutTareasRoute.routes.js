import express from 'express';
import { updateTareasHandler } from '../controller/tareasHandler.js';

const router = express.Router();
// '/tareas'  === '/'
router.put('/', updateTareasHandler )

export default router;