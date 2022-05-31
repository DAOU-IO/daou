import styled from "@emotion/styled";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";

import "@rainbow-me/rainbowkit/styles.css";

import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
  ConnectButton,
  darkTheme,
  midnightTheme
} from "@rainbow-me/rainbowkit";
import { chain, createClient, WagmiProvider } from "wagmi";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [apiProvider.alchemy(process.env.ALCHEMY_ID), apiProvider.fallback()]
);

const { connectors } = getDefaultWallets({
  appName: "DAOU App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

const RainBowButton = () => {
    return (
            <WagmiProvider client={wagmiClient}>
                <RainbowKitProvider chains={chains} theme={darkTheme({...darkTheme.accentColors.purple, borderRadius: 'medium',})} >
                    <ConnectButton />
                </RainbowKitProvider>
            </WagmiProvider>
    );
};

const WalletButton = styled(RainBowButton)`
  color: red;
`;

export default WalletButton;