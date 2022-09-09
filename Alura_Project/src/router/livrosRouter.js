import express from "express";

import LivrosController from "../Controller/livrosController.js";

const router = express.Router();

router
    .get ('/livros', LivrosController.listarlivros)

export default router