// functions/index.js (CÓDIGO DE PURA SIMULACIÓN - Máxima Compatibilidad)

const express = require("express");
const cors = require("cors"); 
const app = express();

app.use(express.json());
// CORS FINAL: Permite el acceso universal
app.use(cors({ origin: true })); 

// ==== ENDPOINTS DE STOCKFLOW (Lógica 100% Simulada) ====

// 1. Endpoint de Registro (POST)
app.post("/companies", function(req, res) { // NOTA: La ruta es solo /companies
  // Respuesta de éxito inmediato para la App de Flutter.
  const newCompanyId = Math.floor(Math.random() * 1000000);
  res.status(201).json({ 
    id: newCompanyId, 
    status: "REGISTRO_OK", 
    mensaje: "✅ Éxito: Registro simulado en el Backend." 
  });
});

// 2. Endpoint de Checkout (POST)
app.post("/checkout", function(req, res) { // NOTA: La ruta es solo /checkout
  const planName = req.body.planName || "Plan Básico";
  const session = {
    id: 'CS_SIMULADO',
    url: 'https://checkout.stockflow.simulado',
    plan: planName,
  };
  res.json({ sessionId: session.id, checkoutUrl: session.url, plan: session.plan });
});

// 3. Endpoint base para verificación (GET)
app.get("/", function(req, res) {
  res.send("✅ Servidor listo. SIMULACIÓN FINAL.");
});

// ==== EXPORTACIÓN FINAL PARA NETLIFY ====
// Esta es la sintaxis universalmente aceptada por Netlify Functions.
module.exports = app;