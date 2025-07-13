import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import partidasRoutes from "./routes/partidas.js";

dotenv.config();

const app = express();


const corsOptions = {
  origin: [
    "https://laberinto-front.onrender.com",
    "http://127.0.0.1:5501"                  
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); 
app.use(express.json());
app.use("/partidas", partidasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});

