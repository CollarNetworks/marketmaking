//need util that returns all pools

// this one just pulls the first pool listed

// Define an asynchronous function to fetch symbols from ERC20s
import { networks } from "../chains"
import { ethers } from "ethers"
import { CollarEngine } from "../abi/CollarEngine";
import { CollarPool } from "../abi/CollarPool";

export async function analyzePools(networkKey: string) {
    const network = networks[networkKey];
    const provider = new ethers.JsonRpcProvider(network.rpcUrl);
    const engine = new ethers.Contract(network.engine, CollarEngine, provider);
    const numberOfPools: bigint = await engine.supportedLiquidityPoolsLength()
    // Fetch all pool addresses
    const allPoolAddresses = await Promise.all(
        Array.from({ length: Number(numberOfPools) }, async (_, index) =>
            await engine.getSupportedLiquidityPool(BigInt(index)))
    );

    // Fetch liquidity for each pool address
    const allPoolSlotsWithLiquidity = await Promise.all(allPoolAddresses.map(async (poolAddress) => {
        const pool = new ethers.Contract(poolAddress, CollarPool, provider);
        const cashAsset = await pool.cashAsset();
        const collateralAsset = await pool.collateralAsset();
        const duration = await pool.duration();
        const lowerstrike = await pool.ltv();
        const tickScaleFactor = await pool.tickScaleFactor();
        const slotIndices = await pool.getInitializedSlotIndices();

        const liquidityResults = await Promise.all(slotIndices.map(async (slotIndex: bigint) => {
            return {
                upperstrike: Number(slotIndex) / 100, //hardcoded for percentages i.e. tickScaleFactor of 1
                liquidity: Number(await pool.getLiquidityForSlot(slotIndex)) / 1e18 // this is hardcoded for 18dp usdc testnet only
            };
        }));
        const poolResults = {
            poolAddress: poolAddress,
            cashAsset: cashAsset,
            collateralAsset: collateralAsset,
            durationSecs: Number(duration),
            ltvPct: Number(lowerstrike) / 100,
            tickScaleFactorNum: Number(tickScaleFactor),
            liquidityResults: liquidityResults
        }
        return poolResults;
    }));

    return {
        network: network.name,
        allPoolsWithLiquidity: allPoolSlotsWithLiquidity
    };
}