import { createArticleService } from "../../services/article.service.js";

// Add Article Controller

const addArticle = async (req, res) => {
  try {
    const article = await createArticleService(req.body, req.user._id);
    return res
      .status(201)
      .json({ success: true, message: "Article added", article });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error in Add Article Controller",
    });
  }
};

export default addArticle;
