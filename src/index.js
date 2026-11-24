/**
 * beacon-foundry-145 dsh plugin
 * Provides free model access (DeepSeek V4.1 Flash, Kimi K3) without login/signup/API key
 */

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'beacon-foundry-145' });
});

// Model availability endpoint
app.get('/models', (req, res) => {
  res.json({
    available_models: [
      { id: 'deepseek-v4.1-flash', name: 'DeepSeek V4.1 Flash', free: true },
      { id: 'kimi-k3', name: 'Kimi K3', free: true }
    ],
    status: 'ready'
  });
});

// Root endpoint - plugin info
app.get('/', (req, res) => {
  res.json({
    name: 'beacon-foundry-145',
    version: '0.1.0',
    description: 'dsh plugin for free model access',
    author: 'Ryan Vo'
  });
});

app.listen(PORT, () => {
  console.log(`beacon-foundry-145 plugin running on port ${PORT}`);
  console.log('Available endpoints:');
  console.log('  GET / - plugin information');
  console.log('  GET /health - health check');
  console.log('  GET /models - available free models');
});
