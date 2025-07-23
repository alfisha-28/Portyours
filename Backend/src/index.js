const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// Routes
// const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoute');
const aboutRoutes = require('./routes/aboutRoute');
const skillRoutes = require('./routes/skillRoute');
// const portfolioRoutes = require('./routes/portfolioRoutes');

// app.use('/api', mainRoutes);
app.use('/user', userRoutes);
app.use('/about', aboutRoutes); 
app.use('/skills',skillRoutes);
// app.use('/port', portfolioRoutes);

// Error handling
app.use(errorHandler);

module.exports = app; // ✅ Export app
