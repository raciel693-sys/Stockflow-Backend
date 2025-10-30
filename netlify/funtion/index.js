// netlify/functions/index.js (CÓDIGO NETLIFY FUNCTIONS COMPATIBLE)

// Usamos la sintaxis import que Netlify soporta nativamente
import express from "express";
import serverless from "serverless-http"; 
import cors from "cors";

// netlify/functions/index.js (INICIO CORREGIDO)

import express from "express";
import serverless from "serverless-http"; 
import cors from "cors";

// ==== CONFIGURACIÓN BASE (Express y CORS) ====
const app = express();
app.use(express.json());

// *CORRECCIÓN DE CORS: Permite todas las peticiones (Universal Access)*
app.use(cors({ origin: true })); 
// También podemos agregar un middleware que fuerza los encabezados
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); 
    res.header('Access-Control-Allow-Headers', 'Content-Type'); 
    next();
});

// ==== ENDPOINTS DE STOCKFLOW (Lógica Estable) ====

// El path debe coincidir con el path en Flutter: /api/companies
app.post("/api/companies", (req, res) => {
  const newCompanyId = Math.floor(Math.random() * 1000000);
  res.status(201).json({ id: newCompanyId, status: "PENDIENTE_LINK", mensaje: "Registro OK" });
});

// El path debe coincidir con el path en Flutter: /api/checkout
app.post("/api/checkout", (req, res) => {
  const planName = req.body.planName || "Plan Básico";
  const session = {
    id: 'cs_test_ok',
    url: 'https://checkout.stripe.com/pay/SIMULADA',
    plan: planName,
  };
  res.json(session);
});

// Endpoint base
app.get("/", (req, res) => {
  res.send("✅ Servidor listo. Desplegado en Netlify Functions.");
});

// ==== EXPORTACIÓN PARA NETLIFY ====
// Netlify usa el nombre 'handler' por defecto para el punto de entrada
export const handler = serverless(app)