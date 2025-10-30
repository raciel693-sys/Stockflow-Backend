// netlify/functions/index.js (CÓDIGO NETLIFY FUNCTIONS COMPATIBLE)

// Usamos la sintaxis import que Netlify soporta nativamente
import express from "express";
import serverless from "serverless-http"; 
import cors from "cors";

// ==== CONFIGURACIÓN BASE (Express) ====
const app = express();
app.use(express.json());
app.use(cors()); // Para permitir la conexión desde Flutter

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