export const CollarVaultManagerABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_engine",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_owner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "allowance",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "spender",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "id",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "approve",
        "inputs": [
            {
                "name": "spender",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "id",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "id",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "closeVault",
        "inputs": [
            {
                "name": "uuid",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "engine",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getVaultUUID",
        "inputs": [
            {
                "name": "vaultNonce",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "uuid",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "isOperator",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "spender",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "isVaultExpired",
        "inputs": [
            {
                "name": "uuid",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "openVault",
        "inputs": [
            {
                "name": "assetData",
                "type": "tuple",
                "internalType": "struct ICollarVaultState.AssetSpecifiers",
                "components": [
                    {
                        "name": "collateralAsset",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "collateralAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "cashAsset",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "cashAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            },
            {
                "name": "collarOpts",
                "type": "tuple",
                "internalType": "struct ICollarVaultState.CollarOpts",
                "components": [
                    {
                        "name": "duration",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "ltv",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            },
            {
                "name": "liquidityOpts",
                "type": "tuple",
                "internalType": "struct ICollarVaultState.LiquidityOpts",
                "components": [
                    {
                        "name": "liquidityPool",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "putStrikeTick",
                        "type": "uint24",
                        "internalType": "uint24"
                    },
                    {
                        "name": "callStrikeTick",
                        "type": "uint24",
                        "internalType": "uint24"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "name": "uuid",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "previewRedeem",
        "inputs": [
            {
                "name": "uuid",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "cashReceived",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "redeem",
        "inputs": [
            {
                "name": "uuid",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setOperator",
        "inputs": [
            {
                "name": "spender",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "approved",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "inputs": [
            {
                "name": "interfaceId",
                "type": "bytes4",
                "internalType": "bytes4"
            }
        ],
        "outputs": [
            {
                "name": "supported",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "totalSupply",
        "inputs": [
            {
                "name": "id",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "transfer",
        "inputs": [
            {
                "name": "receiver",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "id",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
            {
                "name": "sender",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "receiver",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "id",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
            {
                "name": "newOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "user",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "vaultCount",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "vaultInfo",
        "inputs": [
            {
                "name": "uuid",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "vaultInfoByNonce",
        "inputs": [
            {
                "name": "vaultNonce",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "vaultTokenCashSupply",
        "inputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "vaultsByNonce",
        "inputs": [
            {
                "name": "vaultNonce",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "UUID",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "withdraw",
        "inputs": [
            {
                "name": "uuid",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "Approval",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "spender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "id",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OperatorSet",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "spender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "approved",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "name": "previousOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Redemption",
        "inputs": [
            {
                "name": "redeemer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "uuid",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "amountRedeemed",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "amountReceived",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Transfer",
        "inputs": [
            {
                "name": "caller",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "sender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "receiver",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "id",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "VaultClosed",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "vaultManager",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "uuid",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "VaultForABI",
        "inputs": [
            {
                "name": "vault",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct ICollarVaultState.Vault",
                "components": [
                    {
                        "name": "active",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "openedAt",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "expiresAt",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "duration",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "ltv",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "collateralAsset",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "cashAsset",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "collateralAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "cashAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "liquidityPool",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "lockedPoolCash",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "initialCollateralPrice",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "putStrikePrice",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "callStrikePrice",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "putStrikeTick",
                        "type": "uint24",
                        "internalType": "uint24"
                    },
                    {
                        "name": "callStrikeTick",
                        "type": "uint24",
                        "internalType": "uint24"
                    },
                    {
                        "name": "loanBalance",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "lockedVaultCash",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "VaultOpened",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "vaultManager",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "uuid",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Withdrawal",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "vaultManager",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "uuid",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "amountWithdrawn",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "amountRemaining",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "AddressCannotBeZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "AmountCannotBeZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InsufficientBalance",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InsufficientPermission",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidAmount",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidAssetPrice",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidCallStrike",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidCashAmount",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidCashAsset",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidCollateralAmount",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidCollateralAsset",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidDuration",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidLTV",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidLiquidityPool",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidPutStrike",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidState",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidVault",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidVaultManager",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotCollarEngine",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotCollarPool",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotCollarVaultManager",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotCollarVaultOwner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OwnableInvalidOwner",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnableUnauthorizedAccount",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "TradeNotViable",
        "inputs": []
    },
    {
        "type": "error",
        "name": "VaultNotActive",
        "inputs": []
    },
    {
        "type": "error",
        "name": "VaultNotFinalizable",
        "inputs": []
    },
    {
        "type": "error",
        "name": "VaultNotFinalized",
        "inputs": []
    }
] as const;
