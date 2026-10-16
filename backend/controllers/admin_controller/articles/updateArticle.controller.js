import { updateArticleService } from "../../services/article.service.js";

// Update Article Controller

const UpdateArticle = async (req, res) => {
  try {
    const article = await updateArticleService(
      req.params.id,
      req.body,
      req.user._id,
      req.user.role,
    );
    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: `Article updated by ${req.user.role}`,
      article,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error in Update Article Controller",
    });
  }
};

export default UpdateArticle;
