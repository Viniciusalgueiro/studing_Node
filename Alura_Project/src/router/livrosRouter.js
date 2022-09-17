import express from "express";
import LivroController from "../Controller/livrosController.js";

import LivrosController from "../Controller/livrosController.js";

const router = express.Router();

router
    .get ("/livros", LivrosController.listarlivros)
    .post("/livros", LivrosController.cadastrarLivro)

export default router