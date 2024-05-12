// if certain mode, price callspread vs. sell call buy put

import { ethers } from "ethers";
import { analyzePools } from "./analyzePools";
import { networks } from "../chains";
import { CollarPool } from "../abi/CollarPool";

const pricingMode = "funded"

//pricing methods
export async function randomPrice(poolAddress: string) {
    const randCeiling = 118
    const randFloor = 107
    const randomCall = Math.floor(Math.random() * (randCeiling - randFloor + 1)) + randFloor;
    const fixedSize = 1000000 * 1e18
    return {
        address: poolAddress,
        strike: randomCall,
        size: fixedSize
    }
}
const pricingMethod = randomPrice

export async function priceCollars(networkKey: string) {

    if (pricingMode == "funded") {
        const pools = await analyzePools(networkKey)
        const collars: any = [];

        pools.allPoolsWithLiquidity.forEach((pool, _) => {
            const poolAddress = pool.poolAddress
            const collateralAsset = pool.collateralAsset
            const cashAsset = pool.cashAsset
            const lastLiquidityResult = pool.liquidityResults[pool.liquidityResults.length - 1];
            var cs;
            if (lastLiquidityResult && lastLiquidityResult.upperstrike) {
                cs = lastLiquidityResult.upperstrike;
            }
            const poolData = {
                poolAddress: poolAddress,
                collateralAsset: collateralAsset,
                cashAsset: cashAsset,
                ltvPct: pool.ltvPct,
                durationSecs: pool.durationSecs,
                highestCallstrike: cs
            };
            collars.push(poolData);
        });

        console.log("Collars to Price:", collars);
        const addressPricesAndSizes = await Promise.all(collars.map((collars: { poolAddress: string; }) => pricingMethod(collars.poolAddress)));
        console.log(addressPricesAndSizes)

        const network = networks[networkKey];
        const provider = new ethers.JsonRpcProvider(network.rpcUrl);
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);
        addressPricesAndSizes.forEach(async (pool, _) => {
            const currPool = new ethers.Contract(pool.address, CollarPool, wallet);
            const showTx = await currPool.addLiquidityToSlot(BigInt(pool.strike), BigInt(pool.size))
            await showTx.wait()
            console.log(showTx)
        })
        //getting custom error, can debug later
        return {
            network: networkKey,
            result: 'Showed prices!'
        }
    }
}