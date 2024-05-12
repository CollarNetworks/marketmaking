"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_cron_1 = __importDefault(require("node-cron"));
const chains_1 = require("./chains");
const getSymbols_1 = require("./utils/getSymbols");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/symbols', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("\n\n\n\nattempt\n\n\n");
    try {
        const symbols = yield Promise.all(Object.keys(chains_1.networks).map(getSymbols_1.getSymbols));
        res.json(symbols);
    }
    catch (error) {
        console.error('Error fetching symbols:', error);
        res.status(500).send('Failed to fetch symbols');
    }
}));
// Setting up a cron job that logs "Hello World" every hour
node_cron_1.default.schedule('0 * * * *', () => {
    console.log('Hello World');
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
