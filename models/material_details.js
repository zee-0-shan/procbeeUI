import mongoose from "mongoose";
const { Schema } = mongoose;

const materials_name = new Schema({
  material_name: String,
});

const variant_name = new Schema({
  materials_name: [{ type: Schema.Types.ObjectId, ref: "material" }],
  variant: String,
});

const Batch = new Schema({
  variant_name: [{ type: Schema.Types.ObjectId, ref: "variant" }],
  batch_no: String,
  SKU_ID: String,
});

const Stock = new Schema({
  SKU_ID: [{ type: Schema.Types.ObjectId, ref: "batch" }],
  stock: Number,
  price: Number,
});

const stock = mongoose.model("Stock_price_of_variants", Stock);
const batch = mongoose.model("Batch_of_variant", Batch);
const material = mongoose.model("materials", materials_name);
const variant = mongoose.model("variant_of_material", variant_name);
