import express from 'express';
import { postTareasHandler } from '../controller/tareasHandler.js';

const router = express.Router();
// '/tareas'  === '/'
router.post('/', postTareasHandler )

export default router;