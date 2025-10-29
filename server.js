// server.js — versión 100% compatible con Render

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ==== ENDPOINTS ====

// Registro de empresa
app.post("/api/companies", (req, res) => {
  const newCompanyId = Math.floor(Math.random() * 1000000);
  res.status(201).json({ id: newCompanyId, status: "PENDIENTE_LINK" });
});

// Crear sesión de pago (Stripe)
app.post("/api/checkout", (req, res) => {
  const planName = req.body.planName || "Plan Básico";
  const session = {
    id: "cs_test_ok",
    url: "https://checkout.stripe.com/pay/SIMULADA",
    plan: planName,
  };
  res.json(session);
});

// Consulta IA
app.get("/api/consulta-ia", (req, res) => {
  res.json({ ia_respuesta: "Simulación: Lista para producción." });
});

// Endpoint base
app.get("/", (req, res) => {
  res.send("✅ Servidor corriendo correctamente en Render (CommonJS).");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(🚀 Servidor ejecutándose en el puerto: ${PORT});
});