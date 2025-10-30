// functions/index.js (CÓDIGO SERVERLESS + EXPRESS)

const express = require("express");
const serverless = require("serverless-http"); // Vuelve a entrar la librería
const cors = require("cors"); 
const app = express();

app.use(express.json());
app.use(cors({ origin: true })); 

// ==== ENDPOINTS DE STOCKFLOW (Lógica de Simulación) ====

// La ruta es la misma que usa Flutter: /companies
app.post("/companies", function(req, res) { 
  const newCompanyId = Math.floor(Math.random() * 1000000);
  res.status(201).json({ 
    id: newCompanyId, 
    status: "REGISTRO_OK", 
    mensaje: "✅ Éxito: Registro simulado." 
  });
});

// La ruta es la misma que usa Flutter: /checkout
app.post("/checkout", function(req, res) { 
  const planName = req.body.planName || "Plan Básico";
  res.json({ sessionId: 'CS_SIMULADO', checkoutUrl: 'https://checkout.stockflow.simulado', plan: planName });
});

// Endpoint base para verificación
app.get("/", function(req, res) {
  res.send("✅ Servidor listo. Serverless Express final.");
});

// ==== EXPORTACIÓN FINAL PARA NETLIFY ====
// Esta línea es la única que Netlify ejecuta.
module.exports.handler = serverless(app);