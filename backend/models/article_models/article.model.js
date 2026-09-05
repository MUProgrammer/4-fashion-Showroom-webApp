import mongoose from "mongoose";
const colorSchema = new mongoose.Schema({
  color: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true, default: 0 },
});             
const variantSchema = new mongoose.Schema({
  size: { type: String, required: true },
  colors: [colorSchema],
});
const articalSchema = new mongoose.Schema({
  articleName: {
    type: String,
    required: true,
  },
  variants: [variantSchema],
});

const Article = mongoose.model("Article", articalSchema);
export default Article;
