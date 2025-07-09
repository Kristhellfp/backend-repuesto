import { Router } from 'express';
import { connection } from '../db.js';

const router = Router();

router.post("/guardar", async (req, res) => {
  const { nivel, movimientos, tiempo } = req.body;

  console.log("📥 Datos recibidos:", { nivel, movimientos, tiempo });

  if (!nivel || !movimientos || !tiempo) {
    return res.status(400).json({ error: "Datos incompletos" });
  }

  try {
    const sql = `
      INSERT INTO partidas_laberinto (nivel, movimientos, tiempo, fecha_partida)
      VALUES (?, ?, ?, NOW())
    `;
    await connection.execute(sql, [nivel, movimientos, tiempo]);

    res.json({ mensaje: "Resultado guardado exitosamente" });
  } catch (error) {
    console.error("❌ Error en el INSERT:", error);
    res.status(500).json({ error: "Error al guardar en la base de datos" });
  }
});

export default router;
