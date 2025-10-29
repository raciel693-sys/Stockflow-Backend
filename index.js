// index.js — versión funcional compatible con Render y Flutter

import express from "express";
import cors from "cors";

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
  const { planName = "Plan Básico" } = req.body;
  res.json({
    sessionId: "cs_test_ok",
    checkoutUrl: "https://checkout.stripe.com/pay/SIMULADA",
    plan: planName,
  });
});

// Consulta IA (Gemini)
app.get("/api/consulta-ia", (req, res) => {
  res.json({ ia_respuesta: "Simulación: Lista para producción." });
});

// Endpoint base
app.get("/", (req, res) => {
  res.send("✅ Servidor funcionando correctamente en Render.");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(🚀 Servidor ejecutándose en el puerto ${PORT});
});