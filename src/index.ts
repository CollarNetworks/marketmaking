import express from 'express';
import cron from 'node-cron';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Setting up a cron job that logs "Hello World" every hour
cron.schedule('0 * * * *', () => {
    console.log('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});