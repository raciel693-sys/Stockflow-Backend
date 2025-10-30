// index.js (CÓDIGO HANDLER UNIVERSAL)

// Eliminamos Express y CORS para esta prueba.
// const express = require("express");
// const cors = require("cors");

// Esta es la sintaxis Serverless universal:
exports.handler = async (event, context) => {
  // Simulación de endpoint de registro
  if (event.path.endsWith('/api/companies') && event.httpMethod === 'POST') {
    // Código de éxito de creación
    const id = Math.floor(Math.random() * 1000000);
    return {
      statusCode: 201,
      body: JSON.stringify({
        id: id,
        status: "REGISTRO_OK",
        mensaje: "Éxito: Servidor funcional."
      }),
    };
  }

  // Si se llama al endpoint base o a cualquier otra ruta no reconocida:
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Servidor Listo. Handler Final."
    }),
  };
};