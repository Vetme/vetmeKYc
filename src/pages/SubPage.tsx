import { useEffect, useState } from "react";
import { Flex } from "../components";
import HomeLayout from "../components/layout/HomeLayout";
import { useLocation, useNavigate } from "react-router-dom";
import LayeredBtn from "../components/utils/LayeredBtn";
import abi from "../lib/abi/paymentAbi.json";
import ercAbi from "../lib/abi/erc20.json";
import { parseUnits } from "ethers";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal, useWeb3Modal } from "@web3modal/react";
import {
  configureChains,
  createConfig,
  WagmiConfig,
  useAccount,
  useChainId,
} from "wagmi";
import { bsc, polygon, goerli } from "wagmi/chains";
import { Contract } from "ethers";
import { useEthersProvider } from "../hooks/useProvider";
import { useEthersSigner } from "../hooks/useSigner";
import { createSub } from "../service/kyc.service";
import { renderError, renderSuccess } from "../service/alert.service";
import {
  PAYMENT_CONTRACT,
  PAYMENT_TOKEN,
  SUPPORTED_CHAIN,
} from "../lib/constants";

const chains = [bsc, polygon, goerli];
const projectId = "a35f07741bf8cfbc568113c9cd6f316f";

// const getContract = (
//   abi: ContractInterface,
//   contract_address: string,
//   chain: Blockchain,
//   provider?: Web3Provider
// ): Contract => {
//   const defaultProvider = readOnlyProvider(select_rpc_url(chain));
//   return new Contract(contract_address, abi, provider ?? defaultProvider);
// };

const SubPage = () => {
  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);
  return (
    <HomeLayout>
      <WagmiConfig config={wagmiConfig}>
        <SubscriptionCon />
      </WagmiConfig>

      <div style={{ position: "relative", zIndex: 999999 }}>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </div>
    </HomeLayout>
  );
};

export const SubscriptionCon = () => {
  const { open, close } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  const chainId = useChainId();
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const paramField = query.get("sub");
  const total = paramField == "regular" ? 500 : 1000;
  const signer = useEthersSigner();
  const provider = useEthersProvider();
  const [allowance, setAllowance] = useState<number>(0);
  let navigate = useNavigate();
  const [supported, setIsSupported] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handlePay = async () => {
    try {
      setLoading(true);
      const contract = new Contract(PAYMENT_CONTRACT[chainId], abi, signer);

      const amount = parseUnits(total.toString(), chainId == 137 ? 6 : 18);
      const tx = await contract.receiveBasicTokens(amount);
      const receipt = await tx.wait();
      const data = {
        hash: receipt.hash,
        sub: paramField,
        chain: chainId,
      };
      await createSub(data);
      setLoading(false);
      renderSuccess("Your transaction has been successfully submitted!");
      navigate("/process");
    } catch (err) {
      setLoading(false);
      renderError("Opps,something went wrong");
    }
  };

  useEffect(() => {
    getAllowance();
  }, [address]);

  const isApproved = (allowance: number) => {
    if (allowance < total) return false;
    return true;
  };

  const getAllowance = async () => {
    const contract = new Contract(PAYMENT_TOKEN[chainId], ercAbi, provider);

    if (!address) return;

    const allowance = await contract.allowance(
      address,
      PAYMENT_CONTRACT[chainId]
    );
    setAllowance(allowance.toString());
  };

  const approve = async () => {
    setLoading(true);
    const contract = new Contract(PAYMENT_TOKEN[chainId], ercAbi, signer);

    try {
      const amount = parseUnits(total.toString(), chainId == 137 ? 6 : 18);

      const tx = await contract.approve(PAYMENT_CONTRACT[chainId], amount);

      setLoading(false);
      const receipt = await tx.wait();
      getAllowance();
      renderSuccess("Approved");
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    checkSupported();
  }, [chainId]);

  const checkSupported = () => {
    const support = !!SUPPORTED_CHAIN.find((s) => s.id == chainId);
    setIsSupported(support);
  };

  return (
    <div className="min-h-[600px] ">
      <div className="w-[340px] border rounded-[20px] border-[#170728] m-auto p-8 top-[200px] relative">
        {isConnected && !supported && (
          <div
            className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 mr-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>Not supported chain</div>
          </div>
        )}

        <Flex wrap justify="space-between" gap={40}>
          <div>Total</div>
          <div>${total}</div>
        </Flex>

        <br />
        {isConnected ? (
          isApproved(allowance) ? (
            <LayeredBtn
              lDir="right"
              bgColor="#FBF2FF"
              width="147px"
              height="46px"
              onClick={() => handlePay()}
              parentClassNames="w-auto"
              disabled={loading || !supported}
            >
              <span className="text-[#170728] text-[0.87em]">Pay </span>
            </LayeredBtn>
          ) : (
            <LayeredBtn
              lDir="right"
              bgColor="#FBF2FF"
              width="147px"
              height="46px"
              onClick={() => approve()}
              parentClassNames="w-auto"
              disabled={loading || !supported}
            >
              <span className="text-[#170728] text-[0.87em]">Approve </span>
            </LayeredBtn>
          )
        ) : (
          <LayeredBtn
            lDir="right"
            bgColor="#FBF2FF"
            width="147px"
            height="46px"
            onClick={() => open()}
            parentClassNames="w-auto"
          >
            <span className="text-[#170728] text-[0.87em]">
              Connect Wallet{" "}
            </span>
          </LayeredBtn>
        )}
      </div>
    </div>
  );
};
export default SubPage;
