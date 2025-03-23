import express from "express";
import upload from "../middleware/multerConfig.js";

import {
  criarCategoriaController,
  obterCategorias,
  obterCategoria,
  editarCategoria,
  removerCategoria,
} from "../controllers/categoriaController.js";

import {
  verificarToken,
  verificarAdmin,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// Rota pública para listar todos os categorias
router.get("/categorias", obterCategorias);

// Rota pública para obter um categoria específico por ID
router.get("/categorias/:categoriaId", obterCategoria);

// Rota para cadastrar um novo categoria (Admin Only)
router.post(
  "/categorias",
  upload.single("imagem"),
  verificarToken,
  verificarAdmin,
  criarCategoriaController
);

// Rota para atualizar um categoria (Admin Only)
router.put(
  "/categorias/:categoriaId",
  upload.single("imagem"),
  verificarToken,
  verificarAdmin,
  editarCategoria
);

// Rota para remover um categoria (Admin Only)
router.delete(
  "/categorias/:categoriaId",
  verificarToken,
  verificarAdmin,
  removerCategoria
);

export default router;
