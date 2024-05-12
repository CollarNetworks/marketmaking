import express from 'express';
import cron from 'node-cron';
import { ethers } from 'ethers';
import { networks } from './chains'
import { getSymbols } from './utils/getSymbols'

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/symbols', async (req, res) => {
    console.log("\n\n\n\nattempt\n\n\n")
    try {
        const symbols = await Promise.all(Object.keys(networks).map(getSymbols));
        res.json(symbols);
    } catch (error) {
        console.error('Error fetching symbols:', error);
        res.status(500).send('Failed to fetch symbols');
    }
});

// Setting up a cron job that logs "Hello World" every hour
cron.schedule('0 * * * *', () => {
    console.log('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});