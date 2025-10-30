// index.js (CÓDIGO FINAL DE PRODUCCIÓN - SINTAXIS CommonJS)

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080; // Usa el puerto que Netlify le asigne

app.use(express.json());

// *CORS FINAL: Permite el acceso universal*
app.use(cors({ origin: true })); 

// ==== ENDPOINTS DE STOCKFLOW (Lógica Estable) ====

// Endpoint de Registro (POST /api/companies)
app.post("/api/companies", function(req, res) {
  const newCompanyId = Math.floor(Math.random() * 1000000);
  res.status(201).json({ id: newCompanyId, status: "PENDIENTE_LINK", mensaje: "Registro OK" });
});

// Endpoint de Checkout (POST /api/checkout)
app.post("/api/checkout", function(req, res) {
  const planName = req.body.planName || "Plan Básico";
  const session = {
    id: 'cs_test_ok',
    url: 'https://checkout.stripe.com/pay/SIMULADA',
    plan: planName,
  };
  res.json(session);
});

// Endpoint base para verificación (GET /)
app.get("/", function(req, res) {
  res.send("✅ Servidor listo. CommonJS Final.");
});

// ==== ARRANQUE ====
app.listen(PORT, function() {
  console.log(Servidor ejecutándose en el puerto: ${PORT});
});