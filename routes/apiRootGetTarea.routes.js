import express from 'express';
import { getTareaIdHandler } from '../controller/tareasHandler.js';

const router = express.Router();
// '/tareas'  === '/'
router.get('/', getTareaIdHandler )

export default router;