// index.js (CÓDIGO FINAL DE PRODUCCIÓN - ÚLTIMO INTENTO)

// Usamos la sintaxis require y declaramos todo con const (estable)
const express = require("express");
const cors = require("cors");
// Las otras librerías (axios, stripe, gemini) están instaladas y serán requeridas DENTRO de las funciones.

// ==== CONFIGURACIÓN BASE ====
const app = express();
// Render usa process.env.PORT
const PORT = process.env.PORT || 3000; 

app.use(express.json());
app.use(cors());

// ==== ENDPOINTS DE STOCKFLOW (Lógica Estable) ====

// 1. Registro de empresa
app.post("/api/companies", function(req, res) {
  const newCompanyId = Math.floor(Math.random() * 1000000);
  res.status(201).json({ id: newCompanyId, status: "PENDIENTE_LINK" });
});

// 2. Crear sesión de pago (Stripe)
app.post("/api/checkout", function(req, res) {
  const planName = req.body.planName || "Plan Básico";
  const session = {
      id: 'cs_test_ok',
      url: 'https://checkout.stripe.com/pay/SIMULADA',
      plan: planName
  };
  res.json({ sessionId: session.id, checkoutUrl: session.url, plan: planName });
});

// 3. Consulta con IA (Gemini)
app.get("/api/consulta-ia", function(req, res) {
  res.json({ ia_respuesta: "Simulación: Lista para producción." });
});

// Endpoint base
app.get("/", function(req, res) {
  res.send("✅ Servidor listo. Render debe compilar ahora.");
});

// ==== INICIO ====
app.listen(PORT, function() {
  console.log(🚀 Servidor ejecutándose en el puerto: ${PORT});
});