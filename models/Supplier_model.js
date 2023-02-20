import mongoose from "mongoose";
const { Schema } = mongoose;

const supplier_details = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: String,
  company_name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  GST: String,
});

const Supplier_data = mongoose.model("Supplier_data", supplier_details);

module.export = Supplier_data;
