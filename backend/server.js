const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.log('❌ MongoDB error:', err));

app.get('/', (req, res) => {
    res.send('🚀 API is running');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});