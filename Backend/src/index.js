const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/userRoute');
const aboutRoutes = require('./routes/aboutRoute');
const skillRoutes = require('./routes/skillRoute');
const projectRoutes = require('./routes/projectRoute')
const contactRoutes = require('./routes/contactRoute')

app.use('/user', userRoutes);
app.use('/about', aboutRoutes); 
app.use('/skills',skillRoutes);
app.use('/project',projectRoutes);
app.use('/contact', contactRoutes)

// Error handling
app.use(errorHandler);

module.exports = app; // ✅ Export app
