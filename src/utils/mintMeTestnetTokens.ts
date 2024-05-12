// Define an asynchronous function to fetch symbols from ERC20s
import { networks } from "../chains"
import { ethers } from "ethers"
import { ERC20 } from "../abi/ERC20"

// mints the marketmaker wallet some tokens in order to marketmake on the testnet
export async function mintMeTestnetTokens(networkKey: string) {

    const address = process.env.PUBLIC_ADDRESS;
    const network = networks[networkKey];
    const provider = new ethers.JsonRpcProvider(network.rpcUrl);
    const privateKey = process.env.PRIVATE_KEY;
    const wallet = new ethers.Wallet(privateKey as string, provider);
    //first get gas by sending yourself some + setting balance on anvil
    try {
        const walletWhale = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider);
        const transaction = await walletWhale.sendTransaction({
            to: address,
            value: ethers.parseEther("500"),
        });
        await transaction.wait()
        console.log(transaction)
        const response = await fetch(network.rpcUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                method: "anvil_setBalance",
                params: [address, "0x021e19e0c9bab2400000"],
                id: 137_999,
                jsonrpc: "2.0",
            }),
        });

        if (!response.ok) {
            console.error("Failed to set balance:", response.statusText);
            return;
        }

        // const data = await response.json();
        console.log("RPC response:", response);
    } catch (error) {
        console.error("Error setting balance:", error);
    }

    // mint yourself some tokens with your newfound gas
    const weth = new ethers.Contract(network.weth, ERC20, wallet);
    const usdc = new ethers.Contract(network.usdc, ERC20, wallet);
    const amount = ethers.parseUnits('1000000', 18); // Mint 1m tokens
    const wethTx = await weth.mint(address, amount);
    const usdcTx = await usdc.mint(address, amount);
    await wethTx.wait();
    console.log(wethTx)
    await usdcTx.wait();
    console.log(usdcTx)


    return {
        result: "Tokens Minted!"
    };
}