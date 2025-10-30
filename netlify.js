// functions/index.js (CÓDIGO SERVERLESS + EXPRESS FINAL)

const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const app = express();

app.use(express.json());
// CORS FINAL: Permite el acceso universal
app.use(cors({ origin: true })); 

// ==== ENDPOINTS DE STOCKFLOW (Lógica de Simulación) ====

// POST /companies (Registro)
app.post("/companies", function(req, res) { 
  const newCompanyId = Math.floor(Math.random() * 1000000);
  res.status(201).json({ 
    id: newCompanyId, 
    status: "REGISTRO_OK", 
    mensaje: "✅ Éxito: Registro simulado. Backend funcional." 
  });
});

// GET / (Endpoint de verificación)
app.get("/", function(req, res) {
  res.send("✅ Servidor Listo. Serverless Express en Línea.");
});

// ==== EXPORTACIÓN FINAL PARA NETLIFY ====
module.exports.handler = serverless(app);