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

// const MetamaskButton = () => {
//   return (
//       <LoginButton>
//           <Image
//               boxSize='64px'
//               src='/images/MetaMask_Fox.svg'
//               alt='MetaMask Fox Logo'
//               mr='20px'
//           />
//           <Text color='blackAlpha.900' fontSize='2xl' >Connect Metamask</Text>
//       </LoginButton>
//   );
// };

// const LoginButton = styled(Button)`
//   width: 360px;
//   height: 70px;
//   background: #fff;
//   border-radius: 10px;
//   box-shadow: 
//       12px 12px #000,
//       13px 13px #fff;
// `;

// export default MetamaskButton;