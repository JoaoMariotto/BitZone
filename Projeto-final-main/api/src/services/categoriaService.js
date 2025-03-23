import prisma from "./prismaClient.js";

export const criarCategoria = async (data) => {
  const { nome, imagem } = data;

  return await prisma.categoria.create({
    data: {
      nome,
      imagem,
    },
  });
};

export const listarCategorias = async () => {
  const categorias = await prisma.categoria.findMany();

  // Formata a URL da imagem
  const categoriasFormatados = categorias.map((categoria) => {
    return {
      ...categoria,
      imagem: categoria.imagem
        ? `${process.env.BASE_URL}/${categoria.imagem.replace(/\\/g, "/")}`
        : null,
    };
  });

  return categoriasFormatados;
};

export const obterCategoriaPorId = async (categoriaId) => {
  const categoria = await prisma.categoria.findUnique({
    where: { id: categoriaId },
    include: { imagens: true }, // Inclui as imagens do categoria
  });

  if (!categoria) {
    throw new Error("Categoria não encontrado.");
  }

  // Formata a URL das imagens
  const imagensFormatadas = categoria.imagens.map((imagem) => {
    return `${process.env.BASE_URL}/${imagem.url.replace(/\\/g, "/")}`;
  });

  // Retorna o categoria com as URLs das imagens formatadas
  return {
    ...categoria,
    imagens: imagensFormatadas,
  };
};

export const atualizarCategoria = async (categoriaId, data) => {
  const { nome, imagem } = data;

  // Dados de atualização
  let updateData = {
    nome,
    imagem, // Esse campo deve conter apenas o caminho do arquivo
  };

  return await prisma.categoria.update({
    where: { id: categoriaId },
    data: updateData,
  });
};

export const deletarCategoria = async (categoriaId) => {
  // Verifica se o categoria existe
  await prisma.categoria.findUnique({
    where: { id: categoriaId },
  });

  // Agora deleta o categoria
  return await prisma.categoria.delete({
    where: { id: categoriaId },
  });
};
