import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import partidasRoutes from "./routes/partidas.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/partidas", partidasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});
