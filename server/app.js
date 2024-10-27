// index.js
import express from 'express';
import { configDotenv } from 'dotenv';
configDotenv();
const app = express();
const PORT = process.env.PORT || 3000;
const db_url = process.env.DB_URL;
import cors from 'cors';
import bodyParser from 'body-parser';
// import apiRoutes from './routes/api.js';
import connectDB from './database.js';
import productRouter from "./routes/product.js"
import reviewRouter from "./routes/review.js"
import Product from './models/product.js';
import { products } from './dummy/products.js';




// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

connectDB(db_url)
.then(()=>console.log("Connected to db"))
.catch(err=>console.log("Can't conected to db", err));

// Routes
app.use('/api/product', productRouter);
app.use('/api/review', reviewRouter);

// console.log(Error);

app.get("/init",async (req,res)=>{
  await Product.deleteMany();
 const dbResponse = await Product.insertMany(products)
 res.json(dbResponse);
})


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

