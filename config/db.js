const mongoose = require('mongoose');

const connectDatabase = async () =>{
    try {
        const dbConnect = await mongoose.connect(process.env.DB_URI );
        console.log('MongoDB connected');
    } catch(e) {
        console.log(e);
        process.exit(1);
    }
}

module.exports = connectDatabase;