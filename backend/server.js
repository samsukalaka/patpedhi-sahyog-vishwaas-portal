require('dotenv').config(); // Load .env file
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

// Test route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server ready on http://localhost:${PORT}`);
});






// Handle shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});