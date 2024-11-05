const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('D:/ACADEMICS/webdev/srm-institute-website/client/src/config/db.js');// MongoDB connection configuration
const formRoutes = require('D:/ACADEMICS/webdev/srm-institute-website/client/src/routes/formRoutes');  // Routes for form submissions
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/forms', formRoutes);

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, 'client/build')));

// Catch-all route to serve the React app for any request that doesn’t match the API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
