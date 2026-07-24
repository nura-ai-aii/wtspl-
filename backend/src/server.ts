import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'WhatsMaster Tech Solutions API is running smoothly.',
    timestamp: new Date().toISOString()
  });
});

// Default Error Handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ status: 'error', message: 'Internal Server Error' });
});

// Start server
app.listen(port, () => {
  console.log(`[server]: Backend API is running at http://localhost:${port}`);
});
