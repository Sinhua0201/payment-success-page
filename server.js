import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS config (only if needed for dev)
app.use(cors({ origin: '*' }));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Default route → serve success page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Success Page Server running at http://localhost:${PORT}`);
});
