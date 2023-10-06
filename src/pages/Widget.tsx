import React from "react";
import { Widget } from "@vetme/widgets";
import { Web3Provider } from "@ethersproject/providers";
import { useEthersProvider } from "../hooks/useProvider";
import { Web3Modal, useWeb3Modal } from "@web3modal/react";

import {
  configureChains,
  createConfig,
  WagmiConfig,
  useAccount,
  useChainId,
} from "wagmi";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { bsc, polygon, goerli } from "wagmi/chains";
import { useEthersSigner } from "../hooks/useSigner";

const chains = [bsc, polygon, goerli];
const projectId = "a35f07741bf8cfbc568113c9cd6f316f";

const MY_TOKEN_LIST = [
  {
    name: "KNC",
    address: "0x1C954E8fe737F99f68Fa1CCda3e51ebDB291948C",
    symbol: "KNC",
    decimals: 18,
    chainId: 1,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/9444.png",
  },
  {
    name: "Tether USD",
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    symbol: "USDT",
    decimals: 6,
    chainId: 1,
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
  },
  {
    name: "USD Coin",
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    symbol: "USDC",
    decimals: 6,
    chainId: 1,
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
  },
  {
    name: "VetMe",
    symbol: "VetMe",
    address: "0xe7ef051c6ea1026a70967e8f04da143c67fa4e1f",
    chainId: 1,
    logoURI: "/images/coins/vetme.webp",
    decimals: 9,
  },
];

const defaultTokenOut = {
  1: "0xe7ef051c6ea1026a70967e8f04da143c67fa4e1f",
};

const WidgetCon = () => {
  const { open, close } = useWeb3Modal();

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  //   const { library, chainId, account } = context;
  // const tokens = useGetWalletTokens(library, account);
  return (
    <div>
      <WagmiConfig config={wagmiConfig}>
        <WalletWrapper />
      </WagmiConfig>
      <div style={{ position: "relative", zIndex: 999999 }}>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </div>
    </div>
  );
};

export default WidgetCon;

const WalletWrapper = () => {
  const signer = useEthersSigner();
  return (
    <>
      <Widget
        client="vetMe"
        provider={signer}
        defaultTokenOut={defaultTokenOut[1]}
      />

      <button onClick={() => open()}>Connect</button>
    </>
  );
};
