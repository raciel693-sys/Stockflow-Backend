// index.js (CÓDIGO HANDLER UNIVERSAL)

// Eliminamos Express y CORS para esta prueba.
// const express = require("express");

// Esta es la sintaxis de Serverless universal:
exports.handler = async (event, context) => {
    // Si la App de Flutter llama a /api/companies, devuelve un éxito simulado.
    if (event.path.endsWith('/companies')) {
        return {
            statusCode: 201, // Código de éxito de creación (registro)
            body: JSON.stringify({ 
                id: Math.floor(Math.random() * 1000000), 
                status: "REGISTRO_OK",
                mensaje: "✅ Éxito: Servidor funcional." 
            })
        };
    }
    
    // Si se llama al endpoint base
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "✅ Servidor Listo. Handler Final." })
    };
};