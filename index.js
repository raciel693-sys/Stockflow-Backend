// index.js (Backend 100% Estable para la Nube)

// 1. IMPORTACIONES
const express = require("express");
const cors = require("cors");
// Las librerías están en package.json y se asumen instaladas para el despliegue.

// ==== CONFIGURACIÓN BASE ====
const app = express();
// Cloud Run / Render usan process.env.PORT, no 3000
const PORT = process.env.PORT || 8080; 

app.use(express.json());
app.use(cors());

// ==== ENDPOINTS DE STOCKFLOW (Lógica Mínima Estable) ====

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
  res.send("✅ Servidor listo. URL de prueba para Webhooks de Meta.");
});

// ==== INICIO ====
app.listen(PORT, function() {
  console.log(🚀 Servidor ejecutándose en el puerto: ${PORT});
}); 