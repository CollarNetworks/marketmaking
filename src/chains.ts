// Define the networks and Chainlink data feed contract addresses
export type BlockchainList = {
    [key: string]: BlockchainConfig;
};

export type BlockchainConfig = {
    name: string;
    rpcUrl: string;
    weth: string;
    usdc: string;
}

export const networks: BlockchainList = {
    devnet: {
        name: "Collar Devnet",
        rpcUrl: "http://44.221.222.232:8545/",
        weth: "0x6379ebd504941f50d5bfde9348b37593bd29c835",
        usdc: "0x29a79095352a718b3d7fe84e1f14e9f34a35598e"
    },
    // arbitrum: {
    //     name: "Arbitrum",
    //     rpcUrl: "https://arbitrum-rpc-url",
    //     ethUsdPriceFeed: "0xSomeContractAddress"
    // },
    // polygon: {
    //     name: "Polygon",
    //     rpcUrl: "https://polygon-rpc-url",
    //     ethUsdPriceFeed: "0xSomeOtherContractAddress"
    // },
    // base: { // Ethereum Mainnet, often just called 'base'
    //     name: "Ethereum",
    //     rpcUrl: "https://mainnet.infura.io/v3/your_infura_api_key",
    //     ethUsdPriceFeed: "0xYetAnotherContractAddress"
    // }
};
