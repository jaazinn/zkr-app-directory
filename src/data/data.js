// when adding projects add to one of the underlying categories (dApps, infra, misc, mobile, nfts, rollups, wallets)
// use #30DE88 for LIVE, #F4E532 for SOON, #F4B832 for TESTNET
// when adding projects take care with networks formatting, supported network values for now: zksync, starknet, starkex, polygon, loopring
export const projects=  [
  {
    "name": "StarkEx",
    "category": [
      "zkRollup"
    ],
    "description": " StarkEx, a custom standalone scaling service by StarkWare, has been powering applications since June 2020, settled over $350B, with over 90M transactions, serving hundreds of thousands of users.",
    "imageLink": "url('project-logos/starkex.jpg')",
    "tooltip": "StarkEx",
    "networks": [
      "starkex"
    ],
    "twitterLink": "https://twitter.com/StarkWareLtd",
    "websiteLink": "https://starkware.co/starkex/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "rollups"
    ]
  },
  {
    "name": "StarkNet",
    "category": [
      "zkRollup"
    ],
    "description": "StarkNet, a permissionless scaling ZK rollup, live (Alpha) on Ethereum Mainnet since November 2021, a general-purpose Rollup that powers dApps of any business logic.",
    "imageLink": "url('project-logos/starknet.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/StarkWareLtd",
    "websiteLink": "https://starkware.co/starknet/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "rollups"
    ]
  },
  {
    "name": "zkSync",
    "category": [
      "zkRollup",
      "Web Wallet"
    ],
    "description": "zkSync is a user-centric zkRollup platform from Matter Labs. It is a scaling solution for Ethereum, already live on Ethereum mainnet.",
    "imageLink": "url('project-logos/zksync.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/zksync",
    "websiteLink": "https://zksync.io/",
    "tokenStatus": "Expected",
    "tokenLink": "https://zksync.io/faq/tokenomics.html",
    "featured": "featured",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "rollups",
      "wallets"
    ]
  },
  {
    "name": "Loopring",
    "category": [
      "zkRollup",
      "Mobile & Web Wallet",
      "Dapp"
    ],
    "description": "Loopring is a zkRollup layer2. It allows for high-throughput, low-cost trading and payment on Ethereum.",
    "imageLink": "url('project-logos/loopring.jpg')",
    "tooltip": "Loopring",
    "networks": [
      "loopring"
    ],
    "twitterLink": "https://twitter.com/loopringorg",
    "websiteLink": "http://loopring.io/",
    "tokenStatus": "Has",
    "tokenTicker": "LRC",
    "tokenLink": "https://www.coingecko.com/en/coins/loopring",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "rollups",
      "wallets",
      "dApps"
    ]
  },
  {
    "name": "ZKSpace",
    "category": [
      "zkRollup",
      "Mobile & Web Wallet"
    ],
    "description": "ZKSpace is an all-featured Layer 2 protocol using ZK-Rollups. Transactions are completed instantly and gas fees reduced tens of times.",
    "imageLink": "url('project-logos/zkspace.jpg')",
    "tooltip": "ZKSpace",
    "networks": [
      "zkspace"
    ],
    "twitterLink": "https://twitter.com/ZKSpaceOfficial",
    "websiteLink": "https://zks.org",
    "tokenStatus": "Has",
    "tokenTicker": "ZKS",
    "tokenLink": "https://www.coingecko.com/en/coins/zkspace",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "rollups",
      "wallets"
    ]
  },
  {
    "name": "Polygon Hermez",
    "category": [
      "zkRollup",
      "Mobile & Web Wallet"
    ],
    "description": "Polygon Hermez is an open-source ZK-Rollup optimised for secure, low-cost and usable token transfers on the wings of Ethereum.",
    "imageLink": "url('project-logos/hermez.jpg')",
    "tooltip": "Polygon Hermez",
    "networks": [
      "polygonhermez"
    ],
    "twitterLink": "https://twitter.com/0xPolygonHermez",
    "websiteLink": "https://hermez.io/",
    "tokenStatus": "Has",
    "tokenTicker": "MATIC",
    "tokenLink": "https://www.coingecko.com/en/coins/polygon",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "rollups",
      "wallets"
    ]
  },
  {
    "name": "Aztec",
    "category": [
      "zkRollup"
    ],
    "description": "Aztec is an open source Layer 2 network bringing scalability and privacy to Ethereum. Aztec uses zkSNARK proofs to provide privacy and scaling.",
    "imageLink": "url('project-logos/aztec.jpg')",
    "tooltip": "Aztec",
    "networks": [
      "aztec"
    ],
    "twitterLink": "https://twitter.com/aztecnetwork",
    "websiteLink": "https://aztec.network/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "rollups"
    ]
  },
  {
    "name": "Polygon Miden",
    "category": [
      "zkRollup"
    ],
    "description": "Polygon Miden, is an upcoming STARK-based, EVM-compatible rollup.",
    "imageLink": "url('project-logos/miden.jpg')",
    "tooltip": "Polygon Miden",
    "networks": [
      "polygonmiden"
    ],
    "twitterLink": "https://twitter.com/0xPolygonMiden",
    "websiteLink": "https://github.com/maticnetwork/miden",
    "tokenStatus": "Has",
    "tokenTicker": "MATIC",
    "tokenLink": "https://www.coingecko.com/en/coins/polygon",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "rollups"
    ]
  },
  {
    "name": "zkTube",
    "category": [
      "zkRollup"
    ],
    "description": "zktube is a protocol with ZK Rollup solutions of zero knowledge proof building for users and developers.",
    "imageLink": "url('project-logos/zktube.jpg')",
    "tooltip": "zkTube",
    "networks": [
      "zktube"
    ],
    "twitterLink": "https://twitter.com/zktubeofficial/",
    "websiteLink": "https://zktube.io/",
    "tokenStatus": "Has",
    "tokenTicker": "ZKT",
    "tokenLink": "https://www.coingecko.com/en/coins/zktube",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "rollups"
    ]
  },
  {
    "name": "Scroll",
    "category": [
      "zkRollup"
    ],
    "description": "Scroll aims to build a fast and secure EVM-compatible zk-Rollup with a strong proving network.",
    "imageLink": "url('project-logos/scroll.png')",
    "tooltip": "Scroll",
    "networks": [
      "scroll"
    ],
    "twitterLink": "https://twitter.com/Scroll_ZKP",
    "websiteLink": "https://scroll.io/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "rollups"
    ]
  },
  {
    "name": "Polygon Zero",
    "category": [
      "zkRollup"
    ],
    "description": "Polygon Zero uses the speed of Plonky2 to enable a more scalable and decentralized ZK L2 giving users access to higher throughput and lower fees.",
    "imageLink": "url('project-logos/polygonzero.jpg')",
    "tooltip": "Polygon Zero",
    "networks": [
      "polygonzero"
    ],
    "twitterLink": "https://twitter.com/0xPolygonZero",
    "websiteLink": "https://polygon.technology/solutions/polygon-zero",
    "tokenStatus": "Has",
    "tokenTicker": "MATIC",
    "tokenLink": "https://www.coingecko.com/en/coins/polygon",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "rollups"
    ]
  },
  {
    "name": "Edgeswap",
    "category": [
      "zkRollup",
      "Dapp"
    ],
    "description": "Edgeswap is an Ethereum-based (Layer 2) zkRollup Protocol. EdgeSwap provides the market with high-performance, cost-effective swapping and farming services.",
    "imageLink": "url('project-logos/edgeswap.jpg')",
    "tooltip": "Edgeswap",
    "networks": [
      "edgeswap"
    ],
    "twitterLink": "https://twitter.com/EdgeSwap",
    "websiteLink": "https://edgeswap.io/",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "rollups",
      "dApps"
    ]
  },
  {
    "name": "zkLink",
    "category": [
      "zkRollup",
      "Dapp"
    ],
    "description": "A unified, multi-chain L2 network secured by revolutionary zero-knowledge technology.",
    "imageLink": "url('project-logos/zklink.jpg')",
    "tooltip": "zkLink",
    "networks": [
      "zklink"
    ],
    "twitterLink": "https://twitter.com/zkLinkorg",
    "websiteLink": "https://zk.link/",
    "tokenStatus": "Expected",
    "tokenTicker": "ZKL",
    "tokenLink": "https://docs.zk.link/docs/FAQ",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "rollups",
      "dApps"
    ]
  },
  {
    "name": "ZKyber",
    "category": [
      "zkRollup",
      "dapp"
    ],
    "description": "ZKyber is Kyber Networks experimental Zk-rollup Layer 2 product. ZKyber aims to build a DeFi-dedicated Zk-rollup that provides our users with a complete and professional system of financial tools.",
    "imageLink": "url('project-logos/zkyber.jpg')",
    "tooltip": "ZKyber",
    "networks": [
      "zkyber"
    ],
    "twitterLink": "https://twitter.com/KyberNetwork",
    "websiteLink": "https://kyberswap.com/zkyber/",
    "tokenStatus": "Has",
    "tokenTicker": "KNC",
    "tokenLink": "https://www.coingecko.com/en/coins/kyber-network-crystal",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "rollups",
      "dApps"
    ]
  },
  {
    "name": "Orbis",
    "category": [
      "zkRollup"
    ],
    "description": "Orbis is a Layer 2 ZK rollup scaling solution for Cardano. It utilizes recursive proofs to achieve highly scalable throughput & supports a general purpose smart contract ecosystem alongside application specific rollups.",
    "imageLink": "url('project-logos/orbis.jpg')",
    "tooltip": "Orbis",
    "networks": [
      "orbis"
    ],
    "twitterLink": "https://twitter.com/orbisproject",
    "websiteLink": "https://orbisprotocol.com",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "rollups"
    ]
  },
  {
    "name": "Nectar Protocol",
    "category": [
      "zkRollup"
    ],
    "description": "Nectar is a zkRollup and HIPAA compliant decentralized storage protocol. Nectar is based on zkSync, a zero-knowledge rollup, and will be EVM compatible.",
    "imageLink": "url('project-logos/nectar.jpg')",
    "tooltip": "Nectar",
    "networks": [
      "nectar"
    ],
    "twitterLink": "https://twitter.com/nectarprotocol",
    "websiteLink": "https://nectar.haus/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "rollups"
    ]
  },
  {
    "name": "Numio",
    "category": [
      "Mobile Wallet"
    ],
    "description": "Numio is a non-custodial Ethereum L2 (zkSync) wallet that lets you send, store, buy & swap tokens, interact with dApps and more. Available on Android & iOS.",
    "imageLink": "url('project-logos/numio.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/getnumio",
    "websiteLink": "https://numio.one",
    "googlePlay": "https://play.google.com/store/apps/details?id=com.numio.pay",
    "appleStore": "https://apps.apple.com/us/app/numio/id1538072952",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "wallets"
    ]
  },
  {
    "name": "imToken",
    "category": [
      "Mobile Wallet"
    ],
    "description": "imToken is an easy and secure digital wallet trusted by millions.",
    "imageLink": "url('project-logos/imtoken.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/imTokenOfficial",
    "websiteLink": "https://token.im/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "wallets"
    ]
  },
  {
    "name": "Argent",
    "category": [
      "Mobile Wallet"
    ],
    "description": "Argent is the most simple and secure smart wallet for crypto. Store and send; earn interest and invest.",
    "imageLink": "url('project-logos/argent.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/argentHQ",
    "websiteLink": "https://www.argent.xyz/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "wallets"
    ]
  },
  {
    "name": "Argent X",
    "category": [
      "Web Wallet"
    ],
    "description": "Argent X is an open-source Chrome browser plugin wallet for StarkNet. Argent X supports StarkNet Alpha on the Ethereum mainnet.",
    "imageLink": "url('project-logos/argentstarknet.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/argentHQ",
    "websiteLink": "https://www.argent.xyz/argent-x/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "wallets"
    ]
  },
  {
    "name": "Opera Wallet",
    "category": [
      "Mobile Browser Wallet"
    ],
    "description": "The Opera mobile browser wallet integrates DeversiFi (powered by StarkEx), for faster, easier, and cheaper ETH P2P transactions.",
    "imageLink": "url('project-logos/opera.jpg')",
    "tooltip": "StarkEx, DeversiFi",
    "networks": [
      "starkex"
    ],
    "twitterLink": "https://twitter.com/opera",
    "websiteLink": "https://www.opera.com/",
    "status": "Live",
    "statusColor": "#30DE88",
    "search_on": [
      "wallets"
    ]
  },
  {
    "name": "D'CENT",
    "category": [
      "Wallet"
    ],
    "description": "The über convenient multi crypto wallet with native dApp browser for Game, NFT, DeFi, and more.",
    "imageLink": "url('project-logos/dcent.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/DCENTwallets",
    "websiteLink": "https://dcentwallet.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "wallets"
    ]
  },
  {
    "name": "Mathwallet",
    "category": [
      "Wallet"
    ],
    "description": "MathWallet is a powerful universal crypto wallet which supports multi-chain tokens and dApps on mobile / browser extension / web & hardware wallet.",
    "imageLink": "url('project-logos/mathwallet.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/MathWallet",
    "websiteLink": "https://mathwallet.org/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "wallets"
    ]
  },
  {
    "name": "ONTO",
    "category": [
      "Mobile Wallet"
    ],
    "description": "ONTO wallet is a decentralized multi-chain gateway for identity and asset management.",
    "imageLink": "url('project-logos/onto.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/ONTOWallet",
    "websiteLink": "https://onto.app/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "wallets"
    ]
  },
  {
    "name": "Web3Auth",
    "category": [
      "Wallet"
    ],
    "description": "Web3Auth is a pluggable auth suite for Web3 wallets and applications. It onboards both mainstream and crypto native users under a minute by providing experiences that they're most comfortable with.",
    "imageLink": "url('project-logos/web3auth.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/web3auth",
    "websiteLink": "https://web3auth.io/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "wallets"
    ]
  },
  {
    "name": "BlockWallet",
    "category": [
      "Wallet"
    ],
    "description": "BlockWallet is the first-ever browser extension that gives you an untraceable identity. Reclaim privacy on your ETH, WBTC & ERC-20 transfers.",
    "imageLink": "url('project-logos/blockwallet.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/GetBlockWallet",
    "websiteLink": "https://blockwallet.io/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "wallets"
    ]
  },
  {
    "name": "Fox Wallet",
    "category": [
      "Mobile Wallet"
    ],
    "description": "Fox Wallet is a user-friendly Web3.0 portal built for a multi-chain ecosystem.",
    "imageLink": "url('project-logos/fox.jpg')",
    "tooltip": "zkSync, StarkNet",
    "networks": [
      "zksync",
      "starknet"
    ],
    "twitterLink": "https://twitter.com/FoxWallet",
    "websiteLink": "https://foxwallet.com/en",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "wallets"
    ]
  },
  {
    "name": "Go Pocket",
    "category": [
      "Mobile Wallet"
    ],
    "description": "Go Pocket is a next-gen crypto wallet which focuses on providing real-time and dynamic security services & best user experience.",
    "imageLink": "url('project-logos/gopocket.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/gopocketwallet",
    "websiteLink": "https://gopocket.security/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "wallets"
    ]
  },
  {
    "name": "Ledger",
    "category": [
      "Wallet"
    ],
    "description": "Buy, exchange and grow your crypto securely with a Ledger hardware wallet, combined with the Ledger Live app. It’s never been easier to keep your crypto safe and accessible.",
    "imageLink": "url('project-logos/ledger.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/Ledger",
    "websiteLink": "https://www.ledger.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "wallets"
    ]
  },
  {
    "name": "Tally Ho",
    "category": [
      "Web Wallet"
    ],
    "description": "Tally Ho is a free, community owned, open-source Web3 wallet built as a browser extension.",
    "imageLink": "url('project-logos/tally.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/tallycash",
    "websiteLink": "https://tally.cash/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "wallets"
    ]
  },
  {
    "name": "Braavos",
    "category": [
      "Web Wallet"
    ],
    "description": "Braavos is a browser extension for accessing dApps and holding crypto assets. Braavos runs on StarkNet and is currently an Alpha release.",
    "imageLink": "url('project-logos/braavos.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/myBraavos",
    "websiteLink": "https://braavos.app/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "wallets"
    ]
  },
  {
    "name": "DeversiFi",
    "category": [
      "Dapp"
    ],
    "description": "A decentralised exchange for accessing DeFi opportunities on Ethereum: invest, trade, and send tokens without paying gas fees.",
    "imageLink": "url('project-logos/diversifi.jpg')",
    "tooltip": "StarkEx",
    "networks": [
      "starkex"
    ],
    "twitterLink": "https://twitter.com/deversifi",
    "websiteLink": "https://deversifi.com/",
    "tokenStatus": "Has",
    "tokenTicker": "DVF",
    "tokenLink": "https://www.coingecko.com/en/coins/dvf",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "dYdX",
    "category": [
      "Dapp & Rollup"
    ],
    "description": "Trade Perpetual Contracts with low fees, deep liquidity, and up to 25× leverage.",
    "imageLink": "url('project-logos/dydx.png')",
    "tooltip": "StarkEx)",
    "networks": [
      "starkex"
    ],
    "twitterLink": "https://twitter.com/dydxprotocol",
    "websiteLink": "https://dydx.exchange/",
    "tokenStatus": "Has",
    "tokenTicker": "DYDX",
    "tokenLink": "https://www.coingecko.com/en/coins/dydx",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Sorare",
    "category": [
      "Dapp & Rollup"
    ],
    "description": "Experience true football connection in The Global Fantasy Football Game! Trade & collect digital cards.",
    "imageLink": "url('project-logos/sorare.png')",
    "tooltip": "StarkEx",
    "networks": [
      "starkex"
    ],
    "twitterLink": "https://twitter.com/Sorare",
    "websiteLink": "https://sorare.com/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Curve",
    "category": [
      "Dapp"
    ],
    "description": "Creating deep on-chain liquidity using advanced bonding curves.",
    "imageLink": "url('project-logos/curvefi.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/CurveFinance",
    "websiteLink": "https://zksync.curve.fi/",
    "tokenStatus": "Has",
    "tokenTicker": "CRV",
    "tokenLink": "https://www.coingecko.com/en/coins/curve-dao-token",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "ZigZag",
    "category": [
      "Dapp"
    ],
    "description": "ZigZag is a native, easy-to-use, reliable, fully secure and low fee Decentralized Exchange built on ZK Rollups.",
    "imageLink": "url('project-logos/zigzag.jpg')",
    "tooltip": "zkSync, StarkNet",
    "networks": [
      "zksync",
      "starknet"
    ],
    "twitterLink": "https://mobile.twitter.com/zigzagexchange",
    "websiteLink": "https://info.zigzag.exchange/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Paraswap",
    "category": [
      "Dapp"
    ],
    "description": "ParaSwap aggregates decentralized exchanges and other DeFi services in one comprehensive interface to streamline and facilitate users' interactions with Ethereum's decentralized finance.",
    "imageLink": "url('project-logos/paraswap.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/paraswap",
    "websiteLink": "https://paraswap.io",
    "tokenStatus": "Has",
    "tokenTicker": "PSP",
    "tokenLink": "https://www.coingecko.com/en/coins/paraswap",
    "status": "BETA",
    "statusColor": "#F4E532",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Gitcoin",
    "category": [
      "Dapp"
    ],
    "description": "Gitcoin is where communities unite to build & fund the open web - you can support your favourite open source projects by donating via zkSync",
    "imageLink": "url('project-logos/gitcoin.jpg')",
    "tooltip": "zkSync, Loopring",
    "networks": [
      "zksync",
      "loopring"
    ],
    "twitterLink": "https://twitter.com/gitcoin",
    "websiteLink": "https://gitcoin.co/",
    "tokenStatus": "Has",
    "tokenTicker": "GTC",
    "tokenLink": "https://www.coingecko.com/en/coins/gitcoin",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Mute",
    "category": [
      "Dapp"
    ],
    "description": "Mute is a ZK-Rollup based automated market maker (AMM) exchange, farming platform, and IDO platform.",
    "imageLink": "url('project-logos/mute.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/mute_io",
    "websiteLink": "https://mute.io/",
    "tokenStatus": "Has",
    "tokenTicker": "MUTE",
    "tokenLink": "https://www.coingecko.com/en/coins/mute",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Storj",
    "category": [
      "Dapp"
    ],
    "description": "Secure, private, affordable decentralized cloud object storage for developers - Storj Hosts (Storage Node Operators) can elect to receive their payments via zkSync.",
    "imageLink": "url('project-logos/storj.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/storj",
    "websiteLink": "https://www.storj.io/",
    "tokenStatus": "Has",
    "tokenTicker": "STORJ",
    "tokenLink": "https://www.coingecko.com/en/coins/storj",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Golem",
    "category": [
      "Dapp"
    ],
    "description": "Golem is a flexible, open-source platform for democratised access to digital resourcesGolem - providers can choose to receive their payments via zkSync.",
    "imageLink": "url('project-logos/golem.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/golemproject",
    "websiteLink": "https://www.golem.network/",
    "tokenStatus": "Has",
    "tokenTicker": "GLM",
    "tokenLink": "https://www.coingecko.com/en/coins/golem",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Rails",
    "category": [
      "Dapp"
    ],
    "description": "Rails is a Layer 2 payment dApp powered by Loopring.",
    "imageLink": "url('project-logos/rails.jpg')",
    "tooltip": "Loopring",
    "networks": [
      "loopring"
    ],
    "twitterLink": "https://twitter.com/Rails_eth",
    "websiteLink": "https://rails.eth.link/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "pNetwork",
    "category": [
      "Dapp"
    ],
    "description": "pTokens aims to be a decentralized open-source system facilitating cross-chain movement of assets.",
    "imageLink": "url('project-logos/pnetwork.jpg')",
    "tooltip": "Loopring",
    "networks": [
      "loopring"
    ],
    "twitterLink": "https://twitter.com/pNetworkDeFi",
    "websiteLink": "https://p.network/",
    "tokenStatus": "Has",
    "tokenTicker": "PNT",
    "tokenLink": "https://www.coingecko.com/en/coins/pnetwork",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "IBetYou",
    "category": [
      "Dapp"
    ],
    "description": "A smarter way to place and track your bets. Keep ‘em all in one place, make sure no one bails out, and win money in your favorite cryptocurrency.",
    "imageLink": "url('project-logos/ibetyou.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/ibetyouxyz",
    "websiteLink": "https://ibetyou.xyz/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Maker Wormhole",
    "category": [
      "Dapp"
    ],
    "description": "DAI Wormholing - the ability for almost instant teleportation of DAI between supported Layer 2s + Ethereum.",
    "imageLink": "url('project-logos/wormhole.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/makerdao",
    "websiteLink": "https://forum.makerdao.com/t/introducing-maker-wormhole/11550",
    "tokenStatus": "Has",
    "tokenTicker": "MKR",
    "tokenLink": "https://www.coingecko.com/en/coins/maker",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Akropolis",
    "category": [
      "Dapp"
    ],
    "description": "DeFi yield on autopilot. An easy to use interface for financial operations and decision-making.",
    "imageLink": "url('project-logos/akropolis.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/akropolisio",
    "websiteLink": "https://www.akropolis.io/",
    "tokenStatus": "Has",
    "tokenTicker": "AKRO",
    "tokenLink": "https://www.coingecko.com/en/coins/arkropolis",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Snapshot X",
    "category": [
      "Dapp"
    ],
    "description": "Snapshot X is a voting framework built on StarkNet, the layer 2 ZK-Rollup. It will allow any DAO to run their governance on-chain on layer 2 and execute transactions on Ethereum.",
    "imageLink": "url('project-logos/snapshot.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/SnapshotLabs",
    "websiteLink": "https://snapshot.org/#/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "zkSync Checkout",
    "category": [
      "Dapp"
    ],
    "description": "zkSync Checkout helps anyone adopt permissionless checkouts backed by zkSync - create and process payments with all the benefits of the zkSync Rollup.",
    "imageLink": "url('project-logos/zksync.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/zksync",
    "websiteLink": "https://checkout.zksync.io/link",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "zkMint",
    "category": [
      "Dapp"
    ],
    "description": "zkSync minting tool to mint zkSync-supported tokens.",
    "imageLink": "url('project-logos/zksync.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/zkSync",
    "websiteLink": "https://mint.zksync.dev/",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "zk.Money",
    "category": [
      "Dapp"
    ],
    "description": "zk.money is an Ethereum Layer 2 privacy app built on top of the Aztec network. Sending and receiving a token is anonymous, and does not publish any of the transaction’s data publicly.",
    "imageLink": "url('project-logos/aztec.jpg')",
    "tooltip": "Aztec",
    "networks": [
      "aztec"
    ],
    "twitterLink": "https://twitter.com/aztecprotocol",
    "websiteLink": "https://zk.money/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "LayerSwap",
    "category": [
      "dapp"
    ],
    "description": "With LayerSwap, you can send crypto from your crypto exchange account directly to Layer 2 networks without paying high Gas fees.",
    "imageLink": "url('project-logos/layerswap.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/layerswap/",
    "websiteLink": "https://www.layerswap.io/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Orbiter Finance",
    "category": [
      "dapp"
    ],
    "description": "Orbiter Finance is a decentralized cross-rollup Layer 2 bridge with a contract only on the destination side and is Ethereum's future multi-rollup infrastructure, the cost is low, and the process is instant.",
    "imageLink": "url('project-logos/orbiter.jpg')",
    "tooltip": "zkSync, StarkNet",
    "networks": [
      "zksync",
      "starknet"
    ],
    "twitterLink": "https://twitter.com/Orbiter_Finance",
    "websiteLink": "https://orbiter.finance/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "mySwap",
    "category": [
      "Dapp"
    ],
    "description": "mySwap is an AMM built on top of Starknet (Ethereum L2).",
    "imageLink": "url('project-logos/myswap.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/mySwapxyz",
    "websiteLink": "https://www.myswap.xyz/",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "suez.dev",
    "category": [
      "Dapp"
    ],
    "description": "Test the first bridge from ethereum GOERLI TESTNET to starknet - WARNING: any real Eth sent will be lost!",
    "imageLink": "url('project-logos/suez.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/SuezBridge",
    "websiteLink": "https://suez.dev/",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "UniSync",
    "category": [
      "Dapp"
    ],
    "description": "UniSync: a port of Uniswap V2 on the zkSync zkEVM.",
    "imageLink": "url('project-logos/zksync.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/zkSync",
    "websiteLink": "https://blog.matter-labs.io/unisync-a-port-of-uniswap-v2-on-the-zkevm-b12954748504",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "xSigma",
    "category": [
      "Dapp"
    ],
    "description": "xSigma is a stablecoin exchange and a liquidity mining platform backed by a public Nasdaq-listed company.",
    "imageLink": "url('project-logos/xsigma.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/xSigma5",
    "websiteLink": "https://xsigma.fi/",
    "tokenStatus": "Has",
    "tokenTicker": "SIG",
    "tokenLink": "https://www.coingecko.com/en/coins/xsigma",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "JediSwap",
    "category": [
      "Dapp"
    ],
    "description": "JediSwap is a fully permissionless and composable AMM built on Starknet",
    "imageLink": "url('project-logos/jediswap.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/JediSwap",
    "websiteLink": "https://app.testnet.jediswap.xyz/#/swap",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Element Finance",
    "category": [
      "Dapp"
    ],
    "description": "Element Finance is an open source protocol for fixed and variable yield markets.",
    "imageLink": "url('project-logos/element.jpg')",
    "tooltip": "Aztec",
    "networks": [
      "aztec"
    ],
    "twitterLink": "https://twitter.com/element_fi",
    "websiteLink": "https://www.element.fi/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Celer Network",
    "category": [
      "Dapp"
    ],
    "description": "Celer Network is a layer-2 scaling platform that brings fast, secure and low-cost blockchain applications to Ethereum.",
    "imageLink": "url('project-logos/celer.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/CelerNetwork",
    "websiteLink": "https://cbridge.celer.network/#/transfer",
    "tokenStatus": "Has",
    "tokenTicker": "CELR",
    "tokenLink": "https://www.coingecko.com/en/coins/celer-network",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Composable Finance",
    "category": [
      "Dapp"
    ],
    "description": "A robust cross-chain & cross-layer infrastructure with intuitive tools for DeFi devs.",
    "imageLink": "url('project-logos/composable.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/ComposableFin",
    "websiteLink": "https://www.composable.finance/",
    "tokenStatus": "Expected",
    "tokenTicker": "LAYR",
    "tokenLink": "https://docs.composable.finance/governance-and-tokenomics/layr-tokens",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "StarkSwap",
    "category": [
      "Dapp"
    ],
    "description": "Next generation DeFi powered by public ZK-Rollup technology",
    "imageLink": "url('project-logos/starkswap.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/starkswap",
    "websiteLink": "https://github.com/Starkswap",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Serity",
    "category": [
      "Dapp"
    ],
    "description": "Serity is a community-owned protocol powering the creation and trading of yield-backed synthetic assets.",
    "imageLink": "url('project-logos/serity.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://serity.finance/",
    "twitterLink": "https://twitter.com/SerityFinance",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "ZKX",
    "category": [
      "Dapp"
    ],
    "description": "A perpetual swaps exchange optimized for off-chain asset trading and gamified user experience. Currently in stealth mode.",
    "imageLink": "url('project-logos/zkx.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "ZkPad",
    "category": [
      "Dapp"
    ],
    "description": "ZkPad is the first secured Launchpad on zkRollups. We aim to bring sustainable liquidity to projects building on StarkNet.",
    "imageLink": "url('project-logos/zkpad.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://zkpadfi.medium.com/zkpad-to-empower-starkware-protocols-6325e757a452",
    "twitterLink": "https://twitter.com/ZKPadfi",
    "tokenStatus": "Expected",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "zkLend",
    "category": [
      "Dapp"
    ],
    "description": "zkLend is an L2 money-market protocol built on StarkNet, combining zk-rollup scalability, superior transaction speed, and cost-savings with Ethereum's security.",
    "imageLink": "url('project-logos/zkLend.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/zkLend",
    "websiteLink": "https://zklend.com",
    "tokenStatus": "Expected",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "xBank",
    "category": [
      "Dapp"
    ],
    "description": "xBank is a non-custodial liquidity market protocol that manages deposits for lenders and facilitates lending for borrowers. xBank performs risk management to protect lenders from risks of illiquidity and insolvency.",
    "imageLink": "url('project-logos/xbank.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/xBankFinance",
    "websiteLink": "https://www.xbank.finance/",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Forward Protocol",
    "category": [
      "Dapp"
    ],
    "description": "Forward Protocol is building WordPress for Web 3.0 with a customizable, no-code, drag & drop interface.",
    "imageLink": "url('project-logos/forward.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/ForwardProtocol/",
    "websiteLink": "https://forwardprotocol.io/",
    "tokenStatus": "Expected",
    "tokenTicker": "FORWARD",
    "tokenLink": "https://forwardprotocol.io/wp-content/uploads/2021/12/Forward_Tokenomics.pdf",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Poly Network",
    "category": [
      "Dapp"
    ],
    "description": "Poly Network is a global cross-chain interoperability protocol for implementing blockchain interoperability and building the Web3.0 infrastructure.",
    "imageLink": "url('project-logos/polynetwork.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/PolyNetwork2",
    "websiteLink": "https://poly.network/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Symbiote Stark",
    "category": [
      "Dapp"
    ],
    "description": "SymbioteStark is a game that teaches you all technical things about Cairo. Learn to make smart contracts in Cairo by making your own crypto-collectibles game. ",
    "imageLink": "url('project-logos/symbonstark.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://symbonstark.surge.sh/#/",
    "twitterLink": "https://twitter.com/SymbOnStark",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Starkle",
    "category": [
      "Dapp"
    ],
    "description": "Starkle is a clone of the popular game Wordle. In this version all the words are related to Starkware, Ethereum, Layer 2's and similar!",
    "imageLink": "url('project-logos/starkle.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/mallowsxyz",
    "websiteLink": "https://home.byoa.org/",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "1inch",
    "category": [
      "Dapp"
    ],
    "description": "The 1inch Network unites decentralized protocols whose synergy enables the most lucrative, fastest and protected operations in the DeFi space.",
    "imageLink": "url('project-logos/1inch.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/1inch",
    "websiteLink": "https://1inch.exchange/",
    "tokenStatus": "Has",
    "tokenTicker": "1inch",
    "tokenLink": "https://www.coingecko.com/en/coins/1inch",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "88mph",
    "category": [
      "Dapp"
    ],
    "description": "88mph has a variety of features that make it the best place to start earning a fixed yield rate on your assets. Our leading non-custodial fully on-chain protection measures give you the peace of mind you deserve.",
    "imageLink": "url('project-logos/88mph.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/88mphapp",
    "websiteLink": "https://88mph.app/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Alchemix",
    "category": [
      "Dapp",
      "DAO"
    ],
    "description": "Alchemix Finance is a future-yield-backed synthetic asset platform and community DAO.",
    "imageLink": "url('project-logos/alchemix.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/AlchemixFi",
    "websiteLink": "https://app.alchemix.fi/",
    "tokenStatus": "Has",
    "tokenTicker": "ALCX",
    "tokenLink": "https://www.coingecko.com/en/coins/Alchemix",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps",
      "daos"
    ]
  },
  {
    "name": "Aragon",
    "category": [
      "Dapp",
      "DAO"
    ],
    "description": "Build your Decentralized Autonomous Organization on open-source infrastructure with governance plugins.",
    "imageLink": "url('project-logos/aragon.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/aragonproject",
    "websiteLink": "https://aragon.org/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps",
      "daos"
    ]
  },
  {
    "name": "Frax Finance",
    "category": [
      "Dapp"
    ],
    "description": "Frax is a fractional-algorithmic stablecoin protocol. Open-source, permissionless, and entirely on-chain Frax aims to provide highly scalable, decentralized, algorithmic money in place of fixed-supply digital assets like BTC. ",
    "imageLink": "url('project-logos/frax.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/fraxfinance",
    "websiteLink": "https://frax.finance/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Hashflow",
    "category": [
      "Dapp"
    ],
    "description": "Hashflow is a DEX that offers tight spreads, zero slippage, and yield without impermanent loss.",
    "imageLink": "url('project-logos/hashflow.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/hashflownetwork",
    "websiteLink": "https://www.hashflow.com/",
    "tokenStatus": "Expected",
    "tokenTicker": "HFT",
    "tokenLink": "https://www.hashflow.com/token",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "MRHB",
    "category": [
      "Dapp"
    ],
    "description": "Marhaba is a complete, safe and user friendly platform that will provide maximum access to [interest free] DeFi, NFT and Cryptoasset opportunities.",
    "imageLink": "url('project-logos/mrhb.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/MarhabaDeFi",
    "websiteLink": "https://mrhb.network/",
    "tokenStatus": "Has",
    "tokenTicker": "MHRB",
    "tokenLink": "https://www.coingecko.com/en/coins/marhabadefi",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "OlympusDAO",
    "category": [
      "Dapp",
      "DAO"
    ],
    "description": "Olympus is building a community-owned decentralized financial infrastructure to bring more stability and transparency for the world.",
    "imageLink": "url('project-logos/olympus.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/OlympusDAO",
    "websiteLink": "https://www.olympusdao.finance/",
    "tokenStatus": "Has",
    "tokenTicker": "OHM",
    "tokenLink": "https://www.coingecko.com/en/coins/olympus",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps",
      "daos"
    ]
  },
  {
    "name": "Rubicon Protocol",
    "category": [
      "Dapp"
    ],
    "description": "The Rubicon Protocol is a decentralized exchange protocol on the Ethereum blockchain. It enables the peer-to-peer exchange of ERC20 tokens.",
    "imageLink": "url('project-logos/rubicon.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/rubicondefi",
    "websiteLink": "https://rubicon.finance/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Taker Protocol",
    "category": [
      "Dapp"
    ],
    "description": "Taker is a liquidity protocol that allows users to liquidate and rent all kinds of novel crypto assets, including encrypted collectibles, metaverse assets, financial papers, synthetic assets and more.",
    "imageLink": "url('project-logos/taker.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/TakerProtocol",
    "websiteLink": "https://taker.org/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Tracer",
    "category": [
      "Dapp"
    ],
    "description": "Tracer is an open-source, smart contract protocol for derivatives. Broadly, it is an array of financial contract generators [Factory] governed by a DAO.",
    "imageLink": "url('project-logos/tracer.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/TracerDAO",
    "websiteLink": "https://tracer.finance/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Trustless",
    "category": [
      "Dapp"
    ],
    "description": "Trustless is a community dedicated to re-building foundational defi protocols in a maximally Trustless way. The Trustless Currency Protocol allows anyone to borrow the Hue token.",
    "imageLink": "url('project-logos/trustless.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/trustlessfi",
    "websiteLink": "https://www.trustless.fi/",
    "tokenStatus": "Expected",
    "tokenTicker": "HUE",
    "tokenLink": "https://www.trustless.fi/hue",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Vovo Finance",
    "category": [
      "Dapp"
    ],
    "description": "Vovo Finance is a structured products protocol that offers a variety of products catering to users with different risk profiles. Vovo offers products including principal protected products and yield enhancements.",
    "imageLink": "url('project-logos/vovo.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/VovoFinance",
    "websiteLink": "https://vovo.finance/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "WOO Network",
    "category": [
      "Dapp"
    ],
    "description": "WOO Network is a trading platform that features deep liquidity for superior order execution, zero-fee trading, and fully customizable trading workspaces.",
    "imageLink": "url('project-logos/woo.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/WOOnetwork",
    "websiteLink": "https://woo.org/",
    "tokenStatus": "Has",
    "tokenTicker": "WOO",
    "tokenLink": "https://www.coingecko.com/en/coins/woo-network",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "yearn",
    "category": [
      "Dapp"
    ],
    "description": "yearn.finance is a selection of Ethereum lending and trading protocols that allow users to optimize their crypto earnings.",
    "imageLink": "url('project-logos/yearn.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/iearnfinance",
    "websiteLink": "https://yearn.finance/",
    "tokenStatus": "Has",
    "tokenTicker": "YFI",
    "tokenLink": "https://www.coingecko.com/en/coins/yearn-finance",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Zerion",
    "category": [
      "Dapp"
    ],
    "description": "Zerion is the easiest way to build and manage your entire DeFi portfolio from one place.",
    "imageLink": "url('project-logos/zerion.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/zerion_io",
    "websiteLink": "https://zerion.io/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Ferrum Network",
    "category": [
      "Dapp"
    ],
    "description": "Ferrum Network is a cross-chain Blockchain as a Service DeFi company that specializes in adding deflationary token utility and advisory services to projects across the crypto space.",
    "imageLink": "url('project-logos/ferrum.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/FerrumNetwork",
    "websiteLink": "https://ferrum.network/",
    "tokenStatus": "Has",
    "tokenTicker": "FRM",
    "tokenLink": "https://www.coingecko.com/en/coins/ferrum-network",
    "status": "Dev",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Alpha Road",
    "category": [
      "Dapp"
    ],
    "description": "Alpha Road is a decentralized non-custodial platform built on Starknet (ZK-Rollup L2 solution) allowing users to maximize returns with a next gen DeFi experience and bespoke financial products.",
    "imageLink": "url('project-logos/alpharoad.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/alpharoad_fi",
    "websiteLink": "https://alpharoad.fi/",
    "status": "Dev",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "OKx",
    "category": [
      "Dapp"
    ],
    "description": "Discover crypto, built on top of the world’s most powerful exchange.",
    "imageLink": "url('project-logos/okx.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/okx",
    "websiteLink": "https://www.okx.com/",
    "status": "Dev",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Aura",
    "category": [
      "Dapp"
    ],
    "description": "Aura is a new synthetics issuance protocol on Starknet. Aura’s first product is going to be a USD synthetic stablecoin with a corresponding Savings product.",
    "imageLink": "url('project-logos/aura.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/AuraProtocol",
    "websiteLink": "https://sandclock.org/",
    "status": "Dev",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Via",
    "category": [
      "Dapp"
    ],
    "description": "Via is an advanced Cross-Chain Liquidity Aggregation Protocol and Infrastructure for GameFi",
    "imageLink": "url('project-logos/via.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/via_protocol",
    "websiteLink": "https://via.exchange/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Gro",
    "category": [
      "Dapp"
    ],
    "description": "Gro protocol is a stablecoin yield aggregator that tranches risk and yield.",
    "imageLink": "url('project-logos/gro.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/groprotocol",
    "websiteLink": "https://www.gro.xyz/",
    "tokenStatus": "Has",
    "tokenTicker": "PWRD",
    "tokenLink": "https://www.coingecko.com/en/coins/pwrd-stablecoin",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Increment",
    "category": [
      "Dapp"
    ],
    "description": "The Increment protocol introduces a system design that uses pooled virtual assets for liquidity and leverages Curve V2's AMM (Automated Market Maker) for trade execution.",
    "imageLink": "url('project-logos/increment.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/IncrementHQ",
    "websiteLink": "https://increment.finance/",
    "tokenStatus": "Has",
    "tokenTicker": "PWRD",
    "tokenLink": "https://www.coingecko.com/en/coins/pwrd-stablecoin",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "AAVE",
    "category": [
      "Dapp"
    ],
    "description": "Aave is an open source and non-custodial liquidity protocol for earning interest on deposits and borrowing assets.",
    "imageLink": "url('project-logos/aave.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://aave.com/",
    "twitterLink": "https://twitter.com/aaveaave",
    "tokenStatus": "Has",
    "tokenTicker": "AAVE",
    "tokenLink": "https://www.coingecko.com/en/coins/aave",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Magnety",
    "category": [
      "Dapp"
    ],
    "description": "Magnety is an on-chain asset management protocol that allows anyone, such as investment groups, DAOs, or individuals, to get the most out of DeFi through an easy-to-use platform. ",
    "imageLink": "url('project-logos/magnety.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://medium.com/@magnety.finance/magnety-defi-4-all-6414990639e8",
    "twitterLink": "https://twitter.com/magnetyfi",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Babylon Finance",
    "category": [
      "Dapp"
    ],
    "description": "Babylon is a community-led asset management protocol that enables users to invest in DeFi together. It's built on the Ethereum network and it's non-custodial, transparent, permission-less, and governed by the community.",
    "imageLink": "url('project-logos/babylon.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/BabylonFinance",
    "websiteLink": "https://www.babylon.finance/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Phezzan Protocol",
    "category": [
      "Dapp"
    ],
    "description": "Phezzan Protocol, a cross chain 19.45% interest earning derivative DEX",
    "imageLink": "url('project-logos/phezzan.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/PhezzanProtocol",
    "websiteLink": "http://phezzan.xyz/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Dank Protocol",
    "category": [
      "Dapp"
    ],
    "description": "Dank is an open-source lending protocol based on smart contracts which allows all valuable crypto assets to obtain multi diversified financial services.",
    "imageLink": "url('project-logos/dank.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/dank_protocol",
    "websiteLink": "https://dank-protocol.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Krebit",
    "category": [
      "Dapp"
    ],
    "description": "Krebit is an identity verification protocol, DAO and marketplace for Web3 Verifiable Credentials.",
    "imageLink": "url('project-logos/krebit.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/KrebitDAO",
    "websiteLink": "https://krebit.id/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "ZKEX",
    "category": [
      "Dapp"
    ],
    "description": "ZKEX is a multi-chain L2 order book DEX, secured with zero-knowledge proofs, powered by zkSync, StarkNet, and zkLink.",
    "imageLink": "url('project-logos/zkex.jpg')",
    "tooltip": "zkSync, StarkNet, ZKLink",
    "networks": [
      "zksync",
      "starknet",
      "zklink"
    ],
    "twitterLink": "https://twitter.com/ZKEX_Official",
    "websiteLink": "https://zkex.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Manifest",
    "category": [
      "Dapp"
    ],
    "description": "Manifest is a collective of creators, innovators, and people who want more out of life. Stake MNFST for sMNFST to own the future of decentralized business.",
    "imageLink": "url('project-logos/manifest.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/manifest/",
    "websiteLink": "https://manifest.gg/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "CVI",
    "category": [
      "Dapp"
    ],
    "description": "The Crypto Volatility Index (CVI) is a decentralized VIX for crypto that allows users to hedge themselves against market volatility and impermanent loss.",
    "imageLink": "url('project-logos/cvi.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/official_cvi",
    "websiteLink": "https://cvi.finance/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Hedgey",
    "category": [
      "Dapp"
    ],
    "description": "Hedgey is a permissionless protocol that lets DAOs and treasuries create strategic financing with their tokens through public and private OTC offers, yield bearing covered calls, and time locked auctions.",
    "imageLink": "url('project-logos/hedgey.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/hedgeyfinance",
    "websiteLink": "https://hedgey.finance/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Arweave",
    "category": [
      "Dapp"
    ],
    "description": "Arweave is a protocol that allows you to store data permanently, sustainably, with a single upfront fee.",
    "imageLink": "url('project-logos/arweave.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/ArweaveTeam",
    "websiteLink": "https://www.arweave.org/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "SyncSwap",
    "category": [
      "Dapp"
    ],
    "description": "SyncSwap is a decentralized AMM exchange built on zkSync.",
    "imageLink": "url('project-logos/syncswap.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/syncswap",
    "websiteLink": "https://www.syncswap.xyz/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "WardenSwap",
    "category": [
      "Dapp"
    ],
    "description": "WardenSwap is a multichain, AI powered, digital asset exchange platform.",
    "imageLink": "url('project-logos/warden.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/WardenSwap",
    "websiteLink": "https://www.wardenswap.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Icewater",
    "category": [
      "Dapp"
    ],
    "description": "Icewater is a project dedicated toward building a non-pegged stablecoin, called H2O.",
    "imageLink": "url('project-logos/icewater.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/icewatermoney",
    "websiteLink": "https://icewater.money",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Raise Finance",
    "category": [
      "Dapp"
    ],
    "description": "A platform for decentralized fundraising, investments and payments built on L2.",
    "imageLink": "url('project-logos/raise.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/raise_fi",
    "websiteLink": "https://www.raisefinance.io/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Brine Finance",
    "category": [
      "Dapp"
    ],
    "description": "The decentralized order-book exchange for traders crafted by traders  Gasless | Instant | Cross-Chain | Secure | Trustless.",
    "imageLink": "url('project-logos/brine.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/BrineFinance",
    "websiteLink": "https://www.brine.finance/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "SithSwap",
    "category": [
      "Dapp"
    ],
    "description": "Sith­swap is a next‐gen amm on stark­net feat­uring instant vola­tile and stable swaps with ultra‐low slip­page, zero fees and the full secur­ity of ethereum.",
    "imageLink": "url('project-logos/sithswap.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/SithSwap",
    "websiteLink": "https://sithswap.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "SynFutures",
    "category": [
      "Dapp"
    ],
    "description": "SynFutures is a next-generation derivatives exchange focused on creating an open and trustless derivatives market by enabling trading on any device with proper price feeds. ",
    "imageLink": "url('project-logos/synfutures.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/SynFuturesDefi",
    "websiteLink": "https://www.synfutures.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Sat.is",
    "category": [
      "Dapp"
    ],
    "description": "Sat.is is the next generation multichain decentralized exchange that aims to provide the optimal trading experience with zero slippage, low transaction fees, and self-custody of funds.",
    "imageLink": "url('project-logos/satis.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/SatisDEX",
    "websiteLink": "https://zksync-testnet.sat.is/",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "dApps"
    ]
  },
  {
    "name": "Ramp",
    "category": [
      "Infra"
    ],
    "description": "Ramp lets everyone exchange currencies like USD, GBP, EUR with various crypto assets.",
    "imageLink": "url('project-logos/ramp.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/RampNetwork",
    "websiteLink": "https://ramp.network/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "zkScan",
    "category": [
      "Infra"
    ],
    "description": "zkScan is a Block Explorer and Analytics Platform for zkSync",
    "imageLink": "url('project-logos/zksync.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/zksync",
    "websiteLink": "https://zkscan.io/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "The Graph",
    "category": [
      "Infra"
    ],
    "description": "The Graph is an indexing protocol for querying networks like Ethereum and IPFS. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.",
    "imageLink": "url('project-logos/thegraph.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/graphprotocol",
    "websiteLink": "https://thegraph.com/",
    "tokenStatus": "Has",
    "tokenTicker": "GRT",
    "tokenLink": "https://www.coingecko.com/en/coins/the-graph",
    "status": "Dev",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "StarkTx Transaction Decoder",
    "category": [
      "Infra"
    ],
    "description": "The StarkTx Transaction Decoder is a StarkNet transaction analysis tool.",
    "imageLink": "url('project-logos/starkTx.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "N/A",
    "websiteLink": "https://starktx.info/",
    "status": "Live",
    "statusColor": "#30DE88",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Syscoin NEVM",
    "category": [
      "Infra"
    ],
    "description": "Coordinated dual-chain EVM platform specifically designed to give zkRollups a Bitcoin auxpow settlement L1 enhanced with multi-quorum finality that resists MEV attacks & selfish mining.",
    "imageLink": "url('project-logos/syscoin.jpg')",
    "tooltip": "Syscoin NEVM",
    "networks": [
      "Syscoin NEVM"
    ],
    "twitterLink": "https://twitter.com/syscoin",
    "websiteLink": "https://syscoin.org/",
    "tokenStatus": "Has",
    "tokenTicker": "SYS",
    "tokenLink": "https://www.coingecko.com/en/coins/syscoin",
    "status": "Live",
    "statusColor": "#30DE88",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Covalent",
    "category": [
      "Infra"
    ],
    "description": "Covalent provides a unified API bringing visibility to billions of blockchain data points.",
    "imageLink": "url('project-logos/covalent.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/Covalent_HQ",
    "websiteLink": "https://www.covalenthq.com/",
    "tokenStatus": "Has",
    "tokenTicker": "CQT",
    "tokenLink": "https://www.coingecko.com/en/coins/covalent",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "StarkNet Alpha Block Explorer",
    "category": [
      "Infra"
    ],
    "description": "A block explorer and analytics platform for StarkNet.",
    "imageLink": "url('project-logos/starknet.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/nethermindeth",
    "websiteLink": "https://voyager.online/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Banxa",
    "category": [
      "Infra"
    ],
    "description": "Direct fiat purchasing for a range of L2 protocols including zkSync, Loopring and StarkNet.",
    "imageLink": "url('project-logos/banxa.jpg')",
    "tooltip": "zkSync, StarkNet, Loopring",
    "networks": [
      "zksync",
      "starknet",
      "loopring"
    ],
    "twitterLink": "https://twitter.com/BanxaOfficial",
    "websiteLink": "https://banxa.com/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Yagi Finance",
    "category": [
      "Infra"
    ],
    "description": "Yagi is a network of keepers on StarkNet L2 that automate protocol actions.",
    "imageLink": "url('project-logos/yagi.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/yagi_fi",
    "websiteLink": "https://yagi.fi/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Warp",
    "category": [
      "Infra"
    ],
    "description": "Warp brings Solidity to StarkNet, making it possible to transpile Ethereum smart contracts to Cairo, and use them on StarkNet.",
    "imageLink": "url('project-logos/nethermind.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/NethermindEth/warp",
    "twitterLink": "https://twitter.com/nethermindeth",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Sandclock",
    "category": [
      "Infra"
    ],
    "description": "Sandclock is building the tooling that will leverage crosschain {DeFi strategies with built-in insurance, payment rails, and novel governance and tokenomics models} to enable seamless transfer of value across the web.",
    "imageLink": "url('project-logos/sandclock.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/SandclockOrg",
    "websiteLink": "https://www.sandclock.org/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Real-Time Price Chart",
    "category": [
      "Infra"
    ],
    "description": "A real-time price chart from the Mallows team. This price chart is designed to show many price feeds in a bird's-eye view and is optimized for real-time data and not historical prices. Currently, the price chart shows ETH/USD and BTC/USD.",
    "imageLink": "url('project-logos/realtime.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/mallowsxyz",
    "websiteLink": "https://home.byoa.org/",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "StarkNet Data Warehouse",
    "category": [
      "Infra"
    ],
    "description": "The StarkNet Data Warehouse (SDW) provides analytical tools, contextualized data and insight needed to deeply understand and navigate historical StarkNet data.",
    "imageLink": "url('project-logos/sdw.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/InsightsFlow/",
    "websiteLink": "https://www.snowflake.com/datasets/token-flow-insights-starknet-data-warehouse-beta/",
    "status": "BETA",
    "statusColor": "#F4E532",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Chainlink",
    "category": [
      "Infra"
    ],
    "description": "Chainlink decentralized oracle networks provide tamper-proof inputs, outputs, and computations to support advanced smart contracts on any blockchain.",
    "imageLink": "url('project-logos/chainlink.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/chainlink",
    "websiteLink": "https://chain.link/",
    "tokenStatus": "Has",
    "tokenTicker": "LINK",
    "tokenLink": "https://www.coingecko.com/en/coins/chainlink",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Connext",
    "category": [
      "Infra"
    ],
    "description": "Cross chain liquidity network and interoperability protocol. Connext makes blockchains and rollups composable with fast, trustless transfers and contract calls.",
    "imageLink": "url('project-logos/connext.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/ConnextNetwork",
    "websiteLink": "https://www.connext.network/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "deBridge",
    "category": [
      "Infra"
    ],
    "description": "Scale up your protocol, bridge any arbitrary assets, and build new types of cross-chain interoperability applications on top of a truly decentralized infrastructure.",
    "imageLink": "url('project-logos/debridge.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/deBridgeFinance",
    "websiteLink": "https://debridge.finance/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Figment",
    "category": [
      "Infra"
    ],
    "description": "Staking, and application layer solutions for token holders and developers investing in and building on Web 3 technology",
    "imageLink": "url('project-logos/figment.jpg')",
    "tooltip": "zkSync, StarkNet",
    "networks": [
      "zksync",
      "starknet"
    ],
    "twitterLink": "https://twitter.com/Figment_io",
    "websiteLink": "https://www.figment.io/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Gnosis Safe",
    "category": [
      "Infra"
    ],
    "description": "Gnosis Safe is a smart contract wallet running on Ethereum that requires a minimum number of people to approve a transaction before it can occur.",
    "imageLink": "url('project-logos/gnosis.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/gnosisSafe",
    "websiteLink": "https://gnosis-safe.io/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Moralis",
    "category": [
      "Infra"
    ],
    "description": "Moralis provides a managed backend for blockchain projects. Automatically syncing the balances of your users into the database, allowing you to set up on-chain alerts, watch smart contract events, build indexes, and more.",
    "imageLink": "url('project-logos/moralis.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/MoralisWeb3",
    "websiteLink": "https://moralis.io/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Multichain",
    "category": [
      "Infra"
    ],
    "description": "Multichain is the ultimate Router for web3. It is an infrastructure developed for arbitrary cross-chain interactions.",
    "imageLink": "url('project-logos/multichain.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/MultichainOrg",
    "websiteLink": "https://multichain.org/",
    "tokenStatus": "Has",
    "tokenTicker": "ANY",
    "tokenLink": "https://www.coingecko.com/en/coins/anyswap",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Mystiko Network",
    "category": [
      "Infra"
    ],
    "description": "Mystiko.Network is building the Base Layer of Web3 via Zero Knowledge Proof Based Cross Chain Networks.",
    "imageLink": "url('project-logos/mystiko.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/MystikoNetwork",
    "websiteLink": "https://mystiko.network/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Nomad",
    "category": [
      "Infra"
    ],
    "description": "Nomad is a new design for radically cheaper cross-chain communication. Nomad expects to cut 90% of gas costs compared to a traditional header relay.",
    "imageLink": "url('project-logos/nomad.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/nomadxyz_",
    "websiteLink": "https://www.nomad.xyz/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Sprintcheckout",
    "category": [
      "Infra"
    ],
    "description": "Sprintcheckout is an ethereum Layer 2 Payment Gateway. Accept crypto payments- bankless, cheap and fast. Powered by zkSync Ethereum Layer 2.",
    "imageLink": "url('project-logos/sprint.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/sprintcheckout",
    "websiteLink": "https://www.sprintcheckout.com/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Tenderly",
    "category": [
      "Infra"
    ],
    "description": "Tenderly is a comprehensive Ethereum Developer Platform for real-time monitoring, alerting, debugging, and simulating Smart Contracts.",
    "imageLink": "url('project-logos/tenderly.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/TenderlyApp",
    "websiteLink": "https://tenderly.co/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "The Geo Web",
    "category": [
      "Infra"
    ],
    "description": "The Geo Web is a set of open protocols & system of property rights for anchoring digital content to physical locations.",
    "imageLink": "url('project-logos/geoweb.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/thegeoweb",
    "websiteLink": "https://www.geoweb.network/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "UTORG",
    "category": [
      "Infra"
    ],
    "description": "UTORG is a Licensed fiat-to-crypto gateway. Live in 187+ countries, with AI-based KYC, Apple Pay, and 24/7 live support.",
    "imageLink": "url('project-logos/utorg.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/UTORG_pro",
    "websiteLink": "https://utorg.pro/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Veramo",
    "category": [
      "Infra"
    ],
    "description": "Veramo is a JavaScript framework that makes it easy for anyone to use cryptographically verifiable data in their applications.",
    "imageLink": "url('project-logos/veramo.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/veramojs",
    "websiteLink": "https://veramo.io/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "iqlusion",
    "category": [
      "Infra"
    ],
    "description": "iqlusion provides infrastructure for next-generation cryptocurrency technologies which are designed and built to scale to real-world demands.",
    "imageLink": "url('project-logos/iqlusion.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/iqlusioninc/",
    "websiteLink": "https://www.iqlusion.io/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Token Flow",
    "category": [
      "Infra"
    ],
    "description": "Token Flow provides contextualized data and analytics for the blockchain ecosystem.",
    "imageLink": "url('project-logos/tokenflow.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/InsightsFlow",
    "websiteLink": "https://tokenflow.live/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Cephalopod Equipment",
    "category": [
      "Infra"
    ],
    "description": "Cephalopod Equipment operates infrastructure for decentralized technologies designed to support new forms of economic coordination and participant-owned networks.",
    "imageLink": "url('project-logos/cephalopod.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/CephalopodEquip",
    "websiteLink": "https://cephalopod.equipment/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "PeckShield",
    "category": [
      "Infra"
    ],
    "description": "Peckshield is a blockchain security and data analytics company.",
    "imageLink": "url('project-logos/peckshield.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/PeckShield",
    "websiteLink": "https://peckshield.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Chainstack",
    "category": [
      "Infra"
    ],
    "description": "From startups to large enterprises, thousands of businesses of all sizes use Chainstack’s software and APIs to build, run, and scale blockchain applications.",
    "imageLink": "url('project-logos/chainstack.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/ChainstackHQ",
    "websiteLink": "https://chainstack.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "ConsenSys",
    "category": [
      "Infra"
    ],
    "description": "With a leading suite of blockchain products, ConsenSys makes it easy to build applications on Ethereum and participate in DeFi, NFTs, DAOs, and the metaverse.",
    "imageLink": "url('project-logos/consensys.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/ConsenSys/",
    "websiteLink": "https://ConsenSys.net/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Infura",
    "category": [
      "Infra"
    ],
    "description": "Infuras suite of high availability APIs and Developer Tools provide quick, reliable access to the Ethereum and IPFS networks.",
    "imageLink": "url('project-logos/infura.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/infura_io/",
    "websiteLink": "https://infura.io/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "CryptoExperts",
    "category": [
      "Infra"
    ],
    "description": "Through both consulting services and business-driven innovation, CryptoExperts help the security industry benefit from the latest available advances in cryptography to improve their products and services.",
    "imageLink": "url('project-logos/cryptoexperts.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/CryptoExperts",
    "websiteLink": "https://www.cryptoexperts.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "ABDK",
    "category": [
      "Infra"
    ],
    "description": "ABDK Provide smart contract and blockchain services including development, auditing, and consulting.",
    "imageLink": "url('project-logos/abdk.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://www.abdk.consulting/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Pathfinder",
    "category": [
      "Infra"
    ],
    "description": "Pathfinder is a StarkNet full node giving you a safe view into StarkNet.",
    "imageLink": "url('project-logos/pathfinder\t.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/equilibrium_co",
    "websiteLink": "https://github.com/eqlabs/pathfinder",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Storage Proofs",
    "category": [
      "Infra"
    ],
    "description": "Storage Proofs is a StarkNet project currently in stealth mode - details to be released",
    "imageLink": "url('project-logos/stealth.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "status": "Stealth",
    "statusColor": "#808080",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "AARVANT",
    "category": [
      "Infra"
    ],
    "description": "AARVANT is a StarkNet project currently in stealth mode - details to be released",
    "imageLink": "url('project-logos/stealth.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "status": "Stealth",
    "statusColor": "#808080",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Stark Gate",
    "category": [
      "Infra"
    ],
    "description": "Stark Gate is a StarkNet project currently in stealth mode - details to be released",
    "imageLink": "url('project-logos/stealth.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "status": "Stealth",
    "statusColor": "#808080",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Erigon",
    "category": [
      "Infra"
    ],
    "description": "Erigon is an implementation of Ethereum (aka Ethereum client), on the efficiency frontier, written in Go. The Erigon team is working on expanding their Ethereum Full Node to support StarkNet.",
    "imageLink": "url('project-logos/erigon.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/ledgerwatch/erigon",
    "twitterLink": "https://twitter.com/ErigonEth",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Alchemy",
    "category": [
      "Infra"
    ],
    "description": "Web3 development made easy. One magic line of code supercharges your development with the world’s most powerful blockchain developer platform, relied upon by the majority of the world's top blockchain apps.",
    "imageLink": "url('project-logos/alchemy.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://www.alchemy.com/layer2/starknet?",
    "twitterLink": "https://twitter.com/AlchemyPlatform",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "stakefish",
    "category": [
      "Infra"
    ],
    "description": "Stakefish is a Proof of Stake service provider with distributed validator nodes that are monitored 24/7.",
    "imageLink": "url('project-logos/stakefish.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/stakefish",
    "websiteLink": "https://stake.fish/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Angle Protocol",
    "category": [
      "Infra"
    ],
    "description": "Angle is the first over-collateralized, decentralized and capital-efficient stablecoin protocol. It offers full convertibility between stable assets and collateral at oracle value.",
    "imageLink": "url('project-logos/angle.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/AngleProtocol",
    "websiteLink": "https://www.angle.money/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Wallet Connect",
    "category": [
      "Infra"
    ],
    "description": "WalletConnect is the web3 standard to connect blockchain wallets to dapps.",
    "imageLink": "url('project-logos/walletconnect.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/walletconnect",
    "websiteLink": "https://walletconnect.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Simplex",
    "category": [
      "Infra"
    ],
    "description": "Simplex is an EU-licensed financial institution and a Level 1 Service Provider, empowering the crypto industry with a full fiat infrastructure.",
    "imageLink": "url('project-logos/simplex.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/SimplexCC",
    "websiteLink": "https://www.simplex.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Automata Network",
    "category": [
      "Infra"
    ],
    "description": "Automata Network is a decentralized service protocol that provides middleware-like services for dApps to achieve traceless privacy, high assurance and frictionless computation.",
    "imageLink": "url('project-logos/automata.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/AutomataNetwork",
    "websiteLink": "https://www.ata.network/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "XID Network",
    "category": [
      "Infra"
    ],
    "description": "XID Network is a decentralized identity network built on on-chain data.",
    "imageLink": "url('project-logos/xid.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://mobile.twitter.com/XidNetwork",
    "websiteLink": "https://xidnetwork.xyz/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Go+ Security",
    "category": [
      "Infra"
    ],
    "description": "Go+ Security is a security service platform for all types of blockchain users which supports independent risk submitting, quick risk detection and feedback.",
    "imageLink": "url('project-logos/go+.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/GoplusSecurity",
    "websiteLink": "https://gopluslabs.io/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Gelato Network",
    "category": [
      "Infra"
    ],
    "description": "Gelato Network is a decentralized network of bots used by web3 developers to automate smart contract executions on public EVM compatible blockchains.",
    "imageLink": "url('project-logos/gelato.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/gelatonetwork",
    "websiteLink": "https://www.gelato.network/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "StarkGate Alpha",
    "category": [
      "Infra"
    ],
    "description": "StarkGate serves as a gateway between Ethereum and StarkNet, and allows users to do everything they can expect from a bridge.",
    "imageLink": "url('project-logos/starkgate.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/StarkWareLtd",
    "websiteLink": "https://goerli.starkgate.starknet.io/",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Panther",
    "category": [
      "Infra"
    ],
    "description": "Panther is a decentralized protocol that provides end-to-end privacy for any digital asset using zkSNARK cryptography. This allows retail and institutional investors to execute private, trusted DeFi transactions across multiple blockchains.",
    "imageLink": "url('project-logos/panther.jpg')",
    "tooltip": "Panther",
    "networks": [
      "panther"
    ],
    "twitterLink": "https://twitter.com/ZkPanther",
    "websiteLink": "https://www.pantherprotocol.io/",
    "tokenStatus": "Has",
    "tokenTicker": "ZKP",
    "tokenLink": "https://www.coingecko.com/en/coins/panther-protocol",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "infra"
    ]
  },
  {
    "name": "Immutable X",
    "category": [
      "NFT"
    ],
    "description": "Ethereum NFT scaling platform. Zero gas fees, 9K TPS & 100% carbon neutral.",
    "imageLink": "url('project-logos/immutable.png')",
    "tooltip": "StarkEx",
    "networks": [
      "starkex"
    ],
    "twitterLink": "https://twitter.com/Immutable",
    "websiteLink": "https://www.immutable.com/",
    "tokenStatus": "Has",
    "tokenTicker": "IMX",
    "tokenLink": "https://www.coingecko.com/en/coins/imx",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "nfts"
    ]
  },
  {
    "name": "zkNFT",
    "category": [
      "NFT"
    ],
    "description": "Mint, explore, and swap NFTs for a fraction of Ethereum mainnet costs. zkSync makes transactions fast, cheap, and secure.",
    "imageLink": "url('project-logos/zkNFT.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/0xmons",
    "websiteLink": "https://zknft.xyz/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "nfts"
    ]
  },
  {
    "name": "zkPunks",
    "category": [
      "NFT"
    ],
    "description": "zkPunks are 10,000 OG punk NFTs on zkSync. 10% donated to Ethereum scaling solutions through Gitcoin. Not affiliated with Larva Labs.",
    "imageLink": "url('project-logos/zkpunks.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/PunksZk",
    "websiteLink": "#",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "nfts"
    ]
  },
  {
    "name": "briq",
    "category": [
      "NFT"
    ],
    "description": "briq is an NFT composability system based on fundamental elements called briqs that can be combined to create more complex structures.",
    "imageLink": "url('project-logos/briq.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/briqNFT",
    "websiteLink": "https://briq.construction/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "nfts"
    ]
  },
  {
    "name": "Boonji Project",
    "category": [
      "NFT"
    ],
    "description": "Boonji Project “The Discovery of Galaxy Joa” NFT airdrop on zkSync",
    "imageLink": "url('project-logos/boonji.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/boonjiproject",
    "websiteLink": "https://www.boonjiproject.com/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "nfts"
    ]
  },
  {
    "name": "Opensky",
    "category": [
      "NFT"
    ],
    "description": "OpenSky lets you mint and transfer NFTs for a fraction of the cost on Ethereum. It uses zkSync, a scaling and privacy engine for Ethereum.",
    "imageLink": "url('project-logos/opensky.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/blockblockio",
    "websiteLink": "https://open-sky.vercel.app/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "nfts"
    ]
  },
  {
    "name": "Mint Square",
    "category": [
      "NFT"
    ],
    "description": "Discover, Mint, Buy and Sell NFTs • Mint Square is an NFT Platform on Ethereum Layer 2 ZK Rollup",
    "imageLink": "url('project-logos/mintsquare.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/MintSquareNFT",
    "websiteLink": "https://mintsquare.io/",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "nfts"
    ]
  },
  {
    "name": "Oasis",
    "category": [
      "NFT"
    ],
    "description": "Oasis is an NFT marketplace powered by StarkNet. Make offers and list nfts with near zero gas fees. Deploy your nft collection on starknet and oasis.",
    "imageLink": "url('project-logos/oasis.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/playoasisXYZ",
    "websiteLink": "https://testnet.playoasis.xyz/",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "nfts"
    ]
  },
  {
    "name": "GameStop",
    "category": [
      "NFT"
    ],
    "description": "GameStop has partnered with the StarkEx powered Immutable platform to launch their NFT marketplace.",
    "imageLink": "url('project-logos/gamestop.jpg')",
    "tooltip": "StarkEx",
    "networks": [
      "starkex"
    ],
    "twitterLink": "https://twitter.com/GameStop",
    "websiteLink": "https://nft.gamestop.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "nfts"
    ]
  },
  {
    "name": "zkSharks",
    "category": [
      "NFT"
    ],
    "description": "zkSharks are 10,000 unique NFTs looking to promote Ethereum scaling and moving NFT trading to L2. Our goal is to be the first NFT collection to launch on zkSync 2.0.",
    "imageLink": "url('project-logos/zksharks.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/SharksZk",
    "websiteLink": "https://www.zksharks.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "nfts"
    ]
  },
  {
    "name": "Bitmap Box",
    "category": [
      "NFT"
    ],
    "description": "Bitmap Box is a 2D block-building game and protocol. Combine blocks to make unique creations.",
    "imageLink": "url('project-logos/bitmapbox.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/bitmapbox",
    "websiteLink": "https://www.bitmapbox.xyz/",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "nfts"
    ]
  },
  {
    "name": "Φ",
    "category": [
      "NFT"
    ],
    "description": "φ is an on-chain metaverse on ZK L2 based on your ens domain and On-Chain Activity Data.",
    "imageLink": "url('project-logos/phi.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/phi_xyz",
    "websiteLink": "https://phi-xyz.notion.site/532af6de66e64c7c883d552d301b8020",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "nfts"
    ]
  },
  {
    "name": "Mallows",
    "category": [
      "NFT"
    ],
    "description": "Mallows are ethereum ERC-721 NFTs each produced with unique generative art and attributes defining its own humble, cute, nerdy, little coder self.",
    "imageLink": "url('project-logos/mallows.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/mallowsxyz",
    "websiteLink": "https://home.byoa.org/",
    "status": "TESTNET",
    "statusColor": "#F4B832",
    "search_on": [
      "nfts"
    ]
  },
  {
    "name": "KUBRI",
    "category": [
      "NFT"
    ],
    "description": "KUBRI allows to to mint & bridge ERC1155 NFTs from Starknet to Ethereum.",
    "imageLink": "url('project-logos/kubri.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://kubribridge.vercel.app/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "nfts"
    ]
  },
  {
    "name": "SO-COL",
    "category": [
      "NFT"
    ],
    "description": "Layer 2 on Ethereum powered by StarkNet focused on making NFTs accessible, affordable, and eco-friendly for everyone + a web3 social app for communities.",
    "imageLink": "url('project-logos/socol.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://mobile.twitter.com/socol_io",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "nfts"
    ]
  },
  {
    "name": "Auclantis",
    "category": [
      "NFT"
    ],
    "description": "Auclantis is an open and decentralized NFT auction house with low gas fees and no platform fees. We use cutting-edge Layer-2 technology to reduce users' gas costs by over 90%.",
    "imageLink": "url('project-logos/auclantis.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/auclantis",
    "websiteLink": "https://auclantis.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "nfts"
    ]
  },
  {
    "name": "tofuNFT",
    "category": [
      "NFT"
    ],
    "description": "tofuNFT is an NFT marketplace focused on GameFi and collectibles, rebranded from SCV’s NFT market. Enjoy exploring & trading with your buddies!",
    "imageLink": "url('project-logos/tofu.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/tofuNFT",
    "websiteLink": "https://tofunft.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "nfts"
    ]
  },
  {
    "name": "Influence",
    "category": [
      "Games"
    ],
    "description": "A grand strategy space MMO, backed by NFTs, set in a distant asteroid belt, and built on Ethereum.",
    "imageLink": "url('project-logos/influence.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/influenceth",
    "websiteLink": "https://www.influenceth.io/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "games"
    ]
  },
  {
    "name": "Dope Wars",
    "category": [
      "Games"
    ],
    "description": "The pursuit of money, power & respect in these metaverse streets. Dope Wars is a community owned, emergent gaming ecosystem inspired by the original Drugs Wars game.",
    "imageLink": "url('project-logos/dopewars.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/TheDopeWars",
    "websiteLink": "https://dopewars.gg/",
    "tokenStatus": "Has",
    "tokenTicker": "PAPER",
    "tokenLink": "https://www.coingecko.com/en/coins/dope-wars-paper",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "games"
    ]
  },
  {
    "name": "The Ninth",
    "category": [
      "Games"
    ],
    "description": "The Ninth is a Metaverse game powered by StarkNet. The 9th world has multi-epoch iterations, trade markets, DAOs, game guilds and virtual buildings.",
    "imageLink": "url('project-logos/theninth.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/ninth_gg",
    "websiteLink": "https://ninth.gg/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "games"
    ]
  },
  {
    "name": "OpenStars.org",
    "category": [
      "Games",
      "DAO"
    ],
    "description": "OpenStars.org is a community-owned space strategy game built on the blockchain. Governance is done through a DAO, which will distribute the benefits from the stars in a fair manner.",
    "imageLink": "url('project-logos/openstars.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/OpenStars",
    "websiteLink": "https://www.openstars.org/#/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "games",
      "daos"
    ]
  },
  {
    "name": "Game of Blocks",
    "category": [
      "Games"
    ],
    "description": "A play-to-earn game of strategy and conquest, inspired by Board Games, MMORPGs and Real-Time Strategy games and powered by NFTs on the blockchain.",
    "imageLink": "url('project-logos/gameofblocks.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/game_of_blocks",
    "websiteLink": "https://docs.gameofblocks.io/litepaper",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "games"
    ]
  },
  {
    "name": "Realms (for Adventurers)",
    "category": [
      "Games"
    ],
    "description": "A MMOCCG (Massively Multiplayer on-chain composable game) of economics and Chivalry built on-top of ZK-STARKS. Earn resources, trade and conquer your enemies all on-chain.",
    "imageLink": "url('project-logos/loot.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/LootRealms",
    "websiteLink": "https://bibliothecaforloot.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "games"
    ]
  },
  {
    "name": "Eykar",
    "category": [
      "Games"
    ],
    "description": "Eykar is a decentralized fantasy strategy game powered by StarkNet. An open source smartcontract dictates the rules of the world.",
    "imageLink": "url('project-logos/eykar.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/AgeOfEykar",
    "websiteLink": "https://eykar.org/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "games"
    ]
  },
  {
    "name": "ZKasino",
    "category": [
      "Games"
    ],
    "description": "zKasino is a decentralized casino built on Layer 2 ZK-Rollups technology allowing for infinite scalability whilst keeping optimal decentralization from the Ethereum network.",
    "imageLink": "url('project-logos/zkasino.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "http://twitter.com/zkasino_io",
    "websiteLink": "https://zkasino.io/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "games"
    ]
  },
  {
    "name": "GoL2",
    "category": [
      "Games"
    ],
    "description": "GoL2 is a StarkNet project currently in stealth mode - details to be released",
    "imageLink": "url('project-logos/stealth.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "status": "Stealth",
    "statusColor": "#808080",
    "search_on": [
      "games"
    ]
  },
  {
    "name": "Exothium",
    "category": [
      "Games"
    ],
    "description": "A Quest to build a Regenerative project transforming the ideas of the Community into decentralized applications.",
    "imageLink": "url('project-logos/exothium.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/exothium",
    "websiteLink": "https://beta.exothium.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "games"
    ]
  },
  {
    "name": "EtherQuest",
    "category": [
      "Games"
    ],
    "description": "Free to play, live action RPG Indie game where you own your items as NFTs.",
    "imageLink": "url('project-logos/etherquest.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://mobile.twitter.com/ether_quest",
    "websiteLink": "https://www.etherquestgame.com/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "games"
    ]
  },
  {
    "name": "Redline",
    "category": [
      "Games"
    ],
    "description": "Giant robot NFT racing and engineering on StarkNet and UE5. Deep Strategy and Drama Game.",
    "imageLink": "url('project-logos/redline.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/PlayRedline",
    "websiteLink": "https://redline.game/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "games"
    ]
  },
  {
    "name": "Poster",
    "category": [
      "Social"
    ],
    "description": "Poster is a general purpose decentralized social network.",
    "imageLink": "url('project-logos/poster.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/onPstr",
    "websiteLink": "https://pstr.app/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "social"
    ]
  },
  {
    "name": "zkDAO",
    "category": [
      "DAO"
    ],
    "description": "zkDAO is a decentralized organization dedicated to expanding the zkSync ecosystem through active funding across numerous verticals.",
    "imageLink": "url('project-logos/zkdao.png')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/zkdao_official",
    "websiteLink": "https://zkdao.io/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "daos"
    ]
  },
  {
    "name": "Bibliotheca",
    "category": [
      "DAO"
    ],
    "description": "Bibliotheca graphs Loot projects so you can see your progress in the LootVerse.",
    "imageLink": "url('project-logos/bibliotheca.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/lootgraph",
    "websiteLink": "https://bibliothecaforloot.com/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "daos"
    ]
  },
  {
    "name": "FujiDAO",
    "category": [
      "DAO"
    ],
    "description": "Fuji is a protocol that aims to optimize loan expenses for DeFi users. It achieves this by monitoring the borrowing markets and whenever there is a better rate, it refinances the debt its users. ",
    "imageLink": "url('project-logos/fujidao.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/FujiFinance",
    "websiteLink": "https://www.fujidao.org/#/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "daos"
    ]
  },
  {
    "name": "Yearn",
    "category": [
      "DAO"
    ],
    "description": "yearn.finance is a selection of Ethereum lending and trading protocols that allow users to optimize their crypto earnings.",
    "imageLink": "url('project-logos/yearn.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/iearnfinance",
    "websiteLink": "https://yearn.finance/",
    "status": "LIVE",
    "statusColor": "#30DE88",
    "search_on": [
      "daos"
    ]
  },
  {
    "name": "MatchboxDAO",
    "category": [
      "DAO"
    ],
    "description": "Matchbox is an ecosystem DAO to ignite and fuel on-chain games on StarkNet.",
    "imageLink": "url('project-logos/matchbox.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/matchbox_dao",
    "websiteLink": "https://mirror.xyz/matchboxdao.eth",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "daos"
    ]
  },
  {
    "name": "Sacred Army Of Shadowy Coders",
    "category": [
      "DAO"
    ],
    "description": "SASC funds Open-Source technologies in WEB3 and beyond through the power of NFT gaming.",
    "imageLink": "url('project-logos/sasc.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://mobile.twitter.com/sascdao",
    "websiteLink": "https://github.com/sascdao",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "daos"
    ]
  },
  {
    "name": "Physics puzzle on StarkNet",
    "category": [
      "Misc"
    ],
    "description": "A physics puzzle on StarkNet by guiltygyoza.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/guiltygyoza/physics-puzzle-starknet",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Qasr",
    "category": [
      "Misc"
    ],
    "description": "Qasr is a simple NFT bridge for Starknet by mortimr.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/mortimr/qasr",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Starknet DAI Bridge",
    "category": [
      "Misc"
    ],
    "description": "StarkNet interpretation of DAI token and basic DAI bridge.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/makerdao/starknet-dai-bridge",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "rk4-starknet",
    "category": [
      "Misc"
    ],
    "description": "Running Runge-Kutta 4th Order Method on StarkNet - a precurosr to on-chain physics engine.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/guiltygyoza/rk4-starknet",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "StarDrop - anonymous rewards on StarkNet",
    "category": [
      "Misc"
    ],
    "description": "An experimental project to distribute rewards in a privacy-preserving manner running on StarkNet.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/kobigurk/stardrop",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "tictactoe-on-starknet",
    "category": [
      "Misc"
    ],
    "description": "RL-driven agent playing tic-tac-toe on starknet against challengers.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/guiltygyoza/tictactoe-on-starknet",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Basic Sample Hardhat Project",
    "category": [
      "Misc"
    ],
    "description": "This project demonstrates a basic Hardhat project, but with Starknet plugin.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/Shard-Labs/starknet-hardhat-example",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Starkops",
    "category": [
      "Misc"
    ],
    "description": "StarkNet Toolchain CLI written in TypeScript by seanjameshan.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/seanjameshan/starkops",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "starknet.php",
    "category": [
      "Misc"
    ],
    "description": "starknet.php is a PHP sdk that allows you to interact with StarkNet from a PHP application.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/Starknet-php/starknet.php",
    "twitterLink": "https://twitter.com/zasciiz",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "3d-Graphics on StarkNet",
    "category": [
      "Misc"
    ],
    "description": "Adopting gltf 2.0 standard to work towards 3d asset interoperability.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/guiltygyoza/3d-asset-on-starknet",
    "twitterLink": "https://twitter.com/guiltygyoza",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Shard Labs Flask wrapper",
    "category": [
      "Misc"
    ],
    "description": "A Flask wrapper of Starknet state. Similar in purpose to Ganache.Aims to mimic Starknet's Alpha testnet, but with simplified functionality.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/Shard-Labs/starknet-devnet/tree/master",
    "twitterLink": "https://twitter.com/shard_labs/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Starknet Hardhat Plugin",
    "category": [
      "Misc"
    ],
    "description": "A plugin for integrating Starknet tools into Hardhat projects.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/Shard-Labs/starknet-hardhat-plugin",
    "twitterLink": "https://twitter.com/shard_labs/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "StarkNet Cairo 101",
    "category": [
      "Misc"
    ],
    "description": "Get started with Cairo with this simple tutorial. Complete the puzzles, get points and learn about StarkNet smart contracts!",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/l-henri/starknet-cairo-101",
    "twitterLink": "https://twitter.com/HenriLieutaud",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Starknet Storage Verifier",
    "category": [
      "Misc"
    ],
    "description": "The Starknet Storage Verifier will allow anyone to trustlessly prove any past or current storage values of L1 contracts to other L2 contracts.",
    "imageLink": "url('project-logos/oiler.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/OilerNetwork/starknet-l2-storage-verifier",
    "twitterLink": "https://twitter.com/OilerNetwork",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Zorro",
    "category": [
      "Misc"
    ],
    "description": "Zorro is a fast way for people to prove that they're a unique person so they can obtain democratic DAO voting rights and other benefits.",
    "imageLink": "url('project-logos/zorro.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://zorro.xyz/",
    "twitterLink": "https://twitter.com/ZorroProtocol",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "StarknetFractals",
    "category": [
      "Misc"
    ],
    "description": "Generating the mandelbrot set on Starknet. Computes a 100x100 mandelbrot plot and stores necessary data to recontruct it onchain in 100 storage felts.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/Orland0x/StarknetFractals",
    "twitterLink": "",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "starknet-rs",
    "category": [
      "Misc"
    ],
    "description": "StarkNet-rs is a complete StarkNet library in Rust by xJonathanLEI.",
    "imageLink": "url('project-logos/starknetrs.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://crates.io/crates/starknet",
    "twitterLink": "https://twitter.com/xJonathanLEI",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "starknet-js",
    "category": [
      "Misc"
    ],
    "description": "StarkNet-js is a JavaScript library for StarkNet by Sean.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/0xs34n/starknet.js",
    "twitterLink": "https://twitter.com/0xs34n",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "starknet.py",
    "category": [
      "Misc"
    ],
    "description": "A StarkNet SDK for Python by Software Mansion",
    "imageLink": "url('project-logos/starknetpy.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/software-mansion/starknet.py",
    "twitterLink": "",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "cairo-multisig",
    "category": [
      "Misc"
    ],
    "description": "A primitive multisig contract for StarkNet written in Cairo. Submit transactions for group approval to help mitigate risk of lost/compromised keys or malicious group members.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/sambarnes/cairo-multisig",
    "twitterLink": "https://twitter.com/__________sam__",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "glyph",
    "category": [
      "Misc"
    ],
    "description": "A proof-of-concept package manager for Cairo contracts/libraries.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/sambarnes/cairo-glyph",
    "twitterLink": "https://twitter.com/__________sam__",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "xoroshiro-cairo",
    "category": [
      "Misc"
    ],
    "description": "A xoroshiro128** pseudorandom number generator implementation in Cairo.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/milancermak/xoroshiro-cairo",
    "twitterLink": "https://twitter.com/milancermak",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "CurveZero",
    "category": [
      "Misc"
    ],
    "description": "CurveZero is a proposal for a fixed rate loan protocol, the CurveZero litepaper introduces a framework for determining the USD funding rate term structure.",
    "imageLink": "url('project-logos/curvezero.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://docs.google.com/document/d/1rrYC32w63FzzV61rJWqqYomEMgfZ3cRR1jOlJmnnxeY/edit",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Nile",
    "category": [
      "Misc"
    ],
    "description": "Nile is a CLI tool to develop StarkNet projects written in Cairo",
    "imageLink": "url('project-logos/openzeppelin.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/OpenZeppelin/nile",
    "twitterLink": "https://twitter.com/openzeppelin",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Fountain",
    "category": [
      "Misc"
    ],
    "description": "Fountain is a A 2-dimensional physics engine written in Cairo.",
    "imageLink": "url('project-logos/topology.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/topology-gg/fountain",
    "twitterLink": "https://twitter.com/topology_gg",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Frobisher",
    "category": [
      "Misc"
    ],
    "description": "A musical assistant written in Cairo able to create midi file, and standard specification for music creator.",
    "imageLink": "url('project-logos/topology.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/topology-gg/fountain",
    "twitterLink": "https://twitter.com/topology_gg",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Christopher",
    "category": [
      "Misc"
    ],
    "description": "Christopher is a gate level simulator and gate level netlist standard specification in Cairo.",
    "imageLink": "url('project-logos/topology.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/topology-gg/fountain",
    "twitterLink": "https://twitter.com/topology_gg",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Cairo Chess",
    "category": [
      "Misc"
    ],
    "description": "A Cairo contract to play chess, with composability in mind.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/greenlucid/chess-cairo",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Ogame-Cairo",
    "category": [
      "Misc"
    ],
    "description": "OGame is a browser-based, money-management and space-war themed massively multiplayer online browser game. Ogame Cairo is logic implementation written in Cairo for Starknet.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/ametel01/Ogame-Cairo",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Web3 to StarkNet json-rpc adapter",
    "category": [
      "Misc"
    ],
    "description": "Adaptor application for consuming web3 messages from i.e. wallets, and passing them on to StarkNet.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/software-mansion-labs/starknet-web3-rpc-adapter",
    "twitterLink": "https://twitter.com/swmansion",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "warp-to-cairo",
    "category": [
      "Misc"
    ],
    "description": "warp-to-cairo is a simple tool converting starknet warp outputs (NethermindEth/warp) outputs into readable cairo contracts.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/kootsZhin/warp-to-cairo",
    "twitterLink": "https://twitter.com/kootsZhin",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "clr.fund",
    "category": [
      "Misc"
    ],
    "description": "Clr.fund is a protocol for efficiently allocating funds to public goods that benefit the Ethereum Network. Clr.fund strives for credible neutrality, decentralization, permissionlessness, trustlessness, and pseudonymity.",
    "imageLink": "url('project-logos/clr.jpg')",
    "tooltip": "zkSync",
    "networks": [
      "zksync"
    ],
    "twitterLink": "https://twitter.com/clrfund",
    "websiteLink": "https://clr.fund/#/",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Starknet-multisig",
    "category": [
      "Misc"
    ],
    "description": "Multi-signature functionality for StarkNet - this is a work in progress.",
    "imageLink": "url('project-logos/pathfinder.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/eqlabs/starknet-multisig",
    "twitterLink": "https://twitter.com/equilibrium_co",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "StarkNet React",
    "category": [
      "Misc"
    ],
    "description": "StarkNet React is a collection of React hooks for StarkNet.",
    "imageLink": "url('project-logos/auclantis.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/auclantis/starknet-react",
    "twitterLink": "https://twitter.com/auclantis",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "cairo-lang-rs",
    "category": [
      "Misc"
    ],
    "description": "Rust support for the Cairo programming language - this is a work in progress.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/mattsse/cairo-lang-rs",
    "twitterLink": "https://twitter.com/mattsse_",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "EIP-2981_Cairo",
    "category": [
      "Misc"
    ],
    "description": "This repo contains a version of EIP-2981 written in Cairo.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/AntoineMkr/EIP-2981_Cairo",
    "twitterLink": "https://twitter.com/Meckerrr",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "voyager",
    "category": [
      "Misc"
    ],
    "description": "A local version of the Voyager StarkNet block explorer.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/DemerzelSolutions/voyager/pkgs/container/voyager",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Skyro",
    "category": [
      "Misc"
    ],
    "description": "Skyro compiles programs written in Idris2 to Cairo and thereby enables high-level, pure functional programming for verifiable computation.",
    "imageLink": "url('project-logos/skyro.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/skyro-compiler/skyro",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Cairo Merkle Distributor",
    "category": [
      "Misc"
    ],
    "description": "A basic merkle distributor for StarkNet written in Cairo.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/ncitron/cairo-merkle-distributor",
    "twitterLink": "https://twitter.com/NoahCitron",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Cairo Utils on Web",
    "category": [
      "Misc"
    ],
    "description": "StarkNet and Cairo language utilities for devs on web.",
    "imageLink": "url('project-logos/utils.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://cairo-utils-web.vercel.app/",
    "twitterLink": "https://twitter.com/ccarnino",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "cairo-dutch",
    "category": [
      "Misc"
    ],
    "description": "A Dutch Auction written in Cairo for StarkNet. Ported after studying a reference implementation from solidity-by-example.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/sambarnes/cairo-dutch",
    "twitterLink": "https://twitter.com/__________sam__",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Juno",
    "category": [
      "Misc"
    ],
    "description": "Juno is a Starknet client implementation from NethermindEth.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "twitterLink": "https://twitter.com/nethermindeth",
    "websiteLink": "https://github.com/NethermindEth/juno",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  },
  {
    "name": "Ricks",
    "category": [
      "Misc"
    ],
    "description": "An implementation of a new NFT fractionalization primitive, RICKS (Recurrently Issued Collectively Kept Shards), in starknet cairo.",
    "imageLink": "url('project-logos/github.jpg')",
    "tooltip": "StarkNet",
    "networks": [
      "starknet"
    ],
    "websiteLink": "https://github.com/FawadHa1der/ricks-cairo-contracts",
    "status": "DEV",
    "statusColor": "#000000",
    "search_on": [
      "misc"
    ]
  }
]