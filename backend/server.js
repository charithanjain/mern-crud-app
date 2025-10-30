const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));