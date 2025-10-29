// index.js (CÓDIGO FINAL VERSIÓN ES MODULE)

// Usamos la sintaxis moderna 'import'
import express from 'express';
import cors from 'cors';

// ==== CONFIGURACIÓN BASE ====
const app = express();
// Render usa process.env.PORT, si no, usa 3000 localmente
const PORT = process.env.PORT || 3000; 

app.use(express.json());
app.use(cors());

// ==== ENDPOINTS DE STOCKFLOW (Lógica Estable) ====

// 1. Registro de empresa
app.post("/api/companies", (req, res) => {
  // Nota: Usamos la sintaxis moderna de Arrow Function (flecha)
  const newCompanyId = Math.floor(Math.random() * 1000000);
  res.status(201).json({ id: newCompanyId, status: "PENDIENTE_LINK" });
});

// 2. Crear sesión de pago (Stripe)
app.post("/api/checkout", (req, res) => {
  const planName = req.body.planName || "Plan Básico";
  const session = {
      id: 'cs_test_ok',
      url: 'https://checkout.stripe.com/pay/SIMULADA',
      plan: planName
  };
  res.json({ sessionId: session.id, checkoutUrl: session.url, plan: planName });
});

// 3. Consulta con IA (Gemini)
app.get("/api/consulta-ia", (req, res) => {
  res.json({ ia_respuesta: "Simulación: Lista para producción." });
});

// Endpoint base
app.get("/", (req, res) => {
  res.send("✅ Servidor listo. La sintaxis ES Module debe compilar sin errores ahora.");
});

// ==== INICIO ====
app.listen(PORT, () => {
  console.log(🚀 Servidor ejecutándose en el puerto: ${PORT});
});