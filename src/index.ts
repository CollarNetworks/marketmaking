import express from 'express';
import cron from 'node-cron';
import { ethers } from 'ethers';
import { networks } from './chains'
import { getSymbols } from './utils/getSymbols'
import { mintMeTestnetTokens } from './utils/mintMeTestnetTokens'
import dotenv from 'dotenv';
import { analyzePool } from './utils/analyzePool';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Used for debugging, tests connection to basic ERC20s
app.get('/symbols', async (_req, res) => {
    console.log("\n\n\n\nattempt symbols\n\n\n")
    try {
        const symbols = await Promise.all(Object.keys(networks).map(getSymbols));
        res.json(symbols);
    } catch (error) {
        console.error('Error fetching symbols:', error);
        res.status(500).send('Failed to fetch symbols');
    }
});

// Used for debugging, tests connection to basic ERC20s
app.get('/mint', async (_req, res) => {
    console.log("\n\n\n\nattempt mint\n\n\n")
    try {
        const tokenResults = await Promise.all(Object.keys(networks).map(mintMeTestnetTokens));
        res.json(tokenResults);
    } catch (error) {
        console.error('Error minting tokens:', error);
        res.status(500).send('Failed to mint tokens');
    }
});

app.get('/pool', async (req, res) => {
    console.log("\n\n\n\nattempt\n\n\n")
    try {
        const symbols = await Promise.all(Object.keys(networks).map(analyzePool));
        res.json(symbols);
    } catch (error) {
        console.error('Error fetching pool liquidity:', error);
        res.status(500).send('Failed to fetch pool liquidity');
    }
});

// Setting up a cron job that logs "Hello World" every hour
// cron.schedule('0 * * * *', () => {
//     console.log('Hello World');
// });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});