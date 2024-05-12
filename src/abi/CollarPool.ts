export const CollarPool = [
    {
        type: "constructor",
        inputs: [
            { name: "_engine", type: "address", internalType: "address" },
            { name: "_tickScaleFactor", type: "uint256", internalType: "uint256" },
            { name: "_cashAsset", type: "address", internalType: "address" },
            { name: "_collateralAsset", type: "address", internalType: "address" },
            { name: "_duration", type: "uint256", internalType: "uint256" },
            { name: "_ltv", type: "uint256", internalType: "uint256" },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "UNALLOCATED_SLOT",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "addLiquidityToSlot",
        inputs: [
            { name: "slotIndex", type: "uint256", internalType: "uint256" },
            { name: "amount", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "allowance",
        inputs: [
            { name: "owner", type: "address", internalType: "address" },
            { name: "spender", type: "address", internalType: "address" },
            { name: "id", type: "uint256", internalType: "uint256" },
        ],
        outputs: [{ name: "amount", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "approve",
        inputs: [
            { name: "spender", type: "address", internalType: "address" },
            { name: "id", type: "uint256", internalType: "uint256" },
            { name: "amount", type: "uint256", internalType: "uint256" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "balanceOf",
        inputs: [
            { name: "owner", type: "address", internalType: "address" },
            { name: "id", type: "uint256", internalType: "uint256" },
        ],
        outputs: [{ name: "amount", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "cashAsset",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "collateralAsset",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "duration",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "engine",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "finalizePosition",
        inputs: [
            { name: "uuid", type: "bytes32", internalType: "bytes32" },
            { name: "vaultManager", type: "address", internalType: "address" },
            { name: "positionNet", type: "int256", internalType: "int256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "freeLiquidity",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getInitializedSlotIndices",
        inputs: [],
        outputs: [{ name: "", type: "uint256[]", internalType: "uint256[]" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getLiquidityForSlot",
        inputs: [{ name: "slotIndex", type: "uint256", internalType: "uint256" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getLiquidityForSlots",
        inputs: [{ name: "slotIndices", type: "uint256[]", internalType: "uint256[]" }],
        outputs: [{ name: "", type: "uint256[]", internalType: "uint256[]" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getNumProvidersInSlot",
        inputs: [{ name: "slotIndex", type: "uint256", internalType: "uint256" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getSlotProviderInfoAtIndex",
        inputs: [
            { name: "slotIndex", type: "uint256", internalType: "uint256" },
            { name: "providerIndex", type: "uint256", internalType: "uint256" },
        ],
        outputs: [
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "uint256", internalType: "uint256" },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getSlotProviderInfoForAddress",
        inputs: [
            { name: "slotIndex", type: "uint256", internalType: "uint256" },
            { name: "provider", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "isOperator",
        inputs: [
            { name: "owner", type: "address", internalType: "address" },
            { name: "spender", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "lockedLiquidity",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "ltv",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "moveLiquidityFromSlot",
        inputs: [
            { name: "sourceSlotIndex", type: "uint256", internalType: "uint256" },
            { name: "destinationSlotIndex", type: "uint256", internalType: "uint256" },
            { name: "amount", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "openPosition",
        inputs: [
            { name: "uuid", type: "bytes32", internalType: "bytes32" },
            { name: "slotIndex", type: "uint256", internalType: "uint256" },
            { name: "amount", type: "uint256", internalType: "uint256" },
            { name: "expiration", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "positions",
        inputs: [{ name: "uuid", type: "bytes32", internalType: "bytes32" }],
        outputs: [
            { name: "expiration", type: "uint256", internalType: "uint256" },
            { name: "principal", type: "uint256", internalType: "uint256" },
            { name: "withdrawable", type: "uint256", internalType: "uint256" },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "previewRedeem",
        inputs: [
            { name: "uuid", type: "bytes32", internalType: "bytes32" },
            { name: "amount", type: "uint256", internalType: "uint256" },
        ],
        outputs: [{ name: "cashReceived", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "redeem",
        inputs: [
            { name: "uuid", type: "bytes32", internalType: "bytes32" },
            { name: "amount", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setOperator",
        inputs: [
            { name: "spender", type: "address", internalType: "address" },
            { name: "approved", type: "bool", internalType: "bool" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "supportsInterface",
        inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
        outputs: [{ name: "supported", type: "bool", internalType: "bool" }],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "tickScaleFactor",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "totalLiquidity",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "totalSupply",
        inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "transfer",
        inputs: [
            { name: "receiver", type: "address", internalType: "address" },
            { name: "id", type: "uint256", internalType: "uint256" },
            { name: "amount", type: "uint256", internalType: "uint256" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "transferFrom",
        inputs: [
            { name: "sender", type: "address", internalType: "address" },
            { name: "receiver", type: "address", internalType: "address" },
            { name: "id", type: "uint256", internalType: "uint256" },
            { name: "amount", type: "uint256", internalType: "uint256" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "withdrawLiquidityFromSlot",
        inputs: [
            { name: "slot", type: "uint256", internalType: "uint256" },
            { name: "amount", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "Approval",
        inputs: [
            { name: "owner", type: "address", indexed: true, internalType: "address" },
            { name: "spender", type: "address", indexed: true, internalType: "address" },
            { name: "id", type: "uint256", indexed: true, internalType: "uint256" },
            { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OperatorSet",
        inputs: [
            { name: "owner", type: "address", indexed: true, internalType: "address" },
            { name: "spender", type: "address", indexed: true, internalType: "address" },
            { name: "approved", type: "bool", indexed: false, internalType: "bool" },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Transfer",
        inputs: [
            { name: "caller", type: "address", indexed: false, internalType: "address" },
            { name: "sender", type: "address", indexed: true, internalType: "address" },
            { name: "receiver", type: "address", indexed: true, internalType: "address" },
            { name: "id", type: "uint256", indexed: true, internalType: "uint256" },
            { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
        ],
        anonymous: false,
    },
    { type: "error", name: "AmountCannotBeZero", inputs: [] },
    {
        type: "error",
        name: "EnumerableMapNonexistentKey",
        inputs: [{ name: "key", type: "bytes32", internalType: "bytes32" }],
    },
    { type: "error", name: "InsufficientBalance", inputs: [] },
    { type: "error", name: "InsufficientPermission", inputs: [] },
    { type: "error", name: "InvalidDuration", inputs: [] },
    {
        type: "error",
        name: "NotCollarEngine",
        inputs: [{ name: "caller", type: "address", internalType: "address" }],
    },
    {
        type: "error",
        name: "NotCollarPool",
        inputs: [{ name: "caller", type: "address", internalType: "address" }],
    },
    {
        type: "error",
        name: "NotCollarVaultManager",
        inputs: [{ name: "caller", type: "address", internalType: "address" }],
    },
    { type: "error", name: "NotEnoughLiquidity", inputs: [] },
] as const;
