import {
  criarCategoria,
  listarCategorias,
  obterCategoriaPorId,
  atualizarCategoria,
  deletarCategoria,
} from "../services/categoriaService.js";

// Controller para criar um novo categoria com imagem
export const criarCategoriaController = async (req, res) => {
  const { nome } = req.body;
  const imagem = req.file ? req.file.path : null; // Usa apenas o caminho da imagem

  try {
    // Chama o serviço para criar a categoria
    const categoria = await criarCategoria({
      nome,
      imagem,
    });
    res.status(201).json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const obterCategorias = async (req, res) => {
  try {
    const categorias = await listarCategorias();
    return res.json(categorias);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const obterCategoria = async (req, res) => {
  const { categoriaId } = req.params;

  try {
    const categoria = await obterCategoriaPorId(parseInt(categoriaId));
    if (!categoria) {
      return res.status(404).json({ error: "Categoria não encontrado" });
    }
    res.json(categoria);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const editarCategoria = async (req, res) => {
  const { categoriaId } = req.params;
  const dadosAtualizados = req.body;

  if (req.file) {
    dadosAtualizados.imagem = req.file.path;
  }

  try {
    const categoria = await atualizarCategoria(
      parseInt(categoriaId),
      dadosAtualizados
    );
    res.json(categoria);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const removerCategoria = async (req, res) => {
  const { categoriaId } = req.params;

  try {
    await deletarCategoria(parseInt(categoriaId));
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
