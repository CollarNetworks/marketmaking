// Define an asynchronous function to fetch symbols from ERC20s
import { networks } from "../chains"
import { ethers } from "ethers"
import { ERC20 } from "../abi/ERC20"

export async function getSymbols(networkKey: string) {
    const network = networks[networkKey];
    const provider = new ethers.JsonRpcProvider(network.rpcUrl);
    const weth = new ethers.Contract(network.weth, ERC20, provider);
    const usdc = new ethers.Contract(network.usdc, ERC20, provider);
    const wethSymbol = await weth.symbol();
    const usdcSymbol = await usdc.symbol();

    return {
        network: network.name,
        weth: wethSymbol,
        usdc: usdcSymbol
    };
}