import Article from "../../models/article_models/article.model.js";

// Create articl services
export const createArticleService = async (data, userId, role) => {
  const article = await Article.create({
    ...data,
    createdBy: userId,
    createdByRole: role,
  });
  return article;
};

// Update article service
export const updateArticleService = async (id, data, userId, role) => {
  const { createdBy, createdByRole, updatedBy, updatedByRole, ...safeData } =
    data;
  const article = await Article.findOneAndUpdate(
    { _id: id },
    {
      ...safeData,
      updatedBy: userId,
      updatedByRole: role,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  return article;
};

// Delete article service
export const deleteArticleService = async (id) => {
  const article = await Article.findOneAndDelete({ _id: id });
  if (!article) throw new Error("Article not found");
  return article;
};
