require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@atlascluster.lklamvj.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster`;
const authRouter = require('./routes/auth');
app.use(express.json()); 
const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB();

app.use('/api/auth', authRouter);
       
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
