const mongoose = require("mongoose");
const Product = require("./models/product.model");
// MongoDB connection
const dotenv = require("dotenv")
dotenv.config()
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));
const seedData = async () => {
  try {
    // Clear old data (optional)
    await Product.deleteMany({});
    // Insert seed data
    await Product.insertMany([
      { name: "Widget A", sku: "WA-001", qty: 15, price: 9.99 },
      { name: "Widget B", sku: "WB-002", qty: 7, price: 14.5 },
      { name: "Widget C", sku: "WC-003", qty: 10, price: 19.99 },
      { name: "Widget D", sku: "WD-004", qty: 5, price: 24.99 },
      { name: "Widget E", sku: "WE-005", qty: 8, price: 29.99 },
      { name: "Widget F", sku: "WF-006", qty: 12, price: 34.99 },
      { name: "Widget G", sku: "WG-007", qty: 14, price: 39.99 },
      { name: "Widget H", sku: "WH-008", qty: 9, price: 44.99 },
      { name: "Widget I", sku: "WI-009", qty: 6, price: 49.99 },
      { name: "Widget J", sku: "WJ-010", qty: 11, price: 54.99 },
    ]);
    console.log("🌱 Seed data inserted successfully");
  } catch (err) {
    console.error("❌ Error seeding data:", err);
  } finally {
    mongoose.connection.close();
  }
};
seedData();